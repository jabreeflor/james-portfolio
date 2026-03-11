export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        {/* Left */}
        <div>
          <p className="label" style={{ marginBottom: 16 }}>
            <span className="section-line" />
            02 — About
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Designing spaces
            <br />
            that matter.
          </h2>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, marginBottom: 20, fontWeight: 300 }}>
            James Sanchez is an Architectural Designer at SCHRADERGROUP in the Greater Philadelphia
            area, bringing thoughtful design to mixed-use residential developments, community wellness
            centers, and adaptive reuse projects.
          </p>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, marginBottom: 20, fontWeight: 300 }}>
            A proud first-generation Mexican American and the first in his family to earn a college
            degree, James holds a Bachelor of Architecture from Thomas Jefferson University (2023),
            where he developed a design philosophy centered on sustainability, community resilience,
            and adaptive environments.
          </p>
          <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontWeight: 300 }}>
            From producing construction documents for 108,000 GSF mixed-use buildings to designing
            conceptual net-zero towers and community flood-resilience proposals, James works at the
            intersection of technical precision and environmental stewardship.
          </p>
        </div>

        {/* Right — stat blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[
            { label: "Current Role", value: "Architectural Designer", sub: "SCHRADERGROUP · Greater Philadelphia" },
            { label: "Education", value: "Bachelor of Architecture", sub: "Thomas Jefferson University · 2023" },
            { label: "Background", value: "First-Gen Mexican American", sub: "First in family to earn a college degree" },
            { label: "Experience", value: "3+ Years", sub: "Professional architectural practice" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "28px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <p className="label" style={{ marginBottom: 8 }}>{item.label}</p>
              <p style={{ fontWeight: 400, color: "var(--text)", marginBottom: 4 }}>{item.value}</p>
              <p style={{ fontSize: 13, color: "var(--text-dim)", fontWeight: 300 }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
