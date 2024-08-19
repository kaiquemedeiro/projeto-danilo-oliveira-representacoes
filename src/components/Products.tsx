import styles from './Products.module.css';
import allenMontada from '../images/produtos/ALLEN MONTADA.png';
import allen from '../images/produtos/ALLEN.png';

export default function Products() {
  return (
    <div id="products" className={ styles.Body }>
      <div className={ styles.titleContainer }>
        <h1>Produtos</h1>
      </div>
      <div className={ styles.ProductsImgs}>
        <img src={ allenMontada } alt="Allen Montada" />
        <img src={ allen } alt="Allen" />
      </div>
    </div>
  )
}