import { useState } from 'react';
import { FormularioReclamo } from '../FormularioReclamo/FormularioReclamo';

export function FormularioReclamoContainer() {
  const [datosForm, setDatosForm] = useState({
    orden: '',
    email: '',
    problema: ''
  });

  const [imagenFile, setImagenFile] = useState(null);
  const [cargando, setCargando] = useState(false); // Estado exigido por TalentoLab

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosForm({
      ...datosForm,
      [name]: value
    });
  };

  const manejarCambioImagen = (e) => {
    setImagenFile(e.target.files[0]);
  };

 const manejarEnvio = async (e) => {
  e.preventDefault();

  if (!imagenFile) {
    alert("Por favor, subí una foto de la evidencia.");
    return;
  }

  setCargando(true);

  // 1. Verificamos que la API KEY esté llegando bien
  const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
  
  if (!apiKey) {
    console.error("ERROR: La API KEY de ImgBB no se leyó del .env. Revisá el prefijo VITE_");
    setCargando(false);
    return;
  }

  const formData = new FormData();
  formData.append('image', imagenFile);

  try {
    const respuesta = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formData,
    });

    const datosImgbb = await respuesta.json();

    // 2. Si falló, imprimimos toda la respuesta de ImgBB para ver el motivo real
    if (!datosImgbb.success) {
      console.error("Respuesta detallada de error de ImgBB:", datosImgbb);
      throw new Error(datosImgbb.error?.message || 'Error desconocido en ImgBB');
    }

    // Si tuvo éxito
    const ticketGenerado = {
      ...datosForm,
      urlEvidencia: datosImgbb.data.url
    };
    
    console.log('¡Ticket enviado!', ticketGenerado);
    alert("Reclamo enviado con éxito.");
    
    // Limpieza
    setDatosForm({ orden: '', email: '', problema: '' });
    setImagenFile(null);
    e.target.reset(); 

  } catch (error) {
    console.error("Error capturado:", error.message);
    alert(`Error: ${error.message}`);
  } finally {
    setCargando(false);
  }
};

  return (
    <FormularioReclamo 
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
      cargando={cargando}
    />
  );
}