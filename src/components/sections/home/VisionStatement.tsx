"use client";

import { motion } from "framer-motion";

export function VisionStatement() {
  return (
    <section className="bg-obsidian relative py-32 px-6">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="gold-rule w-24 mx-auto mb-12" />
          <blockquote className="font-[family-name:var(--font-display)] text-3xl md:text-5xl lg:text-6xl font-light text-ivory leading-tight">
            We don&apos;t predict markets. We build the infrastructure that
            moves them.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
