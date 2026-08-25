import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  dark = false,
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          dark 
            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' 
            : 'bg-amber-100 text-amber-900 border border-amber-200'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-serif leading-tight ${
        dark ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
