import React, { useState, useCallback } from 'react';
import Filters from "../components/Filter";
import { articlesData } from '../data/articlesData';
import '../styles/AllArticles.css';

export const AllArticles = ({ onArticleSelect }) => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);
  
  // useCallback para evitar re-creaciones innecesarias
  const handleFiltered = useCallback((filtered) => {
    setFilteredArticles(filtered);
  }, []);

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

        <Filters
          elements={articlesData}
          onFiltered={handleFiltered}
          onElementSelect={onArticleSelect}
        />

        {/* Articles list */}
        {filteredArticles.length > 0 ? (
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
        ) : (
          <div className="no-results">
            <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
};
