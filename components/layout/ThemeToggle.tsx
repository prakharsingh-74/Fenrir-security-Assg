"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-4 px-4 py-3 rounded-full transition-colors text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 w-full"
    >
      {isDark ? (
        <>
          <Sun className="w-5 h-5" strokeWidth={2} />
          <span className="text-[15px]">Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5" strokeWidth={2} />
          <span className="text-[15px]">Dark Mode</span>
        </>
      )}
    </button>
  );
}
