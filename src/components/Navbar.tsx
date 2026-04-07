"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/terminal/data";
import { useTheme } from "./ThemeProvider";

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
  const { theme, toggleTheme } = useTheme();

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
          ? theme === "light"
            ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
            : "bg-[#050505]/80 backdrop-blur-xl border-b border-transparent shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
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
        <div className="hidden md:flex items-center gap-1 nav-links">
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
          <button
            onClick={toggleTheme}
            className="ml-3 p-2 rounded-lg border border-border-green hover:border-border-green-hover transition-all duration-200 hover:bg-primary/5"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <a
            href="#contact"
            className="btn btn-primary text-xs px-5 py-2.5 ml-2"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border-green transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
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
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`${theme === "light" ? "bg-white/95 border-t border-gray-200" : "bg-[#050505]/95 border-t border-border-green"} backdrop-blur-xl px-6 py-6 flex flex-col gap-1`}>
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
