"use client";

import React, { useState, useRef, useEffect } from 'react';
import { GlobeIcon } from '@/components/icons';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: typeof languages[0]) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      
      {/* Ujednolicony wymiar w-11 h-11 by pasował do przycisku obok */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 text-gray-800 dark:text-gray-200 focus:outline-none flex items-center justify-center"
        aria-label="Change language"
      >
        <GlobeIcon className="w-[20px] h-[20px]" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-40 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-50 overflow-hidden transform opacity-100 scale-100 transition-all origin-top-right">
          <div className="py-2 flex flex-col">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors
                  ${selectedLang.code === lang.code ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10' : 'text-gray-700 dark:text-gray-300'}
                `}
              >
                <span className="text-lg leading-none">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
