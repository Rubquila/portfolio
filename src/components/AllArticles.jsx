import React, { useState, useMemo } from 'react';
import { articlesData } from '../data/articlesData';
import '../styles/AllArticles.css';

export const AllArticles = ({ onArticleSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Obtener categorías únicas
  const categories = [...new Set(articlesData.map(a => a.category))];

  // Filtrar y buscar artículos
  const filteredArticles = useMemo(() => {
    return articlesData.filter(article => {
      const matchesSearch = !searchTerm || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(article.category);

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <section className="all-projects">
      <div className="all-projects-container">
        {/* Cabecera de presentación */}
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">Anotaciones & Tips</h2>
            <div className="header-description">
              Una colección de anotaciones y tips sobre electrónica, programación, reparación y tecnología.<br />
              Conocimientos adquiridos a lo largo de mis proyectos y experiencias personales y profesionales.
            </div>
            <div className="header-features">
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <span>Tutoriales</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔧</span>
                <span>Guías Prácticas</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📚</span>
                <span>Conocimiento</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Filters */}
        <div className="filters-section">
          <button 
            className="filters-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="filter-icon">⚙️</span>
            Filtros
            <span className={`toggle-arrow${showFilters ? ' open' : ''}`}>{showFilters ? '▲' : '▼'}</span>
          </button>
          {showFilters && (
            <div className="filters-container">
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
          )}
        </div>

        {/* Results counter */}
        <div className="results-counter">
          Mostrando <strong>{filteredArticles.length}</strong> de <strong>{articlesData.length}</strong> artículos
        </div>

        {/* Articles list */}
        <div className="articles-list">
          {filteredArticles.map(article => (
            <div
              key={article.id}
              className="article-item"
              onClick={() => onArticleSelect(article.id)}
            >
              <h3 className="article-item-title">{article.title}</h3>
              <span className="article-item-category">{article.category}</span>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="no-results">
            <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
};
