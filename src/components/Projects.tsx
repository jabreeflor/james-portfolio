"use client";

import { useState } from "react";

const projects = [
  {
    index: "01",
    title: "The Park at Fords Corner",
    client: "Wick Companies",
    location: "Woodbridge, NJ",
    type: "Mixed-Use Residential",
    status: "Construction Documents",
    year: "2024",
    area: "108,000 GSF",
    constructionType: "Type IA & VA",
    description:
      "A modern mixed-use residential community featuring 113 thoughtfully designed apartments — studios and one- to three-bedroom units. The building includes first-floor amenities, fully sprinklered spaces, and a rooftop deck with an attached clubroom. Constructed with a combination of Type IA and VA systems, the design balances durability, safety, and architectural flexibility.",
    tags: ["Residential", "Mixed-Use", "New Construction", "ARCHICAD"],
  },
  {
    index: "02",
    title: "South Ward Wellness Center",
    client: "Brick Education Network",
    location: "Newark, NJ",
    type: "Community Health",
    status: "Construction Documents",
    year: "2025",
    area: "46,000 GSF",
    constructionType: "Type IIB — New Construction",
    description:
      "A four-story community hub designed to empower individuals and families with essential health, wellness, and educational services under one roof. The building houses Healthy Beginnings (maternal health), a St. James Health ambulatory care clinic, a full YMCA fitness center, and BRICK Education Network offices. Designed to exceed the New Jersey Energy Code with geothermal HVAC and rooftop solar PV.",
    tags: ["Community", "Healthcare", "Sustainability", "Geothermal"],
  },
  {
    index: "03",
    title: "SHRR Renovation",
    client: "Sacred Heart",
    location: "Philadelphia, PA",
    type: "Adaptive Reuse",
    status: "Construction Documents",
    year: "2025",
    area: "—",
    constructionType: "Renovation",
    description:
      "Basement renovation and full kitchen renovation at a multi-use residential facility in North Philadelphia. Project involved demolition documentation, corridor condition studies, and kitchen equipment coordination across multiple construction phases. Produced full construction document set including demolition plans, new construction plans, and interior details.",
    tags: ["Renovation", "Residential", "Philadelphia", "CDs"],
  },
  {
    index: "04",
    title: "Frick Chemistry Lab",
    client: "Princeton University",
    location: "Princeton, NJ",
    type: "Academic / Conceptual",
    status: "Academic Project",
    year: "2023",
    area: "—",
    constructionType: "Conceptual New Construction",
    description:
      "A reimagined chemistry laboratory campus incorporating nature through green atriums and courtyard connections. Two-building composition separates education/research from administration, connected by an adaptable facade system used for sun shading, air circulation, and pedestrian interaction. The facade enables passive cooling in summer and solar heat gain in winter through a double-skin glass system.",
    tags: ["Academic", "Sustainability", "Passive Design", "Higher Ed"],
  },
  {
    index: "05",
    title: "Net-Zero Vine Street Tower",
    client: "Urban Proposal",
    location: "Philadelphia, PA",
    type: "Urban Design / Conceptual",
    status: "Academic Project",
    year: "2022",
    area: "—",
    constructionType: "Conceptual",
    description:
      "An innovative urban proposal envisioning a safer, sustainable Philadelphia in 2050. The scheme integrates an elevated park above the Vine Street Expressway, rain gardens and bioswales for stormwater mitigation, dedicated protected bike infrastructure, and a CLT-primary tower structure. CLT construction reduces embodied carbon by 6.75x versus steel and 3.4x versus concrete per floor plate.",
    tags: ["Urban Design", "Net-Zero", "CLT", "Philadelphia"],
  },
  {
    index: "06",
    title: "Adapting to the Tides",
    client: "Community Proposal",
    location: "Venice, Italy",
    type: "Resilience / Conceptual",
    status: "Academic Project",
    year: "2022",
    area: "—",
    constructionType: "Conceptual",
    description:
      "A community-centered resilience proposal addressing rising sea levels in Venice, Italy. The scheme revitalizes an underutilized landfill island by reconnecting it to the vaporetto network and introducing elevated residential blocks, a primary school, and a community center. Green roofs and integrated softscapes mitigate climate impacts while modular housing allows phased, flood-adaptive growth.",
    tags: ["Resilience", "Urban", "Climate", "Community"],
  },
];

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: "120px clamp(24px, 8vw, 120px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <p className="label" style={{ marginBottom: 16 }}>
        <span className="section-line" />
        05 — Work
      </p>
      <h2
        style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 300,
          letterSpacing: "-0.02em",
          marginBottom: 64,
        }}
      >
        Selected Projects
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              borderTop: "1px solid var(--border)",
              cursor: "pointer",
            }}
          >
            {/* Row header */}
            <div
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              style={{
                display: "grid",
                gridTemplateColumns: "64px 1fr auto auto",
                gap: 24,
                alignItems: "center",
                padding: "28px 0",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.paddingLeft = "16px";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.paddingLeft = "0";
              }}
            >
              <span className="mono" style={{ fontSize: 12, color: "var(--muted)" }}>
                {project.index}
              </span>
              <span style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 300 }}>
                {project.title}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "var(--text-dim)",
                  display: "none",
                }}
                className="hide-sm"
              >
                {project.type}
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: activeIdx === i ? "var(--accent)" : "var(--muted)",
                  transition: "transform 0.2s, color 0.2s",
                  transform: activeIdx === i ? "rotate(45deg)" : "none",
                  lineHeight: 1,
                  fontWeight: 300,
                }}
              >
                +
              </span>
            </div>

            {/* Expanded content */}
            {activeIdx === i && (
              <div
                style={{
                  padding: "0 0 48px 0",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 48,
                  borderTop: "1px solid var(--border)",
                  paddingTop: 32,
                }}
              >
                {/* Left */}
                <div>
                  <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontWeight: 300, fontSize: 14 }}>
                    {project.description}
                  </p>
                  <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "3px 10px",
                          border: "1px solid var(--border)",
                          fontSize: 11,
                          color: "var(--text-dim)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — meta */}
                <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    { label: "Client", value: project.client },
                    { label: "Location", value: project.location },
                    { label: "Type", value: project.constructionType },
                    { label: "Year", value: project.year },
                    ...(project.area !== "—"
                      ? [{ label: "Area", value: project.area }]
                      : []),
                  ].map((meta) => (
                    <div
                      key={meta.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "12px 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <span className="label" style={{ fontSize: 10 }}>
                        {meta.label}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text)", fontWeight: 300 }}>
                        {meta.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>

      {/* PDF Link */}
      <div
        style={{
          marginTop: 48,
          padding: "32px",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <p className="label" style={{ marginBottom: 8 }}>Full Portfolio</p>
          <p style={{ color: "var(--text-dim)", fontSize: 14, fontWeight: 300 }}>
            Complete project documentation, construction drawings, and design process available on request.
          </p>
        </div>
        <a
          href="mailto:mx.sanchez.james@gmail.com?subject=Portfolio Request"
          style={{
            padding: "12px 28px",
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            textDecoration: "none",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
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
          Request Portfolio PDF
        </a>
      </div>
    </section>
  );
}
