"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavbarProps = {
  currentLang: string;
};

export default function Navbar(props: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/") || "/";

  const getLinkClasses = (path: string) => {
    const isActive = normalizedPath === path || normalizedPath === `${path}/`;
    return `transition-colors duration-500 ${
      isActive
        ? "text-gray-900 dark:text-white font-semibold transition-colors duration-500"
        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors duration-500"
    }`;
  };

  const getMobileLinkClasses = (path: string) => {
    const isActive = normalizedPath === path || normalizedPath === `${path}/`;
    return `text-2xl transition-colors duration-500 ${
      isActive
        ? "text-black dark:text-white font-bold transition-colors duration-500"
        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors duration-500"
    }`;
  };

  return (
    <nav className="flex items-center justify-between px-12 py-10 w-full lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      <Link
        href={`/${props.currentLang}`}
        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-500 text-gray-800 dark:text-white font-bold text-xl"
      >
        C
      </Link>

      <div className="hidden lg:flex flex-1 justify-center items-center space-x-10">
        <Link href={`/${props.currentLang}`} className={getLinkClasses("/")}>
          Home
        </Link>
        <Link href={`/${props.currentLang}/voice-acting`} className={getLinkClasses("/voice-acting")}>
          Voice Acting
        </Link>
        <Link href={`/${props.currentLang}/lessons`} className={getLinkClasses("/lessons")}>
          Lessons
        </Link>
        <Link href={`/${props.currentLang}/training`} className={getLinkClasses("/training")}>
          Training
        </Link>
        <Link href={`/${props.currentLang}/contact`} className={getLinkClasses("/contact")}>
          Contact
        </Link>
      </div>

      <div className="flex items-center justify-end space-x-3 md:space-x-4 shrink-0">
        <ThemeToggle />

        <LanguageSwitcher currentLang={props.currentLang} />

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

            <SheetContent
              side="top"
              className="h-full bg-white/95 dark:bg-[#0A0D13]/95 backdrop-blur-md flex flex-col items-center justify-center border-none"
            >
              <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>

              <div className="flex flex-col items-center space-y-8 mt-4">
                <Link
                  href={`/${props.currentLang}`}
                  onClick={() => setIsOpen(false)}
                  className={getMobileLinkClasses("/")}
                >
                  Home
                </Link>
                <Link
                  href={`/${props.currentLang}/voice-acting`}
                  onClick={() => setIsOpen(false)}
                  className={getMobileLinkClasses("/voice-acting")}
                >
                  Voice Acting
                </Link>
                <Link
                  href={`/${props.currentLang}/lessons`}
                  onClick={() => setIsOpen(false)}
                  className={getMobileLinkClasses("/lessons")}
                >
                  Lessons
                </Link>
                <Link
                  href={`/${props.currentLang}/training`}
                  onClick={() => setIsOpen(false)}
                  className={getMobileLinkClasses("/training")}
                >
                  Training
                </Link>
                <Link
                  href={`/${props.currentLang}/contact`}
                  onClick={() => setIsOpen(false)}
                  className={getMobileLinkClasses("/contact")}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
