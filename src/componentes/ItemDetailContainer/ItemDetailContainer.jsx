import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';

export function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchDisco = async () => {
      setCargando(true);
      
      const urlBase = `https://itunes.apple.com/lookup?id=${id}`;
      const urlProxy = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(urlBase)}`;

      try {
        // 1. Creamos el temporizador obligatorio de 1.5 segundos
        const tiempoMinimo = new Promise(resolve => setTimeout(resolve, 500));
        
        // 2. Preparamos la llamada a la API
        const peticionApi = fetch(urlProxy);

        // 3. LA MAGIA: Esperamos a que AMBAS cosas terminen al mismo tiempo
        const [respuesta] = await Promise.all([peticionApi, tiempoMinimo]);

        if (!respuesta.ok) throw new Error("Error de conexión al buscar el detalle.");

        const data = await respuesta.json();

        if (data.results && data.results.length > 0) {
          const item = data.results[0];

          // Aplicamos exactamente la misma lógica de precios que en el listado
          const precioSugerido = item.collectionPrice || item.trackPrice || 15;
          const precioCalculado = Math.floor(precioSugerido * 1500); // Sincronizado a la perfección

          setProducto({
            id: item.trackId || item.collectionId,
            nombre: item.trackName || item.collectionName,
            artista: item.artistName,
            precio: precioCalculado,
            stock: 10,
            portada: item.artworkUrl100.replace('100x100bb', '600x600bb'),
            audio: item.previewUrl,
            descripcion: `Experimenta el sonido analógico puro de ${item.artistName} con esta edición especial en vinilo de alto gramaje.`
          });
        }
      } catch (error) {
        // Cambiamos "batea" por algo más técnico para mantener la elegancia
        console.error("Error al sincronizar con el catálogo:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchDisco();
  }, [id]);

  if (cargando) {
    // Un mensaje acorde a la vista de detalle
    return <Loader mensaje="Cargando vinilo..." />;
  }

  if (!producto) {
    return <h2 style={{color: '#F4F1EA', textAlign: 'center', marginTop: '50px'}}>Vinilo no encontrado.</h2>;
  }

  return <ItemDetail {...producto} />;
}