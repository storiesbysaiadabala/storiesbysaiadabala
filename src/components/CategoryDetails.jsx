import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Check, ArrowRight, MapPin, Calendar, Sparkles } from 'lucide-react';
import { ProjectGallery } from './ProjectGallery';
import { Lightbox } from './Lightbox';
import { sendCategoryEnquiry, sendPackageEnquiry } from '../utils/whatsapp';

export const CategoryDetails = ({ category, onClose }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Combine all images from projects within this category
  const allImages = category?.projects
    ? category.projects.flatMap((p) => p.images || [])
    : [];

  useEffect(() => {
    // Lock body scroll while modal is active
    document.body.classList.add('modal-open');

    const handleEsc = (e) => {
      if (e.key === 'Escape' && !lightboxOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose, lightboxOpen]);

  if (!category) return null;

  const handlePhotoClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNextPhoto = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevPhoto = () => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <div
        className="category-modal-overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`${category.title} Details`}
      >
        <div className="category-modal-content">
          {/* Close Button */}
          <button
            type="button"
            className="category-modal-close-btn"
            onClick={onClose}
            aria-label="Close Details Modal"
          >
            <X size={24} />
          </button>

          {/* Category Banner Hero */}
          <div className="category-modal-hero">
            <img src={category.coverImage} alt={category.title} />
            <div className="category-modal-hero-overlay">
              <span className="section-tag" style={{ marginBottom: '8px' }}>
                <Sparkles size={14} />
                <span>Featured Collection</span>
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#ffffff' }}>
                {category.title}
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '640px' }}>
                {category.tagline}
              </p>
            </div>
          </div>

          <div className="category-modal-body">
            {/* Description & WhatsApp Quick CTA */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                paddingBottom: '28px',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '36px'
              }}
            >
              <div style={{ maxWidth: '680px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>About This Service</h3>
                <p style={{ fontSize: '1.02rem', lineHeight: '1.7' }}>{category.shortDesc}</p>
                <div style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Indicative Starting Investment:{' '}
                  <strong style={{ color: 'var(--gold-primary)', fontSize: '1.1rem' }}>
                    {category.startingPrice}
                  </strong>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => sendCategoryEnquiry(category.title, category.startingPrice)}
              >
                <MessageCircle size={18} />
                <span>Discuss {category.title} on WhatsApp</span>
              </button>
            </div>

            {/* Sample Pricing Packages for this specific category */}
            {category.samplePackages && category.samplePackages.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <span className="section-tag">Sample Packages</span>
                  <h3 style={{ fontSize: '1.6rem' }}>Available Service Tiers</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    *These are demonstration estimates. Final quotes are tailored to your destination, hours, and custom deliverables.
                  </p>
                </div>

                <div className="category-modal-packages-grid">
                  {category.samplePackages.map((pkg, i) => (
                    <div key={i} className="category-package-card">
                      <div>
                        <div className="category-package-name">{pkg.name}</div>
                        <div className="category-package-price">{pkg.price}</div>
                        <div className="category-package-duration">⏱ {pkg.duration}</div>
                        <p className="category-package-deliverables">{pkg.deliverables}</p>
                      </div>

                      <button
                        type="button"
                        className="btn btn-outline-gold btn-sm"
                        style={{ width: '100%', marginTop: '16px' }}
                        onClick={() => sendPackageEnquiry(pkg.name, category.title, pkg.price)}
                      >
                        <MessageCircle size={16} />
                        <span>Enquire About {pkg.name}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Previous Work Gallery */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <span className="section-tag">Curated Portfolio</span>
                <h3 style={{ fontSize: '1.6rem' }}>Previous Projects & Captured Moments</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  Click any frame to inspect high-resolution details in full-screen view.
                </p>
              </div>

              {category.projects && category.projects.map((proj) => (
                <div key={proj.id} style={{ marginBottom: '40px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      flexWrap: 'wrap',
                      marginBottom: '16px'
                    }}
                  >
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem' }}>
                      {proj.title}
                    </h4>
                    {proj.location && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <MapPin size={14} color="var(--gold-primary)" />
                        {proj.location}
                      </span>
                    )}
                    {proj.date && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)'
                        }}
                      >
                        <Calendar size={14} color="var(--gold-primary)" />
                        {proj.date}
                      </span>
                    )}
                  </div>
                  {proj.summary && (
                    <p style={{ fontSize: '0.92rem', marginBottom: '18px', maxWidth: '780px' }}>
                      {proj.summary}
                    </p>
                  )}

                  <ProjectGallery
                    images={proj.images}
                    onPhotoClick={(idx) => {
                      // Find index in combined allImages array
                      const img = proj.images[idx];
                      const overallIdx = allImages.findIndex((item) => item.id === img.id);
                      handlePhotoClick(overallIdx !== -1 ? overallIdx : 0);
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Modal Action */}
            <div
              style={{
                marginTop: '40px',
                paddingTop: '30px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px'
              }}
            >
              <div>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
                  Ready to craft your visual story?
                </h4>
                <p style={{ fontSize: '0.88rem' }}>
                  Send us your preferred dates and we will confirm availability right on WhatsApp.
                </p>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => sendCategoryEnquiry(category.title, category.startingPrice)}
              >
                <MessageCircle size={18} />
                <span>Connect with SAI on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for full screen inspection */}
      <Lightbox
        isOpen={lightboxOpen}
        images={allImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </>
  );
};
