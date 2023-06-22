import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './FuncionarioPage.css'

export default function FuncionarioPage() {
    return(
        <div id="funcionario-page">
            
            <main id='funcionario-page-main'>
                <div id='side-nav'>
                    <div id='nav-body'>
                        <NavLink to='/'><p>🏠 Home</p></NavLink>
                        <a><p>⚙ Editar Conta</p></a>
                        <a><p>X Deletar Conta</p></a>
                        <NavLink to='/logout'><p>← Sair</p></NavLink>
                    </div>
                </div>

                <div id='working-area'>
                    <button id='button-adicionar-vitima'><img src='src/assets/plus-64.png' alt='PINTO'/>Adicionar Vitima</button>
                    <Footer />
                </div>
            </main>
        </div>
    )
}