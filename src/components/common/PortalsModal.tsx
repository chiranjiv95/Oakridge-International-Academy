import React, { useState } from 'react';
import { X, Lock, User, GraduationCap, ShieldCheck, CheckCircle2, KeyRound } from 'lucide-react';

interface PortalsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalsModal: React.FC<PortalsModalProps> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState<'parent' | 'student' | 'faculty'>('parent');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSimulateLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="relative max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-serif">Model Madrasah Single Sign-On</h3>
              <p className="text-xs text-slate-300">Banglar Shiksha & E-Portal Gateway</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Role selector tabs */}
          <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl mb-6">
            <button
              onClick={() => setSelectedRole('parent')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors flex flex-col items-center gap-1 ${
                selectedRole === 'parent'
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Guardian Portal</span>
            </button>
            <button
              onClick={() => setSelectedRole('student')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors flex flex-col items-center gap-1 ${
                selectedRole === 'student'
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student Portal</span>
            </button>
            <button
              onClick={() => setSelectedRole('faculty')}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors flex flex-col items-center gap-1 ${
                selectedRole === 'faculty'
                  ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Teacher Intranet</span>
            </button>
          </div>

          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Authentication Successful</h4>
              <p className="text-xs text-slate-500">Redirecting to {selectedRole.toUpperCase()} dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSimulateLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  {selectedRole === 'parent' ? 'Registered Mobile / Email' : selectedRole === 'student' ? 'Student ID (@maldamodelmadrasah.edu.in)' : 'Teacher Credentials'}
                </label>
                <input
                  type="text"
                  required
                  defaultValue={selectedRole === 'parent' ? 'guardian.rehan@example.com' : selectedRole === 'student' ? 'zinia.p26@maldamodelmadrasah.edu.in' : 'a.rahman@maldamodelmadrasah.edu.in'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  defaultValue="••••••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-amber-600 focus:ring-amber-500" />
                  <span>Remember session</span>
                </label>
                <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your registered school email.'); }} className="text-amber-600 dark:text-amber-400 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-slate-950 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>{isLoggingIn ? 'Verifying Credentials...' : `Sign in to ${selectedRole === 'parent' ? 'Guardian' : selectedRole === 'student' ? 'Student' : 'Staff'} Portal`}</span>
              </button>
            </form>
          )}

          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Need technical support? Contact the ICT Cell at <span className="text-amber-600 dark:text-amber-400 font-medium">helpdesk@maldamodelmadrasah.edu.in</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
