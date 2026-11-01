import React from 'react';
import {
  Camera,
  Video,
  Heart,
  Sun,
  Sparkles,
  Users,
  PartyPopper,
  UserCheck,
  Sliders,
  Film,
  Check,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { portfolioCategories } from '../data/portfolioData';
import { sendPackageEnquiry } from '../utils/whatsapp';

// Map icon string name to Lucide Icon component
const iconMap = {
  Camera,
  Video,
  Heart,
  Sun,
  Sparkles,
  Users,
  PartyPopper,
  UserCheck,
  Sliders,
  Film,
};

export const ServicesSection = ({ onSelectCategory }) => {
  const handleViewPortfolio = (categorySlug) => {
    if (onSelectCategory && categorySlug) {
      onSelectCategory(categorySlug);
    }
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section section-dark">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            <span>Master Crafts & Offerings</span>
          </span>
          <h2 className="section-title">Bespoke Photography & Film Services</h2>
          <p className="section-subtitle">
            From intimate ceremonies to high-end commercial editorial campaigns, we bring world-class equipment, cinematic lighting, and dedicated post-production to every visual journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Camera;

            return (
              <article key={service.id} className="service-card">
                <div className="service-card-media">
                  <div className="service-card-icon-badge" aria-hidden="true">
                  </div>
                </div>

                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <div className="service-card-tagline">{service.tagline}</div>
                  <p className="service-card-desc">{service.description}</p>

                  <ul className="service-deliverables-list" aria-label="Key inclusions">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="service-deliverable-item">
                        <Check size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-actions">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleViewPortfolio(service.categorySlug)}
                    >
                      <span>View Portfolio</span>
                      <ArrowRight size={14} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-gold btn-sm"
                      onClick={() =>
                        sendPackageEnquiry('Custom Service Commission', service.title, 'Bespoke Quote')
                      }
                    >
                      <MessageCircle size={14} />
                      <span>Get a Quote</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
