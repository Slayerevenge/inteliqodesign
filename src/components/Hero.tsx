"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};


const heroImages = [
  "/projects/e-city-tower-1/3.jpg",
  "/projects/e-city-tower-1/8.jpg",
  "/projects/e-city-tower-1/10.jpg",
  "/projects/e-city-tower-1/12.jpg",
  "/projects/electronics-city-office/7.jpg",
];

const INTERVAL = 5000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Rotating Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex]}
              alt="Inteliqo project showcase"
              fill
              className="object-cover blur-[3px] scale-105"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Rich purple overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1A0A2E]/75 via-[#2D1450]/55 to-[#1A0A2E]/75" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#C9A0FF] font-medium tracking-widest uppercase text-sm sm:text-base mb-4"
        >
          Interiors & Turnkey Solutions &middot; Bangalore & Mysore
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5"
        >
          Your Space,{" "}
          <span className="text-[#C9A0FF]">Thoughtfully</span>{" "}
          Designed
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We design homes and workspaces that feel just right —
          beautiful, functional, and completely yours.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-[#1E1E1E] font-semibold rounded-lg hover:bg-[#C9A0FF] hover:text-white transition-colors duration-300 shadow-lg w-full sm:w-auto text-center"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white hover:text-[#1E1E1E] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Key highlights */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white mb-1 font-heading">
              40k+ Sq. Ft.
            </p>
            <p className="text-white/60 text-xs sm:text-sm tracking-wide uppercase">
              Largest Project
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-white mb-1 font-heading">
              2
            </p>
            <p className="text-white/60 text-xs sm:text-sm tracking-wide uppercase">
              Cities
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Image indicator dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer ${
              i === currentIndex
                ? "bg-[#C9A0FF] w-6"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </motion.div>
    </section>
  );
}
