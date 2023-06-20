import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";
import "./LoginPage.css"

async function submit(func) {

    console.log("\n\n\n\n\n\n", func.email, func.senha, "\n\n\n\n");

    const { data } = await axios.get('http://localhost:6969/funcionario/' + func.email + '/' + func.senha)

    return data;
}

async function login() {
    const email = document.getElementById("input-email").value;
    const senha = document.getElementById("input-senha").value;

    const emailError = document.getElementById("email-error")
    const senhaError = document.getElementById("senha-error")

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    let canLogin = true;

    if(email === '' || !emailRegex.test(email)) {
        emailError.innerText = "Email Invalido!"
        emailError.style.visibility = "visible"
        canLogin = false
    }
    else {
        emailError.style.visibility = "hidden"
    }

    if(senha === '') {
        senhaError.innerText = "Senha Invalida!"
        senhaError.style.visibility = "visible"
        canLogin = false
    }
    else {
        senhaError.style.visibility = "hidden"
    }

    if(!canLogin) return;

    console.log('pica!')

    const result = await submit({
        email,
        senha
    })

    console.log(result);
}

export default function LoginPage() {
    return(
        <div id="login-page">
            <Header />
                <section id="login-card">
                    <h1>Login</h1>
                    <div className="login-input-field" id="login-card-email">
                        <div className="login-tag"><p>Email</p> <p className="error-msg" id="email-error"></p></div>
                        <input className="login-input" placeholder="email" id="input-email"/>
                    </div>
                    
                    {/*<div className="login-input-field" id="login-card-nome">
                        <div className="login-tag"><p>Nome</p>  <p className="error-msg" id="nome-error"></p></div>
                        <input className="login-input" placeholder="nome" id="input-nome"/>
                    </div> */}

                    <div className="login-input-field" id="login-card-senha">
                        <div className="login-tag"><p>Senha</p> <p className="error-msg" id="senha-error"></p></div>
                        <input className="login-input" placeholder="senha" id="input-senha"/>
                    </div>

                    <button title="Login" id="botao-login" onClick={login}>Registrar</button>
                </section>
            <Footer />
        </div>
    )
}