import React, { useState } from 'react';
import { 
  GraduationCap, Mail, Phone, MapPin, ArrowRight, ShieldCheck, 
  Award, Globe, CheckCircle2, Heart 
} from 'lucide-react';
import { PageId } from '../../types';
import { SCHOOL_INFO } from '../../data/schoolData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenTour: () => void;
  onOpenPortals: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTour, onOpenPortals }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Pre-footer Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
              <Award className="w-3.5 h-3.5" /> Admissions Cycle 2026-2027
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Ready to embark on an exceptional educational journey?
            </h3>
            <p className="mt-2 text-slate-300 text-sm sm:text-base">
              Experience the excellence of Malda Model Madrasah in person or submit your online application today.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenTour}
              className="px-5 py-3 rounded-xl border border-slate-600 hover:border-amber-400 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm"
            >
              Schedule Campus Tour
            </button>
            <button
              onClick={() => handleNav('admissions')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 p-0.5 border border-amber-400/40 flex items-center justify-center text-amber-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white leading-tight">
                  {SCHOOL_INFO.name}
                </h4>
                <p className="text-xs text-amber-400">Govt. of West Bengal • English Medium</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering students through high-quality English-medium instruction, modern STEM laboratories, and moral character under the Department of Minority Affairs & Madrasah Education, Government of West Bengal.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.phone} (Main Desk)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_INFO.generalEmail}</span>
              </p>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Navigation
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Madrasah
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors">
                  Academic Sections
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-white transition-colors">
                  Admissions & Aid
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faculty')} className="hover:text-white transition-colors">
                  Faculty Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('facilities')} className="hover:text-white transition-colors">
                  Campus Facilities
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors">
                  Photo & Media Gallery
                </button>
              </li>
              {/* <li>
                <button onClick={() => handleNav('news-events')} className="hover:text-white transition-colors">
                  News & Calendar
                </button>
              </li> */}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Programs & Portals
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors">
                  Higher Secondary Science & Arts (WBCHSE)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors">
                  Secondary High Madrasah (WBBME)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('academics')} className="hover:text-white transition-colors">
                  NEET & JEE Integrated Mentorship
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admissions')} className="hover:text-white transition-colors">
                  Aikyashree & Kanyashree Schemes
                </button>
              </li>
              <li>
                <button onClick={onOpenPortals} className="hover:text-amber-400 font-medium transition-colors">
                  Banglar Shiksha Portal Sync
                </button>
              </li>
              <li>
                <button onClick={onOpenPortals} className="hover:text-amber-400 font-medium transition-colors">
                  Student E-Learning Portal
                </button>
              </li>
              <li>
                <button onClick={onOpenPortals} className="hover:text-amber-400 font-medium transition-colors">
                  Faculty & Staff Intranet
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Model Madrasah Gazette
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to receive official circulars, examination notifications, board results, and academic achievement bulletins.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 bg-emerald-950/60 border border-emerald-700/60 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing to the Model Madrasah Gazette!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe to Circulars</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              <p className="text-[11px] text-slate-500">
                Affiliations: WBBME • WBCHSE • Dept. of Minority Affairs & Madrasah Education, Govt. of West Bengal
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Accreditations bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Government Portal Disclaimers</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">RTI & Disclosures</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Helpline: {SCHOOL_INFO.emergencyHotline}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
