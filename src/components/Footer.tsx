export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px clamp(24px, 8vw, 120px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span className="label mono" style={{ color: "var(--muted)" }}>
        James Sanchez — Architectural Designer
      </span>
      <span className="label mono" style={{ color: "var(--muted)" }}>
        © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
