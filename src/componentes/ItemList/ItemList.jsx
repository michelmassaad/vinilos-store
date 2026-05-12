import { Item } from '../Item/Item';
import styles from './ItemList.module.css';

export function ItemList({ productos }) {
  return (
    <div className={styles.grilla}>
      {productos.map(prod => (
        // El key es obligatorio y pasamos todas las props juntas
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}