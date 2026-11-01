import React, { useState } from 'react';
import { Check, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { pricingTabs, pricingPackages } from '../data/pricingData';
import { sendPackageEnquiry } from '../utils/whatsapp';

export const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('wedding');

  const filteredPackages = pricingPackages.filter((pkg) => pkg.tab === activeTab);

  return (
    <section id="pricing" className="section section-deep">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            <span>Investment & Collections</span>
          </span>
          <h2 className="section-title">Transparent Pricing Tiers</h2>
          <p className="section-subtitle">
            Every celebration is distinct. We offer foundational packages tailored to weddings, pre-wedding cinema, portraits, and post-production, with custom bespoke itineraries available upon request.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="pricing-tabs-wrapper">
          <div className="pricing-tabs" role="tablist" aria-label="Pricing Category Tabs">
            {pricingTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`pricing-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="pricing-grid">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`pricing-card ${pkg.isFeatured ? 'featured' : ''}`}
            >
              {pkg.badge && <div className="pricing-card-badge">{pkg.badge}</div>}

              <div className="pricing-card-header">
                <h3 className="pricing-name">{pkg.name}</h3>
                <p className="pricing-tagline">{pkg.tagline}</p>

                <div className="pricing-price-wrap">
                  <span className="pricing-price">{pkg.price}</span>
                  <span className="pricing-price-subtext">Estimated Starting Investment</span>

                  <span className="pricing-duration-chip">
                    <Clock size={14} />
                    <span>{pkg.duration}</span>
                  </span>
                </div>
              </div>

              {/* Inclusions Feature List */}
              <ul className="pricing-features-list" aria-label={`Included in ${pkg.name}`}>
                {pkg.features.map((feat, i) => (
                  <li key={i} className="pricing-feature-item">
                    <Check size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                type="button"
                className={`btn ${pkg.isFeatured ? 'btn-primary' : 'btn-outline-gold'}`}
                style={{ width: '100%' }}
                onClick={() => sendPackageEnquiry(pkg.name, pkg.serviceName, pkg.price)}
              >
                <MessageCircle size={17} />
                <span>Choose {pkg.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="pricing-disclaimer">
          <p>
            *Please note: Displayed rates are demonstration values. Final fees are confirmed following a consultation regarding event location, flight & stay arrangements, multi-day coverage, drone permits, and specific album curation requirements. No payment is collected on this website.
          </p>
        </div>
      </div>
    </section>
  );
};
