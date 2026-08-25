import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, Users, Building, Newspaper, ArrowRight, FileText } from 'lucide-react';
import { PageId } from '../../types';
import { COURSE_CATALOG } from '../../data/academicsData';
import { FACULTY_MEMBERS } from '../../data/facultyData';
import { FACILITIES_DATA } from '../../data/facilitiesData';
import { NEWS_ARTICLES, UPCOMING_EVENTS } from '../../data/newsEventsData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle handled by parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return null;

    const matchedCourses = COURSE_CATALOG.filter(
      (c) => c.title.toLowerCase().includes(q) || c.department.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedFaculty = FACULTY_MEMBERS.filter(
      (f) => f.name.toLowerCase().includes(q) || f.department.toLowerCase().includes(q) || f.title.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedFacilities = FACILITIES_DATA.filter(
      (fac) => fac.name.toLowerCase().includes(q) || fac.category.toLowerCase().includes(q) || fac.description.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedNews = NEWS_ARTICLES.filter(
      (n) => n.title.toLowerCase().includes(q) || n.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 3);

    const matchedEvents = UPCOMING_EVENTS.filter(
      (e) => e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q)
    ).slice(0, 3);

    const totalCount =
      matchedCourses.length +
      matchedFaculty.length +
      matchedFacilities.length +
      matchedNews.length +
      matchedEvents.length;

    return {
      courses: matchedCourses,
      faculty: matchedFaculty,
      facilities: matchedFacilities,
      news: matchedNews,
      events: matchedEvents,
      totalCount,
    };
  }, [query]);

  if (!isOpen) return null;

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 pt-16 sm:pt-24 animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <Search className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, faculty, facilities, news, admissions..."
            autoFocus
            className="w-full bg-transparent border-0 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-white mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs rounded-md bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono"
          >
            ESC
          </button>
        </div>

        {/* Search Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!query ? (
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Page Navigation</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { label: 'Academics & IB', page: 'academics' as PageId, icon: BookOpen },
                  { label: 'Admissions & Aid', page: 'admissions' as PageId, icon: FileText },
                  { label: 'Faculty Directory', page: 'faculty' as PageId, icon: Users },
                  { label: 'Campus Facilities', page: 'facilities' as PageId, icon: Building },
                  { label: 'News & Events', page: 'news-events' as PageId, icon: Newspaper },
                  { label: 'Campus Tour', page: 'about' as PageId, icon: ArrowRight },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleSelect(item.page)}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/10 transition-colors text-left flex items-center gap-2.5 text-slate-800 dark:text-slate-200 group"
                    >
                      <Icon className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 flex items-center justify-between">
                <span>Try typing: "Robotics", "Calculus", "Scholarship", "Olympic pool", "Biology"</span>
              </div>
            </div>
          ) : searchResults && searchResults.totalCount === 0 ? (
            <div className="py-12 text-center">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
              <p className="text-slate-600 dark:text-slate-300 font-medium">No results found for "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for a general topic like "STEM", "Admissions", or "Faculty"</p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Courses */}
              {searchResults && searchResults.courses.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Courses & Programs
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.courses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleSelect('academics')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                            {c.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {c.code} • {c.department} • {c.level}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Faculty */}
              {searchResults && searchResults.faculty.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Faculty & Staff
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.faculty.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => handleSelect('faculty')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <img src={f.image} alt={f.name} className="w-8 h-8 rounded-full object-cover" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {f.name}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{f.title}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Facilities */}
              {searchResults && searchResults.facilities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" /> Campus Facilities
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.facilities.map((fac) => (
                      <button
                        key={fac.id}
                        onClick={() => handleSelect('facilities')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                            {fac.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{fac.category} • {fac.tagline}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* News & Events */}
              {searchResults && (searchResults.news.length > 0 || searchResults.events.length > 0) && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-1.5">
                    <Newspaper className="w-3.5 h-3.5" /> News & Announcements
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.news.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => handleSelect('news-events')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                            {n.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{n.publishedDate} • {n.category}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
