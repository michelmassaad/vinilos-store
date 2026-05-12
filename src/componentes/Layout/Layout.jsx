import { Outlet } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.contenedorLayout}>
      <Header />
      
      <main className={styles.main}>
        {/* Outlet se encarga de mostrar la vista correcta según la URL */}
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
}