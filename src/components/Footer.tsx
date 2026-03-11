export default function Footer() {
  return (
    <footer className="footer-wrap">
      <span className="label mono" style={{ color: "var(--muted)" }}>
        James Sanchez — Architectural Designer
      </span>
      <span className="label mono" style={{ color: "var(--muted)" }}>
        © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
