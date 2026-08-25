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
            About Oakridge International Academy
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Founded on the ideals of fearless intellectual exploration, ethical stewardship, and international mindedness, we prepare students to lead with clarity, competence, and empathy.
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
                  To be an internationally recognized pinnacle of academic excellence where students from all cultures are ignited to discover their passions, master analytical rigor, and courageously transform society through ethical innovation and humanistic leadership.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400">
                <span>Ad Astra Per Aspera — Through Hardship to the Stars</span>
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
                  Oakridge International Academy educates the whole person in a supportive, intellectually stimulating community. We challenge students to think critically, communicate articulately across cultural boundaries, uphold integrity, and assume proactive responsibility for their environment and fellow human beings.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400">
                <span>Inquiry • Compassion • Character • Global Impact</span>
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
            subtitle="These enduring principles anchor every classroom discussion, athletic endeavor, and social initiative at Oakridge."
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
                Head of School Address
              </span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white leading-tight">
                "We do not merely teach students what to think; we empower them with how to think."
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Dear Prospective Families, Students, and Friends:
                </p>
                <p>
                  For over three decades, Oakridge has stood as a beacon of uncompromising academic rigor, creative fearlessness, and deep moral purpose. In a rapidly evolving world transformed by artificial intelligence and shifting geopolitical landscapes, the true value of education lies not simply in test scores, but in cultivating intellectual agility, ethical conviction, and the capacity for deep human empathy.
                </p>
                <p>
                  Walking through our hallways, you will see Grade 4 students coding robotic environmental probes, Grade 8 scholars debating constitutional liberties in the Socratic style, and high school seniors defending original bioinformatics dissertations. Yet alongside these milestones, you will find a culture where kindness is cherished, where diverse viewpoints are respectfully engaged, and where every child is personally known and championed.
                </p>
                <p className="font-serif italic text-amber-300">
                  I warmly invite you to visit our campus, observe our seminars, and experience the Oakridge spirit firsthand.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenScheduleTour}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
                >
                  <span>Book a Meeting & Campus Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`mailto:${LEADERSHIP_TEAM[0].email}`}
                  className="px-5 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-medium text-sm transition-colors"
                >
                  Contact the Principal's Desk
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
            subtitle="From our humble founding in 1988 with 65 students to a globally celebrated 32-acre international research campus."
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
            badge="Global Standing"
            title="Accreditations & International Affiliations"
            subtitle="Oakridge Academy maintains the highest standards of international institutional accreditation and global curricular authorization."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'IB World Continuum School',
                desc: 'Fully authorized for the Primary Years (PYP), Middle Years (MYP), and Diploma Programme (IBDP).',
                badge: 'IB World School'
              },
              {
                name: 'Council of International Schools (CIS)',
                desc: 'Accredited with distinction for high standards of educational quality and child protection safeguarding.',
                badge: 'CIS Member'
              },
              {
                name: 'Cambridge International Assessment',
                desc: 'Authorized examination center for Cambridge IGCSE and International A-Levels qualifications.',
                badge: 'Cambridge Board'
              },
              {
                name: 'NEASC Accreditation',
                desc: 'New England Association of Schools and Colleges accreditation ensuring global transcript equivalency.',
                badge: 'NEASC Member'
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
                  <span>Fully Certified & Active</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-700">
            <div className="text-left">
              <h4 className="text-xl font-bold font-serif">Explore the Academic Experience</h4>
              <p className="text-xs text-slate-300 mt-1">Learn how our curriculum empowers scholars across every developmental tier.</p>
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
