import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './RegistrarPage.css'
import axios from "axios";

async function submit(func) {

    console.log("\n\n\n\n\n\n", func.email, func.nome, func.senha, "\n\n\n\n");

    const { data } = await axios.post('http://localhost:6969/funcionario', {
        data: {
            email: func.email,
            nome: func.nome,
            senha: func.senha
        }
    })

    return data;
}

async function register() {
    const email = document.getElementById("input-email").value;
    const nome = document.getElementById("input-nome").value;
    const senha = document.getElementById("input-senha").value;
    const senhaRep = document.getElementById("input-senha-rep").value;

    const emailError = document.getElementById("email-error")
    const nomeError = document.getElementById("nome-error")
    const senhaError = document.getElementById("senha-error")
    const senhaRepError = document.getElementById("senha-rep-error")

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    let canRegister = true;

    if(email === '' || !emailRegex.test(email)) {
        emailError.innerText = "Email Invalido!"
        emailError.style.visibility = "visible"
        canRegister = false
    }
    else {
        emailError.style.visibility = "hidden"
    }

    if(nome === '') {
        nomeError.innerText = "Nome Invalido!"
        nomeError.style.visibility = "visible"
        canRegister = false
    }
    else {
        nomeError.style.visibility = "hidden"
    }

    if(senha === '') {
        senhaError.innerText = "Senha Invalida!"
        senhaError.style.visibility = "visible"
        canRegister = false
    }
    else {
        senhaError.style.visibility = "hidden"
    }

    if(senha != senhaRep) {
        alert("As senhas devem ser identicas!")
        canRegister = false
    }
    else {
        senhaError.style.visibility = "hidden"
    }

    if(!canRegister) return;

    console.log('pica!')

    const result = await submit({
        email,
        nome,
        senha
    })

    console.log(result);
    alert('Seja Bem Vindo! Por favor, realize o login para prosseguir')

}

export default function RegistrarPage() {
    return(
        <div id="registrar-page">
            <Header />
            <section id="register-card">
                <h1>Registrar</h1>
                <div className="register-input-field" id="register-card-email">
                    <div className="register-tag"><p>Email</p> <p className="error-msg" id="email-error"></p></div>
                    <input className="register-input" placeholder="email" id="input-email"/>
                </div>
                
                <div className="register-input-field" id="register-card-nome">
                    <div className="register-tag"><p>Nome</p>  <p className="error-msg" id="nome-error"></p></div>
                    <input className="register-input" placeholder="nome" id="input-nome"/>
                </div>

                <div className="register-input-field" id="register-card-senha">
                    <div className="register-tag"><p>Senha</p> <p className="error-msg" id="senha-error"></p></div>
                    <input className="register-input" placeholder="senha" id="input-senha"/>
                </div>

                <div className="register-input-field" id="register-card-senha-rep">
                    <div className="register-tag"><p>Senha novamente</p> <p className="error-msg" id="senha-rep-error"></p></div>
                    <input className="register-input" placeholder="Digite sua senha novamente" id="input-senha-rep"/>
                </div>
                <button title="Registrar" id="botao-registrar" onClick={register}>Registrar</button>
            </section>
            <Footer />
        </div>
    )
}