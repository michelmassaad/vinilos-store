¡Entendido! Si vas a presentar esto como estudiante de término en la UTN y como desarrollador enfocado en Full-Stack, el README no puede ser solo una lista de comandos. Tiene que demostrar que entendés de **arquitectura de software, manejo de asincronismo, experiencia de usuario (UX) y buenas prácticas de código**.

Este README está redactado como lo haría un desarrollador Semi-Senior o Senior para un repositorio público en su portfolio. Muestra dominio técnico sin sonar arrogante.

Copiá exactamente esto. Notarás que agregué una sección de "Arquitectura" y "Roadmap" (lo que le vas a agregar después, como el carrito), lo cual a los reclutadores y profesores les encanta ver porque demuestra que pensás a futuro.

---

```markdown
# 📀 Vinilos Store - E-Commerce SPA

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Bundler-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-Component_Scoped-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> 🔗 **[Ver Despliegue en Vivo](https://vinilos-store.vercel.app)**

**Vinilos Store** es una Single Page Application (SPA) desarrollada en React. Emula la experiencia de una tienda boutique de discos analógicos, destacándose por su diseño inmersivo, integración de APIs de terceros y un manejo riguroso de estados asíncronos.

---

## 🎯 Objetivo del Proyecto

El proyecto fue concebido para demostrar habilidades sólidas en el desarrollo Frontend moderno, enfocándose en la arquitectura basada en componentes, el enrutamiento declarativo y la gestión eficiente de efectos secundarios y consumo de APIs.

## ✨ Funcionalidades Core & Soluciones Técnicas

### 1. Consumo y Normalización de API Externa
* **Integración con iTunes Search API:** Obtención en tiempo real de catálogos musicales, portadas en alta resolución y muestras de audio.
* **Evasión de CORS:** Implementación de un proxy HTTP (`api.codetabs.com`) para superar las restricciones de CORS nativas del navegador durante las peticiones `fetch`.
* **Mapeo de Datos (Data Parsing):** Capa de adaptación que normaliza las respuestas inconsistentes de la API (`collectionPrice` vs `trackPrice`) para garantizar una estructura de datos predecible en los componentes de la vista.

### 2. Experiencia de Usuario (UX) y Control de Estado
* **Mitigación de FOUC (Flash of Unstyled Content):** Uso avanzado de `Promise.all` para paralelizar el fetch de datos con un temporizador forzado, garantizando que el *Loader* animado se muestre el tiempo suficiente para una transición elegante.
* **Reproducción Segura:** Reproductor de audio nativo de HTML5 inyectado dinámicamente con restricciones (`controlsList="nodownload noplaybackrate"`) para proteger la propiedad intelectual y ocultar opciones no deseadas del navegador.

### 3. Diseño y Arquitectura CSS
* **Component-Scoped Styles:** Utilización exclusiva de **CSS Modules**, eliminando el riesgo de colisión de clases y manteniendo una especificidad baja y mantenible.
* **Diseño Premium (Dark Theme):** Interfaz fluida basada en Flexbox y CSS Grid, con interacciones complejas en estado `:hover` (filtros *grayscale*, transformaciones de escala y sombras dinámicas).

---

## 📁 Estructura del Proyecto

La arquitectura de carpetas sigue el principio de separación de responsabilidades (SoC), manteniendo los componentes lógicos separados de los presentacionales:

```text
src/
├── componentes/
│   ├── Item/                   # Componente presentacional de la tarjeta
│   ├── ItemList/               # Grilla de productos
│   ├── ItemListContainer/      # Lógica de fetch y filtrado de catálogo
│   ├── ItemDetail/             # Presentación del detalle del producto
│   ├── ItemDetailContainer/    # Lógica de fetch individual
│   ├── Loader/                 # Componente visual de carga (Vinilo giratorio)
│   └── Layout/                 # Navbar y Footer globales
├── App.jsx                     # Configuración de React Router DOM
└── main.jsx                    # Entry point de la aplicación

```

---

## 🚀 Despliegue Local

Para auditar o ejecutar el código en un entorno de desarrollo local:

1. Clonar el repositorio:
```bash
git clone [https://github.com/michelmassaad/vinilos-store.git](https://github.com/michelmassaad/vinilos-store.git)

```


2. Instalar las dependencias de Node:
```bash
cd vinilos-store
npm install

```


3. Inicializar el entorno de desarrollo mediante Vite:
```bash
npm run dev

```



---

## 🛣️ Roadmap (Próximas Implementaciones)

* [ ] Implementación de `React Context` para la gestión global del estado del Carrito de Compras.
* [ ] Integración con Backend as a Service (BaaS) como Firebase/Firestore para el guardado persistente de órdenes de compra.
* [ ] Implementación de *SweetAlert2* o *Toastify* para reemplazar las alertas nativas del navegador.

---

## 👨‍💻 Autor

**Michel Massaad**

* GitHub: [@michelmassaad](https://github.com/michelmassaad)
* LinkedIn: [Michel Massaad](https://www.linkedin.com/in/michel-massaad/)

```