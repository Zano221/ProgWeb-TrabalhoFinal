import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";
import "./LoginPage.css"
import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

    let result = null
    try {
        result = await submit({
            email,
            senha
        })
    }
    catch(e) {
        console.error("\n\n\nErro ao fazer Login!", e , "\n\n\n");
        return;
    }
    
    
    localStorage.setItem('ID', result.ID_FUNC);
    localStorage.setItem('nome', result.NOME_FUNC);
    localStorage.setItem('email', result.EMAIL_FUNC);
    localStorage.setItem('senha', result.SENHA_FUNC);
    localStorage.setItem('isLogged', true);

    console.log(localStorage.getItem('isLogged'))
    alert('Seja bem Vindo!')
    let navigate = useNavigate()
    navigate('/', {replace: true})

}

export default function LoginPage() {
    let navigate = useNavigate()
    let isLogged = localStorage.getItem('isLogged')

    useEffect(() => {
        if(isLogged) navigate('/', {replace: true})
    }, [localStorage.getItem('isLogged')])

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