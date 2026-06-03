import React, { useState, useEffect } from 'react';
import '../styles/ImageViewer.css';

export const ImageViewer = ({ images, currentImageIndex, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    setCurrentIndex(currentImageIndex || 0);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images, isOpen, onClose]);

  if (!isOpen || !images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Botón cerrar */}
        <button className="viewer-close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Imagen principal */}
        <div className="viewer-image-wrapper">
          <img 
            src={currentImage} 
            alt={`Imagen ${currentIndex + 1}`}
            className="viewer-main-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="viewer-placeholder" style={{ display: 'none' }}>
            <span className="placeholder-icon">📸</span>
            <span>Imagen no disponible</span>
          </div>
        </div>

        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            <button className="viewer-nav-btn viewer-prev" onClick={handlePrevious}>
              ‹
            </button>
            <button className="viewer-nav-btn viewer-next" onClick={handleNext}>
              ›
            </button>

            {/* Indicador de página */}
            <div className="viewer-counter">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Thumbnails */}
            <div className="viewer-thumbnails">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  className={`viewer-thumbnail ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${idx + 1}`}
                    onError={(e) => {
                      e.target.style.backgroundColor = 'rgba(74, 158, 255, 0.1)';
                    }}
                  />
                </button>
              ))}
            </div>
          </>
        )}

        {/* Información */}
        <div className="viewer-info">
          <p>Usa las flechas ← → para navegar, Esc para cerrar</p>
        </div>
      </div>
    </div>
  );
};
