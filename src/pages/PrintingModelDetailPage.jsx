import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ImagesGalleryComponent } from '../components/ImagesGalleryComponent';
import { formatContent } from '../utils/contentFormatter';
import { printingModelsData } from '../data/printingModelsData';
import '../styles/models/ArticleStyle.css';
import '../styles/PrintingModelDetailPage.css';

export const PrintingModelDetailPage = () => {
  const { modelId } = useParams();
  const navigate = useNavigate();
  const [viewerOpen, setViewerOpen] = useState(false);
  const model = printingModelsData.find(p => p.id === Number(modelId));

  const onBack = () => {
    navigate(`/printingmodels`);
  };

  if (!model) {
    return (
      <article className="article">
        <div className="article-container">
          <div className="not-found">
            <h2>Modelo no encontrado</h2>
            <button className="btn-back" onClick={onBack}>Ver todos los modelos</button>
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
          <h1 className="article-header-title">{model.title}</h1>
          <div className="article-header-meta">
            <div className="article-header-meta-cell1">
              <span className="category-badge">{model.category}</span>
              <div>
                {model.tags.map((tag, idx) => (
                  <span key={tag} className="tech-badge">
                    #{tag} &nbsp;
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Imagen grande */}
        <div className="article-heroimage">
          <div className="article-image-placeholder">
            <img src={model.coverImage} alt={model.title} 
                  onError={(e) => {
                          e.target.style.display = 'none';
                  }}
                />
            <span className="placeholder-icon">🖼️</span>
            <span>{model.title}</span>
          </div>
        </div>

        {/* Contenido principal */}
        <section className="article-content-section solucion-section">
          <h2 className="article-section-heading">Descripción</h2>
          <div className="article-section-text" 
            dangerouslySetInnerHTML={{ __html: formatContent(model.content) }}>
          </div>

          {/* IMÁGENES */}
          {model.images && model.images.length > 0 && (
            <ImagesGalleryComponent images={model.images} />
          )}
        </section>

        {/* ENLACES DE INTERÉS */}
        {model.links && Object.keys(model.links).length > 0 && (
          <section className="article-content-section links-section">
            <h4>Enlaces relacionados</h4>
            <ul className="links-list">
              {Object.entries(model.links).map(([linkName, linkUrl], index) => (
                <li key={index}>
                  <a className="link-item" href={linkUrl} target="_blank" rel="noopener noreferrer">
                    {linkName}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* VOLVER */}
        <div className="article-footer">
          <button className="btn btn-back" onClick={onBack}>← Ver todos los modelos</button>
        </div>

        {/* PROYECTOS RELACIONADOS */}
        {model.relatedProjectIds && model.relatedProjectIds.length > 0 && (
          <section className="content-section related-models-section">
            <h2 className="section-heading">
              <span className="heading-icon">🔗</span>
              Proyectos Relacionados
            </h2>
            <div className="related-models-grid">
              {model.relatedProjectIds.map(relatedId => {
                const relatedProject = modelsData.find(p => p.id === relatedId);
                return (
                  relatedProject && (
                    <div key={relatedProject.id} className="related-model-card">
                      <div className="related-model-image">
                        <div className="image-placeholder-small">
                          <span className="placeholder-icon">🖼️</span>
                        </div>
                      </div>
                      <div className="related-model-content">
                        <h3 className="related-model-title">{relatedProject.title}</h3>
                        <p className="related-model-description">{relatedProject.description}</p>
                        <div className="related-model-category">
                          {relatedProject.category}
                        </div>
                      </div>
                      <button 
                        className="related-model-link"
                        onClick={() => onSelectProject && onSelectProject(relatedProject.id)}
                      >
                        Ver Proyecto →
                      </button>
                    </div>
                  )
                );
              })}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
