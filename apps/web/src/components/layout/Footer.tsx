import React from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-900 bg-[#0A0A0A] py-8 text-neutral-500 text-xs text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};