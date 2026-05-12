import { useState } from 'react';
import styles from './ItemDetail.module.css'; // Dejamos solo este import para evitar conflictos

// Agregué "stock = 10" como valor por defecto por si la API no trae el stock
export function ItemDetail({ nombre, artista, precio, portada, audio, descripcion, stock = 10 }) {
  
  // 1. Completamos el hook useState con su setter
  const [cantidad, setCantidad] = useState(0);

  // 2. Agregamos las funciones para sumar y restar
  const incrementar = () => { 
    if (cantidad < stock) setCantidad(cantidad + 1); 
  };
  
  const decrementar = () => { 
    if (cantidad > 0) setCantidad(cantidad - 1); 
  };

  const agregarAlCarrito = () => {
    if (cantidad > 0) {
      alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
      // Opcional: Reiniciamos el contador a 0 después de agregarlo
      setCantidad(0); 
    } else {
      alert(`Debes seleccionar al menos 1 unidad de ${nombre}.`);
    }
  };

  return (
    <article className={styles.contenedorDetalle}>
      <div className={styles.columnaImagen}>
        <img src={portada} alt={`Portada de ${nombre}`} className={styles.portadaGigante} />
      </div>
      
      <div className={styles.columnaInfo}>
        <h2 className={styles.titulo}>{nombre}</h2>
        <h3 className={styles.artista}>{artista}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>

        {audio && (
          <div className={styles.reproductor}>
            <p>Escuchar muestra (Digital):</p>
            <audio controls src={audio} controlsList="nodownload noplaybackrate"></audio>
          </div>
        )}

        <div className={styles.controles}>
          <div className={styles.contador}>
            <button onClick={decrementar} className={styles.btnCant}>-</button>
            <span className={styles.numero}>{cantidad}</span>
            <button onClick={incrementar} className={styles.btnCant}>+</button>
          </div>
          
          <button onClick={agregarAlCarrito} className={styles.botonComprar}>
            AÑADIR AL CARRITO
          </button>
        </div>
      </div> {/* 3. ¡Acá cerramos el div de columnaInfo que faltaba! */}
    </article>
  );
}