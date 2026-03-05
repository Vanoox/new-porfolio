import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";
  const ThemeIcon = isDark ? Sun : Moon;
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
