import styles from './Loader.module.css';

export function Loader({ mensaje = "Calentando la púa..." }) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.viniloGiratorio}>
        {/* Los pseudo-elementos en CSS van a crear la etiqueta y el agujero del disco */}
      </div>
      <p className={styles.loaderText}>{mensaje}</p>
    </div>
  );
}