"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/terminal/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollReveal<HTMLDivElement>();
  const calLoaded = useRef(false);

  useEffect(() => {
    if (calLoaded.current) return;
    calLoaded.current = true;

    // Inject the Cal.com embed script exactly as provided
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "30min", { origin: "https://app.cal.com" });

      Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "tasin-ahmed-61u67y/30min",
      });

      Cal.ns["30min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="glow-line" />

      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-purple/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.02] rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div
          ref={headerRef}
          className={`text-center mb-14 reveal ${headerVisible ? "visible" : ""}`}
        >
          <div className="section-tag mx-auto w-fit">schedule --meeting</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Pick a time that works for you. Free 30-minute consultation.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`reveal-scale ${contentVisible ? "visible" : ""}`}
        >
          {/* Cal.com embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/[0.02] blur-3xl rounded-3xl" />

              <div className="relative rounded-xl border border-border-green overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-border-green bg-[#0a0a0a]">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-3 text-text-dim text-[11px] font-mono">
                    cal --book &quot;Free Consultation&quot;
                  </span>
                </div>

                {/* Cal.com inline widget */}
                <div
                  id="my-cal-inline-30min"
                  style={{
                    width: "100%",
                    height: "660px",
                    overflow: "scroll",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Contact alternatives */}
          <div className="max-w-4xl mx-auto mt-10">
            <p className="text-center text-text-dim text-sm font-mono mb-6">
              // or reach out directly
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-outline text-xs"
              >
                Send Email
              </a>
              <a
                href={personalInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline text-xs"
              >
                WhatsApp Me
              </a>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              {[
                { label: "GitHub", href: personalInfo.social.github },
                { label: "LinkedIn", href: personalInfo.social.linkedin },
                { label: "Facebook", href: personalInfo.social.facebook },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-text-dim hover:text-primary transition-colors px-3 py-1.5 rounded-lg border border-white/[0.06] hover:border-primary/20"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
