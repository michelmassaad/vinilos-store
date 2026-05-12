import { Directorio } from '../Directorio/Directorio';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <Directorio />
      <footer className={styles.footer}>
        <p>&copy; 2026 - Vinilos Store - Avellaneda, Buenos Aires</p>
        <div className={styles.social}>
          <span>Instagram</span>
          <span>Spotify</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;