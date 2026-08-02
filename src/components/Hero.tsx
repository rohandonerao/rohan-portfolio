"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/lib/data";
import RotatingText from "@/components/RotatingText";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const socials = [
  { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="section-container grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-sm text-muted"
          >
            <Sparkles size={14} className="text-accent-3" />
            Available for internships & opportunities
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {siteConfig.name.split(" ")[0]} —
            <br />
            <span className="text-foreground/90">working as a</span>{" "}
            <RotatingText words={siteConfig.roles} />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-base text-muted md:text-lg"
          >
            {siteConfig.tagline} I love turning ideas into real, working apps and
            dashboards — and learning something new with every build.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_var(--accent)] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_-6px_var(--accent)]"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="glow-border inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">Find me on</span>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent-2 to-accent-3 opacity-30 blur-3xl" />
          <div className="glow-border relative flex h-full w-full items-center justify-center rounded-full border border-border bg-card/60 p-3 backdrop-blur">
            <div className="absolute inset-4 rounded-full border border-dashed border-border" />
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                priority
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-cover"
              />
            </div>

            <motion.div
              className="glass-panel absolute -left-6 top-10 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-foreground shadow-lg"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              💙 Flutter
            </motion.div>
            <motion.div
              className="glass-panel absolute -right-4 top-1/3 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-foreground shadow-lg"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              🔥 Firebase
            </motion.div>
            <motion.div
              className="glass-panel absolute -bottom-2 left-8 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-foreground shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ☁️ Azure
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
