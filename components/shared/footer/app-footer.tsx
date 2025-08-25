"use client";

import AppLogo from "../nav/app-logo";
import { motion } from "motion/react";

const socialIcons = [
  { icon: "🏏", label: "Cricket" },
  { icon: "📸", label: "Instagram" },
  { icon: "🎮", label: "Community" },
];

const AppFooter = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 p-6 border-gray-200 dark:border-gray-700">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <AppLogo />
            <p className="text-sm mt-4 text-gray-700 dark:text-gray-300">
              Our aim is to create a healthy and active society by engaging
              young people in sports, promoting teamwork, fitness, and community
              spirit.
            </p>
          </div>

          {/* Column 2: About / Resources */}
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                About RGBC
              </h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  Our Team
                </li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  Careers
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Resources
              </h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  News & Updates
                </li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  Tutorials
                </li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  FAQs
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Help / Social */}
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Help & Policies
              </h3>
              <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  Support
                </li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  Terms of Use
                </li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100 mt-2 md:mt-0">
                Follow Us
              </h3>
              <div className="flex space-x-4 text-2xl">
                {socialIcons.map((s, i) => (
                  <motion.span
                    key={i}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.span>
                ))}
              </div>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                Join our community and stay updated!
              </p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} RGBC. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ by RGBC</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
