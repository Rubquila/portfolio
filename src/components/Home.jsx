import React from 'react';
import { Projects } from './Projects';
import { About } from './About';
import '../styles/Home.css';

export const Home = ({ onNavigate, onProjectSelect }) => {
  const handleViewProjects = () => {
    if (onNavigate) {
      onNavigate('all-projects');
    }
  };

  const handleContact = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <>
      <section id="home" className="home">
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-title">Ingeniero de Software y Multidisciplinar</h1>
            <p className="home-subtitle">Software • Electrónica • Impresión 3D</p>
            <div className="home-buttons">
              <button className="btn btn-primary" onClick={handleViewProjects}>Ver Proyectos</button>
              <button className="btn btn-secondary" onClick={handleContact}>Contactame</button>
            </div>
          </div>
        </div>
      </section>

      <Projects onProjectSelect={onProjectSelect} onNavigate={onNavigate} />
      <About onNavigate={onNavigate} />
    </>
  );
};
