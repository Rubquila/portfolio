import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ImagesGalleryComponent } from '../components/ImagesGalleryComponent';
import { formatContent } from '../utils/contentFormatter';
import { articlesData } from '../data/articlesData';
import '../styles/models/ArticleStyle.css';
import '../styles/ArticleDetailPage.css';

export const ArticleDetailPage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = articlesData.find(a => a.id === Number(articleId));

  const onBack = () => {
    navigate(`/articles`);
  };

  // Obtener artículos relacionados (misma categoría)
  const relatedArticles = articlesData
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  if (!article) {
    return (
      <article className="article">
        <div className="article-container">
          <div className="not-found">
            <h2>Artículo no encontrado</h2>
            <button className="btn-back" onClick={onBack}>Ver todos los artículos</button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="article">
      <div className="article-container">
        
        {/* Header */}
        <div className="article-header">
          <h1 className="article-header-title">{article.title}</h1>
          <div className="article-header-meta">
            <div className="article-header-meta-cell1">
              <span className="category-badge">{article.category}</span>
              <div>
                {article.tags.map((tag, idx) => (
                  <span key={tag} className="tech-badge">
                    #{tag} &nbsp;
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="article-content">
          <section className="article-content-section solucion-section">
            <h2 className="article-section-heading">Descripción</h2>
            <div className="article-section-text"
              dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
            />

            {/* IMÁGENES */}
            {article.images && article.images.length > 0 && (
              <ImagesGalleryComponent images={article.images} />
            )}
          </section>

          {/* ENLACES DE INTERÉS */}
          {article.links && Object.keys(article.links).length > 0 && (
            <section className="article-content-section links-section">
              <h4>Enlaces relacionados</h4>
              <ul className="links-list">
                {Object.entries(article.links).map(([linkName, linkUrl], index) => (
                  <li key={index}>
                    <a className="link-item" href={linkUrl} target="_blank" rel="noopener noreferrer">
                      {linkName}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* VOLVER */}
        <div className="article-footer">
          <button className="btn btn-back" onClick={onBack}>← Ver todos los artículos</button>
        </div>

        {/* Artículos relacionados */}
        {relatedArticles.length > 0 && (
          <div className="related-articles">
            <h3>Artículos Relacionados</h3>
            <div className="related-articles-grid">
              {relatedArticles.map(related => (
                <div 
                  key={related.id}
                  className="related-article-card"
                  onClick={() => setSelectedArticleId(related.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <h4>{related.title}</h4>
                  <p>{related.description}</p>
                  <span className="related-category">{related.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
};
