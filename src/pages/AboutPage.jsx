import React from 'react';
import '../styles/AboutPage.css';

export const AboutPage = ({ onNavigate }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          
          <div className="about-header">
            <img 
              src="/profile.png" 
              alt="Rubén Quintanilla - Foto de perfil"
              className="profile-img-large"
            />
            <div className="header-text">
              <h1 className="about-title">Rubén Quintanilla Lahiguera</h1>
              <p className="about-subtitle">Ingeniero de Software & IoT | Web Full Stack Developer</p>
            </div>
          </div>

          <article className="about-sections">
            <section className="about-section">
              <h2 className="section-heading">Sobre Mí</h2>
              <p>
                Soy un ingeniero de software con pasión por mejorar y crear soluciones integrales 
                que combinan múltiples disciplinas. Con experiencia en programación web y electrónica,
                busco siempre mejorar los procesos de negocio y construir proyectos innovadores.
              </p>
              <p>
                Mi objetivo es aplicar conocimientos técnicos especializados para resolver 
                problemas reales y crear valor tangible en cada proyecto que emprendo.
              </p>
            </section>

            <section className="about-section">
              <h2 className="section-heading">Formación Académica</h2>
              <div className="education-item">
                <h3>Máster en Ingeniería y Tecnologías Software</h3>
                <p className="education-detail">Especialidad en Calidad de Software, Testing y Computación Autónoma</p>
              </div>
              <div className="education-item">
                <h3>Grado en Ingeniería Informática</h3>
                <p className="education-detail">Especialidad en Ingeniería de Software</p>
              </div>
              <div className="education-item">
                <h3>F.P. Grado Superior en Administración de Sistemas Informáticos</h3>
                <p className="education-detail">Especialidad en Programación Web</p>
              </div>
              {/* <div className="education-item">
                <h3>Certificaciones Profesionales</h3>
                <ul className="skill-list">
                  <li>Full Stack Development</li>
                  <li>IoT y Sistemas Embebidos</li>
                  <li>Automoción Avanzada</li>
                </ul>
              </div> */}
            </section>

            <section className="about-section">
              <h2 className="section-heading">Áreas de Expertise</h2>
              <div className="expertise-grid">
                <div className="expertise-card">
                  <h3>Programación</h3>
                  <ul className="skill-list">
                    <li>Desarrollo Full Stack en React y Node.js, JavaScript</li>
                    <li>MySQL y Firebase para BBDD</li>
                    <li>Calidad de Software y Testing</li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h3>Electrónica</h3>
                  <ul className="skill-list">
                    <li>Configuración y programación de microcontroladores ESP para IoT</li>
                    <li>Reparación de circuitos y creación de pequeños dispositivos para IoT</li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h3>Ingeniería</h3>
                  <ul className="skill-list">
                    <li>Creación de modelos 3D simples</li>
                    <li>Automatización doméstica con NodeRed</li>
                    <li>Proyectos de iluminación para el automovil y el hogar</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2 className="section-heading">Habilidades Técnicas</h2>
              <div className="skills-columns">
                <div className="skills-column">
                  <h3>Frontend</h3>
                  <ul className="skill-list">
                    <li>React</li>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript</li>
                    <li>Material UI</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>Backend</h3>
                  <ul className="skill-list">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>BBDD SQL y NoSQL</li>
                    <li>APIs RESTful</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>Hardware & IoT</h3>
                  <ul className="skill-list">
                    <li>ESP32 & Arduino</li>
                    <li>Circuitos y componentes electrónicos</li>
                    <li>Node-RED</li>
                    <li>ESPHome</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2 className="section-heading">Mi Filosofía de Trabajo</h2>
              <div className="philosophy-content">
                <p>
                  Paciencia y esfuerzo son fundamentales para superar cualquier reto que me proponga, al igual que
                  en el gimnasio, aplico estas cualidades en mi trabajo diario. Cada proyecto es una
                  oportunidad para aprender y mejorar, tanto a nivel técnico como personal.
                </p>
                <p>
                  Me comprometo con:
                </p>
                <ul className="principle-list">
                  <li><strong>Calidad:</strong> Código limpio, documentado y mantenible</li>
                  <li><strong>Innovación:</strong> Explorar nuevas tecnologías y enfoques</li>
                  <li><strong>Colaboración:</strong> Trabajar en equipo hacia objetivos comunes</li>
                  <li><strong>Continuidad:</strong> Aprendizaje constante en un sector dinámico</li>
                  <li><strong>Sostenibilidad:</strong> Desarrollo de soluciones responsables desde el punto de vista ambiental</li>
                </ul>
              </div>
            </section>

            <section className="about-section">
              <h2 className="section-heading">Intereses</h2>
              <p>
                Más allá del trabajo, me interesa la automatización del hogar, la inteligencia artificial
                y cómo la tecnología puede mejorar la calidad de vida de las personas. 
                También soy entusiasta del medio ambiente, por lo que tengo interés en proyectos sostenibles y
                procuro que mis proyectos sean responsables desde el punto de vista ambiental.
                En mi tiempo libre me gusta hacer ejercicio, mantenerme en forma y disfrutar de la naturaleza con
                actividades al aire libre haciendo senderismo y exploración.
              </p>
            </section>
          </article>

          <div className="about-cta">
            <p>¿Interesado en colaborar o conocer más sobre mis proyectos?</p>
            <button className="btn-contact" onClick={() => onNavigate('contact')}>
              Ponte en Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
