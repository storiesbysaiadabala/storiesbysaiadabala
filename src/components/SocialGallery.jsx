import React from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { siteConfig } from '../data/siteConfig';

export const SocialGallery = () => {
  return (
    <section className="section section-dark" id="social-gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <InstagramIcon size={14} />
            <span>storiesbysaiadabala</span>
          </span>
          <h2 className="section-title">Follow the Journey</h2>
          <p className="section-subtitle">
            Daily sneak peeks, behind-the-scenes film sets, and raw moments from ongoing wedding shoots across India and abroad.
          </p>
        </div>

        {/* 6-Photo Curated Grid */}
        <div className="instagram-grid" role="region" aria-label="Social media gallery preview">
          {siteConfig.instagramFeed.map((item) => (
            <a
              key={item.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-item"
              aria-label={`View Instagram post: ${item.caption}`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="instagram-img"
                loading="lazy"
              />

              <div className="instagram-hover-overlay">
                <div className="instagram-metrics">
                  <span className="instagram-metric">
                    <Heart size={16} fill="#ffffff" />
                    <span>{item.likes}</span>
                  </span>
                  <span className="instagram-metric">
                    <MessageCircle size={16} fill="#ffffff" />
                    <span>{item.comments}</span>
                  </span>
                </div>
                <p className="instagram-caption-preview">{item.caption}</p>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Open on Instagram</span>
                  <ExternalLink size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="instagram-action-wrap">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold"
          >
            <InstagramIcon size={18} />
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
