"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    if (!glow || !ring) return;

    let mouseX = -500;
    let mouseY = -500;
    let glowX = -500;
    let glowY = -500;
    let ringX = -500;
    let ringY = -500;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Glow follows with smooth lag
      glowX += (mouseX - glowX) * 0.06;
      glowY += (mouseY - glowY) * 0.06;
      glow.style.transform = `translate(${glowX - 250}px, ${glowY - 250}px)`;

      // Ring follows faster
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    const id = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <>
      {/* Large ambient glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-[2] hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,65,0.12) 0%, rgba(0,255,65,0.04) 30%, transparent 70%)",
        }}
      />
      {/* Small cursor ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[60] hidden lg:block"
        style={{
          border: "1.5px solid rgba(0, 255, 65, 0.4)",
          boxShadow: "0 0 12px rgba(0, 255, 65, 0.15), inset 0 0 12px rgba(0, 255, 65, 0.05)",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
