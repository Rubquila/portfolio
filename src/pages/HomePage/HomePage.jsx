import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemsGridComponent from '/src/components/ItemsGridComponent/ItemsGridComponent';
import { ProjectsWidget } from '/src/widgets/ProjectsWidget/ProjectsWidget';
import './HomePage.css';

export const HomePage = ({ scrollContainerRef }) => {
  const bgRef = useRef(null);
  const navigate = useNavigate();

  const toAbout = () => {
    navigate(`/aboutme`);
  };

/* Desliza el scroll hasta la sección indicada */
  const moveTo = (id) => {
    const container = scrollContainerRef?.current;
    const el = document.getElementById(id);
    if (!el) return;
    // Obtiene la altura del header (puede ser fijo o dentro del container)
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight + 20;
    container.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    // Comprobar si funciona el scroll-timeline CSS, si no, usar el fallback JS
    const supportsScrollTimeline =
      CSS.supports('scroll-timeline-name: none');
    if (supportsScrollTimeline) {
      console.log('Usando CSS scroll-timeline');
      return;
    }
    console.log('Fallback JS activado');
    
    const container = scrollContainerRef?.current;
    if (!container) return alert('No se encontró el contenedor de scroll para Home');

    const handleScroll = () => {
      const scroll = container.scrollTop;
      const blur = Math.min(scroll * 0.02, 10);
      const scale = Math.max(1.1 - scroll * 0.00015, 0.95);
      bgRef.current.style.filter = `blur(${blur}px)`;
      bgRef.current.style.transform = `scale(${scale})`;
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef]);

  return (
    <><div className="home-background" ref={bgRef}></div>
      <section id="home" className="home-section">
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-title">Ingeniero de Software <br /><hr/> Web & IoT</h1>
            <p className="home-subtitle">Software • Electrónica • Impresión 3D</p>
            <div className="home-buttons">
              <button className="btn btn-primary" onClick={() => moveTo('featured-projects')}>Ver Proyectos</button>
              <button className="btn btn-secondary" onClick={() => moveTo('home-about')}>Sobre mi</button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="home-section home-projects">
        <h2 className="home-section-title">Mis Proyectos Destacados</h2>
        <ProjectsWidget items={[1, 2, 3, 4]}/>
        <button className="btn btn-secondary btn-projects-more" onClick={() => navigate('/projects')}>
          Ver Todos Los Proyectos &gt;
        </button>
      </section>

      {/* About */}
      <section id="home-about" className="home-section home-about">
        <div className="home-about-container">
          <h2 className="home-section-title">Sobre Mí</h2>
          
          <div className="home-about-content">
            <div className="home-about-image">
              <img 
                src="/images/profile.png" 
                alt="Rubén Quintanilla - Foto de perfil"
                className="home-profile-img"
              />
            </div>

            <div className="home-about-text">
              <p className="home-about-description">
                Soy un ingeniero con pasión por crear proyectos innovadores aplicados a
                la sociedad: IoT, medicina, y medio ambiente. <br />
                Combino desarrollo de software, electrónica e ingeniería para llevar 
                proyectos al siguiente nivel.
              </p>

              <div className="home-skills">
                <button className="home-skill-tag">Software</button>
                <button className="home-skill-tag">Electrónica</button>
                <button className="home-skill-tag">Impresión 3D</button>
              </div>

              <div className='btn-container home-about-buttons'>
                <a href="https://www.linkedin.com/in/rubenql/" target="_blank">
                  <button className=" btn btn-primary">Contactame</button>
                </a>
                <button className="btn btn-secondary" onClick={toAbout}>Leer Más &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
