import React from 'react';
// Importación del CSS Module tal como pide la teoría
import styles from './TarjetaProducto.module.css';

export function TarjetaProducto({ imagen, nombre, precio }) {
  return (
    <article className={styles.tarjeta}>
      <div className={styles.contenedorImagen}>
        <img src={imagen} alt={`Portada de ${nombre}`} className={styles.imagen} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.precio}>${precio.toLocaleString()}</p>
        <button className={styles.boton}>Añadir a la Batea</button>
      </div>
    </article>
  );
}