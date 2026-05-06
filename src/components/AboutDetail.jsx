import React from 'react';
import '../styles/AboutDetail.css';

export const AboutDetail = ({ onNavigate }) => {
  return (
    <section id="about-detail" className="about-detail">
      <div className="about-detail-container">
        <button className="back-button" onClick={() => onNavigate('home')}>
          ← Volver
        </button>

        <div className="about-detail-content">
          <div className="about-detail-header">
            <img 
              src="/profile.png" 
              alt="Rubén Quintanilla - Foto de perfil"
              className="profile-img-large"
            />
            <div className="header-text">
              <h1 className="about-title">Rubén Quintanilla Lahiguera</h1>
              <p className="about-subtitle">Ingeniero de Software y Multidisciplinario | Full Stack Developer</p>
            </div>
          </div>

          <article className="about-sections">
            <section className="about-section">
              <h2 className="section-heading">Sobre Mí</h2>
              <p>
                Soy un ingeniero con pasión por innovar y crear soluciones integrales 
                que combinan múltiples disciplinas. Con experiencia en programación y electrónica,
                busco siempre mejorar los procesos y llevar proyectos hacia nuevos horizontes.
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
                <p className="education-detail">Especialidad en Calidad de Software y Computación Autónoma</p>
              </div>
              <div className="education-item">
                <h3>Grado en Ingeniería Informática</h3>
                <p className="education-detail">Especialidad en Ingeniería de Software</p>
              </div>
              <div className="education-item">
                <h3>F.P. Grado Superior en Administración de Sistemas Informáticos</h3>
                <p className="education-detail">Especialidad en Electrónica</p>
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
                  <p>Desarrollo Full Stack, React, Node.js, JavaScript, Java, PHP y Python. Computación autónoma. Calidad de Software y Testing. Enfoque en soluciones escalables y mantenibles.</p>
                </div>
                <div className="expertise-card">
                  <h3>Electrónica</h3>
                  <p>Diseño de circuitos, programación de microcontroladores ESP, IoT, sistemas embebidos y automatización doméstica.</p>
                </div>
                <div className="expertise-card">
                  <h3>Automoción</h3>
                  <p>Sistemas de control vehicular, diagnóstico automotriz, integración de componentes electrónicos.</p>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2 className="section-heading">Habilidades Técnicas</h2>
              <div className="skills-columns">
                <div className="skills-column">
                  <h4>Frontend</h4>
                  <ul className="skill-list">
                    <li>React 18</li>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Material UI</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h4>Backend</h4>
                  <ul className="skill-list">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Bases de Datos (SQL, NoSQL)</li>
                    <li>APIs RESTful</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h4>Hardware & IoT</h4>
                  <ul className="skill-list">
                    <li>Arduino & ESP32</li>
                    <li>Circuitos Electrónicos</li>
                    <li>Node-RED</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2 className="section-heading">Mi Filosofía de Trabajo</h2>
              <div className="philosophy-content">
                <p>
                  Creo que la innovación surge de la combinación de diferentes perspectivas 
                  y disciplinas. Cada proyecto es una oportunidad para aprender y mejorar, 
                  tanto a nivel técnico como personal.
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
                Más allá del trabajo, me interesa la automatización del hogar, la inteligencia artificial, 
                los vehículos autónomos y cómo la tecnología puede mejorar la calidad de vida de las personas. 
                También soy entusiasta del medio ambiente, por lo que tengo interés en proyectos sostenibles y
                procuro que mis proyectos sean responsables desde el punto de vista ambiental.
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
