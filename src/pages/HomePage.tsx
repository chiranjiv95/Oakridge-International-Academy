import React from 'react';
import { 
  ArrowRight, Award, BookOpen, Calendar, CheckCircle2, ChevronRight, 
  Compass, Cpu, GraduationCap, Heart, MapPin, Play, Sparkles, 
  Trophy, Users, Volume2, ShieldCheck, Star 
} from 'lucide-react';
import { PageId, GalleryItem } from '../types';
import { SCHOOL_INFO, KEY_STATS, HIGHLIGHT_PILLARS, LEADERSHIP_TEAM, TESTIMONIALS } from '../data/schoolData';
import { UPCOMING_EVENTS, NEWS_ARTICLES, LATEST_ANNOUNCEMENTS } from '../data/newsEventsData';
import { FACILITIES_DATA } from '../data/facilitiesData';
import { GALLERY_ITEMS } from '../data/galleryData';
import { SectionHeading } from '../components/common/SectionHeading';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onSelectGalleryItem: (item: GalleryItem) => void;
  onOpenScheduleTour: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenTour,
  onSelectGalleryItem,
  onOpenScheduleTour,
}) => {
  const principal = LEADERSHIP_TEAM[0];
  const upcomingEventsPreview = UPCOMING_EVENTS.slice(0, 3);
  const newsPreview = NEWS_ARTICLES.slice(0, 3);
  const galleryPreview = GALLERY_ITEMS.slice(0, 6);
  const facilitiesPreview = FACILITIES_DATA.slice(0, 4);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Background photo with subtle zoom and dark overlay */}
        <div className="absolute inset-0 z-0">
          {/* Old banner image:
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
            alt="Malda Government Model Madrasah Campus Quadrangle"
            className="w-full h-full object-cover opacity-35 filter brightness-90"
          /> */}
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmA47jdAhqBnR3Q8-QaQnPfHs1AQDCjQbfdFRGCzKy1CJLVzNSbosfv4alxmrNgzGf-iav1KA8kWkRBchs0DmbpLT5GlzDUrAD7eFUr4G1CB5R02ZYs1dOyT2SgboClxVsCwcUSeA=s680-w680-h510-rw"
            alt="Malda Government Model Madrasah Campus Building"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold mb-6 shadow-inner animate-pulse">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Premier English-Medium Government Model Institution • Malda, West Bengal</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-white max-w-5xl leading-[1.1]">
            Knowledge, Character & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
              Academic Excellence
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            At {SCHOOL_INFO.name}, we provide high-quality English-medium schooling, advanced science laboratories, smart digital classrooms, and 100% government scholarship enablement across our sprawling 15-acre campus.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Apply for 2026-2027</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* <button
              onClick={onOpenTour}
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-base backdrop-blur-sm transition-all flex items-center gap-2.5 shadow-md"
            >
              <Compass className="w-5 h-5 text-amber-400" />
              <span>Interactive Virtual Tour</span>
            </button> */}

            {/* <button
              onClick={onOpenScheduleTour}
              className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/10 border border-slate-600 text-slate-200 font-semibold text-base transition-all flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Schedule Campus Visit</span>
            </button> */}
          </div>

          {/* Quick Accreditations Pill */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 uppercase tracking-widest font-semibold">
            <span>• WBBME Recognized</span>
            <span>• WBCHSE Affiliated</span>
            <span>• Govt. of West Bengal</span>
            <span>• ICT Smart Classroom Scheme</span>
          </div>

        </div>
      </section>

      {/* 2. Key Stats Strip */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {KEY_STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center p-2 border-r last:border-r-0 border-slate-100 dark:border-slate-800">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-slate-900 dark:text-amber-400">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 hidden sm:block">
                {stat.description?.split(' ')[0]} {stat.description?.split(' ')[1]} {stat.description?.split(' ')[2]}...
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Welcome & School Introduction */}
      <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 max-w-xs bg-slate-900 text-white p-5 rounded-2xl border border-slate-700 shadow-2xl">
                <p className="text-xs italic text-slate-300 font-serif leading-relaxed">
                  "{principal.quote}"
                </p>
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="font-bold text-amber-400">{principal.name}</span>
                  <span className="text-slate-400">Head of School</span>
                </div>
              </div>

              {/* Pattern block backdrop */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-500/10 rounded-2xl -z-0" />
            </div>

            {/* Right Text Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                <span>Welcome to Malda Model Madrasah</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 dark:text-white leading-tight">
                Where Academic Distinction Meets Purpose & Character
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                As a premier government model institution under the Department of Minority Affairs & Madrasah Education, Government of West Bengal, we deliver rigorous English-medium schooling, smart digital classrooms, advanced STEM labs, and dedicated NEET/JEE coaching to unlock every student's highest potential.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'WBBME & WBCHSE English-Medium Instruction',
                  'High-Tech Composite Science & ICT Computer Labs',
                  'In-House NEET, JEE & Board Mentorship Cell',
                  '100% Government Scholarships (Aikyashree, Kanyashree, SVMCM)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm shadow transition-colors flex items-center gap-2"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('faculty')}
                  className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors"
                >
                  Meet Our Faculty
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Pillars of Excellence */}
      <section className="py-20 sm:py-28 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pillars of Excellence"
            title="The Four Foundations of Model Madrasah Education"
            subtitle="Our multidimensional curriculum balances rigorous English-medium scholarship with digital innovation, creative expression, and athletic discipline."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHT_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow">
                    {pillar.badge}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <button
                      onClick={() => onNavigate('academics')}
                      className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Department</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Announcements & Notice Board */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Live Bulletins
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Official Academy Notice Board & Alerts
              </h2>
            </div>
            <button
              onClick={() => onNavigate('news-events')}
              className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-amber-400 hover:bg-slate-800 text-sm font-semibold transition-all flex items-center gap-2 shrink-0"
            >
              <span>View All Official Bulletins</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {LATEST_ANNOUNCEMENTS.map((notice, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-amber-400">
                    Notice #{idx + 1}
                  </span>
                  <span className="text-[11px] text-slate-400">Active</span>
                </div>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  {notice}
                </p>
                <div className="pt-2 text-xs text-amber-400/90 font-semibold flex items-center gap-1">
                  <span>Read full release</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Upcoming Events Spotlight */}
      <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800 mb-3">
                <Calendar className="w-3.5 h-3.5" /> Academic & Community Calendar
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 dark:text-white">
                Upcoming Events & Seminars
              </h2>
            </div>
            <button
              onClick={() => onNavigate('news-events')}
              className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-2 self-start md:self-auto"
            >
              <span>Full Academic Calendar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEventsPreview.map((evt) => (
              <div
                key={evt.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      {evt.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {evt.audience}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-slate-900 dark:text-white leading-snug">
                    {evt.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {evt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>{evt.location}</span>
                  </div>

                  <button
                    onClick={() => onNavigate('news-events')}
                    className="w-full mt-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-amber-500 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors"
                  >
                    {evt.rsvpRequired ? 'RSVP / Register Attendance' : 'Event Details'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Facilities Showcase Preview */}
      <section className="py-20 sm:py-28 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Campus Architecture"
            title="World-Class Learning Environments"
            subtitle="Designed to spark curiosity, collaboration, and high-performance achievement across academics, athletics, and the arts."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilitiesPreview.map((fac) => (
              <div
                key={fac.id}
                className="group relative rounded-2xl overflow-hidden bg-slate-950 shadow-md flex flex-col justify-end min-h-[300px]"
              >
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="relative z-10 p-6">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950">
                    {fac.category}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-white mt-2">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {fac.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('facilities')}
              className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Explore All Campus Facilities (Labs, Stadium, Theaters)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Gallery Highlights */}
      <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Campus Life in Action"
            title="Moments of Discovery, Camaraderie & Joy"
            subtitle="Click on any photograph to open the high-resolution lightbox view."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryPreview.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectGalleryItem(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-4/3 bg-slate-900 shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/60 transition-colors flex items-end p-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                      {item.category}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold font-serif mt-1.5 text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('gallery')}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 font-semibold text-sm transition-colors inline-flex items-center gap-2"
            >
              <span>View Full Photo & Event Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-20 sm:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Community Perspectives"
            title="Voices of Our Students, Parents & Alumni"
            subtitle="Hear how Malda Model Madrasah transforms academic confidence and prepares young scholars for premier medical, engineering, and university careers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">{t.role}</p>
                    <p className="text-[11px] text-slate-400">{t.yearOrClass}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Call to Action Banner */}
      <section className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-4 inline-block">
            Admissions for Academic Session 2026-2027
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
            Begin Your Journey with Malda Model Madrasah
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our administrative office is ready to assist your family with admission guidelines, eligibility criteria, and state government scholarship enrollments.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl transition-all flex items-center gap-2"
            >
              <span>Submit Admission Inquiry</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onOpenScheduleTour}
              className="px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-base transition-all flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>Book In-Person Tour</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
