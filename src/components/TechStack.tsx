"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const TECH_ITEMS = [
  { name: "Next.js", color: "#fff" },
  { name: "React", color: "#61dafb" },
  { name: "Go", color: "#00ADD8" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Laravel", color: "#ff2d20" },
  { name: "Node.js", color: "#68a063" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ed" },
  { name: "Tailwind", color: "#06b6d4" },
  { name: "WordPress", color: "#21759b" },
  { name: "Redis", color: "#dc382d" },
  { name: "MongoDB", color: "#47A248" },
  { name: "MySQL", color: "#4479a1" },
  { name: "Prisma", color: "#5a67d8" },
  { name: "Vercel", color: "#fff" },
  { name: "Figma", color: "#f24e1e" },
];

export default function TechStack() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative z-10 py-12 overflow-hidden">
      <div
        ref={ref}
        className={`reveal ${isVisible ? "visible" : ""}`}
      >
        <p className="text-center text-text-dim text-xs font-mono uppercase tracking-[0.2em] mb-8">
          Tech Stack I Work With
        </p>

        {/* Marquee row 1 */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-10" />

          <div className="flex gap-6 animate-[marquee_30s_linear_infinite]">
            {[...TECH_ITEMS, ...TECH_ITEMS].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-300 group cursor-default"
              >
                <span
                  className="w-2 h-2 rounded-full transition-shadow duration-300"
                  style={{
                    backgroundColor: tech.color,
                    boxShadow: `0 0 0px ${tech.color}00`,
                  }}
                />
                <span className="text-text-muted text-sm font-mono whitespace-nowrap group-hover:text-text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
