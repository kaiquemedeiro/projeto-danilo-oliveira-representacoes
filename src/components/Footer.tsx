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
          <a href="https://www.instagram.com/representacoes.dc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
            <img src={ instagramLogo } alt="instagram logo" />
            <p>representacoes.dc</p>
          </a>
        </li>
        <li className={ styles.Li }>
        <a href="https://wa.me/11942674249?text=Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20DC." target='_blank'>
            <img src={ whatsAppLogo } alt="whatsApp logo" />
            <p>11-94267-4249</p>
          </a>
        </li>
        <li className={ styles.Li }>
          <a href="https://wa.me/11966521561?text=Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20DC." target='_blank'>
            <img src={ whatsAppLogo } alt="whatsApp logo" />
            <p>11-96652-1561</p>
          </a>
        </li>
        <li className={ styles.Li }>
          <a href="mailto:danilo@dc-representacoes.com">
            <img src={ emailLogo } alt="email logo" />
            <p className= { styles.pEmail }>
              danilo@dc-representacoes.com
            </p>
          </a>
        </li>
        <li className={ styles.Li }>
          <a href="mailto:vendas@dc-representacoes.com">
            <img src={ emailLogo } alt="email logo" />
            <p className= { styles.pEmail }>vendas@dc-representacoes.com</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
