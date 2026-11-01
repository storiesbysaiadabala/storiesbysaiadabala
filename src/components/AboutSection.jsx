import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Award } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { sendGeneralBooking } from '../utils/whatsapp';

export const AboutSection = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section section-deep">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Portrait Photograph */}
          <div className="about-photo-wrapper">
            <div className="about-photo-card">
              <img
                src={siteConfig.aboutStory.featuredImage}
                alt={`${siteConfig.studio.photographerName} - Lead Photographer`}
                loading="lazy"
              />

              {/* Experience Floating Badge */}
              <div className="about-experience-badge">
                <div className="years">{siteConfig.stats[0]?.value || '8+'}</div>
                <div className="label">Years of Craft</div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Philosophy */}
          <div className="about-bio-content">
            <span className="section-tag" style={{ marginBottom: '14px' }}>
              <Sparkles size={14} />
              <span>Behind the Lens</span>
            </span>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Capturing Timeless Soul & Cinematic Poetry
            </h2>

            <blockquote className="about-quote">
              {siteConfig.aboutStory.quote}
            </blockquote>

            <div className="about-paragraphs">
              {siteConfig.aboutStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="about-signature">
              <span className="signature-name">{siteConfig.aboutStory.signatureName}</span>
              <span className="signature-title">{siteConfig.aboutStory.signatureTitle}</span>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => sendGeneralBooking('About Section CTA')}
              >
                <MessageCircle size={18} />
                <span>Let's Create Something Beautiful</span>
              </button>

              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={handleScrollToContact}
              >
                <span>Direct Studio Details</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Customizable Statistics Grid */}
        <div className="stats-grid" aria-label="Studio Milestones and Statistics">
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-detail">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
