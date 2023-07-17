import { Link } from "react-router-dom"
import './Navbar.css'
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header className="header">
            <div className="headerContainer">  
                <a href="/" className="logo">
                    <img src="/valvula.jpg" alt="" />
                </a>
            <nav className="headerNav">
                <Link to="/" className="link">INICIO</Link>
                <Link to="/category/monitor" className="link">MONITOR</Link>
                <Link to="/category/placavideo" className="link">PLACA DE VIDEO</Link>
                <Link to="/category/procesador" className="link">PROCESADOR</Link> 
                <Link to="CartWidget"></Link>
            </nav>
            <CartWidget />

            </div>

        </header>
    )
}

export default NavBar
