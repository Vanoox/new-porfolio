"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // Wyciąganie obecnego języka i czystej ścieżki
  const currentLang = pathname.split('/')[1] || 'en';
  const normalizedPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/';

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  const getLinkClasses = (path: string) => {
    const isActive = normalizedPath === path || normalizedPath === `${path}/`;
    return `transition-colors duration-300 ${
      isActive 
        ? "text-gray-900 dark:text-white font-semibold" 
        : "text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium"
    }`;
  };

  // Klasy dla pełnoekranowego menu mobilnego
  const getMobileLinkClasses = (path: string) => {
    const isActive = normalizedPath === path || normalizedPath === `${path}/`;
    return `text-2xl sm:text-3xl transition-colors duration-300 ${
      isActive 
        ? "text-black dark:text-white font-bold" 
        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium"
    }`;
  };

  return (
    <>
      {/* GŁÓWNY NAV */}
      <nav className="w-full flex items-center justify-between px-6 py-6 md:px-12 md:py-10 relative z-50">
        <Link 
          href={`/${currentLang}`} 
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white font-bold text-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          C
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-10">
          <Link href={`/${currentLang}`} className={getLinkClasses("/")}>Home</Link>
          <Link href={`/${currentLang}/voice-acting`} className={getLinkClasses("/voice-acting")}>Voice Acting</Link>
          <Link href={`/${currentLang}/lessons`} className={getLinkClasses("/lessons")}>Lessons</Link>
          <Link href={`/${currentLang}/training`} className={getLinkClasses("/training")}>Training</Link>
          <Link href={`/${currentLang}/contact`} className={getLinkClasses("/contact")}>Contact</Link>
        </div>

        {/* PRZYCISKI - PRAWA STRONA */}
        <div className="flex items-center space-x-3 md:space-x-4 flex-shrink-0">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-gray-600 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {mounted && (
              isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3V4M12 20V21M4 12H3M21 12H20M6.31412 6.31412L5.60706 5.60706M17.6859 6.31412L18.3929 5.60706M6.31412 17.6859L5.60706 18.3929M17.6859 17.6859L18.3929 18.3929M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )
            )}
          </button>
          
          <LanguageSwitcher />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 shrink-0 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-gray-800 dark:text-white relative z-50"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* PEŁNOEKRANOWE MENU MOBILNE (OVERLAY) */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white/95 dark:bg-[#0A0D13]/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 mt-12">
          <Link href={`/${currentLang}`} onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClasses("/")}>Home</Link>
          <Link href={`/${currentLang}/voice-acting`} onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClasses("/voice-acting")}>Voice Acting</Link>
          <Link href={`/${currentLang}/lessons`} onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClasses("/lessons")}>Lessons</Link>
          <Link href={`/${currentLang}/training`} onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClasses("/training")}>Training</Link>
          <Link href={`/${currentLang}/contact`} onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClasses("/contact")}>Contact</Link>
        </div>
      </div>
    </>
  );
}
