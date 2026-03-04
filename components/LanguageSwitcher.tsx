"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = pathname.split('/')[1] || 'en';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLanguageUrl = (targetLang: string) => {
    const segments = pathname.split('/');
    segments[1] = targetLang;
    return segments.join('/') || '/';
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pl', label: 'Polski' },
    { code: 'jp', label: '日本語 (Japanese)' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center text-gray-600 dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-gray-500"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className="absolute -bottom-1 -right-1 text-[9px] font-bold bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded px-1 uppercase tracking-wider">
          {currentLang}
        </span>
      </button>

      <div 
        role="menu"
        aria-orientation="vertical"
        className={`absolute right-0 mt-2 w-40 bg-white dark:bg-[#252a33] rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 transition-all duration-300 origin-top-right z-50 py-2 ${
          isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
        }`}
      >
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={getLanguageUrl(lang.code)}
            onClick={() => setIsOpen(false)}
            role="menuitem"
            className={`block px-4 py-2 text-sm transition-colors duration-200 focus:outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700 ${
              currentLang === lang.code
                ? 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {lang.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
