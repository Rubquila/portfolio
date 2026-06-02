import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from "../components/SearchComponent";
import ItemsGridComponent from '../components/ItemsGridComponent';
import { projectsData } from '../data/projectsData';
import '../styles/models/SearcherStyle.css';
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
    <section id="all-projects" className="searcher">
      <div className="searcher-container">
        
        {/* Cabecera de presentación */}
        <div className="searcher-header">
          <div className="searcher-header-content">
            <h2 className="searcher-header-title">Proyectos</h2>
            <p className="searcher-header-description">
              He desarrollado una amplia variedad de proyectos del ámbito de la domótica, IoT, 
              software e iluminación.<br />
              Cada proyecto representa un desafío único que combina creatividad, conocimiento técnico, 
              pasión por la ingeniería y resolución de problemas.
            </p>
            <div className="searcher-header-features">
              <div className="searcher-feature-item">
                <span className="searcher-feature-icon">💡</span>
                <span>Innovación</span>
              </div>
              <div className="searcher-feature-item">
                <span className="searcher-feature-icon">🛠️</span>
                <span>Ingeniería</span>
              </div>
              <div className="searcher-feature-item">
                <span className="searcher-feature-icon">📱</span>
                <span>Software</span>
              </div>
              <div className="searcher-feature-item">
                <span className="searcher-feature-icon">🔬</span>
                <span>Investigación</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className='searcher-content'>
          <SearchComponent
            items={projectsData}
            onFiltered={handleFiltered}
          />

          {/* Grid de proyectos */}
          {filteredProjects.length > 0 ? (
            <ItemsGridComponent
              items={filteredProjects}
              onItemClick={handleProjectClick}
            />
          ) : (
            <div className="no-results">
              <p>No se encontraron proyectos que coincidan con tu búsqueda.</p>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};
