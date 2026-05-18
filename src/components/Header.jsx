import React from 'react';
import '../styles/Header.css';

export const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon">⚙️</span>
        </div>
        <nav className="nav">
          <button
            className={`nav-link ${currentSection === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentSection('home')}
          >
            Inicio
          </button>
          <button
            className={`nav-link ${currentSection === 'about-detail' ? 'active' : ''}`}
            onClick={() => setCurrentSection('about-detail')}
          >
            Sobre Mí
          </button>
          <button
            className={`nav-link ${currentSection === 'all-projects' ? 'active' : ''}`}
            onClick={() => setCurrentSection('all-projects')}
          >
            Proyectos
          </button>
          <button
            className={`nav-link ${currentSection === 'articles' ? 'active' : ''}`}
            onClick={() => setCurrentSection('articles')}
          >
            Anotaciones
          </button>
          <button
            className={`nav-link ${currentSection === 'printing-3d' ? 'active' : ''}`}
            onClick={() => setCurrentSection('printing-3d')}
          >
            Impresión 3D
          </button>
          <button
            className={`nav-link ${currentSection === 'resume' ? 'active' : ''}`}
            onClick={() => setCurrentSection('resume')}
          >
            Currículum
          </button>
        </nav>
      </div>
    </header>
  );
};
