import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { navLinks, siteConfig } from "@/lib/data";

const socials = [
  { icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-border bg-background-elevated">
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-80 w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="section-container relative grid gap-12 py-16 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div className="flex flex-col gap-4">
          <a href="#home" className="font-display w-fit text-2xl font-semibold text-foreground">
            {siteConfig.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.tagline} Currently open to internships and freelance
            collaborations — let&apos;s build something worth shipping.
          </p>
          <div className="flex items-center gap-3 pt-2">
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
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
            Navigate
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
            Get in Touch
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-muted">
            <li>
              <a
                href={siteConfig.emailHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-accent"
              >
                <Mail size={15} className="shrink-0 text-accent-3" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 transition-colors hover:text-accent"
              >
                <Phone size={15} className="shrink-0 text-accent-3" />
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={15} className="shrink-0 text-accent-3" />
              {siteConfig.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-container flex flex-col items-center gap-2 py-6 text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
