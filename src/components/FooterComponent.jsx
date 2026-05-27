import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/FooterComponent.css';

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="https://www.linkedin.com/in/rubenql/" target="_blank" className="footer-link">LinkedIn</a>
        </div>
        <div className="footer-section">
          <a href="https://github.com/Rubquila?tab=projects" target="_blank" className="footer-link">GitHub</a>
        </div>
        <div className="footer-section">
          <a href="https://www.thinkercad.com/@Rubquila" target="_blank" className="footer-link">Thinkercad</a>
        </div>
        <div className="footer-section">
          <a href="https://www.youtube.com/@Diamondhorse" target="_blank" className="footer-link">YouTube</a>
        </div>
        <div className="footer-section">
          <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contacto</NavLink>
        </div>
      </div>
    </footer>
  );
};
