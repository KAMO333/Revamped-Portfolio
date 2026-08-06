// src/components/ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2.5 border border-black/10 dark:border-white/10 hover:border-sky-500/50 transition-colors text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};
