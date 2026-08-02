"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked & studied"
          description="A timeline of the roles and education that shaped how I build software today."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[19px] top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-accent-3 via-accent to-accent-2 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              const Icon = exp.type === "work" ? Briefcase : GraduationCap;
              return (
                <motion.div
                  key={exp.title + exp.period}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-background text-accent shadow-[0_0_20px_-4px_var(--accent)] md:absolute md:left-1/2 md:-translate-x-1/2">
                    <Icon size={16} />
                  </div>

                  <div
                    className={`glass-panel w-full rounded-2xl p-6 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:mr-auto md:text-right" : "md:ml-auto"
                    }`}
                  >
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent-3">
                      {exp.period}
                    </span>
                    <h3 className="font-display mt-1 text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-muted">
                      {exp.organization}
                    </p>
                    <p className="text-sm text-muted">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
