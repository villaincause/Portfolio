import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AboutTeaserSection } from './sections/AboutTeaserSection';
import { AboutFullSection } from './sections/AboutFullSection';
import { ContactSection } from './sections/ContactSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  const handleNavigate = (page: 'home' | 'about', sectionId?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#C6F432] selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <ProjectsSection />
            <AboutTeaserSection onNavigateToAbout={() => handleNavigate('about')} />
            <ContactSection />
          </>
        ) : (
          <>
            <AboutFullSection />
            <ContactSection />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}