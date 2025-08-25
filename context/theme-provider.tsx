"use client";

import React, { createContext, useState, useEffect, useContext } from "react";

export interface ContextProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  isMobile: boolean;
  innerWidth: number;
}

export const ThemeContext = createContext<ContextProps>({
  toggleTheme: () => {},
  isDarkMode: false,
  isMobile: false,
  innerWidth: 370,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [innerWidth, setInnerWidth] = useState(370);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // ✅ Check saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
      setInnerWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, isMobile, innerWidth }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
