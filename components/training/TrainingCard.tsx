import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons';

interface TrainingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColorClass: string; // np. "text-blue-600 bg-blue-50"
  hoverColorClass: string; // np. "hover:text-blue-600"
  reverse?: boolean; // Jeśli true -> obrazek po prawej, tekst po lewej
}

export default function TrainingCard({
  title,
  description,
  icon,
  iconColorClass,
  hoverColorClass,
  reverse = false,
}: TrainingCardProps) {
  return (
    <div 
      className={`flex flex-col bg-white dark:bg-gray-800 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] overflow-hidden ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      
      {/* 1. Obszar na zdjęcie (Placeholder) */}
      <div className="md:w-5/12 bg-gray-100 dark:bg-gray-700 relative min-h-[250px] md:min-h-full">
        {/* Placeholder - tutaj docelowo umieścisz <img src="..." className="object-cover w-full h-full" /> */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600">
           <svg className="w-1/3 h-1/3" fill="currentColor" viewBox="0 0 24 24">
             <path d="M21 3H3v18h18V3zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
           </svg>
        </div>
      </div>

      {/* 2. Obszar z treścią i Call To Action */}
      <div className="md:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
        
        {/* Kontener na ikonę z dynamicznymi kolorami */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${iconColorClass}`}>
          {icon}
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h2>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
          {description}
        </p>
        
        <Link 
          href="/contact" 
          className={`text-sm font-semibold text-gray-900 dark:text-white transition-colors inline-flex items-center gap-2 group w-fit ${hoverColorClass}`}
        >
          Book a session
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

      </div>

    </div>
  );
}
