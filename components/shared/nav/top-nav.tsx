"use client";

import AppLogo from "./app-logo";
import ThemeSwitch from "./theme-switch";
import { useEffect, useState } from "react";
import { nav_options } from "@/utils/app-routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavOptionsMobile from "./nav-options-mobile";
import { motion } from "motion/react";

const TopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`p-3 fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-800/80 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <AppLogo />

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            {nav_options.map((e) => {
              const isActive = pathname === e.path;
              return (
                <li key={e.label} className="font-semibold relative group">
                  <Link
                    href={e.path}
                    className={`transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    }`}
                  >
                    {e.label}
                  </Link>
                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : ""
                    }`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Utilities */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitch />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex gap-4">
          <ThemeSwitch />
          <NavOptionsMobile />
        </div>
      </div>
    </motion.nav>
  );
};

export default TopNav;
