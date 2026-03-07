"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ThemeToggle";

type NavbarProps = {
  currentLang: string;
};

export default function Navbar(props: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between px-12 py-10 w-full lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
      <Link
        href={`/${props.currentLang}`}
        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-500 text-gray-800 dark:text-white font-bold text-xl"
      >
        C
      </Link>

      <div className="hidden lg:flex flex-1 justify-center items-center space-x-10">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={`/${props.currentLang}`} className="data-active-true:bg-red-600">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={`/${props.currentLang}/voice-acting`}>Voice Acting</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={`/${props.currentLang}/lessons`}>Lessons</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={`/${props.currentLang}/training`}>Training</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href={`/${props.currentLang}/contact`}>Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center justify-end space-x-3 md:space-x-4 shrink-0">
        <LanguageSwitcher currentLang={props.currentLang} />

        <ThemeToggle />

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
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-center space-y-8 mt-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href={`/${props.currentLang}`} onClick={() => setIsOpen(false)}>
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href={`/${props.currentLang}/voice-acting`} onClick={() => setIsOpen(false)}>
                        Voice Acting
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href={`/${props.currentLang}/lessons`} onClick={() => setIsOpen(false)}>
                        Lessons
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href={`/${props.currentLang}/training`} onClick={() => setIsOpen(false)}>
                        Training
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href={`/${props.currentLang}/contact`} onClick={() => setIsOpen(false)}>
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
