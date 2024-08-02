import logo from '../images/LogoHeader.png'

export default function Header() {

  const scrollToFooter = () => {
    const navFooter = document.getElementById('footer');
    navFooter?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header>
      <img src={ logo } alt="Logo Danilo Oliveira" />
      <nav>
        <ul>
          <li>
            <a href="/">Clientes</a>
          </li>
          <li>
            <a href="/about">Produtos</a>
          </li>
          <li>
            <a onClick={ scrollToFooter }>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}