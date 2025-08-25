"use client";

import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";

interface ThemeSwitchProps {
  size?: "sm" | "md"; // ✅ allow two sizes
}

const ThemeSwitch = ({ size = "md" }: ThemeSwitchProps) => {
  const { toggleTheme, isDarkMode } = useTheme();

  const styles = {
    sm: "px-2 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-2",
  };

  const iconSize = size === "sm" ? 14 : 18;

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer border flex items-center rounded-full ${styles[size]}`}
    >
      {isDarkMode ? (
        <>
          <Sun size={iconSize} /> <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={iconSize} /> <span>Dark</span>
        </>
      )}
    </button>
  );
};

export default ThemeSwitch;
