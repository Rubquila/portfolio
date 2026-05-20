export const projectsData = [
  {
    id: 1,
    title: 'Raston: Sistema Domótico Inteligente',
    status: 'Mejorando',
    category: 'Domótica',
    shortDescription: 'Automatización inteligente del hogar con Home Assistant y Node-RED',
    image: '/projects/iot-system.jpg',
    technologies: ['Raspberry Pi', 'IoT', 'Node-RED', 'ESP32'],
    tags: ['domótica', 'automatización', 'hardware', 'iot'],
    problem: 'La automatización del hogar requeriere soluciones complejas y caras, que son ofrecidas por fabricantes que restringen el uso de dispositivos de su propia marca. Se plantea un sistema versátil que permita controlar electrodomésticos, iluminación, sensores, climatización y videovigilancia desde una única plataforma, y que además, se pueda programar automatizaciones complejas e incluso crear mis propios dispositivos.',
    solution: 'He desarrollado un sistema local dómótico modular mediante Node-RED en la plataforma Home Assistant, que automatiza tareas y rutinas complejas propias de un smarthome. También he creado dispositivos hardware propios con microcontroladores ESP programados mediante ESPHome. El sistema es completamente local, sin dependencia de la nube, y permite integración con una amplia variedad de dispositivos y protocolos. Además, he implementado un sistema de notificaciones personalizadas y control remoto seguro.',
    result: 'Sistema completamente funcional que automatiza diferentes aspectos del hogar. Actualmente estoy integrando IA para respuesta conversacional y control avanzado de dispositivos. Reduce el consumo energético en un 30% y proporciona automatizaciones personalizadas.',
    resultImages: [
      '/src/assets/images/proyects/raston/raston1.jpg',
      '/src/assets/images/proyects/raston/raston2.jpg',
      '/src/assets/images/proyects/raston/raston3.jpg'
    ],
    links: {
      github: 'https://github.com/rubenql/raston-project',
      demo: null
    },
    relatedProjectIds: [5, 6]
  },
  {
    id: 2,
    title: 'Página web personal de portfolio',
    status: 'Mejorando',
    category: 'Desarrollo Web',
    shortDescription: 'Sitio web personal para mostrar mi trabajo, experiencia y conocimientos aquiridos',
    image: '/projects/portfolio-website.jpg',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    tags: ['web', 'react', 'javascript'],
    problem: 'Necesitaba una plataforma para mostrar mis proyectos, experiencia y conocimientos de forma profesional y accesible. Quería crear un sitio web personal que sirviera como portfolio, blog y biblioteca de conocimientos, utilizando tecnologías modernas y siguiendo las mejores prácticas de desarrollo web.',
    solution: 'He desarrollado una página web personal de portfolio utilizando React, con un diseño moderno y responsive. El sitio incluye secciones para proyectos, artículos, habilidades y experiencia, con una navegación intuitiva y un diseño atractivo. He implementado funcionalidades como filtros de proyectos, búsqueda de anotaciones y manuales, y descarga de diseños 3D para imprimir.',
    result: 'El sitio web está completamente funcional y se ha convertido en una herramienta clave para mostrar mi trabajo y compartir conocimientos. Actualmente estoy trabajando en la inserción y ampliación del contenido.',
    resultImages: [
      '/src/assets/images/proyects/portfolio/portfolio1.png',
      '/projects/raston-result-2.jpg',
      '/projects/raston-result-3.jpg'
    ],
    links: {
      github: 'https://github.com/rubenql/raston-project',
      demo: null
    },
    relatedProjectIds: []
  },
  {
    id: 3,
    title: 'IEPETer',
    status: 'Completado',
    category: 'Programación',
    shortDescription: 'Generador automático de informes médicos en el diagnóstico de cáncer de pulmón',
    image: '/projects/iepeter.jpg',
    technologies: ['React', 'Node.JS', 'MySQL', 'Express', 'MDD'],
    tags: ['iot', 'hardware', 'sensores', 'medio ambiente', 'forestales'],
    problem: 'Los incendios forestales en España son una amenaza crítica. Es necesario crear un sistema de detección precoz que recopile datos de temperatura, humedad y CO de zonas remotas sin infraestructura disponible.',
    solution: 'He desarrollado una web app de generación automática de informes médicos estructurados para el diagnóstico de cáncer de pulmón. El sistema integra datos de pacientes, resultados de pruebas y recomendaciones médicas en un formato claro y profesional, haciendo uso de tecnología React, Node.js y MysQL.',
    result: 'El sistema mejoró la eficiencia en la generación de informes médicos, reduciendo el tiempo necesario para crear un informe completo en un 50% y aumentando la claridad de la redacción e interpretación, reduciendo la subjetividad. La aplicación se utilizó en entornos clínicos para mejorar la comunicación entre médicos y pacientes.',
    resultImages: [
      '/projects/iepeter-result-1.jpg',
      '/projects/iepeter-result-2.jpg'
    ],
    links: {
      github: 'https://github.com/rubenql/forest-sensors',
      demo: null
    },
    relatedProjectIds: []
  },
  {
    id: 4,
    title: 'Red inalámbrica de sensores forestales',
    status: 'Completado',
    category: 'IoT',
    shortDescription: 'Detección precoz de incendios forestales mediante sensores inalámbricos',
    image: '/projects/forest-sensors.jpg',
    technologies: ['Arduino', 'IoT', 'Processing', 'Redes', 'Bluetooth'],
    tags: ['iot', 'hardware', 'sensores', 'medio ambiente', 'forestales'],
    problem: 'Los incendios forestales en España son una amenaza crítica. Es necesario crear un sistema de detección precoz que recopile datos de temperatura, humedad y CO de zonas remotas sin infraestructura disponible.',
    solution: 'He desarrollado un prototipo de red inalámbrica de sensores para la detección temprana de incendios forestales como trabajo final de carrera. He ustilizado Arduino y ATinny con Processing para la captura y análisis de datos, implementando una red en malla propia y gestionando el modo Sleep de cada nodo. Un sistema autosuficiente, modular y escalable con comunicación Bluetooth.',
    result: 'Prototipo funcional capaz de monitorear 50+ nodos simultáneamente en un radio de 5km. Bajo consumo energético y autosuficiencia mediante baterías y carga solar, capaz de operar durante la vida útil de los componentes.',
    resultImages: [
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
    shortDescription: 'Dispositivo inhibidor de frecuencias para concienciación sobre la incomunicación y soledad de los refugiados',
    image: '/projects/contra-project.jpg',
    technologies: ['ESP32', 'Hardware', 'RF', 'Electrónica'],
    tags: ['hardware', 'educación', 'esp32', 'rf'],
    problem: 'Simular la incomunicación sufrida por refugiados sirios usando una manta de emergencia isotérmica. Proyecto en colaboración con un alumno de Bellas Artes como proyecto final de máster.',
    solution: 'He programado un dispositivo inhibidor de frecuencias GSRM, 2G, 3G y wifi en colaboración con BBAA utilizando ESP32. El dispositivo simula un entorno de incomunicación dentro de un radio controlado, permitiendo experimentar la desconexión digital de forma segura.',
    result: 'Proyecto completamente funcional utilizado en exposiciones de sensibilización en la UPV y en Centro Cultural del Carmen. Ha llegado a más de 500 personas permitiéndoles vivir brevemente la experiencia de incomunicación.',
    resultImages: [
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
    category: 'Hardware',
    shortDescription: 'Comedero automático para mascotas conectado a smarthome y alimentación ininterrumpida',
    image: '/projects/forest-sensors.jpg',
    technologies: ['Arduino', 'IoT', 'Processing', 'Sensores', 'RF'],
    tags: ['iot', 'hardware', 'sensores', 'domótica'],
    problem: 'Debido a las obligaciones que te hacen estar fuera de casa durante el día, y la necesidad de controlar la alimentación de nuestras mascotas para evitar el sobrepeso, surge la necesidad de crear un comedero automático que permita programar horarios de alimentación, controlar las porciones y garantizar la alimentación incluso en caso de cortes de energía o conexión.',
    solution: 'He desarrollado un dispositivo de alimentación automática para mascotas mediante ESP32, capaz de programar horarios de dispensación, emitir sonidos de aviso y registrar el nivel de comida para evitar quedarse sin alimento. El dispositivo se integra con el sistema domótico Home Assistant para permitir control remoto y notificaciones, y cuenta con una batería de respaldo para garantizar su funcionamiento incluso en caso de cortes de energía.',
    result: 'Se ha mejorado el control de las porciones de comida, consiguiendo disminuir el sobrepeso a lo largo de 3 meses. Además ha permitido liberar de una tarea presencial y esencial en la convivencia con mascotas.',
    resultImages: [
      '/projects/forest-result-1.jpg',
      '/projects/forest-result-2.jpg'
    ],
    links: {
      github: 'https://github.com/rubenql/forest-sensors',
      demo: null
    },
    relatedProjectIds: [1, 6, 4]
  },
  {
    id: 7,
    title: 'Controlador universal de estores',
    status: 'Desarrollando',
    category: 'Hardware',
    shortDescription: 'Dispositivo inhibidor de frecuencias para concienciación',
    image: '/projects/contra-project.jpg',
    technologies: ['ESP32', 'Hardware', 'RF', 'Electrónica'],
    tags: ['hardware', 'educación', 'esp32', 'rf'],
    problem: 'Crear un proyecto que simulase la incomunicación sufrida por refugiados sirios sin conectividad. Objetivo: concienciación sobre la brecha digital y acceso a comunicaciones.',
    solution: 'Desarrollé un dispositivo inhibidor de frecuencias en colaboración con BBAA (Asociación de Bellas Artes) utilizando ESP32. El dispositivo simula un entorno de incomunicación dentro de un radio controlado, permitiendo experimentar la desconexión digital de forma segura.',
    result: 'Proyecto completamente funcional utilizado en exposiciones de sensibilización. Ha llegado a más de 500 personas permitiéndoles vivir brevemente la experiencia de incomunicación. Herramienta educativa poderosa para conciencia social sobre refugiados.',
    resultImages: [
      '/projects/contra-result-1.jpg'
    ],
    links: {
      github: null,
      demo: null
    },
    relatedProjectIds: [1, 8, 5]
  },
  {
    id: 8,
    title: 'Web personal de portfolio',
    status: 'Desarrollando',
    category: 'Software',
    shortDescription: 'Web personal de portfolio para mostrar proyectos, habilidades y conocimientos adquiridos. Creada en React mediante el paradigma PDD (Prompt Driven Development).',
    image: '/projects/lab-management.jpg',
    technologies: ['React', 'PDD', 'JavaScript', 'CSS'],
    tags: ['software', 'web', 'react', 'backend'],
    problem: 'Un laboratorio médico necesitaba gestionar equipamiento, muestras y pruebas de forma eficiente. El sistema manual con hojas de cálculo era propenso a errores y no permitía trazabilidad.',
    solution: 'Creé una aplicación Full Stack React/Node.js con base de datos MySQL. Incluye módulos para gestión de inventario, seguimiento de muestras, programación de pruebas y reportes. Interfaz intuitiva con Material UI y backend robusto con Express.',
    result: 'Sistema completamente operativo que redujo errores administrativos en un 85%. Trazabilidad completa de todas las muestras. Reportes automatizados y alertas de vencimiento. Integración de 3 laboratorios en la plataforma.',
    resultImages: [
      '/projects/lab-result-1.jpg',
      '/projects/lab-result-2.jpg'
    ],
    links: {
      github: null,
      demo: null
    },
    relatedProjectIds: [2, 8]
  },
  {
    id: 9,
    title: 'Impresora 3D de Código Abierto',
    status: 'Completado',
    category: 'Impresión 3D',
    shortDescription: 'Diseño y construcción de impresora 3D funcional',
    image: '/projects/3d-printer.jpg',
    technologies: ['CAD', 'Arduino', 'Electrónica', 'Impresión 3D'],
    tags: ['impresión 3d', 'hardware', 'diy', 'diseño'],
    problem: 'Las impresoras 3D comerciales son costosas. Necesitaba crear una solución de código abierto accesible que permitiera a makers comunitarios acceder a tecnología de impresión 3D.',
    solution: 'Diseñé y construí una impresora 3D tipo Prusa mediante hardware disponible y componentes 3D impresos. Utilizé Arduino para control de motores y electrónica diseñada a medida. Software open-source compatible con estándares de la comunidad.',
    result: 'Impresora completamente funcional con precisión de 0.2mm. Construida por menos de 300€. Diseños ahora compartidos en plataformas de código abierto descargados 2000+ veces. Comunidad activa usando el proyecto.',
    resultImages: [
      '/projects/printer-result-1.jpg',
      '/projects/printer-result-2.jpg',
      '/projects/printer-result-3.jpg'
    ],
    links: {
      github: 'https://github.com/rubenql/openprinter-3d',
      demo: null
    },
    relatedProjectIds: [6, 4, 7]
  }
];
