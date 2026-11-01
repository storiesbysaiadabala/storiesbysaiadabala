import React from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';
import { InstagramIcon, TwitterIcon } from './Icons';
import { siteConfig } from '../data/siteConfig';

export const Footer = ({ onSelectCategory }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceClick = (e, slug) => {
    e.preventDefault();
    if (onSelectCategory && slug) {
      onSelectCategory(slug);
    }
    const elem = document.getElementById('portfolio');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          {/* A. Brand Area */}
          <div className="footer-brand-col">
            <div className="footer-brand-title">{siteConfig.studio.name}</div>
            <div className="footer-tagline">“{siteConfig.studio.tagline}”</div>
            <p className="footer-desc">{siteConfig.studio.shortBio}</p>

            <div className="contact-social-links" style={{ marginTop: '12px' }}>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.studio.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* B. Quick Navigation */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                  Home
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>
                  Portfolio Collections
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
                  Bespoke Services
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                  About the Artist
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>
                  Packages & Investment
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* C. Service Categories */}
          <div>
            <div className="footer-col-title">Collections</div>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a
                  href="#portfolio"
                  onClick={(e) => handleServiceClick(e, 'wedding-photography')}
                >
                  Wedding Photography
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#portfolio"
                  onClick={(e) => handleServiceClick(e, 'bride-groom-portraits')}
                >
                  Bride & Groom Portraits
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#portfolio"
                  onClick={(e) => handleServiceClick(e, 'pre-wedding-photography')}
                >
                  Pre-Wedding Cinema
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#portfolio"
                  onClick={(e) => handleServiceClick(e, 'engagement-photography')}
                >
                  Engagement Ceremonies
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#portfolio"
                  onClick={(e) => handleServiceClick(e, 'portrait-lifestyle')}
                >
                  Portraits & Lifestyle
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#portfolio"
                  onClick={(e) => handleServiceClick(e, 'photo-editing')}
                >
                  Photo Retouching Suite
                </a>
              </li>
            </ul>
          </div>

          {/* D. Studio Contact Information */}
          <div>
            <div className="footer-col-title">Studio & Contact</div>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={17} />
                <span>{siteConfig.studio.address}</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={17} />
                <a href={`mailto:${siteConfig.studio.email}`}>
                  {siteConfig.studio.email}
                </a>
              </li>
              <li className="footer-contact-item">
                <Phone size={17} />
                <a href={`tel:${siteConfig.studio.phone}`}>
                  {siteConfig.studio.phone}
                </a>
              </li>
              <li className="footer-contact-item">
                <MessageCircle size={17} />
                <a
                  href={`https://wa.me/${siteConfig.studio.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +{siteConfig.studio.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {currentYear} {siteConfig.studio.name}. All rights reserved. Fine Art Photography & Cinema.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)' }}>
              Built with Passion for Visual Storytelling
            </span>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleScrollToTop}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
