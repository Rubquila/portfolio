import React from 'react';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contacto</h2>

        <form className="contact-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Tu nombre"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Tu email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Tu mensaje"
              className="form-textarea"
              rows="5"
            />
          </div>

          <button type="submit" className="btn-submit">Enviar Mensaje</button>
        </form>

        <div className="contact-info">
          <a href="https://linkedin.com" className="contact-link">LinkedIn</a>
          <a href="https://github.com" className="contact-link">GitHub</a>
          <a href="mailto:correo@email.com" className="contact-link">Email</a>
        </div>
      </div>
    </section>
  );
};
