import React from 'react';
import { CoverLetter } from './CoverLetter';
import '../styles/Resume.css';

export const Resume = () => {
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
              <p><strong>Disponibilidad:</strong> Inmediata, total</p>
            </div>
          </div>

          {/* Experiencia Laboral */}
          <div className="resume-section">
            <h3 className="section-subtitle">Experiencia Laboral</h3>
            {curriculumData.experience.map((job, index) => (
              <div key={index} className="resume-item">
                <div className="item-header">
                  <h4>{job.title}</h4>
                  <span className="company-years">{job.company} | {job.years}</span>
                </div>
                <p>{job.description}</p>
              </div>
            ))}
          </div>

          {/* Proyectos */}
          <div className="resume-section">
            <h3 className="section-subtitle">Proyectos</h3>
            {curriculumData.projects.map((project, index) => (
              <div key={index} className="resume-item">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>

          {/* Educación */}
          <div className="resume-section">
            <h3 className="section-subtitle">Nivel Formativo</h3>
            {curriculumData.education.map((edu, index) => (
              <div key={index} className="resume-item">
                <h4>{edu.degree}</h4>
                <p>{edu.institution} | {edu.year}</p>
              </div>
            ))}
          </div>

          {/* Idiomas */}
          <div className="resume-section">
            <h3 className="section-subtitle">Idiomas</h3>
            <div className="languages-grid">
              {curriculumData.languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <strong>{lang.language}:</strong> {lang.level}
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div className="resume-section">
            <h3 className="section-subtitle">Certificaciones</h3>
            <div className="certifications-grid">
              {curriculumData.certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <span>{cert.cert}</span>
                  <span className="cert-year">({cert.year})</span>
                </div>
              ))}
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
