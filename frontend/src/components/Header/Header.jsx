import "./Header.css"
import { NavLink } from "react-router-dom"

function Logout() {
    localStorage.clear()
}

export default function Header() {
    return(
        <header className="header" id="main-page-header">
            <NavLink to="/"> HOME </NavLink>
            <NavLink to="/vitima"> LISTA DE VITIMAS </NavLink>

            {!localStorage.getItem('isLogged') && <>
            <NavLink to="/registrar"> REGISTRAR </NavLink>
            <NavLink to="/login"> ENTRAR </NavLink>
                </>}
            {localStorage.getItem('isLogged') && <>
            <NavLink to='/funcionario-page'>PÁGINA DO FUNCIONARIO</NavLink>
            <NavLink to='/home' className={() => {
                Logout()
            }}>LOGOUT</NavLink>
                </>}
            
        </header>
    )
}