"use client";

import { useTheme } from "@/components/layout/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full border border-border-subtle bg-surface-elevated transition-all duration-300 cursor-pointer hover:border-gold/50 group"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Track background */}
      <span
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          isDark ? "bg-surface-elevated" : "bg-gold/10"
        }`}
      />

      {/* Sliding knob */}
      <span
        className={`absolute top-[3px] w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center ${
          isDark
            ? "left-[3px] bg-surface-card border border-border-subtle"
            : "left-[29px] bg-gold shadow-sm shadow-gold/30"
        }`}
      >
        {/* Sun icon (light mode active) */}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`absolute transition-all duration-300 ${
            isDark ? "opacity-0 scale-50" : "opacity-100 scale-100"
          }`}
        >
          <circle cx="12" cy="12" r="4" fill="var(--color-surface)" />
          <path
            d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
            stroke="var(--color-surface)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Moon icon (dark mode active) */}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`absolute transition-all duration-300 ${
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            fill="var(--color-gold)"
          />
        </svg>
      </span>
    </button>
  );
}
