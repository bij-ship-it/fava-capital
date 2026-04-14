"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  const animate = useCallback(() => {
    const duration = 1500;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 5, suffix: "", label: "Regulated Verticals", sublabel: "across 3 continents" },
  { value: 1000, suffix: "+", label: "Tradeable Instruments", sublabel: "FX, crypto, commodities & more" },
  { value: 4, suffix: "", label: "Global Jurisdictions", sublabel: "FCA, DFSA, and beyond" },
  { value: 120, suffix: "+", label: "Team Members", sublabel: "London & Dubai" },
];

export function StatsBar() {
  return (
    <section className="border-t border-b border-border">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`py-14 max-md:py-10 ${
                i < stats.length - 1 ? "md:border-r border-border" : ""
              } ${i % 2 === 0 && i < 2 ? "max-md:border-r" : ""} ${
                i < 2 ? "max-md:border-b border-border" : ""
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className={`${i > 0 ? "md:pl-10" : ""} ${i % 2 !== 0 ? "max-md:pl-6" : ""}`}>
                <p className="text-numbers text-primary mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-caption text-secondary mt-2">
                  {stat.label}
                </p>
                <p className="text-[12px] text-tertiary mt-1">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
