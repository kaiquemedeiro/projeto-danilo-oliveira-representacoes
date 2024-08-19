import styles from './Clients.module.css';
import logoNopla from '../images/clientes/Logo-Nopla.png';

export default function Clients() {
  return (
    <div id="clients" className={ styles.Body }>
      <div className={ styles.titleContainer }>
        <h1>Clientes</h1>
      </div>
      <div className={ styles.ContainerLogos }>
        <img src={ logoNopla } alt="Logo Nopla Metais" />
      </div>
    </div>
  );
}