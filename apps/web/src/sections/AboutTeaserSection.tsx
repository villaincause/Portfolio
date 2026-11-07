import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutTeaserSectionProps {
  onNavigateToAbout: () => void;
}

export const AboutTeaserSection: React.FC<AboutTeaserSectionProps> = ({ onNavigateToAbout }) => {
  return (
    <section id="about-teaser" className="py-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Header */}
        <div className="lg:col-span-4">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            ABOUT ME
          </h2>
        </div>

        {/* Right Details & Teaser Link */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            I am a Computer Engineer & Software Developer based in {PORTFOLIO_DATA.personal.location}.
          </h3>

          <p className="text-neutral-400 text-base leading-relaxed">
            {PORTFOLIO_DATA.personal.bio}
          </p>

          <p className="text-neutral-400 text-base leading-relaxed">
            {PORTFOLIO_DATA.personal.aboutDetailed}
          </p>

          {/* Underlined Teaser Button */}
          <div className="pt-4">
            <button
              onClick={onNavigateToAbout}
              className="font-heading font-bold text-xs uppercase tracking-wider text-[#C6F432] underline underline-offset-8 hover:text-white transition-colors cursor-pointer"
            >
              MORE ABOUT ME
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};