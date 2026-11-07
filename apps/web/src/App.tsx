import { useState } from 'react';
import { Layout } from './components/layout/Layout';
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
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
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
    </Layout>
  );
}