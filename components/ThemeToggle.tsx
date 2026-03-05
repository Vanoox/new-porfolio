import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const isDark = theme === "dark";
  const ThemeIcon = isDark ? Sun : Moon;
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full" aria-label="Toggle theme">
      <ThemeIcon suppressHydrationWarning />
    </Button>
  );
}
