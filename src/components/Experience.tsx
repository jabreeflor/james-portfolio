const experience = [
  {
    company: "SCHRADERGROUP",
    role: "Architectural Designer",
    period: "2023 — Present",
    location: "Greater Philadelphia, PA",
    description:
      "Contributing to a range of commercial and institutional projects. Producing construction documents, coordinating with consultants, and translating design intent into buildable architectural solutions.",
    type: "Full-time",
  },
  {
    company: "Thriven Design",
    role: "Architectural Designer",
    period: "2021 — 2023",
    location: "Greater Philadelphia, PA",
    description:
      "2.5 years of hands-on practice across mixed-use residential, community health, and renovation projects. Led documentation on The Park at Fords Corner (108K GSF, 113 units, Woodbridge NJ) and the South Ward Wellness Center (46K GSF, Newark NJ). Coordinated BIM workflows in ARCHICAD on complex multi-consultant projects.",
    type: "Full-time",
    projects: ["The Park at Fords Corner", "South Ward Wellness Center", "SHRR Basement Renovation"],
  },
  {
    company: "[BoxWood] Architects",
    role: "Intern Architect",
    period: "2020 — 2021",
    location: "Philadelphia, PA",
    description:
      "Internship supporting design and documentation on residential and commercial renovation projects. Developed skills in Revit production, client presentations, and construction administration support.",
    type: "Internship",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{
        borderBottom: "1px solid var(--border)",
      }}
    >
      <p className="label" style={{ marginBottom: 16 }}>
        <span className="section-line" />
        03 — Experience
      </p>
      <h2
        style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          marginBottom: 48,
        }}
      >
        Professional Timeline
      </h2>

      <div style={{ position: "relative" }}>
        {/* Vertical rule */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background: "var(--border)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {experience.map((job, i) => (
            <div
              key={i}
              className="timeline-grid"
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: -4,
                  top: 6,
                  width: 9,
                  height: 9,
                  border: "1px solid var(--accent)",
                  background: "var(--bg)",
                }}
              />

              {/* Left — period */}
              <div>
                <p className="mono" style={{ fontSize: 13, color: "var(--text-dim)", marginBottom: 4 }}>
                  {job.period}
                </p>
                <p style={{ fontSize: 12, color: "var(--muted)" }}>{job.location}</p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    padding: "2px 8px",
                    border: "1px solid var(--border)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                  }}
                >
                  {job.type}
                </span>
              </div>

              {/* Right — details */}
              <div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    marginBottom: 4,
                    color: "var(--text)",
                  }}
                >
                  {job.role}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--accent)",
                    marginBottom: 16,
                    fontWeight: 300,
                  }}
                >
                  {job.company}
                </p>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.7, fontWeight: 300, fontSize: 14 }}>
                  {job.description}
                </p>
                {job.projects && (
                  <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {job.projects.map((p) => (
                      <span
                        key={p}
                        style={{
                          padding: "3px 10px",
                          border: "1px solid var(--border)",
                          fontSize: 11,
                          color: "var(--text-dim)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
