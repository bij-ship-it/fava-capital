"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface Metric {
  target: number;
  suffix: string;
  prefix: string;
  label: string;
  countUp: boolean;
}

const metrics: Metric[] = [
  { target: 5, suffix: "", prefix: "", label: "Regulated Verticals", countUp: true },
  { target: 1000, suffix: "+", prefix: "", label: "Tradeable Instruments", countUp: true },
  { target: 0, suffix: "", prefix: "24/7", label: "Market Access", countUp: false },
  { target: 4, suffix: "", prefix: "", label: "Global Jurisdictions", countUp: true },
];

function CountUpNumber({ metric, start, delay }: { metric: Metric; start: boolean; delay: number }) {
  const [display, setDisplay] = useState(metric.countUp ? "0" : metric.prefix);

  const animate = useCallback(() => {
    if (!metric.countUp) return;

    const duration = 1500;
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = Math.round(eased * metric.target);

      if (metric.target >= 1000) {
        setDisplay(current.toLocaleString() + (progress === 1 ? metric.suffix : ""));
      } else {
        setDisplay(String(current) + (progress === 1 ? metric.suffix : ""));
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    const timeout = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [metric, delay]);

  useEffect(() => {
    if (!start) return;
    return animate();
  }, [start, animate]);

  return <>{display}</>;
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="py-[140px] max-md:py-20">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <p className="text-label text-secondary mb-16">02 — BY THE NUMBERS</p>

        <div ref={ref} className="grid grid-cols-4 max-md:grid-cols-2 gap-y-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                delay: i * 0.08,
              }}
            >
              <span className="text-numbers text-primary">
                <CountUpNumber
                  metric={metric}
                  start={isInView}
                  delay={i * 150}
                />
              </span>
              <div className="gold-rule-left w-8 mt-3 mx-auto" />
              <span className="text-caption text-secondary mt-4">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
