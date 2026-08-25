import React, { useState, useMemo } from 'react';
import { 
  Building, Compass, CheckCircle2, Layers, Sparkles, 
  MapPin, ShieldCheck, ArrowRight, Eye, Leaf 
} from 'lucide-react';
import { PageId } from '../types';
import { FACILITIES_DATA, FACILITY_CATEGORIES } from '../data/facilitiesData';
import { SectionHeading } from '../components/common/SectionHeading';

interface FacilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onOpenScheduleTour: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({
  onNavigate,
  onOpenTour,
  onOpenScheduleTour,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Facilities');

  const filteredFacilities = useMemo(() => {
    if (selectedCategory === 'All Facilities') return FACILITIES_DATA;
    return FACILITIES_DATA.filter((f) => f.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=2000&q=80"
            alt="Oakridge Campus Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5" /> 32-Acre Innovation Campus
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            Campus Infrastructure & Facilities
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Architecturally designed to maximize natural daylight, empirical inquiry, creative inspiration, and athletic distinction in a sustainable, net-zero environment.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenTour}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Launch Interactive Virtual 360° Walkthrough</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Facilities Filter & Directory */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {FACILITY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md scale-105'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-500/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Facility Cards */}
          <div className="space-y-12">
            {filteredFacilities.map((facility, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={facility.id}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative min-h-[320px] bg-slate-950 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow">
                      {facility.category}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                      <span className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700">
                        {facility.specs}
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        {facility.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white mt-1">
                        {facility.name}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Key Features & Equipment
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {facility.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <button
                        onClick={onOpenTour}
                        className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 flex items-center gap-1.5"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View in 360° Virtual Tour</span>
                      </button>

                      <button
                        onClick={onOpenScheduleTour}
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-xs transition-colors"
                      >
                        Tour in Person
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Campus Sustainability & Safety Banner */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-serif">100% Net-Zero Sustainable Campus</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Oakridge is LEED Platinum certified. Our rooftop solar arrays, rainwater reclamation gardens, and on-site organic greenhouse provide students with daily experiential environmental lessons.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold font-serif">Comprehensive Safety & Health Protocols</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Gated perimeter access with certified 24/7 security attendants, biometric visitor registration, full-time registered pediatric nurses, and GPS-tracked transportation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
