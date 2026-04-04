"use client";

import Terminal from "./Terminal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function TerminalSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="terminal" className="section relative overflow-hidden">
      <div className="glow-line" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 pt-16">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-12 reveal ${isVisible ? "visible" : ""}`}
        >
          <div className="section-tag mx-auto w-fit">
            ./interactive-terminal.sh
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Interactive <span className="gradient-text">Terminal</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Type{" "}
            <span className="font-mono text-primary bg-primary/[0.06] px-2 py-0.5 rounded">
              help
            </span>{" "}
            to explore all commands. Navigate my portfolio the hacker way.
          </p>
        </div>

        {/* Terminal */}
        <div
          className={`max-w-4xl mx-auto reveal-scale ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Glow behind terminal */}
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/[0.03] blur-3xl rounded-3xl" />
            <div className="relative h-[500px] sm:h-[550px]">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
