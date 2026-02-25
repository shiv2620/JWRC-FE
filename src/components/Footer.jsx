export default function Footer() {
  const SOCIAL = [
    { icon: "f", label: "Facebook", color: "#1877f2" },
    { icon: "◎", label: "Instagram", color: "#e1306c" },
    { icon: "𝕏", label: "Twitter", color: "#fff" },
    { icon: "▶", label: "YouTube", color: "#ff0000" },
  ];

  const hoverLink = (e) => { e.target.style.color = "#ff6b35"; e.target.style.paddingLeft = "4px"; };
  const unhoverLink = (e) => { e.target.style.color = "#9ca3af"; e.target.style.paddingLeft = "0"; };

  return (
    <footer style={{
      background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
      color: "#d1d5db",
      padding: "64px 40px 0",
      fontFamily: "'Segoe UI', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, #ff6b35 0%, #f7c59f 40%, #2563eb 100%)",
      }} />

      {/* Subtle background pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>

        {/* TOP GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 48, marginBottom: 52 }}>

          {/* BRAND COLUMN */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 46, height: 46,
                background: "linear-gradient(135deg,#ff6b35,#f7c59f)",
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 15, fontWeight: 800, color: "#fff",
                boxShadow: "0 4px 14px rgba(255,107,53,0.35)",
              }}>JW</div>
              <div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#f9fafb" }}>Jaipur World Record</p>
                <p style={{ margin: 0, fontSize: 11, color: "#6b7280", letterSpacing: 0.5 }}>CARNIVAL</p>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "#9ca3af", marginBottom: 20, maxWidth: 280 }}>
              India's premier platform for celebrating extraordinary human achievements and breaking world records.
            </p>
            {/* Contact pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="mailto:info@jaipurworldrecordcarnival.in" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8, padding: "7px 12px", textDecoration: "none",
                color: "#9ca3af", fontSize: 12, transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,107,53,0.1)"; e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)"; e.currentTarget.style.color = "#ff6b35"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#9ca3af"; }}
              >
                ✉️ <span>info@jaipurworldrecordcarnival.in</span>
              </a>
              <a href="tel:+9198290XXXXX" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8, padding: "7px 12px", textDecoration: "none",
                color: "#9ca3af", fontSize: 12, transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,107,53,0.1)"; e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)"; e.currentTarget.style.color = "#ff6b35"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#9ca3af"; }}
              >
                📞 <span>+91 98290 XXXXX</span>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 20, fontSize: 13, letterSpacing: 1, textTransform: "uppercase" }}>Quick Links</h5>
            {["Home", "World Records", "Events", "News"].map(l => (
              <p key={l} style={{ margin: "0 0 12px" }}>
                <a href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 13, transition: "color 0.2s, padding-left 0.2s" }}
                  onMouseEnter={hoverLink} onMouseLeave={unhoverLink}
                >{l}</a>
              </p>
            ))}
          </div>

          {/* RESOURCES */}
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 20, fontSize: 13, letterSpacing: 1, textTransform: "uppercase" }}>Resources</h5>
            {["How to Participate", "Guidelines", "Registration", "FAQs"].map(l => (
              <p key={l} style={{ margin: "0 0 12px" }}>
                <a href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 13, transition: "color 0.2s, padding-left 0.2s" }}
                  onMouseEnter={hoverLink} onMouseLeave={unhoverLink}
                >{l}</a>
              </p>
            ))}
          </div>

          {/* LEGAL */}
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 20, fontSize: 13, letterSpacing: 1, textTransform: "uppercase" }}>Legal</h5>
            {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Media Kit"].map(l => (
              <p key={l} style={{ margin: "0 0 12px" }}>
                <a href="#" style={{ color: "#9ca3af", textDecoration: "none", fontSize: 13, transition: "color 0.2s, padding-left 0.2s" }}
                  onMouseEnter={hoverLink} onMouseLeave={unhoverLink}
                >{l}</a>
              </p>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "24px 0 28px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <p style={{ fontSize: 12, margin: 0, color: "#4b5563" }}>
            © 2026 Jaipur World Record Carnival. All rights reserved.{" "}
            Founded by <span style={{ color: "#ff6b35", fontWeight: 600 }}>Mr. Manmohan Agarwal</span>
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 8 }}>
            {SOCIAL.map((s, i) => (
              <div key={i} title={s.label} style={{
                width: 36, height: 36, borderRadius: 9,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, cursor: "pointer", color: "#6b7280",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = s.color;
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 6px 16px ${s.color}55`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "#6b7280";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >{s.icon}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}