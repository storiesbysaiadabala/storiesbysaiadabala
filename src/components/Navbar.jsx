import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, ArrowUpRight, MessageCircle, FolderOpen } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { sendGeneralBooking } from '../utils/whatsapp';

const COLLECTIONS_DRIVE_URL =
  'https://drive.google.com/drive/folders/1Klo1c0d8sgerQwDAcR86MSGE5p4JqbPZ';

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 'About' removed for a cleaner, balanced navbar layout
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => handleLinkClick(e, '#home')}
            aria-label={`${siteConfig.studio.name} Home`}
          >
            <span className="nav-brand-title">{siteConfig.studio.name}</span>
            <span className="nav-brand-subtitle">Photography</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-link-item">
                <a
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="nav-actions">
            {/* Collections Button */}
            <a
              href={COLLECTIONS_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-collections-btn"
              aria-label="View Photography Collections on Google Drive"
            >
              <FolderOpen size={16} />
              <span>Collections</span>
              <ArrowUpRight size={14} className="collections-arrow-icon" />
            </a>

            {/* Book Shoot CTA */}
            <button
              type="button"
              className="nav-book-btn"
              onClick={() => sendGeneralBooking('Navbar Shoot Enquiry')}
              aria-label="Book a Shoot via WhatsApp"
            >
              <MessageCircle size={16} />
              <span>Book a Shoot</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="nav-hamburger"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div>
          <div className="mobile-drawer-header">
            <div>
              <div className="nav-brand-title" style={{ fontSize: '1.4rem' }}>
                {siteConfig.studio.name}
              </div>
              <div className="nav-brand-subtitle">Cinema & Fine Art</div>
            </div>
            <button
              type="button"
              className="lightbox-close-btn"
              style={{ position: 'static', width: '38px', height: '38px' }}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-drawer-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? 'active' : ''}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={18} style={{ opacity: 0.6 }} />
                </a>
              </li>
            ))}

            {/* Collections Link in Mobile Drawer */}
            <li>
              <a
                href={COLLECTIONS_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-collections-link"
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FolderOpen size={18} style={{ color: 'var(--gold-primary)' }} />
                  Collections
                </span>
                <ArrowUpRight size={18} style={{ opacity: 0.8, color: 'var(--gold-primary)' }} />
              </a>
            </li>
          </ul>
        </div>

        <div className="mobile-drawer-footer">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileMenuOpen(false);
              sendGeneralBooking('Mobile Menu Shoot Booking');
            }}
          >
            <MessageCircle size={18} />
            <span>Book a Shoot on WhatsApp</span>
          </button>
          <p style={{ fontSize: '0.8rem', textAlign: 'center', color: 'var(--text-subtle)' }}>
            {siteConfig.studio.availability}
          </p>
        </div>
      </aside>
    </>
  );
};