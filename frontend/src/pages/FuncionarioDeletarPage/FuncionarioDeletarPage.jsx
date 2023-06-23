import Footer from "../../components/Footer/Footer";
import SideNav from "../../components/SideNav/SideNav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './FuncionarioDeletarPage.css'

async function removerConta(senha) {

    let email = localStorage.getItem('email')

    const { data } = await axios.delete('http://localhost:6969/funcionario/' + email + '/' + senha)

    return data;
}

export default function FuncionarioDeletarPage() {

    let navigate = useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem('isLogged')) {
            navigate("/", { replace: true });
        }
      }, []);

      async function deletar() {
        const senha = document.getElementById("input-delete-senha").value;
    
        console.log(senha)
        const senhaError = document.getElementById("senha-error") 
    
        if(senha == '') {
            senhaError.innerText = "Senha Invalida!"
            senhaError.style.visibility = "visible"
            canLogin = false
        }
        else {
            senhaError.style.visibility = "hidden"
        }
    
        let result = null
        try {
            result = await removerConta(senha);
        }
        catch(e) {
            console.error('Erro ao executar o banco de dados!', e)
        }
    
        if(result == null) {
            alert('Erro! Senha errada!');
        }
        else {
            alert('Sua conta foi removida com sucesso! Sentiremos saudades!')
            localStorage.clear();
            navigate("/", { replace: true });
        }
    
        
    }

    return(
        <div id="funcionario-page">
            
            <main id='funcionario-page-main'>
                <SideNav />
                <div id='main-area'>
                    <div id='working-area'>
                        <section id="delete-card">
                            <h1>ATENÇÃO!</h1>
                            <h2>Deseja Remover a sua Conta?</h2>
                            
                            <div className="edit-input-field" id="delete-card-email">
                                <div className="edit-tag"><p>Digite sua senha</p> <p className="error-msg" id="senha-error"></p></div>
                                <input className="edit-input" placeholder="senha" id="input-delete-senha"/>
                            </div>

                            <button title="Login" id="botao-login" onClick={deletar} >Deletar</button>
                        </section>
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}