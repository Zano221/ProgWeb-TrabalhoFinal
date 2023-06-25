import SideNav from '../../components/SideNav/SideNav'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './VitimaAdicionarPage.css'

async function submit(viti) {

    const { data } = await axios.post('http://localhost:6969/vitima', {
        data: {
            nome: viti.nome,
            cidade: viti.cidade,
        }
    })

    return data;
}

async function adicionarVitima() {
    let nome = document.getElementById("input-vitima-nome").value
    let cidade = document.getElementById("input-vitima-cidade").value


    const nomeError = document.getElementById("viti-nome-error")
    const cidadeError = document.getElementById("viti-cidade-error")

    let canInsertViti = true;

    if(nome == '') {
        nomeError.innerText = "Nome Invalido!"
        nomeError.style.visibility = "visible"
        canInsertViti = false
    }
    else {
        nomeError.style.visibility = "hidden"
    }

    if(cidade == '') {
        cidadeError.innerText = "Cidade Invalida!"
        cidadeError.style.visibility = "visible"
        canInsertViti = false
    }
    else {
        cidadeError.style.visibility = "hidden"
    }

    console.log(nome, cidade)

    let result = null
    try {
        result = await submit({
            nome,
            cidade
        })
    
    }
    catch(e) {
        alert('Erro ao executar atualização', e);
    }
    
    if(result != null) alert("Vitima adicionada com sucesso!");
}

export default function VitimaAdicionarPage() {

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
                <div id='main-area'>
                    <div id='working-area'>
                        <section id="edit-card">
                                <h1>Adicionar Vitima</h1>
                                
                                <div className="vitima-input-field" id="vitima-card-nome">
                                    <div className="vitima-tag"><p>Nome</p> <p className="error-msg" id="viti-nome-error"></p></div>
                                    <input className="vitima-input" placeholder="nome" id="input-vitima-nome"/>
                                </div>

                                <div className="vitima-input-field" id="vitima-card-cidade">
                                    <div className="vitima-tag"><p>Cidade</p> <p className="error-msg" id="viti-cidade-error"></p></div>
                                    <input className="vitima-input" placeholder="cidade" id="input-vitima-cidade"/>
                                </div>

                                <button title="Login" id="botao-login" onClick={adicionarVitima} >Adicionar</button>
                            </section>
                        </div>
                    <Footer />
                </div>
            </main>
        </div>
    )
} 