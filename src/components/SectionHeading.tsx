"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-3">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-3 shadow-[0_0_10px_2px_var(--accent-3)]" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-balance text-base text-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
