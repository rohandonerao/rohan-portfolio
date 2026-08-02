"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A blend of mobile app development, data & cloud tools, and the core strengths that tie it all together."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: ci * 0.12, ease: "easeOut" }}
              className="glass-panel rounded-2xl p-7"
            >
              <h3 className="font-display mb-6 text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                          duration: 1,
                          delay: 0.2 + si * 0.08,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-3 via-accent to-accent-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <TechMarquee />
      </div>
    </section>
  );
}

const techs = [
  "Flutter",
  "Dart",
  "Android",
  "Java",
  "Firebase",
  "Microsoft Azure",
  "Power BI",
  "Data Analysis",
  "REST API",
  "Git & GitHub",
  "UI/UX Design",
  "Cloud Computing",
];

function TechMarquee() {
  const items = [...techs, ...techs];
  return (
    <div className="relative mt-14 overflow-hidden rounded-2xl border border-border bg-white/[0.02] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-10">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-sm font-medium tracking-wide text-muted/80"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
