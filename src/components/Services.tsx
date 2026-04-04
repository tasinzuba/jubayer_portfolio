"use client";

import {
  useScrollReveal,
  useStaggeredReveal,
} from "@/hooks/useScrollReveal";

const SERVICES = [
  {
    icon: "</>",
    title: "Next.js Development",
    description:
      "Server-rendered React apps with Next.js App Router, server actions, ISR, and edge functions. SEO-optimized out of the box.",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
    gradient: "from-primary/20 to-accent-cyan/10",
  },
  {
    icon: "go>",
    title: "Go Backend & APIs",
    description:
      "High-performance RESTful APIs and microservices with Go. Concurrent, fast, Docker-ready production systems.",
    tech: ["Go", "Gin/Fiber", "PostgreSQL", "Docker"],
    gradient: "from-accent-cyan/20 to-accent-purple/10",
  },
  {
    icon: "[#]",
    title: "E-Commerce Solutions",
    description:
      "Complete online stores with WooCommerce and custom React/Next.js builds. Payments, catalogs, and checkout.",
    tech: ["WooCommerce", "Stripe", "React", "MySQL"],
    gradient: "from-accent-purple/20 to-primary/10",
  },
  {
    icon: "{S}",
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that boost organic traffic by 150%+. Technical SEO, content optimization.",
    tech: ["Analytics", "Search Console", "Ahrefs"],
    gradient: "from-primary/20 to-accent-purple/10",
  },
  {
    icon: "[F]",
    title: "Digital Marketing",
    description:
      "Facebook Ads, Google Ads, and social media campaigns. Conversion-focused strategies with measurable ROI.",
    tech: ["Facebook Ads", "Google Ads", "Social Media"],
    gradient: "from-accent-purple/20 to-primary/10",
  },
  {
    icon: "(/)",
    title: "WordPress & Maintenance",
    description:
      "Custom WordPress themes, WooCommerce stores, and ongoing maintenance. Security, backups, and monitoring.",
    tech: ["WordPress", "PHP", "cPanel", "Security"],
    gradient: "from-accent-cyan/20 to-primary/10",
  },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } =
    useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const cardVisible = useStaggeredReveal(
    SERVICES.length,
    gridVisible,
    120
  );

  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="glow-line" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 pt-16">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 reveal ${headerVisible ? "visible" : ""}`}
        >
          <div className="section-tag mx-auto w-fit">cat services.txt</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            End-to-end digital solutions — from building your website to
            marketing it to the world.
          </p>
        </div>

        {/* Service cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`card group stagger-child ${cardVisible[i] ? "visible" : ""}`}
            >
              {/* Gradient blob on hover */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="icon-glow mb-5 relative z-10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary mb-2.5 group-hover:text-primary transition-colors relative z-10">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-5 relative z-10">
                {service.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {service.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 border border-border-green rounded-full text-primary/70 bg-primary/[0.03] group-hover:border-primary/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
