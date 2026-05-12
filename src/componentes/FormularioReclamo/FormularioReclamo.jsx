import styles from './FormularioReclamo.module.css';

export function FormularioReclamo({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen, cargando }) {
  return (
    <section className={styles.seccionFormulario}>
      <div className={styles.encabezado}>
        <h2>SOPORTE Y RECLAMOS</h2>
        <p>¿Tuviste algún problema con tu pedido? Completá el formulario detallando el inconveniente y adjuntá una foto clara del disco o paquete afectado para que podamos ayudarte.</p>
      </div>

      <form className={styles.formulario} onSubmit={manejarEnvio}>
        <div className={styles.grupoInput}>
          <label>Número de Orden (Ej: #1045)</label>
          <input 
            type="text" 
            name="orden" 
            value={datosForm.orden} 
            onChange={manejarCambio} 
            placeholder="#1045"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.grupoInput}>
          <label>Email asociado a la compra</label>
          <input 
            type="email" 
            name="email" 
            value={datosForm.email} 
            onChange={manejarCambio} 
            placeholder="tu@email.com"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.grupoInput}>
          <label>Descripción del problema</label>
          <textarea 
            name="problema" 
            value={datosForm.problema} 
            onChange={manejarCambio} 
            placeholder="El disco llegó con la tapa doblada en la esquina..."
            required
            className={styles.textarea}
            rows="4"
          />
        </div>

        <div className={styles.grupoInput}>
          <label>Foto de la evidencia (Obligatorio)</label>
          <input 
            type="file" 
            onChange={manejarCambioImagen} 
            accept="image/*"
            required
            className={styles.inputFile}
          />
        </div>

        {/* El botón reacciona al estado de carga */}
        <button type="submit" className={styles.botonEnviar} disabled={cargando}>
          {cargando ? 'PROCESANDO EVIDENCIA...' : 'ENVIAR RECLAMO'}
        </button>
      </form>
    </section>
  );
}