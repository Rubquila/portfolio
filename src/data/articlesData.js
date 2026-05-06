export const articlesData = [
  {
    id: 1,
    title: 'Reparación de Smartplug',
    category: 'Reparación',
    excerpt: 'Guía completa para reparar placas Arduino dañadas',
    content: 'Los Smartplugs, aunque dispositivos bastante robustos, pueden presentar fallas como fallo de conectividad, activación/desactivación aleatoria o incluso inactividad. ' +
    '\n\nEstos fallos pueden darse por 3 componentes clave: <ul><li>el diodo rectificador M7</li><li>el chip integrado conversor BP2525F</li><li>el condensador rectificador 10v 470µF</li></ul> ' +
    '\n\n<ul><li>Fallo del condesador rectificador 10v 470µF: es el problema más común. Suele hincharse, presentar fugas o a veces incluso puede parecer en buen estado. Genera fallos del tipo de activación/desactivación aleatoria o directamente no genera bien la señal de 5v. </li>' +
    '<li>Fallo del chip integrado conversor BP2525F: puede causar errores de conectividad o reinicios al no generar bien la corriente de salida. Suele ir de la mano del diodo rectificador, por lo que se aconseja cambiarlos los dos a la vez. </li>' +
    '<li>Fallo del diodo rectificador M7: es el menos común, pero puede causar fallos de reinicios al no estabilizar la corriente alterna de entrada.</li></ul>',
    date: '2025-03-15',
    readTime: '8 min',
    tags: ['arduino', 'electrónica', 'reparación', 'soldering']
  },
  {
    id: 2,
    title: 'Reparación de Smartswitch',
    category: 'Reparación',
    excerpt: 'Guía completa para reparar interruptores inteligentes',
    content: 'Los Smartswitches, aunque dispositivos duraderos y simples, pueden presentar fallas como fallo de conectividad, activación/desactivación aleatoria o incluso inactividad. ' +
    '\n\nEstos fallos pueden darse por 3 componentes clave: <ul><li>el diodo rectificador M7</li><li>el chip integrado conversor AP8505</li><li>el condensador rectificador 10v 470µF</li></ul> ' +
    '\n\nLo más común es el fallo del condesador rectificador, que suele hincharse o presentar fugas y genera fallos del tipo de activación/desactivación aleatoria. Por otro lado, errores del tipo de fallos de conectividad o reinicios suele ser por el chip integrado conversor.',
    date: '2025-03-15',
    readTime: '12 min',
    tags: ['react', 'javascript', 'frontend', 'hooks']
  },
  {
    id: 3,
    title: 'PIDs de smartbulbs de SmartLife.',
    category: 'Electrónica',
    excerpt: 'Cómo empezar con IoT usando ESP32',
    content: 'Los PIDs de los dispositivos inteligentes son utilizados para acceder a la configuración de los mismos mediante otras plataformas como Home Assistant.' +
    '\n\nEl listado de PIDs de los smartbulbs es: <ul><li>22: brightness</li><li>23: color temperature</li><li>24: color RGB</li><li>25: scene</li><li>26: speed</li></ul>',
    date: '2025-03-05',
    readTime: '10 min',
    tags: ['esp32', 'iot', 'electrónica', 'wifi']
  },
  {
    id: 4,
    title: 'PIDs de robot aspirador Cecotec Conga 1090',
    category: 'Programación',
    excerpt: 'Debugging y solución de problemas en aplicaciones Node.js',
    content: 'Node.js es poderoso pero puede ser complicado de debuggear. Aquí están los problemas más comunes y cómo resolverlos.\n\nProblema 1: Puertos en uso\nError: listen EADDRINUSE: address already in use :::3000\nSolución: Encuentra el proceso que usa el puerto y termínalo.\n\nProblema 2: Memory Leaks\nLos memory leaks ocurren cuando referencias no se limpian adecuadamente.\nSoluciones:\n- Usa herramientas como node-inspect\n- Verifica listeners de eventos sin remover\n- Limpia timers con clearTimeout/clearInterval\n\nProblema 3: Callbacks Hell\nLos callbacks anidados hacen el código inlegible.\nSoluciones:\n- Usa Promesas\n- Usa async/await\n- Modulariza el código\n\nProblema 4: Errores no capturados\nSiempre envuelve el código en try-catch o maneja las promesas rechazadas.\n\nHerramientas útiles:\n- Node Inspector\n- PM2\n- Winston para logging\n- Clinic.js para performance\n\nBuenas prácticas:\n- Usa linting (ESLint)\n- Escribe tests\n- Monitorea tu aplicación en producción',
    date: '2025-02-28',
    readTime: '11 min',
    tags: ['nodejs', 'javascript', 'debugging', 'backend']
  },
  {
    id: 5,
    title: 'Tipografía en CSS: Guía completa',
    category: 'Programación',
    excerpt: 'Mejora la typografía en tus sitios web',
    content: 'La tipografía es crucial para la experiencia del usuario. Aquí te muestro cómo optimizarla en CSS.\n\nVariables CSS para tipografía:\nEs una buena práctica definir escalas tipográficas usando variables:\n```css\n:root {\n  --font-size-base: 16px;\n  --font-size-h1: 2.5rem;\n  --font-size-h2: 2rem;\n  --line-height: 1.6;\n}\n```\n\nWeb Fonts:\nUsa fuentes de Google u otros servicios:\n```css\n@import url(\'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700\');\n```\n\nLegibilidad:\n- Usa un tamaño mínimo de 16px para body text\n- Mantén line-height entre 1.4 y 1.8\n- Limita el ancho de línea a 60-80 caracteres\n\nEspaciado (letter-spacing):\n- Headlines: 0.02em\n- Body: 0\n- Pequeño texto: 0.05em\n\nOptimización de performance:\n- Carga solo las fuentes que necesites\n- Usa font-display: swap para mejorar FCP\n- Comprime archivos de fuente\n\nSelector fallback chain:\nSiempre proporciona fuentes fallback:\n```css\nfont-family: \'Custom Font\', Georgia, serif;\n```',
    date: '2025-02-20',
    readTime: '9 min',
    tags: ['css', 'tipografía', 'diseño', 'frontend']
  },
  {
    id: 6,
    title: 'Mantenimiento de impresoras 3D',
    category: 'Reparación',
    excerpt: 'Cómo mantener tu impresora 3D en óptimas condiciones',
    content: 'El mantenimiento regular de tu impresora 3D es esencial para garantizar la calidad de impresión y prolongar la vida útil del equipo.\n\n1. Limpieza de la placa base\nLimpia la placa de impresión después de cada uso con un instrumento no abrasivo.\n\n2. Lubricación de componentes\nLubrica los ejes y guías cada cierto tiempo.\n\n3. Cambio de nozzle\nUn nozzle gastado puede afectar significativamente la calidad.\n\n4. Calibración\nCalibre regularmente la altura de la boquilla.\n\n5. Limpieza de filtros\nSi tu impresora tiene filtros, cámbialos regularmente.',
    date: '2025-02-15',
    readTime: '10 min',
    tags: ['impresión 3d', 'mantenimiento', 'reparación']
  },
  {
    id: 7,
    title: 'Domótica con Home Assistant',
    category: 'Electrónica',
    excerpt: 'Automatiza tu hogar con Home Assistant',
    content: 'Home Assistant es una plataforma de código abierto que te permite automatizar y controlar todos los dispositivos de tu hogar desde un único lugar.\n\nInstalación\nPuedes instalar Home Assistant en:\n- Raspberry Pi\n- NAS\n- Computadora antigua\n- Nube (AWS, Azure, etc.)\n\nIntegraciones populares\n- MQTT\n- Zigbee\n- Z-Wave\n- WiFi\n- TP-Link\n- IKEA Tradfri\n\nAutomaciones\nCrea automaciones para:\n- Luces que se encienden con el anochecer\n- Calefacción inteligente\n- Alertas de seguridad\n- Notificaciones en el móvil\n\nScenes y Scripts\nAgrupa dispositivos en escenas para controlarlos juntos.',
    date: '2025-02-10',
    readTime: '13 min',
    tags: ['domótica', 'home assistant', 'automatización', 'iot']
  },
  {
    id: 8,
    title: 'Optimización de Webpack',
    category: 'Programación',
    excerpt: 'Cómo optimizar tus bundles con Webpack',
    content: 'Webpack es un poderoso bundler de módulos. Aquí están las mejores prácticas para optimizar tus bundles.\n\nCode Splitting\nDividir el código en chunks pequeños mejora el performance:\n```javascript\nimport { lazy, Suspense } from \'react\';\nconst Component = lazy(() => import(\'./Component\'));\n```\n\nMinificación\nAsegúrate de que Webpack minifique tu código en producción.\n\nTree Shaking\nRemueve código no utilizado:\n```javascript\nexport { usado, noUsado };\n```\n\nCaché y Hashing\nUsa hashing en los nombres de archivo para mejorar el caché del navegador:\n```javascript\noutput: {\n  filename: \'[name].[contenthash].js\'\n}\n```\n\nAnalysis\nUsa plugins como webpack-bundle-analyzer para analizar tu bundle.',
    date: '2025-02-05',
    readTime: '11 min',
    tags: ['webpack', 'javascript', 'performance', 'bundler']
  }
];
