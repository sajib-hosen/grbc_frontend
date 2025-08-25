"use client";

import { useTheme } from "@/context/theme-provider";
import { motion } from "motion/react";

export default function HeroSection() {
  const { isDarkMode } = useTheme();
  return (
    <section className="relative overflow-hidden py-24">
      {/* Moving Motion Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-24">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          RGBC Cricket System
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6 max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Our aim is to create a healthy and active society by engaging young
          people in sports, promoting teamwork, fitness, and community spirit.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/matches"
          className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg shadow-md inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore Matches
        </motion.a>

        {/* Optional Quick Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Matches Played", value: 120 },
            { label: "Active Players", value: 50 },
            { label: "Teams Registered", value: 10 },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 1 }}
            >
              <p className="text-3xl font-bold">{stat.value}+</p>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
