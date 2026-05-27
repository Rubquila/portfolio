import React from 'react';
import '../styles/ContactPage.css';

export const ContactPage = () => {
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
      </div>
    </section>
  );
};
