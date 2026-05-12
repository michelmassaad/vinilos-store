import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const CartIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ marginRight: '8px', position: 'relative', top: '2px' }}
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <a className={styles.navLi}><Link to="/" className={styles.logo}>
          <h1>VINILOS STORE</h1>
          <span className={styles.tagline}>Sonido Orgánico</span>
        </Link>
        </a>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navLi} ><Link to="/">Inicio</Link></li>
          <li className={styles.navLi} ><Link to="/productos">Colección</Link></li>
          <li className={styles.navLi} ><Link to="/contacto">Contacto</Link></li>
          <li className={`${styles.navLi} ${styles.cartButton}`} ><CartIcon /><Link to="/carrito">Carrito (0)</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;