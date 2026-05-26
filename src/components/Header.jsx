import React from 'react';
import '../styles/Header.css';

export const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-icon"></span>
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
            className={`nav-link ${currentSection === 'printingModels' ? 'active' : ''}`}
            onClick={() => setCurrentSection('printingModels')}
          >
            Impresión 3D
          </button>
          <button
            className={`nav-link ${currentSection === 'routes' ? 'active' : ''}`}
            onClick={() => setCurrentSection('routes')}
          >
            Rutas
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
