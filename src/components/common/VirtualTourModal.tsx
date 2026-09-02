import React, { useState } from 'react';
import { X, MapPin, Sparkles, Compass, Eye, Volume2, ArrowRight } from 'lucide-react';
import { FACILITIES_DATA } from '../../data/facilitiesData';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFacilities: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onNavigateToFacilities,
}) => {
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const currentFacility = FACILITIES_DATA[activeFacilityIndex] || FACILITIES_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif">Malda Model Madrasah Interactive Virtual Tour</h3>
              <p className="text-xs text-slate-400">Explore our 15-acre modern campus facilities & learning spaces</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tour Stage */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Main Visual Display */}
          <div className="lg:col-span-8 relative bg-black min-h-[340px] flex flex-col justify-end">
            <img
              src={currentFacility.image}
              alt={currentFacility.name}
              className="absolute inset-0 w-full h-full object-cover opacity-85 transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

            {/* Visual Hotspot Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              <span>360° Virtual Walkthrough View</span>
            </div>

            {/* Sound narration toggle */}
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-medium border transition-colors ${
                isPlayingAudio 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold' 
                  : 'bg-slate-900/80 text-slate-200 border-slate-700 hover:bg-slate-800'
              }`}
            >
              <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
              <span>{isPlayingAudio ? 'Audio Narration Active' : 'Listen to Tour Guide'}</span>
            </button>

            {/* Tour spot metadata overlay */}
            <div className="relative z-10 p-6">
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2">
                {currentFacility.category}
              </span>
              <h4 className="text-2xl sm:text-3xl font-bold font-serif text-white">{currentFacility.name}</h4>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">{currentFacility.tagline}</p>
            </div>
          </div>

          {/* Sidebar Tour Stations */}
          <div className="lg:col-span-4 bg-slate-900/95 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col p-5 overflow-y-auto">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Tour Stops & Campus Landmarks
            </h4>

            <div className="space-y-2 flex-1">
              {FACILITIES_DATA.map((fac, idx) => {
                const isActive = idx === activeFacilityIndex;
                return (
                  <button
                    key={fac.id}
                    onClick={() => setActiveFacilityIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 border ${
                      isActive
                        ? 'bg-amber-500/15 border-amber-500/50 text-white shadow-sm'
                        : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      isActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-sm leading-tight">{fac.name}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{fac.category} • {fac.specs.split(',')[0]}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Call to action footer */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  onClose();
                  onNavigateToFacilities();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>View Full Facilities Directory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
