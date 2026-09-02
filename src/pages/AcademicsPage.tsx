import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Sparkles, CheckCircle2, Award, ChevronRight, 
  Search, Filter, GraduationCap, Cpu, Globe, ArrowRight,
  Layers, Compass, FileCheck 
} from 'lucide-react';
import { PageId } from '../types';
import { ACADEMIC_DIVISIONS, COURSE_CATALOG, CO_CURRICULAR_CLUBS, ACADEMIC_COUNSELING } from '../data/academicsData';
import { SectionHeading } from '../components/common/SectionHeading';

interface AcademicsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenScheduleTour: () => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({
  onNavigate,
  onOpenScheduleTour,
}) => {
  const [selectedDivisionTab, setSelectedDivisionTab] = useState<'primary' | 'middle' | 'high'>('high');
  const [courseSearch, setCourseSearch] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  const currentDivision = ACADEMIC_DIVISIONS.find((d) => d.id === selectedDivisionTab) || ACADEMIC_DIVISIONS[2];

  const departments = ['All', 'Sciences', 'Mathematics', 'Computer Science', 'Humanities', 'Fine Arts', 'World Languages'];
  const levels = ['All', 'AP / Honors', 'IB Higher Level', 'Advanced', 'Intermediate', 'Foundational', 'Standard'];

  const filteredCourses = useMemo(() => {
    return COURSE_CATALOG.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
        course.code.toLowerCase().includes(courseSearch.toLowerCase()) ||
        course.description.toLowerCase().includes(courseSearch.toLowerCase());

      const matchesDept = selectedDepartment === 'All' || course.department === selectedDepartment;
      const matchesLevel = selectedLevel === 'All' || course.level.includes(selectedLevel) || course.level === selectedLevel;

      return matchesSearch && matchesDept && matchesLevel;
    });
  }, [courseSearch, selectedDepartment, selectedLevel]);

  return (
    <div className="w-full">
      {/* 1. Hero Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=80"
            alt="Malda Model Madrasah Academics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" /> Curricular Excellence
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            Academics & Curricular Pathways
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From early inquiry in the IB Primary Years to college-level research in the IB Diploma and AP Capstone, we foster agile minds capable of mastering complex disciplines.
          </p>
        </div>
      </section>

      {/* 2. Academic Divisions Switcher */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Learning Continuum"
            title="Academic Divisions & Programs"
            subtitle="Tailored pedagogical approaches crafted for each crucial stage of intellectual and emotional development."
          />

          {/* Division Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 shadow-inner">
              {ACADEMIC_DIVISIONS.map((division) => {
                const isActive = selectedDivisionTab === division.id;
                return (
                  <button
                    key={division.id}
                    onClick={() => setSelectedDivisionTab(division.id as any)}
                    className={`px-5 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-md scale-102'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                    }`}
                  >
                    {division.name.split('&')[0]} ({division.grades})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Division Feature Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Division Photo */}
            <div className="lg:col-span-5 relative min-h-[340px] bg-slate-950">
              <img
                src={currentDivision.image}
                alt={currentDivision.name}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2 inline-block">
                  {currentDivision.grades} • {currentDivision.ageGroup}
                </span>
                <p className="text-xs text-slate-300">Division Dean: {currentDivision.headOfDivision}</p>
              </div>
            </div>

            {/* Division Specs */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {currentDivision.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white mt-1">
                  {currentDivision.name}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentDivision.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Key Distinctive Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentDivision.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {currentDivision.subjects.map((sub, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {sub}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenScheduleTour}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <span>Experience This Division</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Course Catalog */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Course Directory"
            title="Explore Our Course Catalog"
            subtitle="Search and filter our comprehensive list of foundational, Honors, AP, and IB Higher Level courses."
          />

          {/* Search & Filter Controls */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Search input */}
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search course title, code, or topic (e.g. Artificial Intelligence, Calculus)..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Department filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>Department: {dept}</option>
                  ))}
                </select>
              </div>

              {/* Level filter */}
              <div className="md:col-span-3">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  {levels.map((lvl) => (
                    <option key={lvl} value={lvl}>Level: {lvl}</option>
                  ))}
                </select>
              </div>

            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
              <span>Showing {filteredCourses.length} of {COURSE_CATALOG.length} listed courses</span>
              {(courseSearch || selectedDepartment !== 'All' || selectedLevel !== 'All') && (
                <button
                  onClick={() => {
                    setCourseSearch('');
                    setSelectedDepartment('All');
                    setSelectedLevel('All');
                  }}
                  className="text-amber-600 dark:text-amber-400 font-bold hover:underline"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      {course.code}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                      {course.level}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white leading-snug">
                    {course.title}
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    Department: {course.department}
                  </p>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold">{course.credits || '1.0 Credit'}</span>
                  <span className="capitalize text-[11px] text-amber-600 dark:text-amber-400 font-bold">
                    {course.division.toUpperCase()} Division
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
              <p className="text-slate-600 dark:text-slate-400 font-medium">No courses match the selected search criteria.</p>
              <button
                onClick={() => { setCourseSearch(''); setSelectedDepartment('All'); setSelectedLevel('All'); }}
                className="mt-3 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
              >
                Clear all search filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. Co-Curricular & Student Societies */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Beyond the Classroom"
            title="Co-Curricular Clubs & Academic Societies"
            subtitle="Student-led initiatives that cultivate passion projects, teamwork, and championship achievements on state and global stages."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CO_CURRICULAR_CLUBS.map((club, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      {club.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                      {club.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-serif text-slate-900 dark:text-white">
                    {club.name}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {club.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>Weekly Faculty Mentorship</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-300">Open to All Grades</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. College Counseling & Placement */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Higher Education"
            title="Dedicated 1:1 College Counseling & Placements"
            subtitle="Our four-year comprehensive guidance program ensures every scholar discovers their ideal university environment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMIC_COUNSELING.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                  Included for All High Schoolers
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('admissions')}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Explore Admissions Criteria & Apply</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
