import React from 'react';
import '../styles/About.css';

export const About = ({ onNavigate }) => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/profile.png" 
              alt="Rubén Quintanilla - Foto de perfil"
              className="profile-img"
            />
          </div>

          <div className="about-text">
            <p className="about-description">
              Soy un ingeniero con pasión por crear e innovar en diferentes campos. 
              Combino electricidad, desarrollos de software y automoción para llevar 
              proyectos al siguiente nivel.
            </p>

            <div className="skills">
              <button className="skill-tag">Electrónica</button>
              <button className="skill-tag">Programación</button>
              <button className="skill-tag">Automoción</button>
            </div>

            <button className="btn-read-more" onClick={() => onNavigate('about-detail')}>Leer Más &gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};
