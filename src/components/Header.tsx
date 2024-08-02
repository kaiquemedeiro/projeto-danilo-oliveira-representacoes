import logo from '../images/LogoHeader.png'
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();

  const scrollToFooter = () => {
    const navFooter = document.getElementById('footer');
    navFooter?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header>
      <img src={ logo } alt="Logo Danilo Oliveira" onClick={ () => navigate('/') } />
      <nav>
        <ul>
          <li>
            <a onClick={ () => navigate('/clientes')}>Clientes</a>
          </li>
          <li>
            <a onClick={ () => navigate('/produtos') }>Produtos</a>
          </li>
          <li>
            <a onClick={ scrollToFooter }>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}