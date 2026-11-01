import React from 'react';
import { Sliders, Camera, Award } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const ExperienceSection = () => {
  return (
    <section className="section section-dark" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sliders size={14} />
            <span>Creative Disciplines</span>
          </span>
          <h2 className="section-title">Artistic Skills & Technical Mastery</h2>
          <p className="section-subtitle">
            From high-dynamic range low-light camera handling to proprietary color curves and archival print master files, our craft is backed by rigorous technical discipline.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {siteConfig.skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}% Focus</span>
              </div>

              <p className="skill-desc">{skill.description}</p>

              <div
                className="skill-bar-track"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label={skill.name}
              >
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-subtle)',
            marginTop: '36px'
          }}
        >
          *Percentages represent sample discipline focus and creative allocation across commissions. All entries are customizable in siteConfig.js.
        </p>
      </div>
    </section>
  );
};
