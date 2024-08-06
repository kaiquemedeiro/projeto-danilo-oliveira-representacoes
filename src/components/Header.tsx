import logo from '../images/LogoHeaderAjustado.png'
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {

  const navigate = useNavigate();

  const scrollWithOffset = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (!element) return;
    const topPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
  };

  const scroolToTop = () => {
    scrollWithOffset('inicio', -100); // Ajuste este valor conforme necessário
  };

  const scroolToClients = () => {
    scrollWithOffset('clients', -100); // Ajuste este valor conforme necessário
  };

  const scrollToFooter = () => {
    scrollWithOffset('footer', -100); // Ajuste este valor conforme necessário
  };

  const scrollToProducts = () => {
    scrollWithOffset('products', -100); // Ajuste este valor conforme necessário
  };

  return (
    <header className={ styles.Body }>
      <img src={ logo } alt="Logo Danilo Oliveira" onClick={ () => navigate('/') } />
      <nav>
        <ul>
          <li>
            <a onClick={ scroolToTop }>Início</a>
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