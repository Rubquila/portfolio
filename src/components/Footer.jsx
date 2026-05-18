import React from 'react';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="https://www.linkedin.com/in/rubenql/" target="_blank" className="footer-link">LinkedIn</a>
        </div>
        <div className="footer-section">
          <a href="https://github.com/Rubquila" target="_blank" className="footer-link">GitHub</a>
        </div>
        <div className="footer-section">
          <a href="https://github.com/Rubquila" target="_blank" className="footer-link">Thinkercad</a>
        </div>
        <div className="footer-section">
          <a href="https://github.com/Rubquila" target="_blank" className="footer-link">YouTube</a>
        </div>
        <div className="footer-section">
          <a href="https://github.com/Rubquila" target="_blank" className="footer-link">Instagram</a>
        </div>
        <div className="footer-section">
          <a href="mailto:correo@email.com" target="_blank" className="footer-link">Contacto</a>
        </div>
      </div>
    </footer>
  );
};
