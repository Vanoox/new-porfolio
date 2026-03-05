"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

type LanguageSwitcherProps = {
  currentLang: string;
};

export function LanguageSwitcher(props: LanguageSwitcherProps) {
  const pathname = usePathname();
  const languages = [
    { code: "en", label: "English" },
    { code: "pl", label: "Polski" },
    { code: "jp", label: "日本語 (Japanese)" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full relative" aria-label="Select language">
          <Globe />
          <span className="absolute -bottom-1.5 -right-1.5 text-[10px] font-bold bg-accent-foreground text-accent rounded px-1 uppercase tracking-wider">
            {props.currentLang}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Języki</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((l) => (
          <DropdownMenuItem key={l.code} asChild>
            <Link href={`/${l.code}/${pathname.split("/").slice(2).join("/")}`}>{l.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
