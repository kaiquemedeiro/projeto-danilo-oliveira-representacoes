import instagramLogo from '../images/footer/instagramLogo.png';
import whatsAppLogo from '../images/footer/whatsAppLogo.png';
import emailLogo from '../images/footer/emailLogo.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={ styles.Body }>
      <h1>Como você pode nos encontrar?</h1>
      <div className= { styles.List }>
        <div className={ styles.Li}>
          <img src={ instagramLogo } alt="instagram logo" />
          <p>representacoes.dc</p>
        </div>
        <div className={ styles.Li}>
          <img src={ whatsAppLogo } alt="whatsApp logo" />
          <p>xx-xxxxx-xxxx</p>
        </div>
        <div className={ styles.Li}>
          <img src={ whatsAppLogo } alt="whatsApp logo" />
          <p>xx-xxxxx-xxxx</p>
        </div>
        <div className={ styles.Li}>
          <img src={ emailLogo } alt="email logo" />
          <p>danilo@dc-representacoes.com</p>
        </div>
      </div>
      <p>© 2024</p>
    </footer>
  )
}