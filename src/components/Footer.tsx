import instagramLogo from '../images/footer/instagramLogo.png';
import whatsAppLogo from '../images/footer/whatsAppLogo.png';
import emailLogo from '../images/footer/emailLogo.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={ styles.Body }>
      <h1 className={styles.Title}>Como você pode nos encontrar?</h1>
      <ul className={ styles.List }>
        <li className={ styles.Li }>
          <img src={ instagramLogo } alt="instagram logo" />
          <p>representacoes.dc</p>
        </li>
        <li className={ styles.Li }>
          <img src={ whatsAppLogo } alt="whatsApp logo" />
          <p>xx-xxxxx-xxxx</p>
        </li>
        <li className={ styles.Li }>
          <img src={ whatsAppLogo } alt="whatsApp logo" />
          <p>xx-xxxxx-xxxx</p>
        </li>
        <li className={ styles.Li }>
          <img src={ emailLogo } alt="email logo" />
          <p className= { styles.pEmail }>danilo@dc-representacoes.com</p>
        </li>
      </ul>
    </footer>
  );
}
