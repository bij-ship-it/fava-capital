"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="ambient-gradient grain relative min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <Image
            src="/images/fava-lattice-mark-only-dark-bg.svg"
            alt="FAVA Capital"
            width={80}
            height={120}
            priority
            className="mx-auto"
          />
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-tight"
        >
          Building Empires.
        </motion.h1>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-light text-ivory leading-tight mt-2"
        >
          Compounding Futures.
        </motion.h1>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <div className="gold-rule w-32 mx-auto" />
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <Link
            href="#ecosystem"
            className="inline-block bg-bright hover:bg-mid rounded-sm px-8 py-3 text-ivory font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Explore Our Ecosystem
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-platinum/30"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}
