# 🎵 Vinilos Store

> **Sonido Orgánico** — Tu tienda de vinilos online, impulsada por la API de iTunes.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=react-router)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## 🌐 Demo en vivo

[![Ver en Vercel](https://img.shields.io/badge/Ver%20en%20vivo-Vercel-black?style=for-the-badge&logo=vercel)](https://vinilos-store.vercel.app)

---

## 📖 Descripción

**Vinilos Store** es una aplicación web de e-commerce de discos de vinilo construida con React. Consume la **iTunes Search API** en tiempo real para mostrar un catálogo dinámico de música, permitiendo a los usuarios explorar, buscar y ver el detalle de cada disco, con precios convertidos a pesos argentinos.

---

## ✨ Funcionalidades

- 🔍 **Búsqueda en tiempo real** — Buscá artistas, álbumes o géneros directamente desde la API de iTunes.
- 🎸 **Filtro por categorías** — Navegá rápidamente por Rock, Jazz, Pop, Electronic y Blues.
- 📀 **Vista de detalle** — Página individual por producto con portada en alta resolución, precio y descripción.
- 🎧 **Preview de audio** — Vista preparada para reproducción de fragmentos de canciones.
- 📋 **Formulario de reclamos** — Sistema de soporte con adjunto de imagen para reportar problemas con pedidos.
- ⏳ **Loader animado** — Experiencia de carga fluida con tiempo mínimo garantizado.
- 🛒 **Carrito** _(en desarrollo)_ — Estructura base implementada y accesible desde el header.
---

## 🗂️ Estructura del Proyecto

```
vinilos-store/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── nosotros.json          # Datos del equipo
├── src/
│   ├── componentes/
│   │   ├── Directorio/        # Directorio del equipo
│   │   ├── FormularioReclamo/ # Formulario de soporte (UI)
│   │   ├── FormularioReclamoContainer/ # Lógica del formulario
│   │   ├── Item/              # Tarjeta compacta de producto
│   │   ├── ItemDetail/        # Vista de detalle (UI)
│   │   ├── ItemDetailContainer/ # Lógica del detalle
│   │   ├── ItemList/          # Grilla de productos
│   │   ├── ItemListContainer/ # Lógica del catálogo y búsqueda
│   │   ├── Layout/            # Header, Footer y Layout global
│   │   ├── Loader/            # Componente de carga
│   ├── assets/
│   ├── App.jsx                # Definición de rutas
│   ├── main.jsx               # Punto de entrada
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛣️ Rutas

| Ruta            | Descripción                                          |
| --------------- | ---------------------------------------------------- |
| `/`             | Inicio — muestra discos destacados de _Classic Rock_ |
| `/productos`    | Catálogo completo                                    |
| `/producto/:id` | Detalle de un disco específico                       |
| `/contacto`     | Formulario de soporte y reclamos                     |
| `/carrito`      | Carrito de compras _(en desarrollo)_                 |
| `*`             | Página 404 personalizada                             |

---

## 🔌 API

La aplicación consume la **iTunes Search API** para obtener datos de música en tiempo real.

```
# Búsqueda por término
https://itunes.apple.com/search?term={query}&entity=song&limit=24

# Lookup por ID (detalle)
https://itunes.apple.com/lookup?id={id}
```

> Las peticiones se realizan a través del proxy **[CodeTabs](https://api.codetabs.com/v1/proxy)** para resolver restricciones de CORS.

**Campos utilizados de la respuesta:**

| Campo iTunes                     | Campo en la app            |
| -------------------------------- | -------------------------- |
| `trackName` / `collectionName`   | Nombre del disco           |
| `artistName`                     | Artista                    |
| `artworkUrl100` (→ `600x600bb`)  | Portada en alta resolución |
| `collectionPrice` / `trackPrice` | Precio base (×1500 → ARS)  |
| `previewUrl`                     | Audio de preview           |
| `trackId` / `collectionId`       | ID único del producto      |

---

## 🚀 Instalación y uso

### Prerrequisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/michelmassaad/vinilos-store.git
cd vinilos-store

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo con hot-reload
npm run build    # Build de producción en /dist
npm run preview  # Vista previa del build de producción
npm run lint     # Análisis estático del código con ESLint
```

---

## 🧰 Stack Tecnológico

| Tecnología Uso                               | Uso
| -------------------------------------------- | ----------------------------------- |
| [React](https://react.dev/)                  | Biblioteca principal de UI          |
| [React Router DOM](https://reactrouter.com/) | Enrutamiento client-side (SPA)      |
| [Vite](https://vite.dev/)                    | Bundler y servidor de desarrollo    |
| [ESLint](https://eslint.org/)                | Linting y calidad de código         |
| iTunes Search API                            | Fuente de datos del catálogo        |
| CSS Modules                                  | Estilos encapsulados por componente |

---

## 🗺️ Roadmap

- [ ] Implementar el carrito de compras con contexto global
- [ ] Persistencia del carrito con `localStorage`

---

## 👨‍💻 Autor

Michel Massaad

- GitHub: https://github.com/michelmassaad
- LinkedIn: https://www.linkedin.com/in/michel-massaad/
