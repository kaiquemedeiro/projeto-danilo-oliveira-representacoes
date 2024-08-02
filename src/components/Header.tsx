import logoHeader from '../assets/logo-header.png';

export default function Header() {
  return (
    <header>
      <img src={ logoHeader } alt="Logo Danilo Oliveira" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}