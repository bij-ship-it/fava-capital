"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1] as const,
      delay: 0.3,
    },
  },
};

const bars = [
  { x: 13, baseY: 22, baseH: 82, fill: "#C4B5FD" },
  { x: 27, baseY: 36, baseH: 68, fill: "#A78BFA" },
  { x: 41, baseY: 16, baseH: 88, fill: "#8B5CF6" },
  { x: 55, baseY: 42, baseH: 62, fill: "#6B3FA0" },
];

const GOLD_BAR = { x: 13, y: 56, width: 52, height: 4, fill: "#D4A843" };

// Stagger order: shortest → tallest, so the lattice builds toward its peak.
const barOrder = bars
  .map((b, idx) => ({ idx, h: b.baseH }))
  .sort((a, b) => a.h - b.h)
  .reduce<Record<number, number>>((acc, item, rank) => {
    acc[item.idx] = rank;
    return acc;
  }, {});

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const markY = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const markScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.35]);

  return (
    <section
      ref={sectionRef}
      className="hero-vignette relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[1160px] mx-auto w-full px-20 max-lg:px-6 flex items-center justify-between gap-16 max-md:flex-col max-md:items-start max-md:gap-12">
        <motion.div
          className="flex-1 max-w-xl relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-label text-secondary mb-8"
          >
            FAVA CAPITAL
          </motion.p>

          <motion.h1 variants={fadeUp} id="hero-title">
            <span className="text-display block text-primary">
              A connected financial
            </span>
            <span className="text-display-alt block text-primary mt-1">
              ecosystem.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-secondary leading-[1.7]"
          >
            Invest, trade, move money, hold digital assets, access
            commodities &mdash; in one place. Five regulated businesses,
            one platform, built to work harder the more of it you use.
          </motion.p>

          <motion.div
            className="gold-rule-left w-16 mt-10"
            variants={lineReveal}
            style={{ transformOrigin: "left" }}
          />

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center gap-8"
          >
            <Link
              href="#flywheel"
              className="text-label text-gold link-hover"
            >
              See how it works &rarr;
            </Link>
            <Link
              href="/contact"
              className="text-label text-secondary link-hover transition-colors hover:text-primary"
            >
              Get in touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="shrink-0 max-md:self-center relative"
          aria-hidden="true"
          style={{ y: markY, scale: markScale, opacity: markOpacity }}
        >
          {/* Soft violet glow behind the lattice */}
          <div
            className="absolute inset-0 pointer-events-none blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(closest-side, #8B5CF6 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <svg
            width="220"
            height="330"
            viewBox="0 0 80 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative max-md:w-[140px] max-md:h-[210px]"
          >
            {bars.map((bar, i) => (
              <rect
                key={bar.x}
                x={bar.x}
                y={bar.baseY}
                width="10"
                height={bar.baseH}
                rx="2"
                ry="2"
                fill={bar.fill}
                className="hero-bar"
                style={{ animationDelay: `${0.25 + barOrder[i] * 0.12}s` }}
              />
            ))}

            {/* Gold crossbar — draws in after the bars settle. */}
            <rect
              x={GOLD_BAR.x}
              y={GOLD_BAR.y}
              width={GOLD_BAR.width}
              height={GOLD_BAR.height}
              rx="1.5"
              ry="1.5"
              fill={GOLD_BAR.fill}
              className="hero-gold-bar"
            />

            {/* Gold sheen — one-off highlight sweep across the gold bar. */}
            <rect
              x={GOLD_BAR.x}
              y={GOLD_BAR.y - 1}
              width="6"
              height={GOLD_BAR.height + 2}
              fill="#FFFFFF"
              className="hero-gold-sheen"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gold"
        animate={{ opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
    </section>
  );
}
