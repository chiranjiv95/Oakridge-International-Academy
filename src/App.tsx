import React, { useState, useEffect } from 'react';
import { PageId, GalleryItem } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { FacultyPage } from './pages/FacultyPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { GalleryPage } from './pages/GalleryPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { ContactPage } from './pages/ContactPage';

// Common Modals
import { LightboxModal } from './components/common/LightboxModal';
import { VirtualTourModal } from './components/common/VirtualTourModal';
import { ScheduleTourModal } from './components/common/ScheduleTourModal';
import { QuickSearchModal } from './components/common/QuickSearchModal';
import { PortalsModal } from './components/common/PortalsModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Modals state
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isScheduleTourOpen, setIsScheduleTourOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPortalsOpen, setIsPortalsOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Dark mode class on html / documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top on page transition
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenTour={() => setIsVirtualTourOpen(true)}
        onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPortals={() => setIsPortalsOpen(true)}
      />

      {/* Main Routed Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenTour={() => setIsVirtualTourOpen(true)}
            onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
            onSelectGalleryItem={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenTour={() => setIsVirtualTourOpen(true)}
            onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
          />
        )}

        {currentPage === 'academics' && (
          <AcademicsPage
            onNavigate={handleNavigate}
            onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
          />
        )}

        {currentPage === 'admissions' && (
          <AdmissionsPage
            onNavigate={handleNavigate}
            onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
          />
        )}

        {currentPage === 'faculty' && (
          <FacultyPage
            onNavigate={handleNavigate}
            onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
          />
        )}

        {currentPage === 'facilities' && (
          <FacilitiesPage
            onNavigate={handleNavigate}
            onOpenTour={() => setIsVirtualTourOpen(true)}
            onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onSelectGalleryItem={(item) => setLightboxItem(item)}
          />
        )}

        {currentPage === 'news' && (
          <NewsEventsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
          />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTour={() => setIsVirtualTourOpen(true)}
        onOpenScheduleTour={() => setIsScheduleTourOpen(true)}
      />

      {/* Global Modals */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
      />

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        onOpenSchedule={() => {
          setIsVirtualTourOpen(false);
          setIsScheduleTourOpen(true);
        }}
      />

      <ScheduleTourModal
        isOpen={isScheduleTourOpen}
        onClose={() => setIsScheduleTourOpen(false)}
      />

      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <PortalsModal
        isOpen={isPortalsOpen}
        onClose={() => setIsPortalsOpen(false)}
      />

    </div>
  );
}
