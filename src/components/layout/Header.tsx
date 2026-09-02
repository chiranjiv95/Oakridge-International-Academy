import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, UserCheck, Calendar, Phone, 
  ChevronRight, Award, GraduationCap, ArrowRight,
  BookOpen, Sparkles
} from 'lucide-react';
import { PageId } from '../../types';
import { SCHOOL_INFO } from '../../data/schoolData';
import { LATEST_ANNOUNCEMENTS } from '../../data/newsEventsData';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenPortals: () => void;
  onOpenTour: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenPortals,
  onOpenTour,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % LATEST_ANNOUNCEMENTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navItems: { id: PageId; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions', highlight: true },
    { id: 'faculty', label: 'Faculty' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    // { id: 'news-events', label: 'News & Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner & Info Strip */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          
          {/* Announcement Ticker */}
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold uppercase tracking-wider text-[10px] shrink-0">
              <Sparkles className="w-3 h-3" /> Announcement
            </span>
            <p className="truncate text-slate-200 font-medium transition-all duration-500">
              {LATEST_ANNOUNCEMENTS[announcementIndex]}
            </p>
          </div>

          {/* Utility Quick Links */}
          <div className="hidden sm:flex items-center gap-4 text-slate-300 shrink-0">
            <a 
              href={`tel:${SCHOOL_INFO.admissionsPhone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Admissions: {SCHOOL_INFO.admissionsPhone}</span>
            </a>

            <span className="text-slate-700">|</span>

            <button
              onClick={onOpenTour}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors font-medium"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>Book Tour</span>
            </button>

            <span className="text-slate-700">|</span>

            <button
              onClick={onOpenPortals}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Community Portals</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white dark:bg-slate-900 shadow-sm py-4.5'
        } border-b border-slate-200/80 dark:border-slate-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Crest */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-700 p-0.5 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center border border-amber-400/40">
                <GraduationCap className="w-6 h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                  {SCHOOL_INFO.shortName}
                </span>
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
              </div>
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-amber-700 dark:text-amber-400">
                Govt. of West Bengal • English Medium
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 font-bold shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Apply Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick search button */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              title="Search website (Cmd+K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Apply CTA */}
            <button
              onClick={() => handleNavClick('admissions')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white text-sm font-bold shadow-sm hover:shadow transition-all"
            >
              <span>Apply for 2026</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[108px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTour();
                }}
                className="w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-500" />
                <span>Schedule Campus Tour</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortals();
                }}
                className="w-full py-3 px-4 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-amber-500" />
                <span>Parent & Student Portals</span>
              </button>

              <button
                onClick={() => handleNavClick('admissions')}
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <span>Apply for Admission 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
