import React from "react";
import "./ItemsListComponent.css";

export default function ItemsListComponent({ items, onItemClick }) {
  if (!items || items.length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <div className="items-list">
      {items.map((item) => (
        <div
          key={item.id}
          className="listItem-card"
          onClick={() => onItemClick && onItemClick(item.id)}
        >
          <div>
            <h3 className="listItem-title">{item.title}</h3>
            <p className="listItem-description">{item.description}</p>
          </div>
          <span className="category-badge listItem-category">{item.category}</span>
        </div>
      ))}
    </div>
  );
}
