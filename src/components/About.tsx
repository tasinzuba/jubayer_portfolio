"use client";

import { experiences, personalInfo } from "@/terminal/data";
import {
  useScrollReveal,
  useStaggeredReveal,
} from "@/hooks/useScrollReveal";

const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Go (Golang)", "Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database & DevOps",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Docker"],
  },
  {
    category: "Marketing",
    items: ["Facebook Ads", "Google Ads", "SEO", "Analytics"],
  },
];

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: skillsRef, isVisible: skillsVisible } =
    useScrollReveal<HTMLDivElement>();
  const expVisible = useStaggeredReveal(
    experiences.length,
    sectionVisible,
    150
  );

  return (
    <section id="about" className="section relative overflow-hidden">

      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-16">
        {/* Section header */}
        <div
          ref={sectionRef}
          className={`text-center mb-14 reveal ${sectionVisible ? "visible" : ""}`}
        >
          <div className="section-tag mx-auto w-fit">cat about.md</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Developer by craft, marketer by strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left — Bio + Experience */}
          <div className={`reveal-left ${sectionVisible ? "visible" : ""}`}>
            {/* Terminal bio */}
            <div className="terminal mb-8">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-auto text-text-dim text-[10px] font-mono">
                  about.sh
                </span>
              </div>
              <div className="text-sm leading-relaxed space-y-2">
                {[
                  { cmd: "echo $NAME", val: personalInfo.name },
                  { cmd: "echo $ROLE", val: personalInfo.title },
                  { cmd: "echo $LOCATION", val: personalInfo.location },
                ].map(({ cmd, val }) => (
                  <div key={cmd}>
                    <p>
                      <span className="text-primary">$</span>{" "}
                      <span className="text-text-dim">{cmd}</span>
                    </p>
                    <p className="text-text-primary ml-2">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-text-muted leading-relaxed mb-8 text-[15px]">
              {personalInfo.bio.join(" ")}
            </p>

            {/* Experience timeline */}
            <div className="flex items-center gap-2 mb-5">
              <div className="section-tag">experience --timeline</div>
            </div>
            <div className="space-y-5">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className={`border-l-2 pl-5 transition-all duration-500 stagger-child ${
                    expVisible[i] ? "visible" : ""
                  } ${
                    exp.current
                      ? "border-primary"
                      : "border-primary/20 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-text-primary text-[15px]">
                      {exp.role}
                    </span>
                    <span className="text-text-dim text-xs">@</span>
                    <span className="text-primary text-sm">{exp.company}</span>
                    {exp.current && (
                      <span className="status-badge text-[10px] py-0.5 px-2">
                        <span className="pulse-dot !w-[5px] !h-[5px]" />
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <p className="text-text-dim text-xs mt-1">
                    {exp.period} &middot; {exp.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills (clean tag layout) */}
          <div
            ref={skillsRef}
            className={`reveal-right ${skillsVisible ? "visible" : ""}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="section-tag">skills --list</div>
            </div>

            <div className="space-y-6">
              {SKILLS.map((group) => (
                <div key={group.category}>
                  <h4 className="text-text-primary font-semibold text-sm mb-3 flex items-center gap-2">
                    <span className="text-primary font-mono text-xs">//</span>
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-mono px-3.5 py-1.5 rounded-lg border border-border-green bg-primary/[0.03] text-text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/[0.06] transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
