"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 4 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const },
  },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const, delay: 0.2 },
  },
};

export function Hero() {
  return (
    <section className="hero-vignette relative min-h-screen flex items-start">
      <motion.div
        className="max-w-[1160px] mx-auto w-full px-20 max-lg:px-6 pt-[40vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="text-label text-secondary mb-8"
          variants={fadeUp}
        >
          FAVA CAPITAL GROUP
        </motion.p>

        <motion.h1 variants={fadeUp}>
          <span className="text-display block text-primary">
            Building Empires.
          </span>
          <span className="text-display block text-primary mt-1">
            Compounding Futures.
          </span>
        </motion.h1>

        <motion.div
          className="gold-rule-left w-[60px] mt-10"
          variants={lineReveal}
          style={{ transformOrigin: "left" }}
        />

        <motion.p
          className="text-caption text-tertiary mt-10"
          variants={fadeUp}
        >
          Scroll to explore
        </motion.p>
      </motion.div>

      {/* Pulsing vertical gold line at bottom center */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gold"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
