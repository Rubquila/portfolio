import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from "../components/SearchComponent";
import { projectsData } from '../data/projectsData';
import '../styles/ProjectsPage.css';

export const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const navigate = useNavigate();

  // useCallback para evitar re-creaciones innecesarias
  const handleFiltered = useCallback((filtered) => {
    setFilteredProjects(filtered);
  }, []);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="all-projects" className="section">
      <div className="section-container">
        {/* Cabecera de presentación */}
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">Proyectos</h2>
            <p className="header-description">
              He desarrollado una amplia variedad de proyectos del ámbito de la domótica, IoT, 
              software e iluminación.<br />
              Cada proyecto representa un desafío único que combina creatividad, conocimiento técnico, 
              pasión por la ingeniería y resolución de problemas.
            </p>
            <div className="header-features">
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <span>Innovación</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛠️</span>
                <span>Ingeniería</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span>Software</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔬</span>
                <span>Investigación</span>
              </div>
            </div>
          </div>
        </div>

        <SearchComponent
          elements={projectsData}
          onFiltered={handleFiltered}
          onElementSelect={handleProjectClick}
        />

        {/* Grid de proyectos */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => handleProjectClick(project.id)}
                onClick={() => onProjectSelect(project.id)}
              >
                <div className="project-image">
                  <span className="image-placeholder">Foto</span>
                  <img src={project.coverImage} alt={project.title} 
                    onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`project-status status-${project.status.toLowerCase()}`}>
                  {project.status}
                </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  <span className="category-badge">{project.category}</span>
                </div>
                <div className="project-tags">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No se encontraron proyectos que coincidan con los criterios seleccionados.</p>
          </div>
        )}
      </div>
    </section>
  );
};
