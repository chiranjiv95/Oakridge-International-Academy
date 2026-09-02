import React, { useState } from 'react';
import { 
  Newspaper, Calendar, Tag, Clock, User, ArrowRight, 
  MapPin, CheckCircle2, Search, X, Sparkles, Share2, 
  Bookmark, Bell 
} from 'lucide-react';
import { PageId, NewsArticle, SchoolEvent } from '../types';
import { NEWS_ARTICLES, UPCOMING_EVENTS, NEWS_CATEGORIES, EVENT_CATEGORIES } from '../data/newsEventsData';
import { SectionHeading } from '../components/common/SectionHeading';

interface NewsEventsPageProps {
  onNavigate: (page: PageId) => void;
}

export const NewsEventsPage: React.FC<NewsEventsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'events'>('news');
  const [selectedNewsCategory, setSelectedNewsCategory] = useState<string>('All News');
  const [selectedEventCategory, setSelectedEventCategory] = useState<string>('All Events');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [rsvpEvent, setRsvpEvent] = useState<SchoolEvent | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');

  const filteredNews = NEWS_ARTICLES.filter(
    (n) => selectedNewsCategory === 'All News' || n.category === selectedNewsCategory
  );

  const filteredEvents = UPCOMING_EVENTS.filter(
    (e) => selectedEventCategory === 'All Events' || e.category === selectedEventCategory
  );

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSuccess(true);
    setTimeout(() => {
      setRsvpSuccess(false);
      setRsvpEvent(null);
      setRsvpName('');
      setRsvpEmail('');
    }, 2500);
  };

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=80"
            alt="Malda Model Madrasah News & Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Newspaper className="w-3.5 h-3.5" /> Community Dispatch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            News, Events & Academic Calendar
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Stay up to date with student achievements, research publications, campus milestones, and upcoming cultural galas.
          </p>
        </div>
      </section>

      {/* 2. Main Switcher Tabs */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <button
                onClick={() => setActiveTab('news')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'news'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <Newspaper className="w-4 h-4" />
                <span>Academy News & Stories ({NEWS_ARTICLES.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('events')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'events'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Upcoming Events & Dates ({UPCOMING_EVENTS.length})</span>
              </button>
            </div>
          </div>

          {/* TAB 1: News Articles */}
          {activeTab === 'news' && (
            <div>
              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                {NEWS_CATEGORIES.map((cat) => {
                  const isActive = selectedNewsCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedNewsCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((article) => (
                  <article
                    key={article.id}
                    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-56 overflow-hidden bg-slate-950">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow">
                          {article.category}
                        </span>

                        <span className="absolute bottom-4 right-4 px-2.5 py-1 rounded-lg text-[10px] font-medium bg-slate-950/80 backdrop-blur-md text-slate-300 border border-slate-700 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          {article.readTime}
                        </span>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-amber-500" />
                          <span>{article.publishedDate}</span>
                          <span>•</span>
                          <span className="truncate">{article.authorRole}</span>
                        </div>

                        <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                          {article.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {article.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-500 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Read Full Story</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Upcoming Events */}
          {activeTab === 'events' && (
            <div>
              {/* Event Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                {EVENT_CATEGORIES.map((cat) => {
                  const isActive = selectedEventCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedEventCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Events List */}
              <div className="space-y-6 max-w-4xl mx-auto">
                {filteredEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
                  >
                    {/* Date Block */}
                    <div className="sm:col-span-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-center flex flex-col items-center justify-center">
                      <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-1" />
                      <span className="font-serif font-extrabold text-lg text-slate-900 dark:text-white leading-tight">
                        {evt.date.split(',')[0]}
                      </span>
                      <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 mt-0.5">
                        {evt.time.split('PST')[0]}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="sm:col-span-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {evt.category}
                        </span>
                        <span className="text-xs text-slate-400">Audience: {evt.audience}</span>
                      </div>

                      <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                        {evt.title}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {evt.description}
                      </p>

                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        <span>{evt.location}</span>
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="sm:col-span-3 flex flex-col gap-2">
                      <button
                        onClick={() => setRsvpEvent(evt)}
                        className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-sm transition-colors text-center"
                      >
                        {evt.rsvpRequired ? 'RSVP / Register' : 'Add to Calendar'}
                      </button>
                      <span className="text-[10px] text-center text-slate-400">
                        {evt.speakerOrOrganizer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="relative h-60 bg-slate-950 shrink-0">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2 inline-block">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-500" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedArticle.author}</span>
                  <span>({selectedArticle.authorRole})</span>
                </div>
                <span>{selectedArticle.publishedDate}</span>
              </div>

              <div className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {selectedArticle.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-amber-500 dark:text-slate-950 text-white font-bold text-xs"
                >
                  Close Article
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* RSVP Modal */}
      {rsvpEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg">Event RSVP & Registration</h3>
                <p className="text-xs text-slate-300">{rsvpEvent.title}</p>
              </div>
              <button onClick={() => setRsvpEvent(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {rsvpSuccess ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">RSVP Confirmed!</h4>
                  <p className="text-xs text-slate-500">
                    A calendar invite and digital entry pass has been emailed to <span className="font-semibold">{rsvpEmail}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRsvpSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={rsvpEmail}
                      onChange={(e) => setRsvpEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-1 text-slate-600 dark:text-slate-300">
                    <p><span className="font-bold">Date:</span> {rsvpEvent.date} ({rsvpEvent.time})</p>
                    <p><span className="font-bold">Location:</span> {rsvpEvent.location}</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow"
                  >
                    Confirm Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
