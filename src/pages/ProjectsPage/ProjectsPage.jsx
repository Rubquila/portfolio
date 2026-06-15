import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from "/src/components/SearchComponent/SearchComponent";
import ItemsGridComponent from '/src/components/ItemsGridComponent/ItemsGridComponent';
import { projectsData } from '/src/data/projectsData';
import '/src/styles/SearcherStyle.css';
import './ProjectsPage.css';

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
    <section id="projectsPage" className="page pageSearcher">
      <div className="searcher-background-layer bg-projects" aria-hidden="true" />
      <div className="page-container searcher-container">
        
        {/* Cabecera de presentación */}
        <div className="page-header searcher-header">
          <div className="page-header-content">
            <h2 className="page-header-title">Proyectos</h2>
            <p className="page-header-description">
              He desarrollado una amplia variedad de proyectos del ámbito de la domótica, IoT, 
              software e iluminación.<br />
              Cada proyecto representa un desafío único que combina creatividad, conocimiento técnico, 
              pasión por la ingeniería y resolución de problemas.
            </p>
            <div className="page-header-features">
              <div className="page-feature-item">
                <span className="page-feature-icon">💡</span>
                <span>Innovación</span>
              </div>
              <div className="page-feature-item">
                <span className="page-feature-icon">🛠️</span>
                <span>Ingeniería</span>
              </div>
              <div className="page-feature-item">
                <span className="page-feature-icon">📱</span>
                <span>Software</span>
              </div>
              <div className="page-feature-item">
                <span className="page-feature-icon">🔬</span>
                <span>Investigación</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className='page-content'>
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
