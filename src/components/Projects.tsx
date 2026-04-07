"use client";

import { useState, useMemo } from "react";
import { projects } from "@/terminal/data";
import {
  useScrollReveal,
  useStaggeredReveal,
} from "@/hooks/useScrollReveal";
import { useTheme } from "./ThemeProvider";

const INITIAL_COUNT = 6;

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
] as const;

const CATEGORY_COLORS: Record<string, string> = {
  fullstack: "from-primary/30 via-accent-cyan/20 to-transparent",
  frontend: "from-accent-cyan/30 via-primary/20 to-transparent",
  backend: "from-accent-purple/30 via-primary/20 to-transparent",
  marketing: "from-yellow-500/30 via-primary/20 to-transparent",
};

const CATEGORY_BADGES: Record<string, { text: string; border: string }> = {
  fullstack: { text: "text-primary", border: "border-primary/20" },
  frontend: { text: "text-accent-cyan", border: "border-accent-cyan/20" },
  backend: { text: "text-accent-purple", border: "border-accent-purple/20" },
  marketing: { text: "text-yellow-400", border: "border-yellow-400/20" },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } =
    useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const { theme } = useTheme();
  const isLight = theme === "light";

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const cardVisible = useStaggeredReveal(visible.length, gridVisible, 100);

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
    setShowAll(false);
  };

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="glow-line" />

      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-accent-cyan/[0.02] rounded-full blur-3xl" />
      <div className="absolute top-20 -right-40 w-80 h-80 bg-accent-purple/[0.02] rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-16">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 reveal ${headerVisible ? "visible" : ""}`}
        >
          <div className="section-tag mx-auto w-fit">ls ~/projects</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Production-ready apps — from Go microservices to Next.js dashboards
            to WordPress e-commerce.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 reveal ${headerVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleFilterChange(cat.key)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                activeFilter === cat.key
                  ? isLight
                    ? "border-teal-300 bg-teal-50 text-teal-700 shadow-sm"
                    : "border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,255,65,0.1)]"
                  : isLight
                    ? "border-gray-200 text-gray-500 hover:border-teal-200 hover:text-gray-700 hover:bg-gray-50"
                    : "border-white/[0.08] text-text-dim hover:border-primary/30 hover:text-text-muted"
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-[10px] opacity-60">
                (
                {cat.key === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.key).length}
                )
              </span>
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {visible.map((project, i) => {
            const badge = CATEGORY_BADGES[project.category];
            return (
              <div
                key={project.id}
                className={`card group flex flex-col stagger-child ${cardVisible[i] ? "visible" : ""}`}
              >
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${CATEGORY_COLORS[project.category]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-primary/30 font-mono text-xs flex-shrink-0">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors text-[15px] truncate">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    {project.featured && (
                      <span className="text-[9px] px-2 py-0.5 bg-primary/10 text-primary rounded-full font-mono border border-primary/20">
                        FEATURED
                      </span>
                    )}
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded-full font-mono border ${badge.border} ${badge.text} capitalize`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                        isLight
                          ? "text-gray-500 bg-gray-100 border border-gray-200 group-hover:text-teal-600 group-hover:border-teal-200 group-hover:bg-teal-50"
                          : "text-text-dim bg-white/[0.03] border border-white/[0.06] group-hover:text-primary/80 group-hover:border-primary/15"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className={`flex gap-4 pt-3 border-t ${isLight ? "border-gray-100" : "border-white/[0.05]"}`}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-primary/70 hover:text-primary transition-all hover:translate-x-0.5 flex items-center gap-1.5"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/80" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-text-dim hover:text-primary transition-all hover:translate-x-0.5 flex items-center gap-1.5"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-text-dim" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More button */}
        {hasMore && !showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="btn btn-outline text-xs group cursor-pointer"
            >
              <span className="text-primary font-mono mr-1">&gt;</span>
              Load More
              <span className="text-text-dim ml-1.5 text-[10px]">
                (+{filtered.length - INITIAL_COUNT} more)
              </span>
            </button>
          </div>
        )}

        {/* Show Less button */}
        {showAll && hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(false)}
              className="btn btn-outline text-xs group cursor-pointer"
            >
              <span className="text-primary font-mono mr-1">&gt;</span>
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
