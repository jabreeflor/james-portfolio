"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <p className="label" style={{ marginBottom: 16 }}>
        <span className="section-line" />
        06 — Contact
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Let&apos;s work
            <br />
            together.
          </h2>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontWeight: 300, maxWidth: 400 }}>
            Open to opportunities, collaborations, and conversations about architecture, urbanism,
            and sustainable design.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            {
              label: "Email",
              value: "mx.sanchez.james@gmail.com",
              href: "mailto:mx.sanchez.james@gmail.com",
            },
            {
              label: "Phone",
              value: "+1 (484) 925-5371",
              href: "tel:+14849255371",
            },
            {
              label: "Location",
              value: "Greater Philadelphia Area, PA",
              href: null,
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/jamesnsanchez",
              href: "https://linkedin.com/in/jamesnsanchez",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "24px 0",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className="label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    color: "var(--text)",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 300,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--text)")
                  }
                >
                  {item.value}
                </a>
              ) : (
                <span style={{ color: "var(--text)", fontSize: 14, fontWeight: 300 }}>
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
