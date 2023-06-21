import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './FuncionarioPage.css'

export default function FuncionarioPage() {
    return(
        <div id="funcionario-page">
            <Header />
            <main id='funcionario-page-main'>
                <div id='side-nav'>
                    teste
                </div>

                <div id='working-area'>
                    <button id='button-adicionar-vitima'>Adicionar Vitim</button>
                </div>
            </main>
            <Footer />
        </div>
    )
}