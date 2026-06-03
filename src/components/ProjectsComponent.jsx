import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/ProjectsComponent.css';

export const ProjectsComponent = () => {
  const navigate = useNavigate();
  // Obtener solo los primeros 4 proyectos como destacados
  const featured = projectsData.slice(0, 4);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mis Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {featured.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="project-image">
                <img src={project.coverImage}
                  alt={project.title} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tags">
                {project.technologies.slice(0, 2).map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <button className="btn-see-all" onClick={() => navigate('/projects')}>
            Ver Todos Los Proyectos &gt;
          </button>
        </div>
      </div>
    </section>
  );
};
