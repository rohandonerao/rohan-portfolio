"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";

const socials = [
  { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Have a project in mind, a question, or just want to say hi? My inbox is always open."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glow-border relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-white/[0.03] p-8 md:p-12"
        >
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-accent-2/20 blur-[100px]" />

          <div className="relative flex flex-col items-center gap-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-accent-3" />
                Based in {siteConfig.location}
              </span>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Phone size={16} className="text-accent-3" />
                {siteConfig.phone}
              </a>
            </div>

            <a
              href={`mailto:${siteConfig.email}`}
              className="font-display break-all text-2xl font-semibold text-foreground transition-colors hover:text-accent md:text-3xl"
            >
              {siteConfig.email}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px_var(--accent)] transition-transform duration-300 hover:scale-[1.03]"
              >
                <Mail size={16} />
                Say Hello
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-accent-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Email
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/5 text-muted transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
