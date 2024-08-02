import instagramLogo from '../images/footer/instagramLogo.png';
import whatsAppLogo from '../images/footer/whatsAppLogo.png';
import emailLogo from '../images/footer/emailLogo.png';

export default function Footer() {
  return (
    <footer id="footer">
      <h2>Como você pode nos encontrar?</h2>
      <div>
        <img src={ instagramLogo } alt="instagram logo" />
      </div>
      <div>
        <img src={ whatsAppLogo } alt="whatsApp logo" />
      </div>
      <div>
        <img src={ whatsAppLogo } alt="whatsApp logo" />
      </div>
      <div>
        <img src={ emailLogo } alt="email logo" />
      </div>
      <p>© 2024</p>
    </footer>
  )
}