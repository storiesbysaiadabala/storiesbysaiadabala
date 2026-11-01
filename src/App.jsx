import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { IntroSection } from './components/IntroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PricingSection } from './components/PricingSection';
import { WhyChooseMe } from './components/WhyChooseMe';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SocialGallery } from './components/SocialGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [targetCategory, setTargetCategory] = useState(null);

  // ScrollSpy to highlight active section in Navbar
  useEffect(() => {
    const sectionIds = ['home', 'portfolio', 'services', 'about', 'pricing', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectCategory = (categorySlug) => {
    setTargetCategory(categorySlug);
  };

  return (
    <div className="portfolio-app-root">
      {/* Top Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        {/* Full-Screen Hero Video Slider */}
        <HeroSlider onSelectCategory={handleSelectCategory} />

        {/* Studio Philosophy Intro */}
        <IntroSection />

        {/* Curated Portfolio & Categories */}
        <PortfolioSection
          selectedCategoryFromHero={targetCategory}
          onResetCategoryTarget={() => setTargetCategory(null)}
        />

        {/* Specialized Services */}
        <ServicesSection onSelectCategory={handleSelectCategory} />

        {/* Behind the Lens About */}
        <AboutSection />

        {/* Skills & Technical Disciplines */}
        <ExperienceSection />

        {/* Pricing & Investment Packages */}
        <PricingSection />

        {/* Why Choose Us */}
        <WhyChooseMe />

        {/* Client Testimonials Carousel */}
        <TestimonialsSection />

        {/* Social / Instagram Gallery */}
        <SocialGallery />

        {/* Contact Section with Two Columns & WhatsApp generator */}
        <ContactSection />
      </main>

      {/* Advanced Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Floating WhatsApp Action and Back to Top Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
