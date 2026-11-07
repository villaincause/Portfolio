import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-0 lg:min-h-[85vh] flex items-center py-8 lg:py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="font-heading font-extrabold text-3xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] uppercase">
            HI, I AM <br />
            <span>{PORTFOLIO_DATA.personal.name}.</span>
          </h1>

          <p className="text-neutral-400 text-sm sm:text-lg leading-relaxed max-w-xl pt-1">
            A {PORTFOLIO_DATA.personal.role} based in {PORTFOLIO_DATA.personal.location}. {PORTFOLIO_DATA.personal.bio}
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#C6F432] text-black font-heading font-bold text-xs uppercase tracking-wider px-5 py-3.5 sm:px-6 sm:py-4 rounded-full hover:bg-[#d4f53c] transition-all transform hover:-translate-y-0.5"
            >
              <span>CONTACT ME</span>
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A1A1A] border border-neutral-800 flex items-center justify-center text-white hover:text-[#C6F432] hover:border-[#C6F432] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A1A1A] border border-neutral-800 flex items-center justify-center text-white hover:text-[#C6F432] hover:border-[#C6F432] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1A1A1A] border border-neutral-800 flex items-center justify-center text-white hover:text-[#C6F432] hover:border-[#C6F432] transition-colors"
              aria-label="Send Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4 lg:pt-0">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] bg-[#141414] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-neutral-800 shadow-2xl group hover:border-[#C6F432]/50 transition-all duration-300">
            <img
              src="https://res.cloudinary.com/dorpdfe8d/image/upload/v1794080794/117745641_2421177071513352_5137427363333591377_n_rgwiws.jpg"
              alt={PORTFOLIO_DATA.personal.name}
              className="w-full h-full object-cover object-[50%_20%] grayscale contrast-105 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};