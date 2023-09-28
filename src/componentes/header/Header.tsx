import './Header.css'
import logo from '../../../public/logo.png'
function Header(){
    return(
        <header>
            <div>
                <img src={logo} className='logo'></img>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Página Inicial</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Notícia</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header