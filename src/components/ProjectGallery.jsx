import React from 'react';
import { Maximize2 } from 'lucide-react';

export const ProjectGallery = ({ images = [], onPhotoClick }) => {
  if (!images || images.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
        No photos currently uploaded for this collection.
      </div>
    );
  }

  return (
    <div className="gallery-masonry" role="region" aria-label="Photo Gallery">
      {images.map((img, idx) => {
        const aspectClass = img.aspect ? `aspect-${img.aspect}` : '';

        return (
          <div
            key={img.id || idx}
            className={`gallery-photo-item ${aspectClass}`}
            onClick={() => onPhotoClick && onPhotoClick(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPhotoClick && onPhotoClick(idx);
              }
            }}
            aria-label={`View photo ${idx + 1}: ${img.caption || img.alt || 'Photography detail'}`}
          >
            <img
              src={img.url}
              alt={img.alt || 'Photography showcase'}
              className="gallery-photo-img"
              loading="lazy"
            />

            <div className="gallery-photo-overlay">
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--gold-primary)',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '6px'
                }}
              >
                <Maximize2 size={14} />
                <span>Enlarge</span>
              </span>
              {img.caption && (
                <span className="gallery-photo-caption">{img.caption}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
