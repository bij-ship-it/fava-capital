"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] as const },
  },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const, delay: 0.3 },
  },
};

export function Hero() {
  return (
    <section className="hero-vignette relative min-h-screen flex items-start">
      <motion.div
        className="max-w-[1160px] mx-auto w-full px-20 max-lg:px-6 pt-[28vh] max-md:pt-[20vh]"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Lattice mark */}
        <motion.div variants={fadeUp} className="mb-10">
          <Image
            src="/images/fava-lattice-mark-only-dark-bg.svg"
            alt=""
            width={40}
            height={60}
            priority
          />
        </motion.div>

        <motion.h1 variants={fadeUp}>
          <span className="text-display block text-primary">
            Building Empires.
          </span>
          <span className="text-display block text-primary mt-1">
            Compounding Futures.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-secondary max-w-xl text-[16px] leading-[1.75]"
        >
          FAVA Capital is a diversified financial holding company operating
          across wealth management, institutional trading, digital assets,
          and commodities. Regulated. Institutional-grade. Built to compound.
        </motion.p>

        <motion.div
          className="gold-rule-left w-16 mt-10"
          variants={lineReveal}
          style={{ transformOrigin: "left" }}
        />

        <motion.div variants={fadeUp} className="mt-10 flex items-center gap-8">
          <Link
            href="#ecosystem"
            className="text-label text-gold link-hover"
          >
            Explore our ecosystem &rarr;
          </Link>
          <Link
            href="/contact"
            className="text-label text-secondary link-hover transition-colors hover:text-primary"
          >
            Get in touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Pulsing vertical gold line at bottom center */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gold"
        animate={{ opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
