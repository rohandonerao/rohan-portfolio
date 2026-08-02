"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`section-container flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass-panel shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="font-display text-xl font-semibold tracking-tight text-foreground"
        >
          Rohan<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-base font-medium transition-colors ${
                  active === link.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/8"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={`mailto:${siteConfig.email}`}
            className="glow-border rounded-full border border-border bg-white/5 px-5 py-2 text-base font-medium text-foreground transition-colors hover:border-accent/60"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="section-container mt-2 md:hidden"
          >
            <div className="glass-panel flex flex-col gap-1 rounded-2xl p-3 shadow-xl shadow-black/40">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active === link.href
                      ? "bg-white/8 text-foreground"
                      : "text-muted hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl border border-border bg-white/5 px-4 py-3 text-center text-base font-medium text-foreground"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
