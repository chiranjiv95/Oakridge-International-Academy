import React, { useState } from 'react';
import { 
  FileText, Calendar, DollarSign, Award, HelpCircle, 
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp, Send, 
  Clock, ShieldCheck, Sparkles, User, Mail, Phone, BookOpen 
} from 'lucide-react';
import { PageId } from '../types';
import { ADMISSION_STEPS, KEY_DEADLINES, TUITION_TIERS, SCHOLARSHIPS, ADMISSION_FAQS } from '../data/admissionsData';
import { SectionHeading } from '../components/common/SectionHeading';

interface AdmissionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenScheduleTour: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onNavigate,
  onOpenScheduleTour,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentLastName: '',
    email: '',
    phone: '',
    studentName: '',
    studentDob: '',
    gradeApplying: 'High School (Grade 9)',
    entryYear: 'Fall 2026',
    interests: [] as string[],
    priorSchool: '',
    message: '',
  });

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80"
            alt="Oakridge Students Admissions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Academic Year 2026 – 2027
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
            Admissions & Financial Aid
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover a transformative educational home where your child will be known, challenged, and inspired. Applications for Fall 2026 are now open.
          </p>
        </div>
      </section>

      {/* 2. Step-by-Step Admissions Process */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Roadmap to Enrollment"
            title="The 5-Step Admissions Journey"
            subtitle="Our holistic evaluation process seeks curious, enthusiastic students who will flourish within our collaborative culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ADMISSION_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-sm mb-4 shadow">
                    0{step.stepNumber}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {step.timeline}
                  </span>

                  <h3 className="text-base font-bold font-serif text-slate-900 dark:text-white mt-1">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Key Requirements:</span>
                  {step.requirements.slice(0, 2).map((req, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                      <span className="truncate">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Dates Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold font-serif">Important Admission Deadlines (2026-2027 Cycle)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {KEY_DEADLINES.map((dl, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
                  <span className="text-xs text-amber-400 font-bold">{dl.date}</span>
                  <p className="text-xs text-slate-300 font-medium mt-1">{dl.event}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Tuition & Fees Structure */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Investment in Excellence"
            title="Tuition & Comprehensive Fee Schedule"
            subtitle="Transparent pricing covering instructional materials, technology packages, meals, and co-curricular programs."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TUITION_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Academic Tier
                    </span>
                    <DollarSign className="w-5 h-5 text-amber-500" />
                  </div>

                  <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
                    {tier.gradeLevel}
                  </h3>

                  <div className="mt-4 mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif text-slate-900 dark:text-white">
                      {tier.annualTuition}
                    </span>
                    <p className="text-xs text-slate-500 mt-1">
                      Admission: {tier.admissionFee} • Dev Fee: {tier.developmentFee}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      All-Inclusive Package Benefits:
                    </p>
                    {tier.includes.map((inc, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => {
                      const formElement = document.getElementById('application-inquiry-form');
                      formElement?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-xs shadow transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for {tier.gradeLevel.split('(')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scholarships Banner */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-6 text-center">
              Merit Scholarships & Need-Based Opportunity Grants
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SCHOLARSHIPS.map((sc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold font-serif text-slate-900 dark:text-white">
                      {sc.name}
                    </h4>
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-1">
                      {sc.coverage}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {sc.eligibility}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Interactive Application Inquiry Form */}
      <section id="application-inquiry-form" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-xl overflow-hidden">
            
            <div className="p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-3 inline-block">
                Start Online
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Submit an Official Admissions Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
                Complete this form to receive our 2026-2027 Viewbook, book a private meeting with our admissions deans, and receive your portal login.
              </p>
            </div>

            <div className="p-8 sm:p-10">
              {formSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold font-serif text-slate-900 dark:text-white">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.parentFirstName} {formData.parentLastName}</span>. An admissions packet and appointment link have been sent to <span className="font-bold text-slate-900 dark:text-white">{formData.email}</span>.
                  </p>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl max-w-sm mx-auto text-xs text-left space-y-1 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <p><span className="font-semibold">Student:</span> {formData.studentName || 'Not specified'}</p>
                    <p><span className="font-semibold">Grade Level:</span> {formData.gradeApplying}</p>
                    <p><span className="font-semibold">Target Entry:</span> {formData.entryYear}</p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        parentFirstName: '',
                        parentLastName: '',
                        email: '',
                        phone: '',
                        studentName: '',
                        studentDob: '',
                        gradeApplying: 'High School (Grade 9)',
                        entryYear: 'Fall 2026',
                        interests: [],
                        priorSchool: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-amber-500 dark:text-slate-950 text-white font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Parent / Guardian Section */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> 1. Parent / Guardian Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David"
                          value={formData.parentFirstName}
                          onChange={(e) => setFormData({ ...formData, parentFirstName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Chen"
                          value={formData.parentLastName}
                          onChange={(e) => setFormData({ ...formData, parentLastName: e.target.value })}
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
                          placeholder="david.chen@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 234-5678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Student Details Section */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> 2. Prospective Student Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Student Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Maya Chen"
                          value={formData.studentName}
                          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Applying for Grade *
                        </label>
                        <select
                          value={formData.gradeApplying}
                          onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        >
                          <option>Pre-K / Kindergarten</option>
                          <option>Primary School (Grades 1-5)</option>
                          <option>Middle School (Grades 6-8)</option>
                          <option>High School (Grade 9)</option>
                          <option>High School (Grade 10-11)</option>
                          <option>IB Diploma Programme (Grade 11)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Desired Entry Term *
                        </label>
                        <select
                          value={formData.entryYear}
                          onChange={(e) => setFormData({ ...formData, entryYear: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        >
                          <option>Fall 2026 (Priority)</option>
                          <option>Spring 2027 (Mid-Year)</option>
                          <option>Fall 2027 (Advance)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Student Interests */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Academic & Extracurricular Areas of Interest (Select all that apply):
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'STEM & Robotics',
                        'IB Diploma Programme',
                        'Championship Athletics',
                        'Symphony Orchestra & Arts',
                        'Model United Nations',
                        'Debate & Speech',
                        'Merit Scholarships',
                        'Bus Transportation Fleet'
                      ].map((item) => {
                        const isSelected = formData.interests.includes(item);
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => handleInterestToggle(item)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                              isSelected
                                ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                                : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Additional Notes or Questions for the Admissions Team
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your student's learning style, passions, or any specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry & Request Viewbook</span>
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions Accordion */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Admissions Questions"
            subtitle="Clear answers regarding our timeline, financial assistance, campus visits, and bus routes."
          />

          <div className="space-y-4">
            {ADMISSION_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 mb-3">Still have specific inquiries about enrollment or scholarships?</p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-200 font-semibold text-xs transition-colors"
            >
              Contact Admissions Office Directly
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
