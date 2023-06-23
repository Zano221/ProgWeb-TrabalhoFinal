import { NavLink, useLocation } from 'react-router-dom'
import './SideNav.css'

export default function SideNav() {
    const location = useLocation();
    console.log(location.pathname);
    
    return(
        <div id='side-nav'>
                <div id='nav-body'>
                    <NavLink to='/'><p>🏠 Home</p></NavLink>
                    {(location.pathname == '/funcionario-editar-page' || 
                    location.pathname == '/funcionario-deletar-page' ||
                    location.pathname == '/vitima-adicionar') &&
                    <NavLink to='/funcionario-page'><p>⏪ Voltar </p></NavLink>
                    }
                    <NavLink to='/funcionario-editar-page'><p>✎ Editar Conta</p></NavLink>
                    <NavLink to='/funcionario-deletar-page'><p>X Deletar Conta</p></NavLink>
                    <NavLink to='/logout'><p>← Sair</p></NavLink>
                </div>
            </div>
    )
}