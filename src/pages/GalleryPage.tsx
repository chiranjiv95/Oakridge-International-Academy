import React, { useState, useMemo } from 'react';
import { Camera, Tag, Calendar, Sparkles, Eye, Filter } from 'lucide-react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { SectionHeading } from '../components/common/SectionHeading';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onSelectGalleryItem: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onSelectGalleryItem,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Photos');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All Photos') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=2000&q=80"
            alt="Malda Model Madrasah Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" /> Campus Life & Moments
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            Photo & Campus Life Gallery
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A visual chronicle of scientific breakthroughs, theatrical performances, athletic triumphs, and cherished community celebrations.
          </p>
        </div>
      </section>

      {/* 2. Gallery Grid Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {GALLERY_CATEGORIES.map((cat) => {
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

          <div className="text-xs text-slate-500 mb-6 text-center">
            Showing {filteredItems.length} curated photographs • Click any image to view in full-screen Lightbox
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectGalleryItem(item)}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-end min-h-[320px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent group-hover:via-slate-950/50 transition-colors" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="relative z-10 p-6 text-white space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-300">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold font-serif text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open High-Res Lightbox</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
