import Footer from "../../components/Footer/Footer";
import SideNav from "../../components/SideNav/SideNav";
import './FuncionarioPage.css'

export default function FuncionarioPage() {
    return(
        <div id="funcionario-page">
            
            <main id='funcionario-page-main'>
                <SideNav />
                <div id='working-area'>
                    <button id='button-adicionar-vitima'><img src='src/assets/plus-64.png' alt='PINTO'/>Adicionar Vitima</button>
                </div>
                <Footer />
            </main>
        </div>
    )
}