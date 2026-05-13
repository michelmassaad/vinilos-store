import { Routes, Route } from 'react-router-dom'; // 1. Importamos Routes y Route[cite: 5, 7]
import { Layout } from './componentes/Layout/Layout';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { FormularioReclamoContainer } from './componentes/FormularioReclamoContainer/FormularioReclamoContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { ScrollToTop } from './componentes/ScroolToTop/ScroolToTop';

function App() {
  return (
    // Routes agrupa todas nuestras rutas
    <>
      {/* componente para que el scroll vaya arriba al cambiar de ruta */}
      <ScrollToTop />
    <Routes>
      {/* 3. Ruta Padre: Envuelve a todas con el Layout (Header y Footer) */}
      <Route element={<Layout />}>
        
        {/* 4. Rutas Hijas: El contenido que va dentro del Outlet[cite: 5, 7] */}
        <Route path="/" element={<ItemListContainer Mensaje="DISCOS DESTACADOS" />} />
        <Route path="/productos" element={<ItemListContainer Mensaje="CATÁLOGO COMPLETO" />} />
        <Route path="/contacto" element={<FormularioReclamoContainer />} />

        {/* NUEVA RUTA DINÁMICA: El ":id" es una variable que captura el ID del disco */}
        <Route path="/producto/:id" element={<ItemDetailContainer />} />

        <Route path="/carrito" element={"CARRO DE COMPRAS"} />
        <Route path="*" element={<h2 style={{textAlign: 'center', margin: '100px 0'}}>Error 404: Este vinilo no existe en nuestra batea.</h2>} />
        
      </Route>
    </Routes>
    </>
  );
}

export default App;