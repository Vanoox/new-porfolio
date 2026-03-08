import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";
  const ThemeIcon = isDark ? SunIcon : MoonIcon;
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full" aria-label="Toggle theme">
      {isMounted && <ThemeIcon suppressHydrationWarning />}
    </Button>
  );
}
