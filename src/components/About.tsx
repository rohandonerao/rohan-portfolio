"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Palette, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { aboutStats } from "@/lib/data";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing readable, well-structured Dart and Java that's easy to maintain.",
  },
  {
    icon: Palette,
    title: "UI/UX Focused",
    description: "Designing clean, intuitive interfaces backed by real usability testing.",
  },
  {
    icon: Cloud,
    title: "Data & Cloud",
    description: "Comfortable turning raw data into dashboards with Power BI and Azure.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Thrives in team settings — analyzing problems and building solutions together.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into reliable software"
          description="A quick look at who I am, how I work, and what drives me to build great products."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-5 text-muted"
          >
            <p className="text-base md:text-lg">
              I&apos;m a Computer Engineering student with hands-on Android and Flutter
              development experience, proficient in Java, Dart, and Firebase. I enjoy
              turning ideas into real, working mobile apps — from the interface down to
              the cloud backend that powers them.
            </p>
            <p className="text-base md:text-lg">
              I&apos;ve built real-world apps as a Flutter Developer Intern at{" "}
              <span className="text-foreground">Dream Webbies Pvt. Ltd.</span>, and more
              recently worked as a Data Analytics Intern at{" "}
              <span className="text-foreground">Kasnet Technologies Pvt. Ltd.</span>,
              building Power BI dashboards on Azure. I&apos;m also{" "}
              <span className="text-foreground">Microsoft Azure-900 certified</span>.
            </p>
            <p className="text-base md:text-lg">
              Beyond coursework, I&apos;m happiest experimenting with new Flutter
              packages, exploring cloud services, or refining an app&apos;s UI until it
              feels just right.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1"
                >
                  <AnimatedCounter value={stat.value} />
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="glow-border group rounded-2xl border border-border bg-white/[0.03] p-6 transition-colors duration-300 hover:border-accent/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent transition-transform duration-300 group-hover:scale-110">
                  <h.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{h.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
