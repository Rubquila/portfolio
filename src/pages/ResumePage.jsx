import React, { useState } from 'react';
import '../styles/models/SectionStyle.css';
import '../styles/ResumePage.css';

export const ResumePage = () => {
  const [expandCoverLetter, setExpandCoverLetter] = useState(false);
  const [expandExperience, setExpandExperience] = useState(false);
  const [expandProjects, setExpandProjects] = useState(false);

  return (
    <article id="resumePage" className="page pageSection">
      <div className="page-container section-container">
        
        <div className="page-header section-header">
          <div className="page-header-content">
            <h2 className="page-header-title">Currículum Vitae</h2>
            <p className="page-header-description">
              Descubre mi trayectoria profesional, experiencia, proyectos y formación. Un recorrido
              por mi perfil como desarrollador Full Stack, orientado a la innovación, la ingeniería
              y la tecnología.
            </p>
            <div className="header-download-buttons">
            <a
              className="header-download-btn download-pdf"
              href='/src/assets/curriculum.pdf'
              target="_blank"
              title="Descargar CV en PDF"
            >
              
              Currículum<br />📄
            </a>
            <a
              className="header-download-btn download-pdf"
              href='/src/assets/carta_presentacion.pdf'
              target="_blank"
              title="Descargar Carta de Presentación en PDF"
            >
              
              Carta <br />presentación<br />📄
            </a>
          </div>
          </div>
        </div>

        {/* Carta de presentación expandible */}
        <div className="cover-letter-section">
          <div className="cover-letter-content">
            <h3 className="resume-section-subtitle" onClick={() => setExpandCoverLetter(!expandCoverLetter)}>
              <span>Carta de presentación </span>
              <span className={`toggle-arrow ${expandCoverLetter ? "open" : ""}`}>▼</span>
            </h3>
            <div className={`expandable-items ${expandCoverLetter ? 'expanded' : 'collapsed'}`}>
              <p className="paragraph">
                Soy <strong>Rubén Quintanilla</strong>, desarrollador <strong>Full Stack</strong> con experiencia en proyectos tanto de <strong>frontend</strong> como de <strong>backend</strong>, especialmente con <strong>React, Node.js y Express</strong>, y formación en <strong>Master en Ingeniería y Tecnologías de Sistemas Software</strong> por la Universidad Politécnica de Valencia.
              </p>
              <p className="paragraph">
                Durante mi trayectoria he participado en el ciclo completo de desarrollo de aplicaciones web y móviles, cuidando tanto la <strong>usabilidad de la interfaz</strong> como la <strong>solidez de la arquitectura</strong>. Me gusta escribir código limpio, colaborar en equipo y aprender nuevas tecnologías que aporten valor real a los proyectos.
              </p>
              <p className="paragraph">
                Además, tengo un perfil muy orientado a la <strong>innovación</strong>: he trabajado realizando aplicaciones para medicina y gestión de procesos, y en proyectos personales relacionados con la <strong>domótica e IoT</strong>, donde he podido combinar hardware y software para crear soluciones automatizadas con <strong>Node-RED</strong> y microcontroladores <strong>ESP</strong>.
              </p>
              <p className="paragraph">
                Busco seguir creciendo profesionalmente en entornos donde se valoren la <strong>creatividad, la responsabilidad y las ganas de mejorar cada día</strong>, aportando mi experiencia en desarrollo Full Stack, mi visión de producto y mi entusiasmo por la tecnología.
              </p>
              <p className="closing">
                <strong>Rubén Quintanilla Lahiguera</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Contenido del CV */}
        <div className="page-content section-content">
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
              <p>💼 GitHub: <a href={`https://github.com/Rubquila`} target="_blank" rel="noopener noreferrer">rubenql</a></p>
              <p>💼 Web: <a href={`https://rubenquila.pages.dev/`} target="_blank" rel="noopener noreferrer">rubenql</a></p>
              <p><strong>Disponibilidad:</strong> Inmediata, total</p>
            </div>
          </div>

          {/* Experiencia Laboral */}
          <div className="resume-section">
            <h3 className="resume-section-subtitle">Experiencia Laboral</h3>
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
              className="btn btn-primary btn-expand" 
              onClick={() => setExpandExperience(!expandExperience)}
            >
              {expandExperience ? 'Ver menos' : 'Ver otros empleos'}
            </button>
          </div>

          {/* Proyectos */}
          <div className="resume-section">
            <h3 className="resume-section-subtitle">Proyectos</h3>
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
              className="btn btn-primary btn-expand" 
              onClick={() => setExpandProjects(!expandProjects)}
            >
              {expandProjects ? 'Ver menos' : 'Ver más proyectos'}
            </button>
          </div>

          {/* Educación */}
          <div className="resume-section">
            <h3 className="resume-section-subtitle">Nivel Formativo</h3>
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
            <h3 className="resume-section-subtitle">Idiomas</h3>
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
            <h3 className="resume-section-subtitle">Certificaciones</h3>
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
      </div>
    </article>
  );
};
