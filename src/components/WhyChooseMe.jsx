import React from 'react';
import { Sparkles, Film, Palette, Eye, Award, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const iconMap = {
  Sparkles,
  Film,
  Palette,
  Eye,
  Award,
  MessageSquare
};

export const WhyChooseMe = () => {
  return (
    <section className="section section-dark" id="why-us">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            <span>The Studio Difference</span>
          </span>
          <h2 className="section-title">Why Discerning Couples Choose Us</h2>
          <p className="section-subtitle">
            Beyond lenses and cameras, our dedication is rooted in patient listening, calm presence during hectic wedding schedules, and obsessive care for your memories.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="why-grid">
          {siteConfig.whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div key={index} className="why-card">
                <div className="why-icon-box" aria-hidden="true">
                  <IconComponent size={26} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
