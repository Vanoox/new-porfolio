"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { MenuIcon, CloseIcon } from '@/components/icons'; // Upewnij się, że zaimportowałeś nowe ikony

export default function Navbar() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  // Automatyczne zamykanie menu mobilnego jeśli powiększymy okno przeglądarki
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
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
    const isActive = pathname === path;
    return `transition-colors duration-300 ${
      isActive 
        ? "text-gray-900 dark:text-white font-semibold" 
        : "text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium"
    }`;
  };

  return (
    <>
      {/* 
        Główny pasek nawigacyjny. 
        Zmieniono paddingi: na małych ekranach mniejsze, by wszystko się zmieściło (px-6 py-6),
        na większych (md) odzyskuje swoją przestrzeń (px-12 py-10).
      */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12 md:py-10 w-full relative z-50">
        
        {/* 1. LEWA STRONA: LOGO */}
        <div className="flex justify-start">
          <Link 
            href="/" 
            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full border-2 border-gray-900 dark:border-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)} // Zamknij menu po kliknięciu loga
          >
            <span className="text-gray-900 dark:text-white font-bold text-lg transition-colors duration-300">C</span>
          </Link>
        </div>
        
        {/* 2. ŚRODEK: LINKI NAWIGACYJNE (Tylko DESKTOP / lg i md) */}
        <div className="hidden lg:flex space-x-12 text-base">
          <Link href="/" className={getLinkClasses("/")}>Home</Link>
          <Link href="/voice-acting" className={getLinkClasses("/voice-acting")}>Voice Acting</Link>
          <Link href="/lessons" className={getLinkClasses("/lessons")}>Lessons</Link>
          <Link href="/training" className={getLinkClasses("/training")}>Training</Link>
          <Link href="/contact" className={getLinkClasses("/contact")}>Contact</Link>
        </div>
        
        {/* 3. PRAWA STRONA: PRZYCISKI AKCJI ORAZ HAMBURGER */}
        <div className="flex justify-end items-center gap-2 sm:gap-4">
          
          {/* Przycisk motywu (Dark Mode) */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 text-gray-800 dark:text-yellow-400 focus:outline-none flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            {mounted && (
              isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )
            )}
          </button>

          {/* Przycisk zmiany języka */}
          <LanguageSwitcher />

          {/* Przycisk HAMBURGER MENU (Tylko MOBILE, znika na lg) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 shrink-0 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-gray-800 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

        </div>

      </nav>

      {/* 
        WYSUWANE MENU MOBILNE 
        Animowane płynnie w dół tylko wtedy gdy isMobileMenuOpen === true
      */}
      <div 
        className={`fixed inset-0 z-40 bg-white dark:bg-[#1C2128] flex flex-col justify-center items-center transition-all duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-center gap-8 text-2xl">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses("/")}>Home</Link>
          <Link href="/voice-acting" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses("/voice-acting")}>Voice Acting</Link>
          <Link href="/lessons" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses("/lessons")}>Lessons</Link>
          <Link href="/training" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses("/training")}>Training</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={getLinkClasses("/contact")}>Contact</Link>
        </div>
      </div>
    </>
  );
}
