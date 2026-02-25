import { useState } from "react";

// ============================================================
// DATA
// ============================================================
const STATS = [
  { icon: "🏆", label: "World Records", value: "15+" },
  { icon: "🥇", label: "Awards Received", value: "30+" },
  { icon: "⭐", label: "Participants", value: "1,00,000+" },
  { icon: "🎖️", label: "Events Organized", value: "100+" },
];

const AWARDS = [
  { year: "2023", title: "Excellence in Event Management Award", org: "Ministry of Tourism, Rajasthan", desc: "Recognized for outstanding contribution to promoting Rajasthan through world record events.", icon: "🏆" },
  { year: "2022", title: "Cultural Ambassador Award", org: "Indian Cultural Forum", desc: "Honoured for preserving and promoting traditional Indian arts through record attempts.", icon: "🥇" },
  { year: "2021", title: "National Achiever Award", org: "Government of Rajasthan", desc: "Awarded for exceptional contribution to nation-building through record-breaking events.", icon: "🌟" },
  { year: "2020", title: "Best Event Organizer Award", org: "India Book of Records", desc: "Recognized as the best event organizer for conducting large-scale world record attempts during challenging times.", icon: "🎖️" },
  { year: "2019", title: "Community Leadership Award", org: "Jaipur Chamber of Commerce", desc: "Honored for inspiring thousands of citizens to participate in record-breaking activities.", icon: "👑" },
  { year: "2018", title: "Heritage Promoter of the Year", org: "Rajasthan Heritage Foundation", desc: "For outstanding efforts in blending cultural heritage with world record achievements.", icon: "🏅" },
  { year: "2016", title: "Social Impact Award", org: "Times of India Group", desc: "For creating meaningful social impact through inclusive world record events.", icon: "💫" },
  { year: "2014", title: "Youth Inspiration Award", org: "National Youth Council", desc: "For inspiring and engaging youth across India in world record initiatives.", icon: "🌠" },
];

const WORLD_RECORDS = [
  { title: "Largest Yoga Session", year: "2023", participants: "10,000+", desc: "Organized the largest simultaneous yoga session in Rajasthan, certified by India Book of Records.", icon: "🧘", badge: "National Record" },
  { title: "Largest Human Flag Formation", year: "2022", participants: "5,000+", desc: "Created the largest human flag formation of India using 5,000+ participants in Jaipur.", icon: "🚩", badge: "World Record" },
  { title: "Largest Folk Dance Performance", year: "2021", participants: "3,500+", desc: "Organized the largest Rajasthani folk dance performance with 3,500 dancers simultaneously.", icon: "💃", badge: "Asia Record" },
  { title: "Largest Rangoli Design", year: "2020", participants: "2,000+", desc: "Created the largest rangoli design using traditional Rajasthani art patterns.", icon: "🎨", badge: "National Record" },
  { title: "Longest Chain of Turbans", year: "2019", participants: "1,500+", desc: "Set the record for the longest chain of traditional Rajasthani turbans tied together.", icon: "👳", badge: "World Record" },
  { title: "Largest Dhol Ensemble", year: "2018", participants: "1,200+", desc: "Assembled the largest group of dhol players performing simultaneously in India.", icon: "🥁", badge: "National Record" },
];

const BADGE_COLORS = {
  "World Record": { bg: "#dbeafe", color: "#1d4ed8" },
  "National Record": { bg: "#dcfce7", color: "#166534" },
  "Asia Record": { bg: "#fef9c3", color: "#854d0e" },
};

const SOCIAL_LINKS = [{ icon: "f" }, { icon: "◎" }, { icon: "𝕏" }, { icon: "▶" }];

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer style={{ background: "#111827", color: "#d1d5db", padding: "50px 40px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 36 }}>
          <div>
            <div style={{ width: 44, height: 44, background: "linear-gradient(135deg,#ff6b35,#f7c59f)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 14 }}>JW</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>Jaipur World Record Carnival is India's premier platform for celebrating extraordinary human achievements and breaking world records.</p>
            <p style={{ fontSize: 13, marginBottom: 6 }}>✉️ info@jaipurworldrecordcarnival.in</p>
            <p style={{ fontSize: 13 }}>📞 +91 98290 XXXXX</p>
          </div>
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 14 }}>Quick Links</h5>
            {["Home", "World Records", "Events", "News"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px", fontSize: 13 }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>{l}</a></p>
            ))}
          </div>
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 14 }}>Resources</h5>
            {["How to Participate", "Guidelines", "Registration", "FAQs"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px", fontSize: 13 }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>{l}</a></p>
            ))}
          </div>
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 14 }}>Legal</h5>
            {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Media Kit"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px", fontSize: 13 }}><a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>{l}</a></p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #374151", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 12, margin: 0 }}>© 2026 Jaipur World Record Carnival. All rights reserved. Founded by <span style={{ color: "#60a5fa" }}>Mr. Manmohan Agarwal</span></p>
          <div style={{ display: "flex", gap: 10 }}>
            {SOCIAL_LINKS.map((s, i) => (
              <div key={i} style={{ width: 34, height: 34, borderRadius: 8, background: "#374151", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, cursor: "pointer", color: "#d1d5db", transition: "background 0.2s, transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#4b5563"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#374151"; e.currentTarget.style.transform = "translateY(0)"; }}
              >{s.icon}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN ACHIEVEMENTS PAGE
// ============================================================
export default function Achievements() {
  const [activeTab, setActiveTab] = useState("awards");

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a2e", background: "#f9fafb", minHeight: "100vh" }}>

      {/* PAGE HEADER */}
      <div style={{ background: "#fff", textAlign: "center", padding: "60px 40px 50px", borderBottom: "1px solid #e5e7eb" }}>
        <p style={{ color: "#2563eb", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
          ACHIEVEMENTS
        </p>
        <h1 style={{ fontSize: 52, fontWeight: 900, margin: "0 0 16px", color: "#111827" }}>
          Awards & <span style={{ color: "#2563eb" }}>Recognitions</span>
        </h1>
        <p style={{ color: "#6b7280", fontSize: 17, maxWidth: 540, margin: "0 auto" }}>
          Celebrating excellence and dedication through prestigious awards and recognitions
        </p>
      </div>

      {/* STATS CARDS */}
      <div style={{ maxWidth: 1100, margin: "48px auto 0", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 48 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{
              background: "#fff", borderRadius: 16, padding: "36px 20px",
              textAlign: "center", border: "1px solid #e5e7eb",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              transition: "box-shadow 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 42, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#2563eb", marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 14, color: "#6b7280", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* TAB SWITCHER */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p style={{ color: "#6b7280", fontSize: 15, marginBottom: 20 }}>
            A journey of recognition and excellence over the years
          </p>
          <div style={{ display: "inline-flex", background: "#f3f4f6", borderRadius: 12, padding: 4, gap: 4 }}>
            {[
              { key: "awards", label: "🥇 Awards" },
              { key: "records", label: "🏆 World Records" },
            ].map((tab) => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
                background: activeTab === tab.key ? "#fff" : "transparent",
                color: activeTab === tab.key ? "#2563eb" : "#6b7280",
                border: "none", borderRadius: 10, padding: "10px 28px",
                fontSize: 14, fontWeight: 600, cursor: "pointer",
                boxShadow: activeTab === tab.key ? "0 1px 6px rgba(0,0,0,0.1)" : "none",
                transition: "all 0.2s",
              }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* AWARDS LIST */}
        {activeTab === "awards" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 60 }}>
            {AWARDS.map((award, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 14, padding: "28px 32px",
                border: "1px solid #e5e7eb", boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
                display: "flex", alignItems: "flex-start", gap: 24,
                transition: "box-shadow 0.2s, border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.12)"; e.currentTarget.style.borderColor = "#bfdbfe"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 8px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ textAlign: "center", minWidth: 70 }}>
                  <div style={{ fontSize: 36, marginBottom: 6 }}>{award.icon}</div>
                  <div style={{ color: "#2563eb", fontWeight: 800, fontSize: 16 }}>{award.year}</div>
                </div>
                <div style={{ width: 1, alignSelf: "stretch", background: "#e5e7eb", margin: "0 8px" }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 4px", color: "#111827" }}>{award.title}</h3>
                  <p style={{ color: "#2563eb", fontSize: 13, fontWeight: 600, margin: "0 0 8px" }}>{award.org}</p>
                  <p style={{ color: "#6b7280", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WORLD RECORDS GRID */}
        {activeTab === "records" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 60 }}>
            {WORLD_RECORDS.map((rec, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 16, padding: "28px 28px",
                border: "1px solid #e5e7eb", boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.2s, border-color 0.2s, transform 0.2s",
                cursor: "default",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.12)"; e.currentTarget.style.borderColor = "#bfdbfe"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 8px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ fontSize: 40 }}>{rec.icon}</div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                    <span style={{ background: BADGE_COLORS[rec.badge]?.bg || "#f3f4f6", color: BADGE_COLORS[rec.badge]?.color || "#374151", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>
                      {rec.badge}
                    </span>
                    <span style={{ color: "#2563eb", fontWeight: 800, fontSize: 15 }}>{rec.year}</span>
                  </div>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 6px", color: "#111827" }}>{rec.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 14px", lineHeight: 1.6 }}>{rec.desc}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#eff6ff", borderRadius: 8, padding: "6px 12px" }}>
                  <span style={{ fontSize: 14 }}>👥</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#1d4ed8" }}>{rec.participants} Participants</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA SECTION */}
      <section style={{ background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)", padding: "64px 40px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 34, fontWeight: 800, marginBottom: 14 }}>Be Part of the Next Record</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, maxWidth: 500, margin: "0 auto 32px" }}>
          Join thousands of achievers and create history with Jaipur World Record Carnival.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button style={{ background: "#fff", color: "#1d4ed8", border: "none", borderRadius: 8, padding: "13px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >Register Now</button>
          <button style={{ background: "transparent", color: "#fff", border: "2px solid #fff", borderRadius: 8, padding: "13px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
          >View Events</button>
        </div>
      </section>
    </div>
  );
}