import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: 'home' | 'about';
  onNavigate: (page: 'home' | 'about', sectionId?: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#C6F432] selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};