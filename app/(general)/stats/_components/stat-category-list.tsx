"use client";

import { motion } from "motion/react";
import { STAT_CATEGORIES } from "./stats.categories";

interface StatCategoryListProps {
  activeCategory?: string | null;
  onCategoryClick: (label: string, param: string) => void;
}

const StatCategoryList = ({
  activeCategory,
  onCategoryClick,
}: StatCategoryListProps) => {
  return (
    <div className="w-full sm:w-64 space-y-6">
      {Object.entries(STAT_CATEGORIES).map(([section, items], sectionIdx) => (
        <motion.div
          key={section}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: sectionIdx * 0.1, duration: 0.3 }}
        >
          <h2 className="font-semibold text-sm uppercase tracking-wide bg-neutral/50 p-2 rounded-md text-gray-700 dark:text-gray-300">
            {section}
          </h2>
          <ul className="mt-2 space-y-1">
            {items.map(({ label, param }, itemIdx) => (
              <motion.li
                key={param}
                onClick={() => onCategoryClick(label, param)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIdx * 0.1 + itemIdx * 0.05 }}
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
                className={`cursor-pointer px-3 py-2 rounded-lg transition-colors duration-200 
                  ${
                    activeCategory === param
                      ? " text-orange-500 font-medium "
                      : "text-gray-600 dark:text-gray-400 hover:bg-neutral/30"
                  }`}
              >
                {label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default StatCategoryList;
