import React, { useEffect, useRef } from 'react';
import { ProjectsComponent } from '../components/ProjectsComponent';
import { AboutComponent } from '../components/AboutComponent';
import '../styles/HomePage.css';

export const HomePage = ({ onNavigate, onProjectSelect, scrollContainerRef }) => {
  const bgRef = useRef(null);

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
      <section id="home" className="home">
        
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-title">Ingeniero de Software <br /><hr/> Web & IoT</h1>
            <p className="home-subtitle">Software • Electrónica • Impresión 3D</p>
            <div className="home-buttons">
              <button className="btn btn-primary" onClick={handleViewProjects}>Ver Proyectos</button>
              <button className="btn btn-secondary" onClick={handleContact}>Contactame</button>
            </div>
          </div>
        </div>
      </section>

      <ProjectsComponent onProjectSelect={onProjectSelect} onNavigate={onNavigate} />
      <AboutComponent onNavigate={onNavigate} />
    </>
  );
};
