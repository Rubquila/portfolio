import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/ProjectsWidget.css';

export const ProjectsWidget = ({ items }) => {
  const navigate = useNavigate();

  /* const featured = items.map(i => projectsData[i]) || projectsData.slice(0, 4); */
  /* var featured = projectsData.slice(0, 4);
  if (items && items.length > 0) {
    featured = items.map(i => projectsData[i]);
  } */
  const featured = items.map(id => projectsData.find(item => item.id === id));
  if (featured == null || featured.length == 0) projectsData.slice(0, 4);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  if (!items || items.length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <section id="projects" className="projectsWidget">
      <div className="projectsWidget-container">
        
        <div className="projectsWidget-grid">
          {featured.map(item => (
            <div 
              key={item.id} 
              className="projectsWidgetItem-card gridItem-card"
              onClick={() => handleProjectClick && handleProjectClick(item.id)}
            >
              <div className="projectsWidgetItem-image gridItem-image">
                <img src={"/images/" + item.coverImage}
                  alt={item.title} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {item.coverImage === '' && (
                  <>
                    <span className="placeholder-icon">🖼️</span>
                    <span>{item.title}</span>
                  </>
                )}
              </div>
              <h3 className="projectsWidgetItem-title">{item.title}</h3>
              <div className="gridItem-meta">
                <span className="category-badge projectsWidgetItem-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
