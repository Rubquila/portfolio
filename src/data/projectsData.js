export const projectsData = [
  {
    id: 1,
    title: 'Raston: Sistema Domótico Inteligente',
    status: 'Mejorando',
    category: 'IoT',
    description: 'Automatización inteligente del hogar con Home Assistant y Node-RED',
    coverImage: '/projects/iot-system.jpg',
    technologies: ['Raspberry Pi', 'IoT', 'Node-RED', 'ESP32', 'Home Assistant'],
    tags: ['domótica', 'automatización', 'hardware', 'iot'],
    problem: 'La automatización del hogar requeriere soluciones complejas y caras, que son ofrecidas por fabricantes que restringen el uso de dispositivos de su propia marca.\n\nSe plantea un sistema versátil que permita controlar electrodomésticos, iluminación, sensores, climatización y videovigilancia desde una única plataforma, y que además, permita programar automatizaciones complejas e incluso desarrollar dispositivos nuevos.',
    solution: 'He desarrollado un sistema local dómótico modular mediante Node-RED en la plataforma Home Assistant, que automatiza tareas y rutinas complejas propias de un smarthome. También he creado dispositivos hardware propios con microcontroladores ESP programados mediante ESPHome.\n\nEl sistema es completamente local, sin dependencia de la nube, y permite integración con una amplia variedad de dispositivos y protocolos. Además, he implementado un sistema de notificaciones personalizadas y control remoto seguro.',
    result: 'Sistema completamente funcional que automatiza climatización, iluminación, limpieza y seguridad. Actualmente estoy integrando IA para respuesta conversacional y control avanzado de dispositivos. Reduce el consumo energético en un 30% y proporciona automatizaciones personalizadas.',
    images: [
      '/src/assets/images/proyects/raston/raston1.jpg',
      '/src/assets/images/proyects/raston/raston2.jpg',
      '/src/assets/images/proyects/raston/raston3.jpg'
    ],
    links: {
      Github: 'www.google.com',
      Demo: null
    },
    relatedProjectIds: [6, 7]
  },
  {
    id: 2,
    title: 'Página web personal de portfolio',
    status: 'Mejorando',
    category: 'Programación',
    description: 'Sitio web personal para mostrar mi trabajo, experiencia y conocimientos aquiridos',
    coverImage: '/src/assets/images/proyects/portfolio/portfolio0.jpg',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    tags: ['web', 'react', 'javascript'],
    problem: 'Necesitaba una plataforma para mostrar mis proyectos, experiencia y conocimientos de forma profesional y accesible. Quería crear un sitio web personal que sirviera como portfolio y biblioteca de conocimientos, utilizando tecnologías modernas y siguiendo las mejores prácticas de desarrollo web.',
    solution: 'He desarrollado una página web personal de portfolio utilizando React, con un diseño moderno y responsive que se ajusta a mis necesidades.\n\nEl sitio incluye secciones para proyectos, artículos, habilidades y experiencia, con una navegación intuitiva y un diseño atractivo. He implementado funcionalidades como filtros de proyectos, búsqueda de anotaciones y manuales, y descarga de diseños 3D para imprimir.',
    result: 'El sitio web está completamente funcional y se ha convertido en una herramienta clave para mostrar mi trabajo y alacenar y compartir mis conocimientos. Actualmente estoy trabajando en la ampliación del contenido.',
    images: [
      '/src/assets/images/proyects/portfolio/portfolio1.png',
      '/src/assets/images/proyects/portfolio/portfolio2.jpg',
      '/src/assets/images/proyects/portfolio/portfolio3.jpg'
    ],
    links: {
      github: 'https://github.com/rubenql/raston-project',
      demo: null
    },
    relatedProjectIds: [3]
  },
  {
    id: 3,
    title: 'IEPETer',
    status: 'Completado',
    category: 'Programación',
    description: 'Generador automático de informes médicos estructirados en el diagnóstico de cáncer de pulmón',
    coverImage: '/projects/iepeter.jpg',
    technologies: ['React', 'Node.JS', 'MySQL', 'Express', 'MDD'],
    tags: ['iot', 'hardware', 'sensores', 'medio ambiente', 'forestales'],
    problem: 'La generación de informes médicos para el diagnóstico de cáncer de pulmón es un proceso que consume mucho tiempo y es propenso a subjetividad y errores humanos.\n\nLos médicos necesitan una herramienta que les permita generar informes estructurados y claros de manera eficiente, integrando datos de pacientes, resultados de pruebas y recomendaciones médicas.',
    solution: 'He desarrollado una web-app de generación automática de informes médicos estructurados para el diagnóstico de cáncer de pulmón. El sistema integra datos de pacientes, resultados de pruebas y recomendaciones médicas en un formato claro y profesional, haciendo uso de tecnología React, Node.js y MysQL.',
    result: 'El sistema mejoró la eficiencia en la generación de informes médicos, reduciendo el tiempo necesario para crear un informe completo en un 50% y aumentando la claridad de la redacción e interpretación, reduciendo la subjetividad.\n\nLa aplicación se utilizó en entornos clínicos para mejorar la comunicación entre médicos y pacientes.',
    images: [
      '/projects/iepeter-result-1.jpg',
      '/projects/iepeter-result-2.jpg'
    ],
    links: {
      github: null,
      demo: null
    },
    relatedProjectIds: [2]
  },
  {
    id: 4,
    title: 'Red inalámbrica de sensores forestales',
    status: 'Completado',
    category: 'IoT',
    description: 'Red inalámbrica de sensores para la detección precoz de incendios forestales',
    coverImage: '/projects/forest-sensors.jpg',
    technologies: ['Arduino', 'Attiny85', 'IoT', 'Processing', 'Bluetooth'],
    tags: ['iot', 'hardware', 'sensores', 'medio ambiente', 'redes'],
    problem: 'Los incendios forestales en España son una amenaza crítica. Es necesario crear un sistema de detección precoz que recopile datos de temperatura, humedad y CO de zonas remotas sin infraestructura disponible.',
    solution: 'He desarrollado un prototipo de red inalámbrica de sensores para la detección temprana de incendios forestales como trabajo final de carrera.\n\nHe ustilizado Arduino y Attiny con Processing para la captura y análisis de datos, implementando una red en malla propia y gestionando el modo Sleep de cada nodo. Un sistema autosuficiente, modular y escalable con comunicación Bluetooth.',
    result: 'Prototipo funcional capaz de monitorear más de 50 nodos simultáneamente, con nodos de bajo consumo energético y autosuficientes gracias a baterías y carga solar.',
    images: [
      '/projects/forest-result-1.jpg',
      '/projects/forest-result-2.jpg'
    ],
    links: {
      github: 'https://github.com/rubenql/forest-sensors',
      demo: null
    },
    relatedProjectIds: []
  },
  {
    id: 5,
    title: 'Proyecto Contra',
    status: 'Completado',
    category: 'IoT',
    description: 'Dispositivo inhibidor de frecuencias para concienciación sobre la incomunicación y soledad de los refugiados',
    coverImage: '/projects/contra-project.jpg',
    technologies: ['ESP32', 'RF', 'WiFi', 'GSM'],
    tags: ['hardware', 'electrónica', 'hacking', 'arte'],
    problem: 'Simular la incomunicación sufrida por refugiados sirios usando una manta de emergencia isotérmica. Proyecto en colaboración con un alumno de Bellas Artes como proyecto final de máster.',
    solution: 'He programado un dispositivo inhibidor de frecuencias GSRM, 2G, 3G y wifi en colaboración con BBAA utilizando ESP32. El dispositivo simula un entorno de incomunicación dentro de un radio controlado, permitiendo experimentar la desconexión digital de forma segura.',
    result: 'Proyecto funcional utilizado en exposiciones de sensibilización en la UPV y en Centro Cultural del Carmen. Ha llegado a más de 500 personas permitiéndoles vivir brevemente la experiencia de incomunicación.',
    images: [
      '/projects/contra-result-1.jpg'
    ],
    links: {
      github: null,
      demo: null
    },
    relatedProjectIds: []
  },
  {
    id: 6,
    title: 'Comedero automático para mascotas',
    status: 'Completado',
    category: 'IoT',
    description: 'Comedero automático para mascotas conectado a smarthome y con alimentación ininterrumpida',
    coverImage: '/projects/forest-sensors.jpg',
    technologies: ['ESP32', 'IoT', 'ESPHome', 'Home Assistant'],
    tags: ['hardware', 'electrónica', 'domótica', 'animales'],
    problem: 'Debido a las obligaciones que te hacen estar fuera de casa durante el día, y la necesidad de controlar la alimentación de nuestras mascotas para evitar el sobrepeso, surge la necesidad de crear un comedero automático que permita programar horarios de alimentación, controlar las porciones y garantizar la alimentación incluso en caso de cortes de energía o conexión.',
    solution: 'He desarrollado un dispositivo de alimentación automática para mascotas mediante ESP32, capaz de programar horarios de dispensación, emitir sonidos de aviso y registrar el nivel de comida para evitar quedarse sin alimento.\n\nEl dispositivo se integra con el sistema domótico Home Assistant para permitir control remoto y notificaciones, y cuenta con una batería de respaldo para garantizar su funcionamiento incluso en caso de cortes de energía.',
    result: 'Se ha mejorado el control de las porciones de comida, consiguiendo disminuir el sobrepeso a lo largo de 3 meses. Además ha permitido liberar de una tarea presencial y esencial en la convivencia con mascotas.',
    images: [
      '/projects/forest-result-1.jpg',
      '/projects/forest-result-2.jpg'
    ],
    links: {
      github: 'https://github.com/rubenql/forest-sensors',
      demo: null
    },
    relatedProjectIds: [1, 7]
  },
  {
    id: 7,
    title: 'Controlador automático de estores',
    status: 'Completado',
    category: 'IoT',
    description: 'Dispositivo automático para el control de estores de ventana, integrado con Home Assistant y capaz de funcionar de forma autónoma.',
    coverImage: '/projects/contra-project.jpg',
    technologies: ['ESP8266', 'WeMOS', 'ESPHome', 'Home Assistant'],
    tags: ['hardware', 'electrónica', 'domótica'],
    problem: 'El manejo de los estores de ventana puede ser una acción rutinaria, bastante simple pero especialmente tediosa en hogares con múltiples ventanas. Se busca crear un sistema automatizado que permita controlar los estores de forma remota y programada, integrándose con el sistema domótico del hogar para mejorar la comodidad y eficiencia energética.',
    solution: 'He desarrollado un controlador automático de estores utilizando ESP32, que permite programar horarios de apertura y cierre, puede funcionar de forma independiente, así como controlado remotamente a través de la plataforma Home Assistant.\n\nEl dispositivo cuenta con sensores para detectar la posición y así controlar en qué grado se encuentran abiertos.',
    result: 'El dispositivo se integra con el sistema domótico Home Assistant para permitir control remoto y automatización basada en horarios, condiciones climáticas o presencia. Utiliza unos servomotores para mover las cadenas de los estores, permitiendo la acción manual y automática de los mismos. ',
    images: [
      '/projects/contra-result-1.jpg'
    ],
    links: {
      github: null,
      demo: null
    },
    relatedProjectIds: [1, 6]
  },
  {
    id: 8,
    title: 'Instalación de pantalla Android en Peugeot 207',
    status: 'Completado',
    category: 'Automoción',
    description: 'Sustitución de la radio original de un Peugeot 207 por una pantalla Android Junsun v2 Plus',
    coverImage: '/projects/lab-management.jpg',
    technologies: ['Android', 'CAN-Bus', 'Peugeot 207'],
    tags: ['automoción', 'radio', 'pantalla'],
    problem: 'Dado que los coches Peugeot 207 son de alrededor del año 2008, el equipamiento del mismo se queda muy ajustado a día de hoy, sobretodo en lo que se refiere al equipamiento multimedia.\n\nSe busca actualizar la radio del coche con una con sistema Android, que permita reproducir musica, instalar aplicaciones y que permita visualizar cámaras de parking.',
    solution: 'Instalé una pantalla Android Junsun v2 Plus en un Peugeot 207, sustituyendo la radio original. El proceso implicó extraer la radio original, sustituir el panel de la consola del salpicadero, y configurar el sistema para que funcionara correctamente con las cámaras de parking y otras funciones multimedia.',
    result: 'La pantalla Android se integra en gran medida con el sistema del coche, asimilando la mayoria de las funciones de origen, permitiendo el uso de los mandos del volante, a la vez que añadiendo las funcionalidades propias de un dispositivo Android.\n\nEl dispositivo permite visualizar la camara trasera y delantera, reproducir musica de diferentes fuentes e incluso planificar rutas y navegación mediante el GPS integrado.',
    images: [
      '/projects/lab-result-1.jpg',
      '/projects/lab-result-2.jpg'
    ],
    links: {
      github: null,
      demo: null
    },
    relatedProjectIds: [9, 10]
  },
  {
    id: 9,
    title: 'Panel de control de iluminación para Peugeot 207',
    status: 'Completado',
    category: 'Automoción',
    description: 'Diseño y construcción de un panel de control de la iluminación de un Peugeot 207',
    coverImage: '/projects/lighting-control.jpg',
    technologies: ['LED', 'Peugeot 207'],
    tags: ['electrónica', 'iluminación', 'automoción'],
    problem: 'Dados los distintos proyectos realizados de iluminación en el coche, y los planificados por realizar, surge la necesidad de crear un centro de control minimalista, accesible y estético que reuna todas las conexiones y permita modificar la iluminación.',
    solution: 'He creado un panel de control de iluminación para un Pegueot 207, modificando el diseño original del plafón de techo delantero, añadiendo interruptores retroiluminados, potenciometros y un interruptor general con derivación a dos modos de iluminación. Además he usado un conector de varios pines para facilitar la conexión con las distintas secciones de iluminación del coche.',
    result: 'EL panel de control resulta muy atrativo y funcional, permitiendo un control total y rápido de cada sección de iluminación del coche.',
    images: [
      '/projects/printer-result-1.jpg',
      '/projects/printer-result-2.jpg',
      '/projects/printer-result-3.jpg'
    ],
    links: {
      github: null,
      demo: null
    },
    relatedProjectIds: [8, 10]
  },
  {
    id: 10,
    title: 'Puntos de luz LED en el marco de las puertas para Peugeot 207',
    status: 'Completado',
    category: 'Automoción',
    description: 'Instalación y control de puntos de luz LED en el marco de las puertas de un Peugeot 207',
    coverImage: '/projects/lighting-control.jpg',
    technologies: ['LED', 'Peugeot 207'],
    tags: ['electrónica', 'iluminación', 'automoción'],
    problem: 'Una característica muy estética, y gratamente funcional en la noche, es la iluminación de los marcos de las puertas en el automóvil. Es por ello que se pretende crear un sistema de iluminación LED que se integre en los marcos y que pueda ser controlable.',
    solution: 'He diseñado y he instalado un sistema de iluminación LED para los marcos de las puertas de un Peugeot 207, integrando puntos de iluminación LED concretos, con embellecedores, iluminandose con distintos patronesy permitiendo su control desde el panel de control de iluminación.',
    result: 'El sistema de iluminación LED mejora significativamente la apariencia del coche y proporciona una iluminación funcional en entornos de baja iluminación.',
    images: [
      '/projects/printer-result-1.jpg',
      '/projects/printer-result-2.jpg',
      '/projects/printer-result-3.jpg'
    ],
    links: {
      github: null,
      demo: null
    },
    relatedProjectIds: [8, 9]
  }
];
