import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Md Jubayer Ahamed — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #030303 0%, #0a0a0a 50%, #050505 100%)",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top green line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, transparent, #00ff41, transparent)",
          }}
        />

        {/* Terminal prompt */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
            fontSize: 20,
            color: "#00ff41",
            opacity: 0.7,
          }}
        >
          &gt;_ jubayer@portfolio
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#e0e0e0",
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Md Jubayer Ahamed
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 28,
            color: "#00ff41",
            marginBottom: 32,
          }}
        >
          Full Stack Developer & Digital Marketing Expert
        </div>

        {/* Tech tags */}
        <div
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          {["Next.js", "Go", "React", "Node.js", "TypeScript", "SEO"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 20px",
                  border: "1px solid rgba(0, 255, 65, 0.3)",
                  borderRadius: 999,
                  color: "#9ca3af",
                  fontSize: 16,
                  background: "rgba(0, 255, 65, 0.05)",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
