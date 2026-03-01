"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav className="items-center justify-between px-12 py-10 w-full grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      
      {/* 1. LEWA STRONA: LOGO */}
      <div className="flex justify-start">
        <Link href="/" className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-900 dark:border-white transition-colors duration-300">
          <span className="text-gray-900 dark:text-white font-bold text-lg transition-colors duration-300">C</span>
        </Link>
      </div>
      
      {/* 2. ŚRODEK: LINKI NAWIGACYJNE */}
      <div className="hidden sm:flex space-x-12 text-base font-medium">
        <Link href="/" className="text-gray-900 dark:text-white transition-colors duration-300">Home</Link>
        <Link href="/voice-acting" className="text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Voice Acting</Link>
        <Link href="/lessons" className="text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Lessons</Link>
        <Link href="/training" className="text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Training</Link>
        <Link href="/contact" className="text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Contact</Link>
      </div>
      
      {/* 3. PRAWA STRONA: PRZYCISKI AKCJI (tylko 2 przyciski ułożone obok siebie) */}
      <div className="flex justify-end items-center gap-4">

        <LanguageSwitcher />
        
        {/* Przycisk motywu (Dark Mode) */}
        <button 
          onClick={toggleTheme}
          className="w-11 h-11 flex-shrink-0 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 text-gray-800 dark:text-yellow-400 focus:outline-none flex items-center justify-center"
          aria-label="Toggle Dark Mode"
        >
          {/* Żeby zapobiec błędom hydratacji, ikonę renderujemy dopiero jak komponent jest zamontowany */}
          {mounted && (
            isDark ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )
          )}
        </button>


      </div>

    </nav>
  );
}
