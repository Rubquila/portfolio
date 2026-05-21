import React, { useState } from 'react';
import { CoverLetter } from './CoverLetter';
import '../styles/Resume.css';

export const Resume = () => {
  const [expandExperience, setExpandExperience] = useState(false);
  const [expandProjects, setExpandProjects] = useState(false);
  const handleDownload = (format) => {
    let content = '';
    let filename = '';
    let type = '';

    if (format === 'json') {
      content = JSON.stringify(curriculumData, null, 2);
      filename = 'curriculum-ruben-quintanilla.json';
      type = 'application/json';
    } else if (format === 'txt') {
      content = generateTextResume();
      filename = 'curriculum-ruben-quintanilla.txt';
      type = 'text/plain';
    }

    const element = document.createElement('a');
    element.setAttribute('href', 'data:' + type + ';charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateTextResume = () => {
    return `
RUBÉN QUINTANILLA LAHIGUERA
Programador Full Stack

================================================================

CONTACTO
Teléfono: 661166850
Email: rubenquintanilla_8@hotmail.com
LinkedIn: rubenql
Disponibilidad: Inmediata, total

================================================================

PERFIL PROFESIONAL
Programador Full Stack con experiencia en React, Java y Android, 
especializado en MDD e interfaces de calidad. Con interés en IoT y domótica, 
orientado al desarrollo de soluciones innovadoras con impacto real.

================================================================

EXPERIENCIA LABORAL

Desarrollador Full Stack React/Node.js
VRAIN | 2022 - 2023
- Ciclo completo del desarrollo de una aplicación React con Javascript 
  mediante Model Driven Development
- Diseño de la interfaz de usuario con Material UI y patrones de usabilidad
- Desarrollo de servicios de backend y APIs con Express.js
- Creación y gestión de base de datos MySQL

Desarrollador Full Stack Android
BECSA | 2017 - 2019
- Ciclo completo del desarrollo de una aplicación Android mediante MDD
- Diseño de la interfaz de usuario con Material UI
- Creación y gestión de bases de datos relacionales y no relacionales 
  con Google Firebase y MySQL

Community Manager
Polimedia | 2016 - 2018
- Gestión y promoción de redes sociales
- Posicionamiento web
- Rediseño de interfaz de usuario en HTML y Javascript

================================================================

PROYECTOS

Proyecto Raston
Sistema local dómótico que automatiza tareas y rutinas complejas propias de 
un smarthome programadas mediante Node-RED. Incluido creación de dispositivos 
hardware con microcontroladores ESP y programados mediante ESPHome. 
Actualmente integrando IA para la respuesta y control de dispositivos en 
modo conversacional.

Red inalámbrica de sensores para detección precoz de incendios forestales
Prototipo de una solución para la ayuda al trabajo forestal y defensa ante 
incendios forestales. Desarrollado como trabajo final de carrera mediante 
Processing, Arduino y dispositivos ATinny y Arduino Nano.

Proyecto Contra
Proyecto en colaboración con BBAA sobre un dispositivo inhibidor de 
frecuencias que simula la incomunicación sufrida por los refugiados de Siria, 
mediante el uso de dispositivos ESP32.

Control del automóvil mediante CAN-BUS
Control y lectura de datos de sistemas electrónicos de un automóvil mediante 
la interfaz CAN con Arduino, permitiendo adición y automatización de funciones.

================================================================

NIVEL FORMATIVO

Máster en Ingeniería y Tecnología de Sistemas Software
Universidad Politécnica Valencia | 2023

Grado en Ingeniería Informática (Ing. Software)
Universidad Politécnica Valencia | 2018

F.P.G.S Administración de Sistemas Informáticos
I.E.S. Consellería | 2011

================================================================

IDIOMAS

Castellano: Lengua materna
Valenciano: Alto
Inglés: B1 (en mejora)

================================================================

CERTIFICACIONES

HTML5 y CSS3 | 2026
DB2 | 2026
`;
  };

  const curriculumData = {
    personal: {
      name: 'Rubén Quintanilla Lahiguera',
      title: 'Programador Full Stack',
      phone: '',
      email: '',
      linkedin: 'rubenql',
      availability: 'Inmediata, total'
    },
    profile: 'Ingeniero informático con Máster en Ingeniería de Software y más de 3 años de experiencia en desarrollo Full Stack. Especializado en la creación de aplicaciones web robustas con React, Node.js (Express) y MySQL. Sólida base en arquitectura de software, metodologías ágiles y patrones de diseño. Apasionado por la innovación tecnológica, con experiencia complementaria en desarrollo Android y soluciones IoT.',
    experience: [
      {
        title: 'Desarrollador Full Stack React/Node.js',
        company: 'VRAIN',
        years: '2022 - 2023',
        description: 'Ciclo completo del desarrollo de una aplicación React con Javascript mediante Model Driven Development. Diseño de la interfaz de usuario con Material UI y patrones de usabilidad. Desarrollo de servicios de backend y APIs con Express.js. Creación y gestión de base de datos MySQL.'
      },
      {
        title: 'Desarrollador Full Stack Android',
        company: 'BECSA',
        years: '2017 - 2019',
        description: 'Ciclo completo del desarrollo de una aplicación Android mediante MDD. Diseño de la interfaz de usuario con Material UI. Creación y gestión de bases de datos relacionales y no relacionales con Google Firebase y MySQL.'
      },
      {
        title: 'Community Manager',
        company: 'Polimedia',
        years: '2016 - 2018',
        description: 'Gestión y promoción de redes sociales. Posicionamiento web. Rediseño de interfaz de usuario en HTML y Javascript.'
      }
    ],
    projects: [
      {
        title: 'Proyecto Raston',
        description: 'Sistema local dómótico que automatiza tareas y rutinas complejas propias de un smarthome programadas mediante Node-RED. Incluido creación de dispositivos hardware con microcontroladores ESP y programados mediante ESPHome. Actualmente integrando IA para la respuesta y control de dispositivos en modo conversacional.'
      },
      {
        title: 'Red inalámbrica de sensores para detección precoz de incendios forestales',
        description: 'Prototipo de una solución para la ayuda al trabajo forestal y defensa ante incendios forestales, desarrollado como trabajo final de carrera. Desarrollado con Processing, Arduino y dispositivos ATinny y Arduino Nano.'
      },
      {
        title: 'Proyecto Contra',
        description: 'Proyecto en colaboración con BBAA sobre un dispositivo inhibidor de frecuencias que simula la incomunicación sufrida por los refugiados de Siria, mediante el uso de dispositivos ESP32.'
      },
      {
        title: 'Control del automóvil mediante CAN-BUS',
        description: 'Control y lectura de los datos de los sistemas electrónicos de un automóvil mediante la comunicación por la interfaz CAN con Arduino, permitiendo adición y automatización de funciones.'
      }
    ],
    education: [
      {
        degree: 'Máster en Ingeniería y Tecnología de Sistemas Software',
        institution: 'U. Politécnica Valencia',
        year: '2023'
      },
      {
        degree: 'Grado en Ingeniería Informática (Ing. Software)',
        institution: 'U. Politécnica Valencia',
        year: '2018'
      },
      {
        degree: 'F.P.G.S Administración de Sistemas Informáticos',
        institution: 'I.E.S. Consellería',
        year: '2011'
      }
    ],
    languages: [
      { language: 'Castellano', level: 'Lengua materna' },
      { language: 'Valenciano', level: 'Alto' },
      { language: 'Inglés', level: 'B1 (en mejora)' }
    ],
    certifications: [
      { cert: 'HTML5 y CSS3', year: '2026' },
      { cert: 'DB2', year: '2026' }
    ]
  };

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Currículum Vitae</h2>

        {/* Sección de Descargas */}
        <div className="download-section">
          <h3>Descargar CV</h3>
          <div className="download-buttons">
            <button 
              className="download-btn download-json"
              onClick={() => handleDownload('json')}
              title="Descargar en formato JSON"
            >
              📄 JSON
            </button>
            <button 
              className="download-btn download-txt"
              onClick={() => handleDownload('txt')}
              title="Descargar en formato TXT"
            >
              📋 TXT
            </button>
          </div>
        </div>

        {/* Contenido del CV */}
        <div className="resume-content">
          
          {/* Header con información personal */}
          <div className="resume-header">
            <div className="resume-info">
              <h3>Rubén Quintanilla Lahiguera</h3>
              <p className="job-title">Programador Full Stack</p>
              <p className="profile-text">
                Ingeniero informático con Máster en Ingeniería de Software y más de 3 años de experiencia en
                desarrollo Full Stack. Especializado en la creación de aplicaciones web robustas con React,
                Node.js (Express) y MySQL. Sólida base en arquitectura de software, metodologías ágiles y
                patrones de diseño. Apasionado por la innovación tecnológica, con experiencia complementaria
                en desarrollo Android y soluciones IoT.
              </p>
            </div>
            <div className="contact-info">
              <p><strong>Contacto:</strong></p>
              <p></p>
              <p></p>
              <p>💼 LinkedIn: <a href={`https://linkedin.com/in/rubenql`} target="_blank" rel="noopener noreferrer">rubenql</a></p>
              <p>💼 GitHub: <a href={`https://github.com/rubenql`} target="_blank" rel="noopener noreferrer">rubenql</a></p>
              <p>💼 Web: <a href={`https://linkedin.com/in/rubenql`} target="_blank" rel="noopener noreferrer">rubenql</a></p>
              <p><strong>Disponibilidad:</strong> Inmediata, total</p>
            </div>
          </div>

          {/* Experiencia Laboral */}
          <div className="resume-section">
            <h3 className="section-subtitle">Experiencia Laboral</h3>
            <div className="resume-item">
              <div className="item-header">
                <h4>Desarrollador Full Stack React/Node.js</h4>
                <span className="company-years">VRAIN | 2022 - 2023</span>
              </div>
              <p>Desarrollé desde cero el frontend de una aplicación web utilizando React y JavaScript,
                aplicando metodologías MDD (Model Driven Development) para acelerar el proceso de desarrollo. <br />
                Diseñé e implementé APIs REST y servicios backend robustos utilizando Node.js (Express) y
                optimicé la persistencia de datos mediante MySQL.
              </p>
            </div>
            <div className="resume-item">
              <div className="item-header">
                <h4>Desarrollador Full Stack Android</h4>
                <span className="company-years">BECSA | 2017 - 2019</span>
              </div>
              <p>Diseñé y desarrollé la arquitectura de una aplicación móvil Android, gestionando bases de
                datos relacionales y no relacionales con Google FIrebase y MySQL e implementando interfaces
                de usuario intuitivas con Material UI.</p>
            </div>
            <div className="resume-item">
                <div className="item-header">
                  <h4>Desarrollador Frontend</h4>
                  <span className="company-years">Polimedia | 2016 - 2018</span>
                </div>
                <p>Rediseñé la interfaz de usuario de los cursos MOOC con HTML y Javascript.<br />
                Gestión y promoción de redes sociales. </p>
              </div>

            {/* Experiencia expandible */}
            <div className={`expandable-items ${expandExperience ? 'expanded' : 'collapsed'}`}>
              <div className="resume-item">
                <div className="item-header">
                  <h4>Camarero</h4>
                  <span className="company-years">McDonald's | 2008 - 2022</span>
                </div>
                <p>Supervisión de calidad de los pedidos y entrega al cliente, con capacidad de gestión
                de la estrategia de expeditación.<br />
                Diseñé un estrategia de gestión de entrega de pedidos optimizada para los pedidos en coche
                que aumentó la eficiencia del proceso y redujo el tiempo de entrega.</p>
              </div>
              <div className="resume-item">
                <div className="item-header">
                  <h4>Técnico de campo</h4>
                  <span className="company-years">T-Systems | 2011</span>
                </div>
                <p>Realicé el inventariado del equipamiento informático de la base militar de Betera para
                el Ejercito de Tierra.<br />
                Apoyé en el servicio de asistencia HelpDesk para las oficinas de Iberdrola.</p>
              </div>
              <div className="resume-item">
                <div className="item-header">
                  <h4>Técnico</h4>
                  <span className="company-years">APP Informática | 2007</span>
                </div>
                <p>Reparé, monté y configuré equipos informáticos para entornos domésticos y de oficina.<br />
                Apoyé en el inventariado y control de stock del material hardware del almacén.</p>
              </div>
            </div>
            <button 
              className="view-more-btn" 
              onClick={() => setExpandExperience(!expandExperience)}
            >
              {expandExperience ? 'Ver menos' : 'Ver otros trabajos'}
            </button>
          </div>

          {/* Proyectos */}
          <div className="resume-section">
            <h3 className="section-subtitle">Proyectos</h3>
            <div className="resume-item">
              <h4>Proyecto Raston</h4>
              <p>Desarrollé un sistema local domótico para la automatización de rutinas complejas en
              entornos smarthome programado mediante Node-RED.<br />
              Desarrollé e integré dispositivos de hardware utilizando microcontroladores ESP y
              programacion ESPHome.<br />
              Actualmente integrando Inteligencia Artificial para permitir el control de los dispositivos
              mediante una interfaz conversacional en tiempo real.</p>
            </div>
            <div className="resume-item">
              <h4>IEPETer</h4>
              <p>Desarrollé una aplicación web para la generación automatizada de informes médicos estructurados
              a partir de datos clínicos utilizando React para el frontend, y Node.js y MySQL para el backend.
              Diseñé una interfaz clara e intuitiva que se adelanta a las necesidades del usuario, consiguiendo
              un aumento de la claridad del informe y una reducción del tiempo de generación en un 65%.</p>
            </div>

            {/* Proyectos expandible */}
            <div className={`expandable-items ${expandProjects ? 'expanded' : 'collapsed'}`}>
              <div className="resume-item">
                <h4>Web personal portfolio</h4>
                <p>Desarrollé mi porfolio web interactivo utilizando React, optimizando la arquitectura de
                componentes para lograr una carga rápida y una navegación fluida.<br />
                Implementé un diseño responsivo y moderno enfocado en la experiencia de usuario (UX/UI),
                utilizando patrones avanzados de maquetación y estilos.<br />
                Integré herramientas de Inteligencia Artifical para acelerar la fase de prototipado del proyecto,
                encargándome posteriormente de la refactorización del código, personalización y lógica frontend.</p>
              </div>
              <div className="resume-item">
                <h4>Red inalámbrica de sensores para detección precoz de incendios forestales</h4>
                <p>Creé un prototipo de red inalámbrica para la detección de incendios forestales mediante el uso
                de balizas autosuficientes, compuestas por microcontroladores ATinny y Arduino y con comunicación
                inalámbrica Bluetooth.<br />
                Para la representación de los datos, implementé un sistema de gestión en Processing, que procesaba
                los datos de la red y los mostraba en un mapa.</p>
              </div>
              <div className="resume-item">
                <h4>Proyecto Contra</h4>
                <p>Participé en un proyecto en colaboración con BBAA, donde creé un dispositivo inhibidor de 
                frecuencias con un NodeMCU, el cual se activaba al cubrirse con la manta térmica de emergencias.<br />
                EL wearable resultante simula la incomunicación sufrida por los refugiados de Siria al llegar al país
                y ser acogidos por el personal de asistencia.</p>
              </div>
              <div className="resume-item">
                <h4>Control del automóvil mediante CAN-BUS</h4>
                <p>Desarrollé un dispositivo de control de las interfaces del automóvil mediante comunicación 
                CAN-BUS, haciendo uso de Arduino e ingeniería inversa para decodificar los mensajes transmitidos
                por los sitemas.<br />
                Mediante este dispositivo pude mostrar información relevante del automóvil e incluso automatizar
                funcionalidades.</p>
              </div>
            </div>
            <button 
              className="view-more-btn" 
              onClick={() => setExpandProjects(!expandProjects)}
            >
              {expandProjects ? 'Ver menos' : 'Ver más proyectos'}
            </button>
          </div>

          {/* Educación */}
          <div className="resume-section">
            <h3 className="section-subtitle">Nivel Formativo</h3>
            <div className="resume-item">
              <h4>Máster en Ingeniería y Tecnología de Sistemas Software</h4>
              <p>U. Politécnica Valencia | 2023</p>
            </div>
            <div className="resume-item">
              <h4>Grado en Ingeniería Informática (Ing. Software)</h4>
              <p>U. Politécnica Valencia | 2018</p>
            </div>
            <div className="resume-item">
              <h4>F.P.G.S Administración de Sistemas Informáticos</h4>
              <p>I.E.S. Consellería | 2011</p>
            </div>
          </div>

          {/* Idiomas */}
          <div className="resume-section">
            <h3 className="section-subtitle">Idiomas</h3>
            <div className="languages-grid">
              <div className="language-item">
                <strong>Castellano:</strong> Lengua materna
              </div>
              <div className="language-item">
                <strong>Valenciano:</strong> Alto
              </div>
              <div className="language-item">
                <strong>Inglés:</strong> B2
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="resume-section">
            <h3 className="section-subtitle">Certificaciones</h3>
            <div className="certifications-grid">
              <div className="cert-item">
                <span>HTML5 y CSS3</span>
                <span className="cert-year">(2026)</span>
              </div>
              <div className="cert-item">
                <span>DB2</span>
                <span className="cert-year">(2026)</span>
              </div>
              <div className="cert-item">
                <span>Inmersión lingüística en Inglés B1</span>
                <span className="cert-year">(2017)</span>
              </div>
              <div className="cert-item">
                <span>Programador de aplicaciones informáticas</span>
                <span className="cert-year">(2008)</span>
              </div>
              <div className="cert-item">
                <span>Técnico en sistemas microinformáticos</span>
                <span className="cert-year">(2007)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divisor */}
        <div className="resume-divider"></div>

        {/* Carta de Presentación */}
        <CoverLetter />

      </div>
    </section>
  );
};
