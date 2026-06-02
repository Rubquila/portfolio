import React from 'react';

export const ImagesGalleryComponent = ({ images, onViewGallery }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="result-images-gallery">
        {images.map((image, idx) => (
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
        onClick={onViewGallery}
      >
        🔍 Ver Galería Completa
      </button>

      {/* Image Viewer Modal */}
      <ImageViewer 
        images={model.images} 
        isOpen={viewerOpen} 
        onClose={() => setViewerOpen(false)} 
      />
    </>
  );
};
