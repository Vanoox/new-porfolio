"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'en';
  const normalizedPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/';

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

  // Ujednolicone transition-all dla wszystkich linków
  const getLinkClasses = (path: string) => {
    const isActive = normalizedPath === path || normalizedPath === `${path}/`;
    return `transition-colors duration-300 ${
      isActive 
        ? "text-gray-900 dark:text-white font-semibold" 
        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium"
    }`;
  };

  const getMobileLinkClasses = (path: string) => {
    const isActive = normalizedPath === path || normalizedPath === `${path}/`;
    return `text-2xl transition-colors duration-300 ${
      isActive 
        ? "text-black dark:text-white font-bold" 
        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium"
    }`;
  };

  return (
    <nav className="flex items-center justify-between px-12 py-10 w-full lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      
      {/* LOGO */}
      <Link 
        href={`/${currentLang}`} 
        className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white font-bold text-xl"
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
      <div className="flex items-center justify-end space-x-3 md:space-x-4 flex-shrink-0">
        
        {/* THEME TOGGLE (Z użyciem shadcn Button) */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full w-10 h-10 border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
        >
          {mounted && isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        <LanguageSwitcher />

        {/* MOBILE MENU (Z użyciem shadcn Sheet) */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full w-10 h-10 border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            
            {/* SheetContent robi efekt pięknego slide'a z prawej strony (lub z góry) - tu z góry dla efektu pełnego ekranu */}
            <SheetContent side="top" className="h-full bg-white/95 dark:bg-[#0A0D13]/95 backdrop-blur-md flex flex-col items-center justify-center border-none">
              <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>
              
              <div className="flex flex-col items-center space-y-8 mt-4">
                <Link href={`/${currentLang}`} onClick={() => setIsOpen(false)} className={getMobileLinkClasses("/")}>Home</Link>
                <Link href={`/${currentLang}/voice-acting`} onClick={() => setIsOpen(false)} className={getMobileLinkClasses("/voice-acting")}>Voice Acting</Link>
                <Link href={`/${currentLang}/lessons`} onClick={() => setIsOpen(false)} className={getMobileLinkClasses("/lessons")}>Lessons</Link>
                <Link href={`/${currentLang}/training`} onClick={() => setIsOpen(false)} className={getMobileLinkClasses("/training")}>Training</Link>
                <Link href={`/${currentLang}/contact`} onClick={() => setIsOpen(false)} className={getMobileLinkClasses("/contact")}>Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
