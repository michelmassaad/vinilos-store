import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

export function Item({ id, nombre, artista, precio, stock, portada, audio }) {
  const [cantidad, setCantidad] = useState(0);
  const [esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => { if (cantidad < stock) setCantidad(cantidad + 1); };
  const decrementar = () => { if (cantidad > 0) setCantidad(cantidad - 1); };

  const agregarAlCarrito = () => {
    if (cantidad > 0) {
      alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
    } else {
      alert(`Debes seleccionar al menos 1 unidad de ${nombre}.`);
    }
  };

  const marcarComoFavorito = () => setEsFavorito(!esFavorito);

  const detenerOtrosAudios = (evento) => {
    const todosLosAudios = document.querySelectorAll('audio');
    todosLosAudios.forEach((reproductor) => {
      if (reproductor !== evento.target) {
        reproductor.pause();
      }
    });
  };

  return (
    <article className={styles.card}>
      {/* IMAGEN CLICKEABLE: Ahora te lleva al detalle */}
      <Link to={`/producto/${id}`} className={styles.portadaLink}>
        <div className={styles.portadaWrapper}>
          <img src={portada} alt={nombre} className={styles.imagen} />
        </div>
      </Link>

      <div className={styles.info}>
        <div className={styles.headerTarjeta}>
          <Link to={`/producto/${id}`} className={styles.linkNavegacion}>
            <h3 className={styles.nombre}>{nombre}</h3>
          </Link>
          <span 
            onClick={marcarComoFavorito}
            className={`${styles.estrella} ${esFavorito ? styles.estrellaActiva : ''}`}
          >
            {esFavorito ? '★' : '☆'}
          </span>
        </div>

        <p className={styles.artista}>{artista}</p>

        <div className={styles.etiquetas}>
          <span className={styles.badge}>Stock: {stock}</span>
          <Link to={`/producto/${id}`} className={styles.linkDetalle}>
            + Info
          </Link>
        </div>

        {audio && (
          <audio 
            src={audio} 
            controls 
            className={styles.reproductor} 
            onPlay={detenerOtrosAudios} 
            controlsList="nodownload noplaybackrate"
          />
        )}

        <div className={styles.seccionCompra}>
          <div className={styles.precioWrapper}>
            <span className={styles.precio}>${precio.toLocaleString()}</span>
            <span className={styles.moneda}>ARS</span>
          </div>

          <div className={styles.contador}>
            <button onClick={decrementar} className={styles.btnCant}>-</button>
            <span className={styles.numero}>{cantidad}</span>
            <button onClick={incrementar} className={styles.btnCant}>+</button>
          </div>
        </div>

        <button onClick={agregarAlCarrito} className={styles.btnComprar}>
          AGREGAR AL CARRITO
        </button>
      </div>
    </article>
  );
}