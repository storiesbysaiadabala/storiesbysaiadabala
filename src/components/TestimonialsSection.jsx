import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonialsData.length;

  const current = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="section section-deep" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Heart size={14} />
            <span>Words from Our Couples</span>
          </span>
          <h2 className="section-title">Kind Stories & Reflections</h2>
          <p className="section-subtitle">
            Demonstration client experiences from recent wedding celebrations and portrait commissions.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonials-slider-wrap">
          <article className="testimonial-card">
            <Quote size={40} className="testimonial-quote-icon" aria-hidden="true" />

            <p className="testimonial-text">
              “{current.quote}”
            </p>

            <div className="testimonial-client-meta">
              {current.avatar && (
                <img
                  src={current.avatar}
                  alt={current.clientName}
                  className="testimonial-avatar"
                  loading="lazy"
                />
              )}
              <div className="testimonial-info">
                <div className="testimonial-client-name">{current.clientName}</div>
                <div className="testimonial-service-tag">
                  {current.service} • {current.location}
                </div>
              </div>
            </div>

            <div className="testimonial-rating" aria-label="5 out of 5 stars">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={17} fill="var(--gold-primary)" color="var(--gold-primary)" />
              ))}
            </div>
          </article>

          {/* Nav Controls */}
          <div className="testimonial-nav-btns">
            <button
              type="button"
              className="testimonial-nav-btn"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={22} />
            </button>

            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              0{currentIndex + 1} / 0{total}
            </span>

            <button
              type="button"
              className="testimonial-nav-btn"
              onClick={handleNext}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-subtle)',
            marginTop: '28px'
          }}
        >
          *Sample testimonial reviews shown during portfolio demonstration.
        </p>
      </div>
    </section>
  );
};
