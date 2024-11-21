"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  const currentTheme = theme === 'dark' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      type="button"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-gray-800" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
