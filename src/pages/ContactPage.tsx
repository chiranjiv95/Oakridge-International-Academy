import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, 
  Car, Bus, Compass, ShieldAlert, Sparkles, Building, 
  MessageSquare, User 
} from 'lucide-react';
import { PageId } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { SectionHeading } from '../components/common/SectionHeading';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenScheduleTour: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenScheduleTour,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions & Enrollment',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
            alt="Malda Model Madrasah Contact Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" /> Reach Out
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            Contact & Campus Location
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We are here to assist with admissions inquiries, campus visits, scholarship verifications, and general academic information.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Information & Directory */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Quick Info Card */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-6">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">
                    {SCHOOL_INFO.shortName} Campus
                  </h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mt-1">Govt. of West Bengal • English Medium Model Madrasah</p>
                </div>

                <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Campus Address</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{SCHOOL_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Telephone Directory</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Admissions & Info: {SCHOOL_INFO.admissionsPhone}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Office Desk: {SCHOOL_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Electronic Mail</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{SCHOOL_INFO.email}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{SCHOOL_INFO.generalEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/15 text-purple-600 dark:text-purple-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Office & School Hours</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{SCHOOL_INFO.officeHours}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Classes: {SCHOOL_INFO.schoolHours}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={onOpenScheduleTour}
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Book Guided In-Person Campus Visit</span>
                  </button>
                </div>
              </div>

              {/* Department Contact Directory */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-4">
                <h4 className="font-serif font-bold text-base text-amber-400">Departmental Desks</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="font-bold text-slate-200">Admissions Office</p>
                    <p className="text-slate-400 mt-0.5">admissions@maldamodelmadrasah.edu.in</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="font-bold text-slate-200">Headmaster's Desk</p>
                    <p className="text-slate-400 mt-0.5">headmaster@maldamodelmadrasah.edu.in</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="font-bold text-slate-200">Scholarship Cell</p>
                    <p className="text-slate-400 mt-0.5">scholarships@maldamodelmadrasah.edu.in</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <p className="font-bold text-slate-200">First Aid Clinic</p>
                    <p className="text-slate-400 mt-0.5">{SCHOOL_INFO.emergencyHotline}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl">
                
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800 mb-2 inline-block">
                    Inquiry Desk
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white">
                    Send an Official Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Our administrative team typically replies within one business day.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">
                      Message Dispatched!
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-slate-900 dark:text-white">{contactForm.name}</span>. Your inquiry regarding <span className="font-bold text-slate-900 dark:text-white">{contactForm.subject}</span> has been routed to the appropriate department coordinator.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setContactForm({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'Admissions & Enrollment',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-amber-500 dark:text-slate-950 text-white font-bold text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Catherine Chen"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Subject / Department Routing *
                        </label>
                        <select
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        >
                          <option>Admissions & Enrollment</option>
                          <option>Campus Visit & Tour Inquiries</option>
                          <option>Academic Transcripts & Verification</option>
                          <option>Employment & Faculty Careers</option>
                          <option>School Bus Transport Fleet</option>
                          <option>Media & Press Relations</option>
                          <option>Alumni Affairs</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Detailed Inquiry *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please provide details regarding your inquiry..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Message to School Desk</span>
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Visual Campus Map & Directions */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Directions & Transit"
            title={`Getting to ${SCHOOL_INFO.shortName}`}
            subtitle="Conveniently situated in Chandan Park, English Bazar with seamless connectivity to Malda Town Railway Station and State Highways."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Campus Map Card */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md relative min-h-[380px] bg-slate-950 flex flex-col justify-end p-8 text-white">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
                alt="Malda Model Madrasah Campus Map Simulation"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-bold shadow">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Main Campus Administrative Reception — Main Gate</span>
                </div>
                <h3 className="text-2xl font-bold font-serif text-white">
                  {SCHOOL_INFO.address}
                </h3>
                <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
                  Visitor check-in is located at the Main Administrative Reception at Chandan Park. Please bring a valid photo identity proof for visitor registration during school working hours.
                </p>
              </div>
            </div>

            {/* Travel Mode Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white">By Road & Highway</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Accessible from NH-34 / NH-12 via English Bazar main bypass road leading directly into Chandan Park.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white">Railway & Bus Connectivity</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    Located only 10-15 minutes from Malda Town Railway Station and Rathbari Central Bus Stand with frequent auto-rickshaws and bus connections.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white">Visitor Entry Protocol</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    All visitors and guardians register at the reception desk to receive an authorized visitor slip prior to accessing faculty blocks.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
