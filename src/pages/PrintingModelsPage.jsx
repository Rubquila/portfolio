import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchComponent from "../components/SearchComponent";
import ItemsGridComponent from '../components/ItemsGridComponent';
import { printingModelsData } from '../data/printingModelsData';
import '../styles/models/SearcherStyle.css';
import '../styles/PrintingModelsPage.css';

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
            <div className="page-header-description">
              Aquí están algunos de mis modelos de impresión 3D, desde accesorios hasta piezas de objetos.
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
