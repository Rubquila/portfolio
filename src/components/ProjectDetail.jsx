
import { useParams, useNavigate } from 'react-router-dom';

export const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [viewerOpen, setViewerOpen] = useState(false);
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <section className="project-detail">
        <div className="project-detail-container">
          <div className="not-found">
            <h2>Proyecto no encontrado</h2>
            <button className="btn-back" onClick={() => navigate(-1)}>Volver</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        
        {/* Header */}
        <div className="project-header">
          <div className="header-title">
            <h1>{project.title}</h1>
            <div className={`project-status status-${project.status.toLowerCase()}`}>
              {project.status}
            </div>
            <div className="header-meta">
              <span className="category-badge">{project.category}</span>
              <div className="technologies-inline">
                {project.technologies.map((tech, idx) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                    {idx < project.technologies.length - 1 && ' •'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Imagen grande */}
        <div className="project-hero-image">
          <div className="image-placeholder-large">
            <img src={project.coverImage} alt={project.title} 
                  onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
            <span className="placeholder-icon">🖼️</span>
            <span>{project.title}</span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="project-content">

          {/* PROBLEMA */}
          <section className="content-section problema-section">
            <h2 className="section-heading">
              <span className="heading-icon">❌</span>
              Problema
            </h2>
            <p className="section-text">{project.problem}</p>
          </section>

          {/* SOLUCIÓN */}
          <section className="content-section solucion-section">
            <h2 className="section-heading">
              <span className="heading-icon">💡</span>
              Solución
            </h2>
            <p className="section-text">{project.solution}</p>
          </section>

          {/* RESULTADO */}
          <section className="content-section resultado-section">
            <h2 className="section-heading">
              <span className="heading-icon">✨</span>
              Resultado
            </h2>
            <p className="section-text">{project.result}</p>
            
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

          {/* TECNOLOGÍAS */}
          <section className="content-section technologies-section">
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

        </div>

        {/* Botones de acción */}
        <div className="project-actions">
          {project.links.github ? (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-github"
            >
              💻 Ver Código
            </a>
          ) : null}
          
          {project.links.demo ? (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-demo"
            >
              🌐 Ver Demo
            </a>
          ) : null}
          
          <button className="btn btn-back" onClick={onBack}>
            ← Volver
          </button>
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
    </section>
  );
};
