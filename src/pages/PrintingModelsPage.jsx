import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from "../components/SearchComponent";
import { printingModelsData } from '../data/printingModelsData';
import '../styles/PrintingModelsPage.css';

export const PrintingModelsPage = ({ onPrintingModelSelect }) => {
  const [filteredPrintingModels, setFilteredPrintingModels] = useState(printingModelsData);
  const navigate = useNavigate();
  
  // useCallback para evitar re-creaciones innecesarias
  const handleFiltered = useCallback((filtered) => {
    setFilteredPrintingModels(filtered);
  }, []);

  return (
    <section className="section">
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">Impresión 3D</h2>
            <div className="header-description">
              Aquí están algunos de mis modelos de impresión 3D, desde accesorios hasta piezas de objetos.
            </div>
          </div>
        </div>

        <SearchComponent
          elements={printingModelsData}
          onFiltered={handleFiltered}
          onElementSelect={onPrintingModelSelect}
        />

        {/* Grid de modelos */}
        {filteredPrintingModels.length > 0 ? (
          <div className="prints-grid">
            {filteredPrintingModels.map(model => (
              <a 
                key={model.id}
                href={model.url}
                target="_blank"
                rel="noopener noreferrer"
                className="print-card"
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="image-icon">🖨️</span>
                    <span>{model.title}</span>
                  </div>
                </div>
                <h3 className="print-title">{model.title}</h3>
                <p className="print-description">{model.description}</p>
                <div className="print-footer">
                  <span className="print-category">{model.category}</span>
                  <span className="external-icon">↗</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No se encontraron modelos que coincidan con tu búsqueda</p>
          </div>
        )}
      </div>
    </section>
  );
};
