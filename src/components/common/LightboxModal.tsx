import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  isOpen,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, item, items]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-amber-600 transition-colors border border-slate-700 focus:outline-none"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Nav buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-600 transition-colors border border-slate-700 hidden sm:flex items-center justify-center focus:outline-none"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-600 transition-colors border border-slate-700 hidden sm:flex items-center justify-center focus:outline-none"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content box */}
      <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="relative w-full bg-black/60 flex items-center justify-center overflow-hidden flex-1 min-h-[300px] max-h-[60vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[60vh]"
          />
        </div>

        <div className="p-6 bg-slate-900 text-white border-t border-slate-800">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Tag className="w-3.5 h-3.5" />
              {item.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              {item.date}
            </span>
            <span className="ml-auto text-xs text-slate-400">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <h3 className="text-xl font-bold font-serif text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
