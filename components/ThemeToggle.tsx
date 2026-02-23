"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-foreground/10" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/10 transition hover:bg-foreground/5"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? (
        <HiSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <HiMoon className="h-5 w-5 text-slate-700" />
      )}
    </button>
  );
}
