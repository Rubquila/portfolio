import React from "react";
import "./ItemsGridComponent.css";

export default function ItemsGridComponent({ items, onItemClick }) {
  if (!items || items.length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <div className="items-grid">
      {items.map((item) => (
        <div
          key={item.id}
          className="gridItem-card"
          onClick={() => onItemClick && onItemClick(item.id)}
        >
          <div className="gridItem-image">
            <img
              src={"/images/" + item.coverImage}
              alt={item.title}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            {item.status && (
              <div className={`gridItem-status status-${item.status.toLowerCase()}`}>
                {item.status}
              </div>
            )}
          </div>
          <h3 className="gridItem-title">{item.title}</h3>
          <p className="gridItem-description">{item.short}</p>
          <div className="gridItem-meta">
            <span className="category-badge gridItem-category">{item.category}</span>
          </div>
          {item.technologies && (
            <div className="gridItem-tags">
              {item.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="gridItem-tag">
                  {tech}
                </span>
              ))}
              {item.technologies.length > 3 && (
                <span className="gridItem-tag more">
                  +{item.technologies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
