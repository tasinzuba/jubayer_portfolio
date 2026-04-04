"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/terminal/data";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Terminal", href: "#terminal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-transparent shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-mono font-bold text-lg group"
        >
          <span className="text-primary transition-all duration-300 group-hover:text-shadow-[0_0_12px_rgba(0,255,65,0.5)]">
            &gt;_
          </span>
          <span className="text-text-primary group-hover:text-primary transition-colors duration-300">
            {personalInfo.handle}
          </span>
          <span className="text-primary animate-pulse text-sm">
            /
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link font-mono px-3 py-2 rounded-md transition-all duration-200 ${
                activeSection === item.href.slice(1) ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn-primary text-xs px-5 py-2.5 ml-4"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#050505]/95 backdrop-blur-xl border-t border-border-green px-6 py-6 flex flex-col gap-1">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`font-mono text-sm py-3 px-4 rounded-lg transition-all duration-200 ${
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/5"
                  : "text-text-muted hover:text-primary hover:bg-primary/5"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-primary/50 mr-3 text-xs">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn-primary text-xs mt-3"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
