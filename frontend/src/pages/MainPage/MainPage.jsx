import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"
import Footer from "../../components/Footer/Footer"
import "./MainPage.css"

export default function MainPage() {
    return(
        <div id="main-page">
            <Header id="header" />
            <Main id="main" />
            <Footer id="footer" />
        </div>
    )
}