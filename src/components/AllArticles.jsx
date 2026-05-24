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
    <section className="all-articles-section">
      <div className="articles-container">
        
        {/* Header */}
        <div className="articles-header">
          <h2>Anotaciones & Tips</h2>
          <div className="articles-intro">
            <p>Una colección de anotaciones y tips sobre electrónica, programación, reparación y tecnología.<br />
            Conocimientos adquiridos a lo largo de mis proyectos y experiencias personales y profesionales.</p>
            <div className="articles-features">
              <div className="feature">
                <span className="feature-icon">💡</span>
                <span className="feature-name">Tutoriales</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🔧</span>
                <span className="feature-name">Guías Prácticas</span>
              </div>
              <div className="feature">
                <span className="feature-icon">📚</span>
                <span className="feature-name">Conocimiento</span>
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
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span>⚙️</span>
            Filtros
            <span>{showFilters ? '▲' : '▼'}</span>
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
