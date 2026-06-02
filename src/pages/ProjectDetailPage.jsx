import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ImageViewer } from '../components/ImageViewer';
import { projectsData } from '../data/projectsData';
import '../styles/models/ArticleStyle.css';
import '../styles/ProjectDetailPage.css';

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [viewerOpen, setViewerOpen] = useState(false);
  const project = projectsData.find(p => p.id === Number(projectId));

  const onBack = () => {
    navigate(`/projects`);
  };

  //TODO: Extraer esta función a un helper común para reutilizar en artículos y proyectos
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
          return `<ul class="article-content-list">${items.map(item => {
            const cleanItem = item.replace(/^(-|•|\d+\.)/, '').trim();
            return `<li class="article-content-list-item">${cleanItem}</li>`;
          }).join('')}</ul>`;
        }
        // Retornar como párrafo, permitiendo HTML dentro
        return `<p class="article-content-paragraph">${paragraph.trim()}</p>`;
      })
      .filter(p => p !== '')
      .join('');
  };

  if (!project) {
    return (
      <article className="article">
        <div className="article-container">
          <div className="not-found">
            <h2>Proyecto no encontrado</h2>
            <button className="btn-back" onClick={onBack}>Ver todos los proyectos</button>
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
          <h1 className="article-header-title">{project.title}</h1>
          <div className="article-header-meta">
            <div className="article-header-meta-cell1">
              <span className="category-badge">{project.category}</span>
              <div>
                {project.technologies.map((tech, idx) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                    {idx < project.technologies.length - 1 && ' • '}
                  </span>
                ))}
                <br />
                {project.tags.map((tag, idx) => (
                  <span key={tag} className="tag-badge">
                    #{tag} &nbsp;
                  </span>
                ))}
              </div>
            </div>
            <div className="article-header-meta-cell2">
              <span className={`status-badge status-${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Imagen grande */}
        <div className="article-heroimage">
          <div className="article-image-placeholder">
            <img className="article-coverimage" src={project.coverImage} alt={project.title} 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            {project.coverImage === '' && (
              <>
                <span className="placeholder-icon">🖼️</span>
                <span>{project.title}</span>
              </>
            )}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="article-content">

          {/* PROBLEMA */}
          <section className="article-content-section problema-section">
            <h2 className="article-section-heading">
              <span className="heading-icon">❌</span>
              Problema
            </h2>
            <div className="article-section-text" 
              dangerouslySetInnerHTML={{ __html: formatContent(project.problem) }}>
            </div>
          </section>

          {/* SOLUCIÓN */}
          <section className="article-content-section solucion-section">
            <h2 className="article-section-heading">
              <span className="heading-icon">💡</span>
              Solución
            </h2>
            <div className="article-section-text" 
              dangerouslySetInnerHTML={{ __html: formatContent(project.solution) }}>
            </div>
          </section>

          {/* RESULTADO */}
          <section className="article-content-section resultado-section">
            <h2 className="article-section-heading">
              <span className="heading-icon">✨</span>
              Resultado
            </h2>
            <div className="article-section-text" 
              dangerouslySetInnerHTML={{ __html: formatContent(project.result) }}>
            </div>

            {/* Imágenes del resultado */}
            {project.images && project.images.length > 0 && (
              <>
                <div className="result-images-gallery">
                  {project.images.map((image, idx) => (
                    <div key={idx} className="result-image-container">
                      <img 
                        src={image} 
                        alt={`Resultado ${idx + 1}`}
                        className="result-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="image-placeholder-result">
                        <span className="placeholder-icon">📸</span>
                        <span>Imagen {idx + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button 
                  className="btn btn-view-gallery"
                  onClick={() => setViewerOpen(true)}
                >
                  🔍 Ver Galería Completa
                </button>
              </>
            )}
          </section>

          {/* MANUAL */}
          {project.manual && (
            <section className="article-content-section manual-section">
              <h2 className="article-section-heading">
                <span className="heading-icon">📚</span>
                Manual
              </h2>
              <div className="article-section-text">
                {project.manual}
              </div>
            </section>
          )}

          {/* TECNOLOGÍAS */}
          {/* <section className="content-section technologies-section">
            <h2 className="section-heading">
              <span className="heading-icon">⚙️</span>
              Tecnologías
            </h2>
            <div className="tech-list">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
            <div className="tags-list">
              <h4>Etiquetas:</h4>
              <div className="tags-grid">
                {project.tags.map(tag => (
                  <span key={tag} className="tag-item">#{tag}</span>
                ))}
              </div>
            </div>
          </section>
          */}
          
          {/* ENLACES DE INTERÉS */}
          <section className="article-content-section links-section">
            <h4>Enlaces relacionados</h4>
            <ul className="links-list">
              {Object.entries(project.links).map(([linkName, linkUrl], index) => (
                <li><a 
                  key={index} 
                  href={linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-item"
                >
                  {linkName}
                </a></li>
              ))}
            </ul>
          </section>
        </div>

        {/* Botón de volver */}
        <div className="article-footer">
          <button className="btn btn-back" onClick={onBack}>← Ver todos los proyectos</button>
        </div>

        {/* PROYECTOS RELACIONADOS */}
        {project.relatedProjectIds && project.relatedProjectIds.length > 0 && (
          <section className="content-section related-projects-section">
            <h2 className="section-heading">
              <span className="heading-icon">🔗</span>
              Proyectos Relacionados
            </h2>
            <div className="related-projects-grid">
              {project.relatedProjectIds.map(relatedId => {
                const relatedProject = projectsData.find(p => p.id === relatedId);
                return (
                  relatedProject && (
                    <div key={relatedProject.id} className="related-project-card">
                      <div className="related-project-image">
                        <div className="image-placeholder-small">
                          <span className="placeholder-icon">🖼️</span>
                        </div>
                      </div>
                      <div className="related-project-content">
                        <h3 className="related-project-title">{relatedProject.title}</h3>
                        <p className="related-project-description">{relatedProject.description}</p>
                        <div className="related-project-category">
                          {relatedProject.category}
                        </div>
                      </div>
                      <button 
                        className="related-project-link"
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

      {/* Image Viewer Modal */}
      <ImageViewer 
        images={project.images} 
        isOpen={viewerOpen} 
        onClose={() => setViewerOpen(false)} 
      />
    </article>
  );
};
