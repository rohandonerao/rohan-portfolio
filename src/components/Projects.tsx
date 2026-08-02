"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderGit2, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "@/components/SectionHeading";
import { projectCategories, projects } from "@/lib/data";

const gradients = [
  "from-accent/30 via-accent-2/20 to-transparent",
  "from-accent-3/30 via-accent/20 to-transparent",
  "from-accent-2/30 via-accent-3/20 to-transparent",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real-world Flutter apps and data & cloud work from my internships, plus a few builds I've shipped along the way."
        />

        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === cat ? "text-white" : "text-muted hover:text-foreground"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-2"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                className="glow-border group flex flex-col overflow-hidden rounded-2xl border border-border bg-white/[0.03]"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${
                    gradients[i % gradients.length]
                  }`}
                >
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <FolderGit2
                    size={48}
                    strokeWidth={1.2}
                    className="relative text-foreground/70 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  />
                  {project.featured && (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-border bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-accent-3 backdrop-blur">
                      <Star size={10} className="fill-accent-3" />
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/10 hover:text-foreground"
                      >
                        <FaGithub size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="mb-5 flex-1 text-base leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white/5 px-3.5 py-1.5 text-sm text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
