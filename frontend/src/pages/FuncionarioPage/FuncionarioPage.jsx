import Footer from "../../components/Footer/Footer";
import SideNav from "../../components/SideNav/SideNav";
import { NavLink, useNavigate } from "react-router-dom";
import './FuncionarioPage.css'

export default function FuncionarioPage() {
    
    navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('isLogged')) navigate('/', {replace: true})
    }, [navigate])

    return(
        <div id="funcionario-page">
            
            <main id='funcionario-page-main'>
                <SideNav />
                <div id='main-area'>
                    <div id='working-area'>
                        <NavLink to='/vitima-adicionar' id='button-adicionar-vitima'><img src='src/assets/plus-64.png' alt='PINTO'/>Adicionar Vitima</NavLink>
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}