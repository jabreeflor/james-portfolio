"use client";

const skillGroups = [
  {
    category: "BIM & 3D",
    skills: ["Revit", "ARCHICAD", "Rhino 3D", "AutoCAD"],
  },
  {
    category: "Visualization",
    skills: ["Enscape", "Lumion", "Twinmotion", "V-Ray"],
  },
  {
    category: "Adobe Suite",
    skills: ["Photoshop", "InDesign", "Illustrator", "Acrobat"],
  },
  {
    category: "Practice",
    skills: ["Construction Documents", "Schematic Design", "BIM Coordination", "Code Review"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "120px clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <p className="label" style={{ marginBottom: 16 }}>
        <span className="section-line" />
        04 — Skills
      </p>
      <h2
        style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          marginBottom: 64,
        }}
      >
        Tools &amp; Expertise
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 1,
          border: "1px solid var(--border)",
        }}
      >
        {skillGroups.map((group) => (
          <div
            key={group.category}
            style={{
              padding: "36px 32px",
              borderRight: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <p className="label" style={{ marginBottom: 24, color: "var(--accent)" }}>
              {group.category}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "var(--text)",
                    fontSize: 14,
                    fontWeight: 300,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      background: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
