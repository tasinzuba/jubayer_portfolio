"use client";

import { personalInfo } from "@/terminal/data";

const FOOTER_LINKS = [
  { label: "GitHub", href: personalInfo.social.github },
  { label: "LinkedIn", href: personalInfo.social.linkedin },
  { label: "Facebook", href: personalInfo.social.facebook },
];

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-green bg-[#030303]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-mono font-bold text-lg inline-flex items-center gap-2 mb-3"
            >
              <span className="text-primary">&gt;_</span>
              <span className="text-text-primary">
                {personalInfo.handle}
              </span>
            </a>
            <p className="text-text-dim text-sm leading-relaxed max-w-xs">
              Full Stack Developer & Digital Marketing Expert building
              high-performance digital experiences from Dhaka, Bangladesh.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-primary text-xs mb-3 uppercase tracking-wider">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-2">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link text-text-dim text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-primary text-xs mb-3 uppercase tracking-wider">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link text-text-dim text-sm font-mono inline-flex items-center gap-2 w-fit"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/50" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-text-dim text-xs font-mono">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All
            rights reserved.
          </div>
          <div className="text-text-dim text-xs font-mono">
            {personalInfo.location}
          </div>
        </div>
      </div>
    </footer>
  );
}
