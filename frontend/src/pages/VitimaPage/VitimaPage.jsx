import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import './VitimaPage.css'



export default function VitimaPage() {


    return(
        <section id="vitima-page">
            <Header />
                <h1>Lista de Vitimas</h1>
                
                <table id="tabela-vitimas">
                    <thead><td>Nome</td><td>Idade</td><td>Cidade</td></thead>
                    <tbody>
                        <tr>
                            <td>ersd</td>
                            <td>21</td>
                            <td>Erechim</td>
                        </tr>
                    </tbody>
                </table>
            <Footer />
        </section>
    )   
}