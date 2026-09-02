import React from 'react';
import { 
  Award, CheckCircle2, Globe, Heart, ShieldCheck, 
  Sparkles, Zap, GraduationCap, Compass, BookOpen, 
  ArrowRight, Users, Check 
} from 'lucide-react';
import { PageId } from '../types';
import { SCHOOL_INFO, LEADERSHIP_TEAM, MILESTONES, CORE_VALUES } from '../data/schoolData';
import { SectionHeading } from '../components/common/SectionHeading';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onOpenScheduleTour: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenTour,
  onOpenScheduleTour,
}) => {
  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2000&q=80"
            alt="Athena Commons Library"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" /> Our Heritage & Philosophy
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            About {SCHOOL_INFO.name}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A flagship English-medium government model institution under the Department of Minority Affairs & Madrasah Education, Government of West Bengal, combining modern scientific inquiry, digital literacy, and moral character.
          </p>
        </div>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  To provide accessible, high-caliber English-medium education in Malda that empowers every student with modern scientific knowledge, critical thinking, technological proficiency, and ethical leadership to shine on state and national platforms.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Knowledge, Character and Excellence</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {SCHOOL_INFO.name} is dedicated to nurturing holistic growth through interactive smart classrooms, state-of-the-art science laboratories, complete English immersion, and 100% government scholarship enablement, ensuring no meritorious student is left behind.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                <span>Scientific Temper • Multilingual Fluency • Moral Integrity</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Character"
            title="The Core Values that Guide Our Community"
            subtitle="These enduring principles anchor every classroom discussion, laboratory experiment, and athletic activity at Malda Model Madrasah."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 font-bold">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                  {val.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Principal's Detailed Address */}
      <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-amber-500/40">
                <img
                  src={LEADERSHIP_TEAM[0].image}
                  alt={LEADERSHIP_TEAM[0].name}
                  className="w-full h-[380px] object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-serif text-xl font-bold text-white">{LEADERSHIP_TEAM[0].name}</h4>
                <p className="text-xs text-amber-400 font-medium">{LEADERSHIP_TEAM[0].role}</p>
                <p className="text-[11px] text-slate-400 mt-1">{LEADERSHIP_TEAM[0].credentials}</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Headmaster's Address
              </span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white leading-tight">
                "We cultivate scientific curiosity, linguistic fluency, and timeless moral integrity."
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Dear Prospective Students, Guardians, and Well-Wishers:
                </p>
                <p>
                  Malda Government Model Madrasah (English Medium) stands as a proud milestone in public education under the Department of Minority Affairs & Madrasah Education, Government of West Bengal. We believe that quality English-medium education combined with strong ethical roots and modern scientific training is the ultimate engine for individual and societal upliftment.
                </p>
                <p>
                  Inside our smart classrooms and composite laboratories, our students conduct advanced physics and chemistry experiments, master competitive mathematics, engage in eloquent English debates, and learn computer programming in Python. At the same time, we ensure 100% scholarship coverage under Aikyashree, Kanyashree, and SVMCM schemes so that every child can realize their dream of becoming doctors, engineers, researchers, and civil servants.
                </p>
                <p className="font-serif italic text-amber-300">
                  I warmly welcome you to visit our green 15-acre campus at Chandan Park, Malda, and witness our academic transformation.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenScheduleTour}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <span>Book Campus Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`mailto:${LEADERSHIP_TEAM[0].email}`}
                  className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-medium text-sm transition-colors"
                >
                  Contact Headmaster's Desk
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Historical Milestone Timeline */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Journey"
            title="Milestones of Growth & Distinction"
            subtitle="Tracing our journey from historic establishment in Malda to a modern English-medium government model madrasah."
          />

          <div className="relative border-l-2 border-amber-500/30 ml-4 sm:ml-32 space-y-12 py-4">
            {MILESTONES.map((m, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                
                {/* Year Marker Badge */}
                <div className="hidden sm:flex absolute -left-32 top-0 w-24 text-right">
                  <span className="font-serif font-extrabold text-lg text-amber-600 dark:text-amber-400">
                    {m.year}
                  </span>
                </div>

                {/* Timeline Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-white dark:border-slate-900 shadow-sm group-hover:scale-125 transition-transform" />

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all">
                  <span className="sm:hidden inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Accreditations & Affiliations */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Statutory Standing"
            title="Government Recognition & Board Affiliations"
            subtitle="Malda Government Model Madrasah operates under the full statutory authority of the Government of West Bengal."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'West Bengal Board of Madrasah Education',
                desc: 'Statutory recognized curriculum for Upper Primary and High Madrasah (Secondary) board examinations.',
                badge: 'WBBME Recognized'
              },
              {
                name: 'WBCHSE (Higher Secondary Council)',
                desc: 'Authorized (10+2) Higher Secondary curriculum in Science, Arts, and Commerce streams in English medium.',
                badge: 'WBCHSE Affiliated'
              },
              {
                name: 'Minority Affairs & Madrasah Education Dept.',
                desc: 'Operated and funded as a flagship model institution by the Government of West Bengal.',
                badge: 'Govt. of West Bengal'
              },
              {
                name: 'ICT @ Schools & Smart Classroom Project',
                desc: 'Equipped with computer laboratories, high-speed broadband, and interactive digital display panels.',
                badge: 'Digital Education'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.badge}
                  </span>
                  <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white mt-1">
                    {item.name}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <Check className="w-4 h-4" />
                  <span>Statutory & Active</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-700">
            <div className="text-left">
              <h4 className="text-xl font-bold font-serif">Explore Our Academic Curriculum</h4>
              <p className="text-xs text-slate-300 mt-1">Learn about our English medium science stream, smart classrooms, and NEET/JEE coaching.</p>
            </div>
            <button
              onClick={() => onNavigate('academics')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shrink-0 transition-colors flex items-center gap-2"
            >
              <span>View Academics & Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
