import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from "/src/components/SearchComponent/SearchComponent";
import ItemsGridComponent from '/src/components/ItemsGridComponent/ItemsGridComponent';
import { printingModelsData } from '/src/data/printingModelsData';
import '/src/styles/SearcherStyle.css';
import './PrintingModelsPage.css';

export const PrintingModelsPage = () => {
  const [filteredPrintingModels, setFilteredPrintingModels] = useState(printingModelsData);
  const navigate = useNavigate();
  
  // useCallback para evitar re-creaciones innecesarias
  const handleFiltered = useCallback((filtered) => {
    setFilteredPrintingModels(filtered);
  }, []);

  const handlePrintingModelClick = (modelId) => {
    navigate(`/printingmodels/${modelId}`);
  };

  return (
    <section id="printingModelsPage" className="page pageSearcher">
      <div className="searcher-background-layer bg-printingmodels" aria-hidden="true" />
      <div className="page-container searcher-container">
        
        {/* Header */}
        <div className="page-header searcher-header">
          <div className="page-header-content">
            <h2 className="page-header-title">Impresión 3D</h2>
            <p className="page-header-description">
              Aquí están algunos de mis modelos de impresión 3D, desde accesorios hasta piezas de objetos.
            </p>
            <div className="page-header-features">
              <div className="page-feature-item">
                <span className="page-feature-icon">🛠️</span>
                <span>Ingeniería</span>
              </div>
              <div className="page-feature-item">
                <span className="page-feature-icon">📐</span>
                <span>Diseño</span>
              </div>
              <div className="page-feature-item">
                <span className="page-feature-icon">⚙️</span>
                <span>Repuestos</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className='page-content'>
          <SearchComponent
            items={printingModelsData}
            onFiltered={handleFiltered}
          />

          {/* Grid de modelos */}
          {filteredPrintingModels.length > 0 ? (
            <ItemsGridComponent
              items={filteredPrintingModels}
              onItemClick={handlePrintingModelClick}
            />
          ) : (
            <div className="no-results">
              <p>No se encontraron modelos que coincidan con tu búsqueda.</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
