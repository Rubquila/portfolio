import React from 'react';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="#" className="footer-link">LinkedIn</a>
        </div>
        <div className="footer-section">
          <a href="#" className="footer-link">GitHub</a>
        </div>
        <div className="footer-section">
          <a href="mailto:correo@email.com" className="footer-link">contacto@email.com</a>
        </div>
      </div>
    </footer>
  );
};
