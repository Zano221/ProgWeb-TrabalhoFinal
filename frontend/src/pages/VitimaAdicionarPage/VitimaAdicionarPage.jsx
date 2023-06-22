import SideNav from '../../components/SideNav/SideNav'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import './VitimaAdicionarPage.css'

export default function VitimaAdicionarPage() {
    
    return(
        <div id="funcionario-page">
            
            <main id='funcionario-page-main'>
                <SideNav />
                <div id='working-area'>
                    <section id="edit-card">
                            <h1>Adicionar Vitima</h1>
                            
                            <div className="vitima-input-field" id="vitima-card-nome">
                                <div className="vitima-tag"><p>Nome</p> <p className="error-msg" id="edit-email-error"></p></div>
                                <input className="vitima-input" placeholder="nome" id="input-vitima-nome"/>
                            </div>

                            <div className="vitima-input-field" id="vitima-card-cidade">
                                <div className="vitima-tag"><p>Cidade</p> <p className="error-msg" id="email-error"></p></div>
                                <input className="vitima-input" placeholder="email" id="input-edit-nome"/>
                            </div>

                            <button title="Login" id="botao-login" >Adicionar</button>
                        </section>
                    <Footer />
                </div>
            </main>
        </div>
    )
} 