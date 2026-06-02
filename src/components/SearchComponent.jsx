import React, { useState, useMemo, useEffect } from "react";
import '../styles/SearchComponent.css';

export default function SearchComponent({
  items = [],
  onFiltered = () => {}
  
}) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Extraer categorías y tags únicos
  const categories = useMemo(() => [...new Set(items.map(i => i.category))], [items]);
  const allTags = useMemo(() => [...new Set(items.flatMap(i => i.tags))], [items]);

  const filteredElements = useMemo(() => {
    return items.filter(item => {
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const matchTags = selectedTags.length === 0 || selectedTags.some(tag => item.tags.includes(tag));
      const matchSearch = searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchTags && matchSearch;
    });
  }, [items, selectedCategories, selectedTags, searchTerm]);

  useEffect(() => {
    // Notifica al padre si quiere recibir la lista filtrada
    onFiltered(filteredElements);
  }, [filteredElements, onFiltered]);
  
  // Selección de filtros
  const toggleCategory = (category) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };
  const toggleTag = (tag) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
    setSearchTerm("");
  };

  return (
    <div>
      {/* Barra de búsqueda */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && <button className="clear-search" onClick={() => setSearchTerm("")}>✕</button>}
        <button className="filters-toggle" onClick={() => setFiltersOpen(!filtersOpen)}>
          <span className="filter-icon">⚙️</span> Filtros
          <span className={`toggle-arrow ${filtersOpen ? "open" : ""}`}>▼</span>
        </button>
      </div>

      {filtersOpen && (
        <div className="filters-section">
          <div className="filter-group">
            {(selectedCategories.length > 0 || selectedTags.length > 0) && (
              <button className="clear-filters-btn" onClick={clearFilters}>Limpiar filtros</button>
            )}
            <h4>Categorías</h4>
            <div className="filter-category">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-filter ${selectedCategories.includes(category) ? "active" : ""}`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h4>Etiquetas</h4>
            <div className="filter-tags">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-filter ${selectedTags.includes(tag) ? "active" : ""}`}
                  onClick={() => toggleTag(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="results-count">
        Mostrando <strong>{filteredElements.length}</strong> de <strong>{items.length}</strong> elementos
      </div>
    </div>
  );
}
