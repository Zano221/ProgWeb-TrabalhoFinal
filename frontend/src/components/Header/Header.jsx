import "./Header.css"
import { NavLink } from "react-router-dom"

export default function Header() {
    return(
        <header className="header" id="main-page-header">
            <NavLink to="/"> HOME </NavLink>
            <NavLink to="/vitima"> LISTA DE VITIMAS </NavLink>
            <NavLink to="/registrar"> REGISTRAR </NavLink>
            <NavLink to="/login"> ENTRAR </NavLink>
        </header>
    )
}