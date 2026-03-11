"use client";

import { useRef, useCallback, useState } from "react";

export default function Hero() {
  const confettiTriggered = useRef(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const triggerConfetti = useCallback(async () => {
    if (confettiTriggered.current) return;
    confettiTriggered.current = true;
    const confetti = (await import("canvas-confetti")).default;
    const end = Date.now() + 2000;
    const colors = ["#c8a97a", "#e8e8e8", "#888888", "#ffffff", "#8a6f4a"];
    const frame = () => {
      confetti({ particleCount: 3, angle: 90, spread: 80, origin: { x: 0.5, y: 0 }, colors, gravity: 1.2, scalar: 0.8, ticks: 200 });
      if (Date.now() < end) requestAnimationFrame(frame);
      else setTimeout(() => { confettiTriggered.current = false; }, 5000);
    };
    frame();
  }, []);

  const navItems = ["About", "Experience", "Projects", "Contact"];

  return (
    <>
      {/* Fixed vertical accent spine — desktop only */}
      <div className="hide-mobile" style={{
        position: "fixed", left: 24, top: "10%", height: "80%", width: 1,
        background: "linear-gradient(to bottom, transparent, var(--accent) 20%, var(--accent) 80%, transparent)",
        opacity: 0.35, zIndex: 10, pointerEvents: "none",
      }} />

      {/* Mobile fullscreen nav overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(8,8,8,0.98)", zIndex: 100,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: "absolute", top: 24, right: 24, background: "none", border: "none",
            color: "var(--text)", fontSize: 28, cursor: "pointer", lineHeight: 1,
          }}>✕</button>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 32, fontWeight: 200, color: "var(--text)", textDecoration: "none", letterSpacing: "0.05em" }}>
              {item}
            </a>
          ))}
        </div>
      )}

      <section id="home" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 clamp(24px, 8vw, 120px)", position: "relative",
        borderBottom: "1px solid var(--border)", overflow: "hidden",
      }}>
        {/* Animated architectural SVG grid */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.06 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="archGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <animateTransform attributeName="patternTransform" type="translate" from="0 0" to="80 80" dur="20s" repeatCount="indefinite" />
                <line x1="0" y1="0" x2="80" y2="80" stroke="#c8a97a" strokeWidth="0.5" />
                <line x1="80" y1="0" x2="0" y2="80" stroke="#c8a97a" strokeWidth="0.3" />
                <line x1="40" y1="0" x2="40" y2="80" stroke="#c8a97a" strokeWidth="0.3" />
                <line x1="0" y1="40" x2="80" y2="40" stroke="#c8a97a" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archGrid)" />
          </svg>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 60% 60% at 30% 50%, transparent 30%, var(--bg) 80%)",
          }} />
        </div>

        {/* Corner label — desktop */}
        <div className="label mono hide-mobile" style={{ position: "absolute", top: 32, left: "clamp(24px, 8vw, 120px)" }}>
          Portfolio — 2025
        </div>

        {/* Desktop nav */}
        <nav className="hide-mobile" style={{ position: "absolute", top: 28, right: "clamp(24px, 8vw, 120px)", display: "flex", gap: 32 }}>
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="label"
              style={{ textDecoration: "none", color: "var(--text-dim)", transition: "color 0.2s" }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--accent)"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--text-dim)"}>
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button className="hide-desktop" onClick={() => setMenuOpen(true)} style={{
          position: "absolute", top: 24, right: 24, background: "none", border: "none",
          cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 4,
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{ width: 24, height: 1, background: "var(--text)", display: "block" }} />
          ))}
        </button>

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1000 }}>
          <p className="label" style={{ marginBottom: 20 }}>Architectural Designer</p>

          <h1 onMouseEnter={triggerConfetti} style={{
            fontSize: "clamp(64px, 13vw, 160px)", fontWeight: 200,
            letterSpacing: "-0.04em", lineHeight: 0.95, color: "var(--text)", cursor: "default",
          }}>
            James<br />Sanchez
          </h1>

          {/* Gold accent gradient line */}
          <div style={{ width: "100%", maxWidth: 480, height: 1, background: "linear-gradient(to right, var(--accent), transparent)", margin: "28px 0 20px" }} />

          <p style={{ color: "var(--text-dim)", fontSize: 14, fontWeight: 300 }}>
            SCHRADERGROUP · Greater Philadelphia · BArch Thomas Jefferson University
          </p>

          <div className="sm-stack" style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#projects" style={{ padding: "12px 28px", border: "1px solid var(--accent)", color: "var(--accent)", textDecoration: "none", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--bg)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}>
              View Work
            </a>
            <a href="#contact" style={{ padding: "12px 28px", border: "1px solid var(--border)", color: "var(--text-dim)", textDecoration: "none", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--muted)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"; }}>
              Contact
            </a>
          </div>
        </div>

        <div className="label mono hide-mobile" style={{ position: "absolute", bottom: 32, right: "clamp(24px, 8vw, 120px)", color: "var(--muted)" }}>
          01 / 06
        </div>
      </section>
    </>
  );
}
