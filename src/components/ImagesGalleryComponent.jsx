import { useState } from 'react'
import { ImageViewerWidget } from './ImageViewerWidget';
import '../styles/ImagesGalleryComponent.css';

export const ImagesGalleryComponent = ({ images, onViewGallery }) => {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const onClickImage = (index) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  }

  return (
    <>
      <div className="result-images-gallery">
        {images.map((image, idx) => (
          <div key={idx} className="result-image-container">
            <img 
            src={"/images/" + image} 
            alt={`Resultado ${idx + 1}`}
            className="result-image"
            onClick={() => onClickImage(idx)}
            onError={(e) => {
                e.target.style.display = 'none';
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
        className="btn btn-primary btn-view-gallery"
        onClick={() => onClickImage(0)}
      >
        🔍 Ver Galería Completa
      </button>

      {/* Image Viewer Modal */}
      <ImageViewerWidget 
        images={images}
        currentImageIndex={currentImageIndex}
        isOpen={viewerOpen} 
        onClose={() => setViewerOpen(false)} 
      />
    </>
  );
};