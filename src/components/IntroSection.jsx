import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const IntroSection = () => {
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section section-dark" id="intro">
      <div className="container">
        <div className="intro-grid">
          {/* Left Text / Editorial Content */}
          <div className="intro-content">
            <span className="section-tag">
              <Sparkles size={14} />
              <span>Studio Philosophy</span>
            </span>

            <h2 className="intro-lead-text">
              More Than Photographs. <br />
              <span style={{ color: 'var(--gold-primary)', fontStyle: 'italic' }}>
                Memories That Last.
              </span>
            </h2>

            <p className="intro-body-text">
              We believe true luxury lies in authentic connection. At {siteConfig.studio.name}, we do not manufacture artificial perfection; we capture the sacred, unscripted beauty of human emotion — the quiet tears during vows, the spontaneous laughter between lovers, and the quiet gestures that define a legacy.
            </p>

            <p className="intro-body-text" style={{ marginTop: '-14px', marginBottom: '36px' }}>
              Every wedding, portrait, and editorial commission is treated as a bespoke visual heirloom, crafted with artistic European framing, timeless color grading, and unwavering devotion to craftsmanship.
            </p>

            <a
              href="#about"
              className="btn btn-outline-gold"
              onClick={handleScrollToAbout}
            >
              <span>Discover My Story</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Visual Mosaic */}
          <div className="intro-gallery-mosaic">
            <div className="intro-featured-card">
              <img
                src={siteConfig.aboutStory.featuredImage}
                alt="Lead photographer in action"
                loading="lazy"
              />
            </div>

            <div className="intro-stacked-column">
              {siteConfig.aboutStory.studioDetailImages.slice(0, 2).map((imgUrl, i) => (
                <div key={i} className="intro-sub-card">
                  <img
                    src={imgUrl}
                    alt={`Studio craft detail ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
