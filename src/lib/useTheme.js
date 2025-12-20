import { useEffect, useState, useCallback } from "react";

/**
 * Custom hook for managing global theme with system preference detection and persistence.
 * 
 * - Detects system color scheme on first load
 * - Respects user manual override (persists via localStorage)
 * - Prevents flash of unstyled content (applies theme before render)
 * - Listens for system theme changes only if user hasn't manually selected
 */
export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(null); // null = not hydrated yet
  const [isUserPreference, setIsUserPreference] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    // Check for stored user preference
    const storedTheme = localStorage.getItem("theme");
    const hasUserPreference = storedTheme !== null;

    let shouldBeDark = false;

    if (hasUserPreference) {
      // User has manually selected a theme
      shouldBeDark = storedTheme === "dark";
      setIsUserPreference(true);
    } else {
      // No user preference yet; detect system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      shouldBeDark = prefersDark;
      // Don't set isUserPreference to true; allow system changes until user manually toggles
    }

    // Apply theme immediately
    applyTheme(shouldBeDark);
    setIsDarkMode(shouldBeDark);

    // If no user preference, listen for system theme changes
    if (!hasUserPreference) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e) => {
        applyTheme(e.matches);
        setIsDarkMode(e.matches);
      };

      // Use addEventListener for better compatibility
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  const applyTheme = useCallback((isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const newIsDark = !isDarkMode;
    
    // Apply theme to DOM
    applyTheme(newIsDark);
    
    // Persist user preference
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
    setIsUserPreference(true);
    
    // Update state
    setIsDarkMode(newIsDark);
  }, [isDarkMode, applyTheme]);

  return {
    isDarkMode,
    toggleTheme,
    isHydrated: isDarkMode !== null,
  };
};
