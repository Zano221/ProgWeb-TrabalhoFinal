import "./Header.css"
import { NavLink } from "react-router-dom"

export default function Header() {
    return(
        <header className="header" id="main-page-header">
            <NavLink to="/"> HOME </NavLink>
            <NavLink to="/vitima" className={({ isActive}) => 
            isActive ? "selectedNavLink" : "nada" }> LISTA DE VITIMAS </NavLink>

            {!localStorage.getItem('isLogged') && <>
            <NavLink to="/registrar"> REGISTRAR </NavLink>
            <NavLink to="/login"> ENTRAR </NavLink>
                </>}
            {localStorage.getItem('isLogged') && <>
            <NavLink to='/funcionario-page'>PÁGINA DO FUNCIONARIO</NavLink>
            <NavLink to='/logout'>LOGOUT</NavLink>
                </>}
            
        </header>
    )
}