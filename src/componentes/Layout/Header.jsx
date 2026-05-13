import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom'; // 1. Sumamos NavLink a los imports

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
        {/* 2. Corregido: Quitamos la etiqueta <a> externa. El logo usa Link porque no necesita marcarse como activo */}
        <Link to="/" className={styles.logo}>
          <h1>VINILOS STORE</h1>
          <span className={styles.tagline}>Sonido Orgánico</span>
        </Link>
      </div>
      
      <nav>
        <ul className={styles.nav}>
          {/* 3. Reemplazamos Link por NavLink en el menú. La función de flecha decide qué clase CSS ponerle */}
          <li className={styles.navLi}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.linkActivo : styles.linkNormal}>
              Inicio
            </NavLink>
          </li>
          
          <li className={styles.navLi}>
            <NavLink to="/productos" className={({ isActive }) => isActive ? styles.linkActivo : styles.linkNormal}>
              Colección
            </NavLink>
          </li>
          
          <li className={styles.navLi}>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? styles.linkActivo : styles.linkNormal}>
              Contacto
            </NavLink>
          </li>
          
          <li className={`${styles.navLi} ${styles.cartButton}`}>
            {/* 4. Envolvemos el icono de carrito y el texto en el mismo NavLink */}
            <NavLink to="/carrito" className={({ isActive }) => isActive ? styles.linkActivo : styles.linkNormal}>
              <CartIcon /> Carrito (0)
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;