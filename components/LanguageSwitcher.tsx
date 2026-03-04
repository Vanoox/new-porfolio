"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe } from 'lucide-react'; // Zakładam, że masz lucide-react, bo był w poprzednich wersjach

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Wyciągamy aktualny język (pierwszy segment po slashu, np. 'pl' z '/pl/lessons')
  const currentLang = pathname.split('/')[1] || 'en';

  // Obsługa zamykania po kliknięciu poza komponentem
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Funkcja budująca link dla nowego języka
  const getLanguageUrl = (targetLang: string) => {
    const segments = pathname.split('/');
    // Podmieniamy obecny język na docelowy
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
      {/* Przycisk otwierający menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-gray-600 dark:text-gray-300 relative"
        aria-label="Change language"
      >
        <Globe size={18} />
        {/* Mały wskaźnik obecnego języka */}
        <span className="absolute -bottom-1 -right-1 text-[9px] font-bold bg-black text-white dark:bg-white dark:text-black rounded px-1 uppercase tracking-wider">
          {currentLang}
        </span>
      </button>

      {/* Dropdown z językami */}
      <div 
        className={`absolute right-0 mt-2 w-40 bg-white dark:bg-[#1C2128] rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-200 overflow-hidden z-50 py-2 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={getLanguageUrl(lang.code)}
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-2 text-sm transition-colors duration-150 ${
              currentLang === lang.code
                ? 'bg-gray-50 dark:bg-gray-800 text-black dark:text-white font-semibold'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white'
            }`}
          >
            {lang.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
