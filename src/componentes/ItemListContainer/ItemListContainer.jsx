import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';
import { Loader } from '../Loader/Loader';

export function ItemListContainer({ Mensaje }) {
  // 1. Estados para los datos y la experiencia de usuario (UX)
  const [productos, setProductos] = useState([]); // guarda los productos 
  const [cargando, setCargando] = useState(true); // controla los estados de carga
  const [error, setError] = useState(null); // guarda los mensajes de error para mostrar al usuario

  // 2. Estados para la lógica de búsqueda
  const [inputBusqueda, setInputBusqueda] = useState(''); // controla el valor del input de búsqueda

  const terminoInicial = 'classic rock'; // el término que se muestra al cargar la página por primera vez
  const [terminoActivo, setTerminoActivo] = useState(terminoInicial); // el termino que se usa en la busqueda

 useEffect(() => {
    const buscarVinilos = async () => {
      setCargando(true);
      setError(null);

      const query = encodeURIComponent(terminoActivo); // Me convierte el término de búsqueda en algo seguro para URLs
      const urlBase = `https://itunes.apple.com/search?term=${query}&entity=song&limit=24`; //Conexion directa a iTunes
      
      //Usamos un proxy mucho más rápido y directo por el problema de CORS
      const urlProxy = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(urlBase)}`;
try {
        // 1. Creamos el temporizador obligatorio (ej: 1500 milisegundos = 1.5 segundos)
        const tiempoMinimo = new Promise(resolve => setTimeout(resolve, 500));
        
        // 2. Preparamos la llamada a la API
        const peticionApi = fetch(urlProxy);

        // 3. LA MAGIA: Esperamos a que AMBAS cosas terminen al mismo tiempo
        // Si la API tarda 100ms, igual espera a que se cumplan los 1500ms del temporizador.
        // Si la API tarda 3 segundos, ignora el temporizador y espera a la API.
        const [response] = await Promise.all([peticionApi, tiempoMinimo]);

        if (!response.ok) throw new Error('Se perdió la conexión con el catálogo principal.');
        
        const data = await response.json(); 
        
        if (data.results.length === 0) {
          throw new Error(`No encontramos prensajes disponibles para "${terminoActivo}".`);
        }

        // Mapeamos los resultados de iTunes...
        const productosMapeados = data.results.map((item) => {
          const precioSugerido = item.collectionPrice || item.trackPrice || 15;
          const precioCalculado = Math.floor(precioSugerido * 1500);

          return {
            id: item.trackId || item.collectionId,
            nombre: item.trackName || item.collectionName,
            artista: item.artistName,
            precio: precioCalculado,
            stock: Math.floor(Math.random() * 10) + 1,
            portada: item.artworkUrl100.replace('100x100bb', '600x600bb'),
            audio: item.previewUrl
          };
        });

        setProductos(productosMapeados);

      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    buscarVinilos();// Ejecutamos la función de búsqueda cada vez que el término activo cambie
  }, [terminoActivo]);


// Función para manejar el envío del formulario de búsqueda
const manejarBusqueda = (e) => {
    e.preventDefault();
    
    if (inputBusqueda.trim() === '') {
      // Si el usuario borra el texto y le da a buscar, funciona como "Volver"
      limpiarBusqueda();
      setTerminoInicial();

    } else {
      // Si hay texto, busca normalmente
      setTerminoActivo(inputBusqueda);
    }
  };

  const limpiarBusqueda = () => {
    setInputBusqueda('');
    setError(null); // Limpiamos la pantalla roja de error al instante
  };

  const setTerminoInicial = () => {
    setTerminoActivo(terminoInicial);
  };

  // Lógica de títulos dinámicos
  const esBusquedaActiva = terminoActivo !== terminoInicial; 
  
  // vista condicional para mostrar el término de búsqueda o el mensaje por defecto
  const tituloVista = esBusquedaActiva 
    ? `RESULTADOS PARA: "${terminoActivo.toUpperCase()}"` 
    : Mensaje;

  return (
    <div className={styles.contenedor}>
      {/* Título dinámico basado en el estado de búsqueda */}
      <h2 className={styles.titulo}>{tituloVista}</h2>
      
      {/* Formulario de búsqueda controlado */}
      <form onSubmit={manejarBusqueda} className={styles.formularioBusqueda}>
        <input 
          type="text" 
          placeholder="Busca artistas, álbumes o géneros..." 
          value={inputBusqueda}
          onChange={(e) => setInputBusqueda(e.target.value)}
          className={styles.inputBuscador}
        />
        <button type="submit" className={styles.botonBuscar}>BUSCAR</button>
      </form>

      {/* Botón para resetear a la busqueda por defecto */}
      {esBusquedaActiva && !cargando && (
        <div className={styles.contenedorReset}>
          <button onClick={setTerminoInicial} className={styles.btnReset}>
            VOLVER A DESTACADOS
          </button>
        </div>
      )}

      {/* NUEVO: Botonera de Categorías */}
      <div className={styles.categorias}>
        {['Rock', 'Jazz', 'Pop', 'Electronic', 'Blues'].map((categoria) => (
          <button
            key={categoria}
            onClick={() => {
              // Al hacer clic, le pasamos el género a la API y limpiamos el buscador
              setTerminoActivo(`${categoria}`);
              setInputBusqueda('');
            }}
            className={styles.btnCategoria}
          >
            {categoria}
          </button>
        ))}
      </div>

    {/* 2. REEMPLAZO DEL ESTADO CARGANDO POR EL COMPONENTE LOADER */}
      {cargando ? (
        // Pasamos un mensaje personalizado al Loader
        <Loader mensaje="Cargando los discos..." />
      ) : error ? (
        <div className={styles.mensajeError}>{error}</div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}