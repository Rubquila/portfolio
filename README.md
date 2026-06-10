# Portafolio Profesional - Rubén Quintanilla

Sitio web de portafolio personal construido con React 19 y Vite. Incluye navegación SPA, páginas de proyectos, artículos, modelos de impresión 3D, currículum descargable y contacto.

## 🚀 Características principales

- **SPA con React Router**: Rutas para Home, About, Projects, Articles, Printing Models, Resume y Contact
- **Animaciones suaves**: Transiciones de página con Framer Motion
- **Responsive**: Diseño adaptativo para móvil, tablet y escritorio
- **Estilos CSS puros**: Todas las hojas de estilo en CSS
- **Descargas**: Currículum y carta de presentación en PDF disponibles desde la página de Resume

## 📚 Páginas del proyecto

- **Home** (`/`)
- **About Me** (`/aboutme`)
- **Projects** (`/projects`)
- **Project Detail** (`/projects/:projectId`)
- **Articles** (`/articles`)
- **Article Detail** (`/articles/:articleId`)
- **Printing Models** (`/printingmodels`)
- **Printing Model Detail** (`/printingmodels/:modelId`)
- **Resume** (`/resume`)
- **Contact** (`/contact`)

## 🛠️ Tecnologías usadas

- React 19
- Vite 8
- React Router DOM
- Framer Motion
- CSS3
- ESLint

## 📦 Estructura del proyecto

```
src/
├── assets/                # Imágenes, PDF y otros recursos estáticos
├── components/            # Componentes reutilizables
├── data/                  # Datos de proyectos, artículos y modelos
├── pages/                 # Páginas principales del sitio
├── styles/                # Hojas de estilo CSS
├── App.jsx                # Configuración de rutas y animaciones
└── main.jsx               # Entrada de React
```

## ⚡ Scripts disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173/`

### Build
```bash
npm run build
```
Genera la carpeta `dist/` con la versión optimizada para producción

### Previsualización
```bash
npm run preview
```
Sirve la versión de producción localmente

### Lint
```bash
npm run lint
```
Ejecuta ESLint en todo el proyecto

## ✅ Notas importantes

- El proyecto es estático y no tiene backend propio
- La página de Resume ofrece descargas de PDF desde `src/assets`
- La navegación usa rutas internas para una experiencia fluida

## 💡 Cómo personalizar

- Actualiza los datos de proyectos, artículos y modelos en `src/data/`
- Cambia textos y secciones en `src/pages/`
- Ajusta el diseño con los estilos en `src/styles/`
- Sustituye imágenes y archivos PDF en `src/assets/`

## 📄 Licencia

MIT

---

Para más información sobre Vite, visita [vite.dev](https://vite.dev).
