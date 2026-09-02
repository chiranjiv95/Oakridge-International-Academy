import React, { useState, useMemo } from 'react';
import { 
  Users, Mail, Award, BookOpen, GraduationCap, 
  Search, Filter, Sparkles, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { PageId } from '../types';
import { FACULTY_MEMBERS, FACULTY_DEPARTMENTS } from '../data/facultyData';
import { SectionHeading } from '../components/common/SectionHeading';

interface FacultyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenScheduleTour: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({
  onNavigate,
  onOpenScheduleTour,
}) => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All Departments');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaculty = useMemo(() => {
    return FACULTY_MEMBERS.filter((member) => {
      const matchesDept =
        selectedDepartment === 'All Departments' || member.department === selectedDepartment;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        member.name.toLowerCase().includes(q) ||
        member.title.toLowerCase().includes(q) ||
        member.qualification.toLowerCase().includes(q) ||
        member.subjectsTaught.some((s) => s.toLowerCase().includes(q));

      return matchesDept && matchesSearch;
    });
  }, [selectedDepartment, searchQuery]);

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2000&q=80"
            alt="Malda Model Madrasah Faculty and Staff"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" /> World-Class Mentors
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            Faculty & Academic Leadership
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Over 85% of our faculty hold advanced master's and doctoral degrees from leading global universities, bringing real-world research, artistic mastery, and passion into every classroom.
          </p>
        </div>
      </section>

      {/* 2. Faculty Directory Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm mb-12 space-y-6">
            
            {/* Search Input */}
            {/* <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by teacher name, subject, or credential..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div> */}

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Filter Dept:
              </span>
              {FACULTY_DEPARTMENTS.map((dept) => {
                const isActive = selectedDepartment === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              {/* <span>Showing {filteredFaculty.length} educators</span> */}
              {(searchQuery || selectedDepartment !== 'All Departments') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDepartment('All Departments');
                  }}
                  className="text-amber-600 dark:text-amber-400 font-bold hover:underline"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Faculty Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty) => (
              <div
                key={faculty.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-64 overflow-hidden bg-slate-950">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow">
                      {faculty.department}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold font-serif text-white leading-tight">
                        {faculty.name}
                      </h3>
                      <p className="text-xs text-amber-300 font-medium mt-0.5">{faculty.title}</p>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                      <p className="flex items-start gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                        <GraduationCap className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{faculty.qualification}</span>
                      </p>
                      <p className="text-[11px] text-slate-400 pl-5">
                        {faculty.experienceYears} Years Teaching Experience
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {faculty.bio}
                    </p>

                    {faculty.awards && (
                      <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-center gap-2 text-[11px] text-amber-900 dark:text-amber-300 font-semibold">
                        <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span className="truncate">{faculty.awards}</span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Subjects Taught:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {faculty.subjectsTaught.map((sub, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Email Button */}
                <div className="p-6 pt-0">
                  <a
                    href={`mailto:${faculty.email}`}
                    className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-amber-500 hover:border-amber-500 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact via Email</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <div className="text-center py-16">
              <Users className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
              <p className="text-slate-600 dark:text-slate-400 font-medium">No faculty members found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedDepartment('All Departments'); }}
                className="mt-3 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Teacher Mentorship Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2 inline-block">
                Personalized Mentorship
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Experience Seminar Teaching in Action
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Observe our master educators during an upcoming campus shadow day or open house session.
              </p>
            </div>

            <button
              onClick={onOpenScheduleTour}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 transition-colors shadow"
            >
              Book Classroom Observation
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
