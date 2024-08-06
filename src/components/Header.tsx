import logo from '../images/LogoHeaderAjustado.png'
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {

  const navigate = useNavigate();

  const scroolToClients = () => {
    const navClients = document.getElementById('clients');
    navClients?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToFooter = () => {
    const navFooter = document.getElementById('footer');
    navFooter?.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToProducts = () => {
    const navProducts = document.getElementById('products');
    navProducts?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className={ styles.Body }>
      <img src={ logo } alt="Logo Danilo Oliveira" onClick={ () => navigate('/') } />
      <nav>
        <ul>
          <li>
            <a onClick={ () => navigate('/')}>Início</a>
          </li>
          <li>
            <a onClick={ scroolToClients }>Clientes</a>
          </li>
          <li>
            <a onClick={ scrollToProducts }>Produtos</a>
          </li>
          <li>
            <a onClick={ scrollToFooter }>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}