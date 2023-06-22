import Footer from "../../components/Footer/Footer";
import SideNav from "../../components/SideNav/SideNav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './FuncionarioDeletarPage.css'

export default function FuncionarioDeletarPage() {

    let navigate = useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem('isLogged')) {
            navigate("/", { replace: true });
        }
      }, []);

    return(
        <div id="funcionario-page">
            
            <main id='funcionario-page-main'>
                <SideNav />
                <div id='working-area'>
                    <section id="delete-card">
                        <h1>ATENÇÃO!</h1>
                        <h2>Deseja Remover a sua Conta?</h2>
                        
                        <div className="edit-input-field" id="delete-card-email">
                            <div className="edit-tag"><p>Confirme sua senha</p> <p className="error-msg" id="email-error"></p></div>
                            <input className="edit-input" placeholder="senha" id="input-edit-nome"/>
                        </div>

                        <button title="Login" id="botao-login" >Registrar</button>
                    </section>
                    <Footer />
                </div>
            </main>
        </div>
    )
}