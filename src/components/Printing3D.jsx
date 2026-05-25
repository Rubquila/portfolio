import React, { useState, useMemo } from 'react';
import { printingData } from '../data/printingData';
import '../styles/Printing3D.css';

export const Printing3D = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Extraer categorías únicas
  const categories = [...new Set(printingData.map(p => p.category))];
  
  // Extraer tags únicos
  const allTags = [...new Set(printingData.flatMap(p => p.tags))];

  // Filtrar piezas
  const filteredPrints = useMemo(() => {
    return printingData.filter(print => {
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(print.category);
      const matchTags = selectedTags.length === 0 || selectedTags.some(tag => print.tags.includes(tag));
      const matchSearch = searchTerm === '' || 
        print.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        print.description.toLowerCase().includes(searchTerm.toLowerCase());
      
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
    <section className="all-projects">
      <div className="all-projects-container">
        {/* Header */}
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">Impresión 3D</h2>
            <div className="header-description">
              Aquí están algunos de mis proyectos de impresión 3D, desde accesorios hasta piezas de objetos.
            </div>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar piezas..."
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
          <span className={`toggle-arrow${filtersOpen ? ' open' : ''}`}>{filtersOpen ? '▲' : '▼'}</span>
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
                      className="filter-checkbox"
                    />
                    <span>{category}</span>
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
          Mostrando <strong>{filteredPrints.length}</strong> de <strong>{printingData.length}</strong> piezas
        </div>

        {/* Grid de piezas */}
        {filteredPrints.length > 0 ? (
          <div className="prints-grid">
            {filteredPrints.map(print => (
              <a 
                key={print.id}
                href={print.url}
                target="_blank"
                rel="noopener noreferrer"
                className="print-card"
              >
                <div className="print-image">
                  <div className="image-placeholder">
                    <span className="image-icon">🖨️</span>
                    <span>{print.title}</span>
                  </div>
                </div>
                <h3 className="print-title">{print.title}</h3>
                <p className="print-description">{print.description}</p>
                <div className="print-footer">
                  <span className="print-category">{print.category}</span>
                  <span className="external-icon">↗</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No se encontraron piezas que coincidan con tu búsqueda</p>
          </div>
        )}
      </div>
    </section>
  );
};
