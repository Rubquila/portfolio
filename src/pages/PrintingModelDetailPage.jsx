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
      <article className="pageArticle pagePrintingModelDetail">
        <div className="article-background-layer bg-printingModelDetail" aria-hidden="true" />
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
    <article className="pageArticle pagePrintingModelDetail">
      <div className="article-background-layer bg-printingModelDetail" aria-hidden="true" />
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

        {/* IMÁGENES */}
        <div className="article-heroimage">
          {model.images && model.images.length > 0 && (
            <ImagesGalleryComponent images={model.images} />
          )}
        </div>

        {/* Contenido principal */}
        <section className="article-content-section solucion-section">
          <h2 className="article-section-heading">Descripción</h2>
          <div className="article-section-text" 
            dangerouslySetInnerHTML={{ __html: formatContent(model.content) }}>
          </div>
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

      </div>
    </article>
  );
};
