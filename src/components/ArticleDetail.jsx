import React from 'react';
import { articlesData } from '../data/articlesData';
import '../styles/ArticleDetail.css';

export const ArticleDetail = ({ articleId, onBack }) => {
  const article = articlesData.find(a => a.id === articleId);

  if (!article) {
    return (
      <section className="article-detail">
        <div className="article-detail-container">
          <div className="not-found">
            <h2>Artículo no encontrado</h2>
            <button className="btn-back" onClick={onBack}>Volver</button>
          </div>
        </div>
      </section>
    );
  }

  // Convertir saltos de línea en párrafos y permitir HTML
  const formatContent = (text) => {
    return text
      .split('\n\n')
      .map((paragraph, idx) => {
        if (paragraph.trim() === '') {
          return '';
        }
        // Procesar listas de ítems
        if (paragraph.trim().match(/^(-|•|\d+\.)/m)) {
          const items = paragraph.split('\n').filter(line => line.trim());
          return `<ul class="content-list">${items.map(item => {
            const cleanItem = item.replace(/^(-|•|\d+\.)/, '').trim();
            return `<li class="content-list-item">${cleanItem}</li>`;
          }).join('')}</ul>`;
        }
        // Retornar como párrafo, permitiendo HTML dentro
        return `<p class="content-paragraph">${paragraph.trim()}</p>`;
      })
      .filter(p => p !== '')
      .join('');
  };

  // Obtener artículos relacionados (misma categoría)
  const relatedArticles = articlesData
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <section className="article-detail">
      <div className="article-detail-container">
        
        {/* Header del artículo */}
        <div className="article-header-detail">
          <div className="header-title">
            <h1>{article.title}</h1>
            <div className="header-meta">
              <span className="category-badge">{article.category}</span>
              <span className="article-date">{new Date(article.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span className="article-read-time">⏱️ {article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="article-content">
          <div 
            className="content-section"
            dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
          />

          {/* Tags */}
          <div className="article-tags-detail">
            <h4>Etiquetas:</h4>
            <div className="tags-container">
              {article.tags.map(tag => (
                <span key={tag} className="tag-detail">#{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Botones de navegación */}
        <div className="article-footer">
          <button className="btn-back" onClick={onBack}>← Volver</button>
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
                  <p>{related.excerpt}</p>
                  <span className="related-category">{related.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
