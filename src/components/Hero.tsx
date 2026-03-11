"use client";

import { useRef, useCallback } from "react";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const confettiTriggered = useRef(false);

  const triggerConfetti = useCallback(async () => {
    if (confettiTriggered.current) return;
    confettiTriggered.current = true;

    const confetti = (await import("canvas-confetti")).default;

    const end = Date.now() + 2000;
    const colors = ["#c8a97a", "#e8e8e8", "#888888", "#ffffff", "#8a6f4a"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 90,
        spread: 80,
        origin: { x: 0.5, y: 0 },
        colors,
        gravity: 1.2,
        scalar: 0.8,
        drift: 0,
        ticks: 200,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      } else {
        setTimeout(() => {
          confettiTriggered.current = false;
        }, 5000);
      }
    };

    frame();
  }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      {/* Corner label */}
      <div
        className="label mono"
        style={{
          position: "absolute",
          top: 24,
          left: "clamp(20px, 6vw, 120px)",
        }}
      >
        Portfolio — 2025
      </div>

      {/* Nav */}
      <nav
        className="hero-nav"
        style={{
          position: "absolute",
          top: 20,
          right: "clamp(20px, 6vw, 120px)",
        }}
      >
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="label"
            style={{
              textDecoration: "none",
              color: "var(--text-dim)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-dim)")
            }
          >
            {item}
          </a>
        ))}
      </nav>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        <p className="label" style={{ marginBottom: 20 }}>
          Architectural Designer
        </p>

        <h1
          ref={nameRef}
          onMouseEnter={triggerConfetti}
          style={{
            fontSize: "clamp(44px, 9vw, 120px)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: "var(--text)",
            cursor: "default",
            transition: "color 0.3s",
          }}
          onMouseOver={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
          }
          onMouseOut={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "var(--text)")
          }
        >
          James
          <br />
          Sanchez
        </h1>

        <div className="hero-subtitle" style={{ marginTop: 24 }}>
          <span
            style={{
              width: 48,
              height: 1,
              background: "var(--accent)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              color: "var(--text-dim)",
              fontSize: 14,
              fontWeight: 300,
              maxWidth: 480,
            }}
          >
            SCHRADERGROUP · Greater Philadelphia · BArch Thomas Jefferson University
          </p>
        </div>

        <div className="hero-cta" style={{ marginTop: 36 }}>
          <a
            href="#projects"
            style={{
              padding: "12px 28px",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            style={{
              padding: "12px 28px",
              border: "1px solid var(--border)",
              color: "var(--text-dim)",
              textDecoration: "none",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--muted)";
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Bottom index */}
      <div
        className="label mono"
        style={{
          position: "absolute",
          bottom: 24,
          right: "clamp(20px, 6vw, 120px)",
          color: "var(--muted)",
        }}
      >
        01 / 06
      </div>
    </section>
  );
}
