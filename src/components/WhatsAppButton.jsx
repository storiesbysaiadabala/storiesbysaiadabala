import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { sendGeneralBooking } from '../utils/whatsapp';

export const WhatsAppButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <button
        type="button"
        className="floating-whatsapp-btn"
        onClick={() => sendGeneralBooking('Floating Action Button')}
        aria-label="Direct WhatsApp Chat"
        title="Chat directly on WhatsApp"
      >
        <div className="pulse-ring" />
        <MessageCircle size={22} />
        <span>Chat on WhatsApp</span>
      </button>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to Top"
        title="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};
