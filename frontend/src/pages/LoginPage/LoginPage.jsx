import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./LoginPage.css"

function login() {

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
                    
                    <div className="login-input-field" id="login-card-nome">
                        <div className="login-tag"><p>Nome</p>  <p className="error-msg" id="nome-error"></p></div>
                        <input className="login-input" placeholder="nome" id="input-nome"/>
                    </div>

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