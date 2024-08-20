import whatsApp from '../images/—Pngtree—whatsapp mobile software icon_8704828.png';
import styles from './Whats.module.css';

export default function Whats() {
  return (
    <div id="whats" className={ styles.Body}>
      <a href="https://wa.me/11942674249?text=Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20DC." target='_blank'>
        <img src={ whatsApp } alt="Pngtree—whatsapp mobile software icon_8704828.png " />
      </a>
    </div>
  );
}