import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projectsData';
import '../styles/AllProjects.css';

export const AllProjects = ({ onProjectSelect }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Extraer categorías únicas
  const categories = [...new Set(projectsData.map(p => p.category))];
  
  // Extraer tags únicos
  const allTags = [...new Set(projectsData.flatMap(p => p.tags))];

  // Filtrar proyectos
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(project.category);
      const matchTags = selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag));
      const matchSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchCategory && matchTags && matchSearch;
    });
  }, [selectedCategories, selectedTags, searchTerm]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setSearchTerm('');
  };

  return (
    <section id="all-projects" className="all-projects">
      <div className="all-projects-container">
        <h2 className="section-title">Todos los Proyectos</h2>

        {/* Cabecera de presentación */}
        <div className="section-header">
          <div className="header-content">
            <h3 className="header-subtitle">Proyectos Destacados en Múltiples Disciplinas</h3>
            <p className="header-description">
              A lo largo de mi carrera, he desarrollado una amplia variedad de proyectos que abarcan 
              desde domótica inteligente y software personalizado, hasta hardware innovador y robótica autónoma. 
              Cada proyecto representa un desafío único que combina creatividad, conocimiento técnico 
              y pasión por la resolución de problemas. Aquí puedes explorar algunos de mis trabajos más significativos.
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

        {/* Barra de búsqueda */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar proyectos..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
            >
              ✕
            </button>
          )}
        </div>

        {/* Botón Filtros Colapsable */}
        <button 
          className="filters-toggle"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <span className="filter-icon">⚙️</span>
          Filtros
          <span className={`toggle-arrow ${filtersOpen ? 'open' : ''}`}>▼</span>
        </button>

        {/* Sección de filtros (colapsable) */}
        {filtersOpen && (
          <div className="filters-section">
            <div className="filters-header">
              <h3>Filtros</h3>
              {(selectedCategories.length > 0 || selectedTags.length > 0) && (
                <button className="clear-filters-btn" onClick={clearFilters}>
                  Limpiar filtros
                </button>
              )}
            </div>

            {/* Filtro por categorías */}
            <div className="filter-group">
              <h4>Categorías</h4>
              <div className="filter-options">
                {categories.map(category => (
                  <label key={category} className="filter-label">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span className="filter-name">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtro por tags */}
            <div className="filter-group">
              <h4>Etiquetas</h4>
              <div className="filter-tags">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    className={`tag-filter ${selectedTags.includes(tag) ? 'active' : ''}`}
                    onClick={() => toggleTag(tag)}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contador de resultados */}
        <div className="results-count">
          Mostrando <strong>{filteredProjects.length}</strong> de <strong>{projectsData.length}</strong> proyectos
        </div>

        {/* Grid de proyectos */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => onProjectSelect(project.id)}
              >
                <div className="project-image">
                  <span className="image-placeholder">Foto</span>
                  <div className={`project-status status-${project.status.toLowerCase()}`}>
                  {project.status}
                </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.shortDescription}</p>
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
            <button className="clear-filters-btn" onClick={clearFilters}>
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
