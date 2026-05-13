import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  // useLocation nos dice en qué ruta estamos parados actualmente
  const { pathname } = useLocation();

  useEffect(() => {
    // Cada vez que el "pathname" (la URL) cambie, forzamos el scroll arriba de todo
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente no dibuja nada en la pantalla, es 100% lógico
  return null;
}