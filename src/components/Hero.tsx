"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/terminal/data";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import { useTheme } from "./ThemeProvider";

const TITLES = [
  "Full Stack Developer",
  "Next.js Engineer",
  "Go Backend Developer",
  "Digital Marketing Expert",
  "WordPress Specialist",
  "SEO Strategist",
];

const STATS = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: "%", label: "Traffic Increase" },
  { value: 90, suffix: "+", label: "Lighthouse Score" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function StatCard({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, isVisible, 2000);
  return (
    <div className="text-center group">
      <div className="text-3xl sm:text-4xl font-bold font-mono gradient-text">
        {count}
        {suffix}
      </div>
      <div className="text-text-dim text-xs sm:text-sm mt-1.5 group-hover:text-text-muted transition-colors">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { ref: statsRef, isVisible: statsVisible } =
    useScrollReveal<HTMLDivElement>();
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentTitle.length) {
      timeout = setTimeout(
        () => setDisplayed(currentTitle.slice(0, displayed.length + 1)),
        70
      );
    } else if (!isDeleting && displayed.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className={`absolute inset-0 ${isLight ? "opacity-[0.04]" : "opacity-[0.035]"}`}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: isLight
              ? "linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)"
              : "linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hex grid overlay */}
      <div className="hex-grid" />

      {/* Spotlights */}
      <div className="spotlight -top-32 -left-32 animate-pulse" />
      <div
        className="spotlight bottom-0 right-0"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Gradient overlay at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t ${isLight ? "from-white" : "from-[#030303]"} to-transparent z-[5]`} />

      <div className="mx-auto max-w-7xl px-6 relative z-10 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left content — 3 cols */}
          <div className="lg:col-span-3">
            {/* Status badge */}
            <div
              className={`status-badge mb-6 transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="pulse-dot" />
              Available for Hire
            </div>

            {/* Greeting line */}
            <div
              className={`font-mono text-primary/70 text-sm mb-3 transition-all duration-700 delay-100 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              &gt; system.init(&quot;portfolio&quot;)
            </div>

            {/* Name */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-[1.1] transition-all duration-700 delay-200 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-text-primary">I&apos;m </span>
              <span
                className="glitch-text gradient-text"
                data-text={personalInfo.name.split(" ").pop()}
              >
                {personalInfo.name}
              </span>
            </h1>

            {/* Animated title */}
            <div
              className={`font-mono text-lg sm:text-xl md:text-2xl mb-6 h-8 sm:h-10 transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-primary/50">&gt; </span>
              <span className="text-text-muted">{displayed}</span>
              <span className="inline-block w-[2px] h-5 sm:h-6 bg-primary ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
            </div>

            {/* Bio */}
            <p
              className={`text-text-muted text-base sm:text-lg max-w-xl mb-8 leading-relaxed transition-all duration-700 delay-[400ms] ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Crafting blazing-fast{" "}
              <span className="text-accent-cyan font-medium">Go</span> APIs,
              server-rendered{" "}
              <span className="text-text-primary font-medium">Next.js</span>{" "}
              apps, and scaling businesses through strategic digital marketing.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Book a Meeting
              </a>
            </div>
          </div>

          {/* Right — Decorative terminal (desktop) — 2 cols */}
          <div
            className={`lg:col-span-2 hidden lg:block transition-all duration-1000 delay-500 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="terminal text-[11px] leading-relaxed relative">
              {/* Glow behind */}
              <div className={`absolute -inset-6 ${isLight ? "bg-teal-400/[0.07]" : "bg-primary/5"} blur-3xl rounded-full`} />

              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className={`ml-auto text-[10px] font-mono ${isLight ? "text-slate-400" : "text-text-dim"}`}>
                  jubayer@dev ~ zsh
                </span>
              </div>
              <pre className="relative z-10">{isLight ? (
                <>{`$ cat tech-stack.yml`}
{"\n"}<span className="text-cyan-300">frontend:</span>
{"\n  - Next.js (App Router)"}
{"\n  - React / TypeScript"}
{"\n  - Tailwind CSS"}
{"\n"}
{"\n"}<span className="text-cyan-300">backend:</span>
{"\n  - Go (Gin, Fiber)"}
{"\n  - Node.js / Express"}
{"\n"}
{"\n"}<span className="text-cyan-300">databases:</span>
{"\n  - PostgreSQL / MySQL"}
{"\n  - Redis / MongoDB"}
{"\n"}
{"\n"}<span className="text-cyan-300">devops:</span>
{"\n  - Docker"}
{"\n  - Vercel / cPanel"}
{"\n"}
{"\n"}<span className="text-emerald-400">$ go version</span>
{"\ngo1.22.4 linux/amd64"}
{"\n"}
{"\n"}<span className="text-emerald-400">$ echo $STATUS</span>
{"\n"}<span className="text-amber-300">&gt; Open to opportunities_</span></>
              ) : (
                <span className="text-primary/70">{`$ cat tech-stack.yml
frontend:
  - Next.js (App Router)
  - React / TypeScript
  - Tailwind CSS

backend:
  - Go (Gin, Fiber)
  - Node.js / Express

databases:
  - PostgreSQL / MySQL
  - Redis / MongoDB

devops:
  - Docker
  - Vercel / cPanel

$ go version
go1.22.4 linux/amd64

$ echo $STATUS
> Open to opportunities_`}</span>
              )}</pre>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 py-8 px-6 rounded-xl border ${isLight ? "border-gray-200 bg-white shadow-sm" : "border-white/[0.04] bg-[#0a0a0a]/50"} backdrop-blur-sm transition-all duration-700 delay-600 ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} isVisible={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
