import React from 'react';
import { useNavigate } from 'react-router-dom';
import { articlesData } from '/src/data/articlesData';
import './ArticlesWidget.css';

export const ArticlesWidget = ({ items }) => {
  const navigate = useNavigate();

  const featured = items.map(id => articlesData.find(item => item.id === id));
  console.log(featured);
  if (featured == null || featured.length == 0) articlesData.slice(0, 4);

  const handleArticleClick = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  if (!items || items.length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <section id="articles" className="articlesWidget">
      <div className="articlesWidget-container">
        <div className="articlesWidget-list">
          {featured.map((item) => (
            <div
              key={item.id}
              className="articlesWidgetItem-card"
              onClick={() => handleArticleClick && handleArticleClick(item.id)}
            >
              <div>
                <h3 className="articlesWidgetItem-title">{item.title}</h3>
                <p className="articlesWidgetItem-description">{item.description}</p>
              </div>
              <span className="category-badge articlesWidgetItem-category">{item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
