import { useState, useEffect } from 'react';
import styles from './Directorio.module.css';

export function Directorio() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetch('/nosotros.json')
      .then(res => res.json())
      .then(data => setStaff(data));
  }, []);

  return (
    <section className={styles.seccionDirectorio}>
      <h3>NUESTRO EQUIPO</h3>
      <div className={styles.grilla}>
        {staff.map(persona => (
          <div key={persona.id} className={styles.tarjeta}>
            <img src={persona.foto} alt={persona.nombre} />
            <h4>{persona.nombre}</h4>
            <p className={styles.puesto}>{persona.puesto}</p>
            <p className={styles.email}>{persona.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}