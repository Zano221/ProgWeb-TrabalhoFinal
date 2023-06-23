import Footer from "../../components/Footer/Footer";
import SideNav from "../../components/SideNav/SideNav";
import { useEffect, componentDidMount } from "react";
import { useNavigate, } from "react-router-dom";
import axios from "axios";
import './FuncionarioEditarPage.css'

async function submit(func) {
    console.log("\n\n\n\n\n\n", func.email, func.nome, func.senha, "\n\n\n\n");

    const { data } = await axios.put('http://localhost:6969/funcionario', {
        data: {
            email: func.email,
            nome: func.nome,
            senha: func.senha
        }
    })

    return data;
}

async function update() {

    let emailField = document.getElementById("input-edit-email").value
    let nomeField = document.getElementById("input-edit-nome").value
    let senhaField = document.getElementById("input-edit-senha").value

    const result = null
    try {
        result = await submit({
            email,
            nome,
            senha
        })
    
    }
    catch(e) {
        alert('Erro ao executar atualização', e);
    }
    
    if(result != null) alert("Funcionario atualizado com sucesso!");

}



export default function FuncionarioEditarPage() {

    let navigate = useNavigate()
    
    useEffect(() => {
        if(!localStorage.getItem('isLogged')) {
            navigate("/", { replace: true });
        }

        let email = localStorage.getItem('email')
        let nome = localStorage.getItem('nome')
        let senha = localStorage.getItem('senha')

        let emailField = document.getElementById("input-edit-email")
        let nomeField = document.getElementById("input-edit-nome")
        let senhaField = document.getElementById("input-edit-senha")

        if(emailField!= null) emailField.value = email
        if(nomeField != null) nomeField.value = nome
        if(senhaField != null) senhaField.value = senha
        
      }, []);

    return(
        <div id="funcionario-page">
            
            <main id='funcionario-page-main'>
                <SideNav />
                <div id='main-area'>
                    <div id='working-area'>
                        <section id="edit-card">
                                <h1>Editar Conta</h1>
                                
                                <div className="edit-input-field" id="edit-card-email">
                                    <div className="edit-tag"><p>Email</p> <p className="error-msg" id="edit-email-error"></p></div>
                                    <input className="edit-input" placeholder="email" id="input-edit-email"/>
                                </div>

                                <div className="edit-input-field" id="edit-card-email">
                                    <div className="edit-tag"><p>Email</p> <p className="error-msg" id="email-error"></p></div>
                                    <input className="edit-input" placeholder="email" id="input-edit-nome"/>
                                </div>

                                <div className="edit-input-field" id="edit-card-email">
                                    <div className="edit-tag"><p>Email</p> <p className="error-msg" id="email-error"></p></div>
                                    <input className="edit-input" placeholder="email" id="input-edit-senha"/>
                                </div>

                                <button title="Login" id="botao-login" onClick={update}>Salvar</button>
                            </section>
                        </div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}



