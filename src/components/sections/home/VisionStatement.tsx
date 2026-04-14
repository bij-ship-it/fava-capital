"use client";

import { motion } from "framer-motion";

export function VisionStatement() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center bg-base">
      <div className="max-w-4xl mx-auto px-20 max-lg:px-6 text-center">
        <motion.p
          className="text-display text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          We don&rsquo;t predict markets{" "}
          <span className="text-gold">—</span> we build the infrastructure
          that moves them.
        </motion.p>

        <motion.div
          className="gold-rule w-full mt-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          style={{ transformOrigin: "center" }}
        />
      </div>
    </section>
  );
}
