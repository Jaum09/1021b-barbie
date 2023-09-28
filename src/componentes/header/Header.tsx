import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../../public/logo.png'
function Header(){
    return(
        <header>
            <div>
                <ul><Link to="/"><img src={logo} className='logo'></img></Link></ul>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Página Inicial</Link></li>
                    <li><Link to="/noticia">Noticia</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header