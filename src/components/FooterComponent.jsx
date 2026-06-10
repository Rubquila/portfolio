import React from 'react';
import '../styles/FooterComponent.css';

export const FooterComponent = () => {
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
          <a href="https://cults3d.com/@rubquila" target="_blank" className="footer-link">Cults 3D</a>
        </div>
        <div className="footer-section">
          <a href="https://www.thingiverse.com/rubquila/designs" target="_blank" className="footer-link">Thingiverse</a>
        </div>
        <div className="footer-section">
          <a href="https://www.youtube.com/@Diamondhorse" target="_blank" className="footer-link">YouTube</a>
        </div>
      </div>
      <hr />
      <div className="footer-section footer-license">
        <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          <img alt="Licencia Creative Commons"
              src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" />
        </a>
        <span className='footer-license-text'>
          Este sitio está bajo una &nbsp;
          <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            licencia Creative Commons BY-NC-SA 4.0
          </a>.
        </span>
      </div>
    </footer>
  );
};
