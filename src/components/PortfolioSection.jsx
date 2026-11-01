import React, { useState } from 'react';
import { Camera, Sparkles, ArrowRight, Eye, Layers } from 'lucide-react';
import { portfolioCategories } from '../data/portfolioData';
import { CategoryDetails } from './CategoryDetails';

export const PortfolioSection = ({ selectedCategoryFromHero, onResetCategoryTarget }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCategoryModal, setSelectedCategoryModal] = useState(null);

  // If passed from hero slide click, open modal or filter
  React.useEffect(() => {
    if (selectedCategoryFromHero) {
      const match = portfolioCategories.find((cat) => cat.slug === selectedCategoryFromHero);
      if (match) {
        setSelectedCategoryModal(match);
      }
      if (onResetCategoryTarget) onResetCategoryTarget();
    }
  }, [selectedCategoryFromHero, onResetCategoryTarget]);

  // Filter items
  const filteredCategories = activeFilter === 'all'
    ? portfolioCategories
    : portfolioCategories.filter((cat) => cat.slug === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All Collections' },
    { id: 'wedding-photography', label: 'Weddings' },
    { id: 'bride-groom-portraits', label: 'Bridal Portraits' },
    { id: 'pre-wedding-photography', label: 'Pre-Wedding' },
    { id: 'engagement-photography', label: 'Engagements' },
    { id: 'maternity-photography', label: 'Maternity' },
    { id: 'baby-family-photography', label: 'Family' },
    { id: 'portrait-lifestyle', label: 'Portraits' },
    { id: 'event-photography', label: 'Events' },
    { id: 'photo-editing', label: 'Retouching' },
  ];

  return (
    <section id="portfolio" className="section section-deep">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Camera size={14} />
            <span>Curated Portfolio</span>
          </span>
          <h2 className="section-title">A Collection of Stories</h2>
          <p className="section-subtitle">
            Explore moments, celebrations, and human stories captured through our lens with artistic depth, genuine emotion, and timeless color science.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="portfolio-tabs" role="tablist" aria-label="Portfolio Categories">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`portfolio-tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
              role="tab"
              aria-selected={activeFilter === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="portfolio-grid">
          {filteredCategories.map((category) => (
            <article
              key={category.id}
              className="portfolio-card"
              onClick={() => setSelectedCategoryModal(category)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedCategoryModal(category);
                }
              }}
              aria-label={`Explore ${category.title} collection`}
            >
              <div className="portfolio-card-media">
                <img
                  src={category.coverImage}
                  alt={category.title}
                  className="portfolio-card-img"
                  loading="lazy"
                />
                <div className="portfolio-card-overlay-gradient" />

                <div className="portfolio-card-badge">
                  <Layers size={13} />
                  <span>{category.photoCount}+ Frames</span>
                </div>
              </div>

              <div className="portfolio-card-body">
                <h3 className="portfolio-card-title">{category.title}</h3>
                <p className="portfolio-card-desc">{category.shortDesc}</p>

                <div className="portfolio-card-footer">
                  <div className="portfolio-card-price">
                    Starts from <strong>{category.startingPrice}</strong>
                  </div>

                  <span className="portfolio-card-action">
                    <span>Explore Collection</span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Expanded Category Details Modal */}
      {selectedCategoryModal && (
        <CategoryDetails
          category={selectedCategoryModal}
          onClose={() => setSelectedCategoryModal(null)}
        />
      )}
    </section>
  );
};
