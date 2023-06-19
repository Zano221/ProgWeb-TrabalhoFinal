import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './VitimaPage.css'



export default function VitimaPage() {


    return(
        <section id="vitima-page">
            <Header />
                <h1>Lista de Vitimas</h1>
                
                <table id="tabela-vitimas">
                    <tr><th>Nome</th><th>Idade</th><th>Cidade</th></tr>
                    <tr>
                        <td>ersd</td>
                        <td>21</td>
                        <td>Erechim</td>
                    </tr>
                </table>
            <Footer />
        </section>
    )   
}