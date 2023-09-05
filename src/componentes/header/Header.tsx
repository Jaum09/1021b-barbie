import './Header.css'
function Header(){
    let texto = "Jao"
    function mudaText(){
        texto = "Jao"
    }
    return(
        <>
        <header>
            <div>
                logo
            </div>
            <nav>
                <ul>
                    <li><input className='barrapesquisa' type='text'></input></li>
                    <li><a href="#">Página Inicial</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Notícia</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
        </header>
        <div>
            <p className='texto_digitado'>pesquisa: {texto}</p>
        </div>
        </> 
    )
}

export default Header