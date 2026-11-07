import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about';
  onNavigate: (page: 'home' | 'about', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'about', sectionId?: string) => {
    onNavigate(page, sectionId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white hover:text-[#C6F432] transition-colors uppercase cursor-pointer"
        >
          {PORTFOLIO_DATA.personal.name}
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('home', 'projects')}
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`text-sm font-medium transition-colors cursor-pointer ${
              currentPage === 'about' ? 'text-[#C6F432]' : 'text-neutral-400 hover:text-white'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick(currentPage === 'home' ? 'home' : 'about', 'contact')}
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 hover:text-[#C6F432] transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#141414] border-b border-neutral-800 px-6 py-6 space-y-4">
          <button
            onClick={() => handleNavClick('home', 'projects')}
            className="block w-full text-left text-base font-medium text-neutral-300 hover:text-[#C6F432]"
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left text-base font-medium text-neutral-300 hover:text-[#C6F432]"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick(currentPage === 'home' ? 'home' : 'about', 'contact')}
            className="block w-full text-left text-base font-medium text-neutral-300 hover:text-[#C6F432]"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};