# Portfolio Profesional - Ingeniero Multidisciplinar

Una página web moderna y responsive de portfolio profesional construida con React 18 y Vite. 

## 🚀 Características

- **Moderno**: Tema oscuro moderno y elegante
- **Responsive**: Diseño completamente responsive (móvil, tablet, desktop)
- **Sin Backend**: Aplicación estática, no requiere servidor
- **Rápido**: Construido con Vite para máximo rendimiento
- **CSS Puro**: Todos los estilos en CSS, sin CSS-in-JS

## 📱 Secciones

- **Home**: Portada principal con presentación personal
- **Proyectos**: Galería de proyectos destacados en grid (4 columnas)
- **Sobre Mí**: Información personal y habilidades
- **Contacto**: Formulario de contacto funcional

## 🛠️ Tecnologías

- **Frontend**: React 18.x
- **Build Tool**: Vite
- **Styling**: CSS3 (Responsive Design, Flexbox, Grid)
- **JavaScript**: ES6+

## 📦 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx      # Navegación principal (sticky)
│   ├── Home.jsx        # Sección home/hero
│   ├── Projects.jsx    # Galería de proyectos
│   ├── About.jsx       # Sección sobre mí
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── styles/
│   ├── globals.css     # Estilos globales y variables CSS
│   ├── Header.css      # Estilos del encabezado
│   ├── Home.css        # Estilos de la sección home
│   ├── Projects.css    # Estilos de la galería
│   ├── About.css       # Estilos de la sección sobre mí
│   ├── Contact.css     # Estilos del formulario
│   └── Footer.css      # Estilos del pie de página
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada
```

## 🎨 Paleta de Colores

- Primary: `#4a9eff` (Azul brillante)
- Secondary: `#0a0e27` (Azul oscuro)
- Accent: `#ff6b6b` (Rojo)
- Background: `#05070f` (Negro oscuro)

## ⚡ Comandos Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5174/`

### Compilación
```bash
npm run build
```
Crea una build optimizada para producción en la carpeta `dist/`

### Vista Previa
```bash
npm run preview
```
Previsualiza la build de producción localmente

### Linting
```bash
npm run lint
```
Ejecuta eslint para verificar la calidad del código

## 📱 Responsividad

El proyecto es fully responsive con breakpoints en:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 480px

## 🔧 Personalización

### Cambiar los datos del portfolio
1. Edita los componentes en `src/components/`
2. Actualiza los textos e información

### Cambiar el diseño
1. Modifica las variables CSS en `src/styles/globals.css`
2. Ajusta los estilos específicos en cada archivo CSS

### Añadir nuevas imágenes
1. Coloca las imágenes en `public/`
2. Importa desde el componente correspondiente

## 📝 Notas

- El proyecto usa placeholders para imágenes. Reemplaza con tus propias imágenes
- Los enlaces sociales en el footer deben actualizarse con URLs reales
- El formulario de contacto es estático (sin backend)

## 📄 Licencia

MIT

---

Para más información sobre Vite, visita [vite.dev](https://vite.dev)
Para más información sobre React, visita [react.dev](https://react.dev)
