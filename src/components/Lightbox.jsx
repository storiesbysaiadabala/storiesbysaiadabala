import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Lightbox = ({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    document.body.classList.add('modal-open');

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close Button */}
      <button
        type="button"
        className="lightbox-close-btn"
        onClick={onClose}
        aria-label="Close Lightbox (Esc)"
      >
        <X size={26} />
      </button>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          type="button"
          className="lightbox-nav-btn lightbox-prev-btn"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image (Left Arrow)"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Main Image Stage */}
      <div className="lightbox-content-wrapper">
        <img
          src={currentImage.url}
          alt={currentImage.alt || 'Photography showcase'}
          className="lightbox-image"
        />

        <div className="lightbox-meta">
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
          {currentImage.caption && (
            <p className="lightbox-caption">{currentImage.caption}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          type="button"
          className="lightbox-nav-btn lightbox-next-btn"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image (Right Arrow)"
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
};
