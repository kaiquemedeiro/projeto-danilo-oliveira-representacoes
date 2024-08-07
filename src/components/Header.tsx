import { useState } from 'react';
import logo from '../images/LogoHeaderAjustado.png';
import hamburgerIcon from '../images/menu_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.png';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('inicio');
  const navigate = useNavigate();

  const scrollWithOffset = (id: string, offset: number) => {
    const element = document.getElementById(id);
    if (!element) return;
    const topPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    scrollWithOffset(id, -100); // Ajuste este valor conforme necessário
    setIsMenuOpen(false); // Fechar o menu ao clicar em um item
    setActiveItem(id); // Definir o item ativo
  };

  return (
    <header className={styles.Body}>
      <img src={logo} alt="Logo Danilo Oliveira" onClick={() => navigate('/')} />
      <nav>
        <div className={styles.hamburgerMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={hamburgerIcon} alt="Menu" className={styles.MenuIcon} />
        </div>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
          <li onClick={() => scrollToSection('inicio')} className={activeItem === 'inicio' ? styles.active : ''}>
            <a>Início</a>
          </li>
          <li onClick={() => scrollToSection('clients')} className={activeItem === 'clients' ? styles.active : ''}>
            <a>Clientes</a>
          </li>
          <li onClick={() => scrollToSection('products')} className={activeItem === 'products' ? styles.active : ''}>
            <a>Produtos</a>
          </li>
          <li onClick={() => scrollToSection('footer')} className={activeItem === 'footer' ? styles.active : ''}>
            <a>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
