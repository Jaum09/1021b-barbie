import '../footer/Footer.css'
import img1 from "../../assets/instagram.png"
import img2 from "../../assets/twitter.png"
import img3 from "../../assets/youtube.png"

function Footer(){
    return(
        <footer>
            <footer>
      <div className='conteudo'>
        <div className='contatos'>
          
        <p>A Barbie se tornou um ícone cultural e recebeu honras raras no mundo dos brinquedos. Entre em nossas redes sociais para saber mais.</p>
          
        <div className='redes-sociais'>
          <a href="#"><img src={img1} alt="logo"/></a>
          <a href="#"><img src={img2} alt="logo"/></a>
          <a href="#"><img src={img3} alt="logo"/></a>
        </div>
          
          
        </div>

        <ul className='lista'>
          <li><h3>Encontre-nos</h3></li>
          <li><a href="#" className='footer-link'>Twitter</a></li>
          <li><a href="#" className='footer-link'>YouTube</a></li>
          <li><a href="#" className='footer-link'>Facebook</a></li>
          <li><a href="#" className='footer-link'>Instagram</a></li>
          <li><a href="#" className='footer-link'>Telegram</a></li>
          <li><a href="#" className='footer-link'>Discord</a></li>
        </ul>

        <ul className='lista'>
          <li><h3>Informações</h3></li>
          <li><a href="#" className='footer-link'>App</a></li>
          <li><a href="#" className='footer-link'>Criador</a></li>
          <li><a href="#" className='footer-link'>Afiliados</a></li>
          <li><a href="#" className='footer-link'>País de origem</a></li>
          <li><a href="#" className='footer-link'>Data de lançamento</a></li>
        </ul>

        <ul className='lista'>
          <li><h3>Empresa</h3></li>
          <li><a href="#" className='footer-link'>Carreiras</a></li>
          <li><a href="#" className='footer-link'>Contate-nos</a></li>
          <li><a href="#" className='footer-link'>Para investidores</a></li>
          <li><a href="#" className='footer-link'>Encontre um parceiro</a></li>
          <li><a href="#" className='footer-link'>Serviços Profissionais</a></li>
          <li><a href="#" className='footer-link'>Programas de parceiros</a></li>
          </ul>
      </div>
      
      <div className='copyright'>
        &#169;1959 all rights reserved
      </div>
    </footer>
        </footer>
    )
}
export default Footer