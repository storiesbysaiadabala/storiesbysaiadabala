import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, ArrowRight, Play, Pause } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { sendGeneralBooking } from '../utils/whatsapp';

export const HeroSlider = ({ onSelectCategory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [videoErrors, setVideoErrors] = useState({});
  const timerRef = useRef(null);
  const totalSlides = siteConfig.heroSlides.length;

  const currentData = siteConfig.heroSlides[currentSlide];

  // Auto transition every 7 seconds
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [currentSlide, isPaused, totalSlides]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleVideoError = (slideId) => {
    setVideoErrors((prev) => ({ ...prev, [slideId]: true }));
  };

  const handleExploreClick = (categoryTarget) => {
    if (categoryTarget && onSelectCategory) {
      onSelectCategory(categoryTarget);
    }
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Cinematic Photography Portfolio Showcase"
    >
      {siteConfig.heroSlides.map((slide, index) => {
        const isActive = index === currentSlide;
        const hasVideoError = videoErrors[slide.id];

        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            {/* Background Media: Video with Fallback Image */}
            <div className="hero-media-wrapper">
              {!hasVideoError && slide.videoUrl ? (
                <video
                  className="hero-video"
                  src={slide.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={() => handleVideoError(slide.id)}
                  poster={slide.fallbackImage}
                />
              ) : null}

              {/* Fallback Image is always present underneath or if video failed/loading */}
              <img
                src={slide.fallbackImage}
                alt={slide.title}
                className="hero-fallback-img"
                loading={index === 0 ? 'eager' : 'lazy'}
                style={{
                  display: hasVideoError || !slide.videoUrl ? 'block' : 'none'
                }}
              />
            </div>

            {/* Dark Cinematic Vignette & Gradient Overlay */}
            <div className="hero-overlay" />

            {/* Slide Content */}
            <div className="container hero-content-container">
              <div className="hero-text-block">
                <span className="hero-tag-badge">
                  <span>{slide.tag}</span>
                </span>

                <h1 className="hero-title">{slide.title}</h1>

                <p className="hero-subtitle">{slide.subtitle}</p>

                <div className="hero-buttons">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleExploreClick(slide.categoryTarget)}
                  >
                    <span>{slide.primaryCta}</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => sendGeneralBooking(`Hero Slide: ${slide.tag}`)}
                  >
                    <MessageCircle size={18} />
                    <span>Book Your Shoot</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slider Controls Bar */}
      <div className="hero-controls">
        <div className="container hero-controls-inner">
          {/* Slide Counter (e.g. 01 / 04) */}
          <div className="hero-slide-counter">
            <span className="current-num">0{currentSlide + 1}</span>
            <span className="total-num">/ 0{totalSlides}</span>
          </div>

          {/* Pagination Bars */}
          <div className="hero-pagination-bars" role="tablist" aria-label="Hero Slide indicators">
            {siteConfig.heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-pag-bar ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.tag}`}
                role="tab"
                aria-selected={idx === currentSlide}
              >
                <div className="hero-pag-bar-fill" />
              </button>
            ))}
          </div>

          {/* Previous / Next Arrow Controls */}
          <div className="hero-arrows">
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={goToPrev}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={goToNext}
              aria-label="Next Slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
