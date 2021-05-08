import { Product } from '../../../models/product.model';

import styles from './ProductResult.module.css';

interface Props {
  product?: Product;
}

export const ProductResult = ({ product }: Props): JSX.Element => {
  return (
    <article className={styles.article}>
      <div>
        <img alt='Product' className={styles.product} src={product?.pictures[0]?.url} />
      </div>
      <div>
        <small className={styles.gray}>{`Código de catálogo: ${product?.id}`}</small>
        <h2 className={styles.h2}>{product?.name}</h2>
        <ul className={`${styles.gray} ${styles.ul}`}>
          {product?.attributes.slice(0, 5).map((attr) => (
            <li key={attr.name}>{`${attr.name}: ${attr.value_name}`}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
