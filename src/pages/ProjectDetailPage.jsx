import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ImagesGalleryComponent } from '../components/ImagesGalleryComponent';
import { ProjectsWidget } from '../components/ProjectsWidget';
import { formatContent } from '../utils/contentFormatter';
import { projectsData } from '../data/projectsData';
import '../styles/models/ArticleStyle.css';
import '../styles/ProjectDetailPage.css';

export const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projectsData.find(p => p.id === Number(projectId));

  const onBack = () => {
    navigate(`/projects`);
  };

  if (!project) {
    return (
      <article className="pageArticle pageProjectDetail">
        <div className="article-background-layer bg-projectDetail" aria-hidden="true" />
        <div className="article-container">
          <div className="not-found">
            <h2>Proyecto no encontrado</h2>
            <button className="btn btn-back" onClick={onBack}>← Ver todos los proyectos</button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="pageArticle pageProjectDetail">
      <div className="article-background-layer bg-projectDetail" aria-hidden="true" />
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
            <img className="article-coverimage"
              src={"/images/" + project.coverImage}
              alt={project.title} 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {(project.coverImage == null || project.coverImage === '') && (
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

            {/* IMÁGENES */}
            {project.images && project.images.length > 0 && (
              <ImagesGalleryComponent images={project.images} />
            )}
          </section>

          {/* MANUAL */}
          {project.manual && (
            <section className="article-content-section manual-section">
              <h2 className="article-section-heading">
                <span className="heading-icon">📚</span>
                Manual
              </h2>
              <div className="article-section-text" 
              dangerouslySetInnerHTML={{ __html: formatContent(project.manual) }}>
            </div>
            </section>
          )}
          
          {/* ENLACES DE INTERÉS */}
          {project.links && Object.keys(project.links).length > 0 && (
            <section className="article-content-section links-section">
              <h2  className="article-section-heading">
                <span className="heading-icon">🔗</span>
                Enlaces relacionados
              </h2>
              <ul className="links-list">
                {Object.entries(project.links).map(([linkName, linkUrl], index) => (
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
          <button className="btn btn-back" onClick={onBack}>← Ver todos los proyectos</button>
        </div>

        {/* PROYECTOS RELACIONADOS */}
        {project.relatedProjectIds && project.relatedProjectIds.length > 0 && (
          <section className="content-section related-projects-section">
            <h2 className="section-heading">Proyectos Relacionados</h2>
            <div>
              <ProjectsWidget items={project.relatedProjectIds}/>
            </div>
          </section>
        )}
      </div>
    </article>
  );
};
