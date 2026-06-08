import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from "../components/SearchComponent";
import ItemsListComponent from '../components/ItemsListComponent';
import { articlesData } from '../data/articlesData';
import '../styles/models/SearcherStyle.css';
import '../styles/ArticlesPage.css';

export const ArticlesPage = () => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);
  const navigate = useNavigate();

  // useCallback para evitar re-creaciones innecesarias
  const handleFiltered = useCallback((filtered) => {
    setFilteredArticles(filtered);
  }, []);

  const handleArticleClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  return (
    <section id="articlesPage" className="page pageSearcher">
      <div className="searcher-background-layer bg-articles" aria-hidden="true" />
      <div className="page-container searcher-container">
        
        {/* Cabecera de presentación */}
        <div className="page-header searcher-header">
          <div className="page-header-content">
            <h2 className="page-header-title">Anotaciones & Tips</h2>
            <div className="page-header-description">
              Una colección de anotaciones y tips sobre electrónica, programación, reparación y tecnología.<br />
              Conocimientos adquiridos a lo largo de mis proyectos y experiencias personales y profesionales.
            </div>
            <div className="page-header-features">
              <div className="page-feature-item">
                <span className="page-feature-icon">📓</span>
                <span>Tutoriales</span>
              </div>
              <div className="page-feature-item">
                <span className="page-feature-icon">🔧</span>
                <span>Guías Prácticas</span>
              </div>
              <div className="page-feature-item">
                <span className="page-feature-icon">📚</span>
                <span>Conocimiento</span>
              </div>
            </div>
          </div>
        </div>

        <div className='page-content'>
          <SearchComponent
            items={articlesData}
            onFiltered={handleFiltered}
          />

          {/* Lista de artículos */}
          {filteredArticles.length > 0 ? (
            <ItemsListComponent
              items={filteredArticles}
              onItemClick={handleArticleClick}
            />
          ) : (
            <div className="no-results">
              <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
