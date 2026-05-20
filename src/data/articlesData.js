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
    tags: ['react', 'javascript', 'frontend', 'hooks']
  },
  {
    id: 3,
    title: 'PIDs de smartbulbs de SmartLife.',
    category: 'Electrónica',
    excerpt: 'Cómo empezar con IoT usando ESP32',
    content: 'Los PIDs de los dispositivos inteligentes son utilizados para acceder a la configuración de los mismos mediante otras plataformas como Home Assistant.' +
    '\n\nEl listado de PIDs de los smartbulbs es: <ul><li>22: brightness</li><li>23: color temperature</li><li>24: color RGB</li><li>25: scene</li><li>26: speed</li></ul>',
    tags: ['esp32', 'iot', 'electrónica', 'wifi']
  },
  {
    id: 4,
    title: 'PIDs de robot aspirador Cecotec Conga 1090',
    category: 'Programación',
    excerpt: 'Debugging y solución de problemas en aplicaciones Node.js',
    content: 'Node.js es poderoso pero puede ser complicado de debuggear. Aquí están los problemas más comunes y cómo resolverlos.\n\nProblema 1: Puertos en uso\nError: listen EADDRINUSE: address already in use :::3000\nSolución: Encuentra el proceso que usa el puerto y termínalo.\n\nProblema 2: Memory Leaks\nLos memory leaks ocurren cuando referencias no se limpian adecuadamente.\nSoluciones:\n- Usa herramientas como node-inspect\n- Verifica listeners de eventos sin remover\n- Limpia timers con clearTimeout/clearInterval\n\nProblema 3: Callbacks Hell\nLos callbacks anidados hacen el código inlegible.\nSoluciones:\n- Usa Promesas\n- Usa async/await\n- Modulariza el código\n\nProblema 4: Errores no capturados\nSiempre envuelve el código en try-catch o maneja las promesas rechazadas.\n\nHerramientas útiles:\n- Node Inspector\n- PM2\n- Winston para logging\n- Clinic.js para performance\n\nBuenas prácticas:\n- Usa linting (ESLint)\n- Escribe tests\n- Monitorea tu aplicación en producción',
    tags: ['nodejs', 'javascript', 'debugging', 'backend']
  }
];
