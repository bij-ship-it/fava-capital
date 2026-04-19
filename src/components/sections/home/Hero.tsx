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
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const, delay: 0.3 },
  },
};

const markFade = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] as const },
  },
};

const bars = [
  { x: 13, baseY: 22, baseH: 82, fill: "#C4B5FD", dy: -30, dh: 30 },
  { x: 27, baseY: 36, baseH: 68, fill: "#A78BFA", dy: -40, dh: 40 },
  { x: 41, baseY: 16, baseH: 88, fill: "#8B5CF6", dy: -20, dh: 25 },
  { x: 55, baseY: 42, baseH: 62, fill: "#6B3FA0", dy: -50, dh: 50 },
];

function ScrollBar({
  x,
  baseY,
  baseH,
  fill,
  dy,
  dh,
  progress,
}: {
  x: number;
  baseY: number;
  baseH: number;
  fill: string;
  dy: number;
  dh: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], [baseY, baseY + dy]);
  const height = useTransform(progress, [0, 1], [baseH, baseH + dh]);

  return (
    <motion.rect
      x={x}
      width="10"
      rx="2"
      ry="2"
      fill={fill}
      style={{ y, height }}
    />
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="hero-vignette relative min-h-screen flex items-center"
    >
      <div className="max-w-[1160px] mx-auto w-full px-20 max-lg:px-6 flex items-center justify-between gap-16 max-md:flex-col max-md:items-start max-md:gap-12">
        {/* Left — Text content */}
        <motion.div
          className="flex-1 max-w-xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
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
            className="mt-8 text-secondary leading-[1.7]"
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

        {/* Right — Large scroll-driven Lattice mark */}
        <motion.div
          className="shrink-0 max-md:self-center"
          variants={markFade}
          initial="hidden"
          animate="show"
        >
          <svg
            width="220"
            height="330"
            viewBox="0 0 80 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-md:w-[140px] max-md:h-[210px]"
          >
            {bars.map((bar) => (
              <ScrollBar key={bar.x} {...bar} progress={scrollYProgress} />
            ))}
            {/* Gold connecting bar */}
            <rect
              x="13"
              y="56"
              width="52"
              height="4"
              rx="1.5"
              ry="1.5"
              fill="#D4A843"
            />
          </svg>
        </motion.div>
      </div>

      {/* Pulsing vertical gold line at bottom center */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gold"
        animate={{ opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
