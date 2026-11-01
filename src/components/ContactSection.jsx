import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { InstagramIcon, TwitterIcon } from './Icons';
import { siteConfig } from '../data/siteConfig';
import { sendContactEnquiry } from '../utils/whatsapp';

export const ContactSection = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Wedding Photography',
    packageChoice: 'Signature Wedding Package',
    date: '',
    location: '',
    budget: '₹50,000 – ₹1,00,000',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Wedding Photography',
    'Bride & Groom Portraits',
    'Pre-Wedding Photography',
    'Engagement Photography',
    'Maternity Photography',
    'Baby & Family Photography',
    'Portrait & Lifestyle Photography',
    'Event Photography',
    'Photo Editing & Retouching',
    'Other Bespoke Commission'
  ];

  const budgetRanges = [
    '₹25,000 – ₹50,000',
    '₹50,000 – ₹1,00,000',
    '₹1,00,000 – ₹2,50,000',
    '₹2,50,000+',
    'Flexible / Request Bespoke Quote'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.category) {
      errs.category = 'Please select a photography service';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Launch WhatsApp with custom formatted message
    sendContactEnquiry(formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Contact Information */}
          <div className="contact-info-panel">
            <div className="contact-info-header">
              <span className="section-tag">
                <Sparkles size={14} />
                <span>Get in Touch</span>
              </span>
              <h2>Let's Start a Conversation</h2>
              <p>
                Have a wedding, pre-wedding shoot, portrait session, or creative project in mind? Tell me about your vision, and let's craft something unforgettable together.
              </p>
            </div>

            {/* Studio Info */}
            <div className="contact-info-group">
              <div className="contact-group-label">Studio & Location</div>
              <div className="contact-detail-row">
                <MapPin size={20} />
                <div>
                  <strong>{siteConfig.studio.name}</strong>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {siteConfig.studio.address}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gold-primary)', marginTop: '2px' }}>
                    {siteConfig.studio.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="contact-info-group">
              <div className="contact-group-label">Direct Contact</div>
              <div className="contact-detail-row">
                <Mail size={18} />
                <a href={`mailto:${siteConfig.studio.email}`}>
                  {siteConfig.studio.email}
                </a>
              </div>
              <div className="contact-detail-row">
                <Phone size={18} />
                <a href={`tel:${siteConfig.studio.phone}`}>
                  {siteConfig.studio.phone}
                </a>
              </div>
              <div className="contact-detail-row">
                <MessageCircle size={18} />
                <a
                  href={`https://wa.me/${siteConfig.studio.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +{siteConfig.studio.whatsappNumber}
                </a>
              </div>
            </div>

            {/* Connect & Social */}
            <div className="contact-info-group">
              <div className="contact-group-label">Connect Socially</div>
              <div className="contact-social-links">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                
                <a
                  href={`https://wa.me/${siteConfig.studio.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="contact-info-group" style={{ borderBottom: 'none' }}>
              <div className="contact-group-label">Studio Availability</div>
              <div className="contact-detail-row">
                <Clock size={18} />
                <div style={{ fontSize: '0.92rem' }}>
                  <div>{siteConfig.studio.availability}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                    {siteConfig.studio.studioHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            <h3 style={{ fontSize: '1.7rem', marginBottom: '8px' }}>Send Shoot Enquiry</h3>
            <p style={{ fontSize: '0.92rem', marginBottom: '28px' }}>
              Fill in your event details below. On submission, we format your enquiry and launch WhatsApp so you can review and connect instantly.
            </p>

            {submitted && (
              <div className="form-success-banner" role="status">
                <CheckCircle2 size={20} />
                <div>
                  <strong>WhatsApp Chat Initialized!</strong>
                  <div style={{ fontSize: '0.82rem' }}>
                    Your message was prepared. If WhatsApp didn't open automatically, you can tap below to re-launch.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1: Name and Email */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="form-label-required">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    placeholder="e.g. Ananya Roy"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="form-label-required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                    placeholder="ananya@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>
              </div>

              {/* Row 2: Phone and Category */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Photography Service <span className="form-label-required">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {categories.map((cat, i) => (
                      <option key={i} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Event Date & Location */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date" className="form-label">
                    Preferred Event Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="form-input"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location" className="form-label">
                    City / Venue Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Udaipur / Mumbai"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Row 4: Preferred Package & Budget Range */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="packageChoice" className="form-label">
                    Preferred Package / Style
                  </label>
                  <input
                    id="packageChoice"
                    name="packageChoice"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Signature Wedding Package"
                    value={formData.packageChoice}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget" className="form-label">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-select"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    {budgetRanges.map((b, i) => (
                      <option key={i} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Story or Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your celebration, ceremonies, guest count, or creative thoughts..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Privacy Note */}
              <p className="form-privacy-note">
                🔒 Privacy Assured: Since this is a static website, your enquiry is not stored in an external database. Clicking below opens WhatsApp with your pre-filled inquiry where you can review and chat directly with {siteConfig.studio.name}.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Send size={18} />
                <span>Send Enquiry via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
