import { useState } from "react";

// ============================================================
// DATA
// ============================================================
const STATS = [
  { icon: "🏆", label: "Total World Records Set", value: "20+" },
  { icon: "👥", label: "Total Participants", value: "10M +" },
  { icon: "🌍", label: "Countries Represented", value: "25+" },
  { icon: "⭐", label: "Years of Excellence", value: "40+" },
];

const CATEGORIES = ["All", "Mass Participation", "Art & Culture", "Sports", "Heritage", "Innovation"];

const RECORDS = [
  {
    id: 1,
    category: "Mass Participation",
    icon: "🧘",
    title: "Largest Yoga Session",
    desc: "Successfully organized and conducted the largest yoga session with over 10,000 participants.",
    participants: "10,000+ Participants",
    date: "June 2023",
    location: "Jaipur, Rajasthan",
    badge: "National Record",
    certified: "India Book of Records",
  },
  {
    id: 2,
    category: "Art & Culture",
    icon: "🎨",
    title: "Most People Painting Simultaneously",
    desc: "A magnificent display of creativity with thousands painting the same theme simultaneously.",
    participants: "5,000+ Artists",
    date: "March 2023",
    location: "Jaipur, Rajasthan",
    badge: "World Record",
    certified: "Worldwide Records",
  },
  {
    id: 3,
    category: "Heritage",
    icon: "🚩",
    title: "Largest Human Flag Formation",
    desc: "Created the largest human flag formation representing the Indian national flag.",
    participants: "5,000+ Participants",
    date: "August 2022",
    location: "Jaipur, Rajasthan",
    badge: "World Record",
    certified: "Asia Book of Records",
  },
  {
    id: 4,
    category: "Art & Culture",
    icon: "💃",
    title: "Largest Folk Dance Performance",
    desc: "Organized the largest simultaneous Rajasthani folk dance performance in history.",
    participants: "3,500+ Dancers",
    date: "January 2022",
    location: "Jaipur, Rajasthan",
    badge: "Asia Record",
    certified: "Asia Book of Records",
  },
  {
    id: 5,
    category: "Art & Culture",
    icon: "🎨",
    title: "Largest Rangoli Design",
    desc: "Created the largest rangoli design using traditional Rajasthani art patterns covering 10,000 sq ft.",
    participants: "2,000+ Artists",
    date: "October 2021",
    location: "Jaipur, Rajasthan",
    badge: "National Record",
    certified: "India Book of Records",
  },
  {
    id: 6,
    category: "Heritage",
    icon: "👳",
    title: "Longest Chain of Turbans",
    desc: "Set the record for the longest chain of traditional Rajasthani turbans tied together.",
    participants: "1,500+ People",
    date: "March 2020",
    location: "Jaipur, Rajasthan",
    badge: "World Record",
    certified: "Worldwide Records",
  },
  {
    id: 7,
    category: "Mass Participation",
    icon: "🥁",
    title: "Largest Dhol Ensemble",
    desc: "Assembled the largest group of dhol players performing simultaneously, creating a record-breaking rhythm.",
    participants: "1,200+ Musicians",
    date: "November 2019",
    location: "Jaipur, Rajasthan",
    badge: "National Record",
    certified: "India Book of Records",
  },
  {
    id: 8,
    category: "Innovation",
    icon: "🌿",
    title: "Largest Tree Plantation Drive",
    desc: "Organized the largest single-day tree plantation drive as a world record attempt for environmental awareness.",
    participants: "8,000+ Volunteers",
    date: "July 2019",
    location: "Rajasthan",
    badge: "National Record",
    certified: "India Book of Records",
  },
  {
    id: 9,
    category: "Sports",
    icon: "🏃",
    title: "Largest Marathon for a Cause",
    desc: "Organized the largest charity marathon with participants from over 20 countries.",
    participants: "6,000+ Runners",
    date: "February 2018",
    location: "Jaipur, Rajasthan",
    badge: "Asia Record",
    certified: "Asia Book of Records",
  },
];

const BADGE_COLORS = {
  "World Record": { bg: "#dbeafe", color: "#1d4ed8" },
  "National Record": { bg: "#dcfce7", color: "#166534" },
  "Asia Record": { bg: "#fef9c3", color: "#854d0e" },
};

const CATEGORY_COLORS = {
  "Mass Participation": { bg: "#dbeafe", color: "#1d4ed8" },
  "Art & Culture": { bg: "#ede9fe", color: "#6b21a8" },
  "Heritage": { bg: "#ffedd5", color: "#9a3412" },
  "Sports": { bg: "#dcfce7", color: "#166534" },
  "Innovation": { bg: "#d1fae5", color: "#065f46" },
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
              <div key={i} style={{ width: 34, height: 34, borderRadius: 8, background: "#374151", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, cursor: "pointer", color: "#d1d5db" }}>{s.icon}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// RECORD CARD
// ============================================================
function RecordCard({ record }) {
  const catStyle = CATEGORY_COLORS[record.category] || { bg: "#f3f4f6", color: "#374151" };
  const badgeStyle = BADGE_COLORS[record.badge] || { bg: "#f3f4f6", color: "#374151" };

  return (
    <div
      style={{
        background: "#fff", borderRadius: 16, padding: "28px 28px 24px",
        border: "1px solid #e5e7eb", boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.2s, border-color 0.2s, transform 0.2s", cursor: "default",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.12)"; e.currentTarget.style.borderColor = "#bfdbfe"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 1px 8px rgba(0,0,0,0.05)"; e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{ fontSize: 36, background: "#eff6ff", borderRadius: 12, width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {record.icon}
        </div>
        <span style={{ background: catStyle.bg, color: catStyle.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>
          {record.category}
        </span>
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px", color: "#111827", lineHeight: 1.3 }}>
        {record.title}
      </h3>
      <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 18px", lineHeight: 1.6 }}>
        {record.desc}
      </p>
      <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6b7280", fontSize: 13 }}>
            <span>👥</span><span style={{ color: "#374151", fontWeight: 600 }}>{record.participants}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6b7280", fontSize: 13 }}>
            <span>🕐</span><span>{record.date}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#6b7280", fontSize: 13 }}>
            <span>📍</span><span>{record.location}</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ background: badgeStyle.bg, color: badgeStyle.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>
            {record.badge}
          </span>
          <span style={{ fontSize: 11, color: "#9ca3af" }}>✓ {record.certified}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN WORLD RECORDS PAGE
// ============================================================
export default function WorldRecords() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? RECORDS
    : RECORDS.filter((r) => r.category === activeFilter);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a2e", background: "#f9fafb", minHeight: "100vh" }}>

      {/* PAGE HEADER */}
      <div style={{ background: "#fff", textAlign: "center", padding: "60px 40px 50px", borderBottom: "1px solid #e5e7eb" }}>
        <p style={{ color: "#2563eb", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
          WORLD RECORDS
        </p>
        <h1 style={{ fontSize: 52, fontWeight: 900, margin: "0 0 16px", color: "#111827" }}>
          Record-<span style={{ color: "#2563eb" }}>Breaking</span>
        </h1>
        <p style={{ color: "#6b7280", fontSize: 17, maxWidth: 600, margin: "0 auto" }}>
          A collection of extraordinary world records organized and facilitated by Mr. Manmohan Agarwal
        </p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>

        {/* STATS CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 52 }}>
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#fff", borderRadius: 16, padding: "40px 24px",
                textAlign: "center", border: "1px solid #e5e7eb",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 48, marginBottom: 14, color: "#2563eb" }}>{s.icon}</div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#2563eb", marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 15, color: "#6b7280", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CATEGORY FILTER */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: activeFilter === cat ? "#2563eb" : "#fff",
                color: activeFilter === cat ? "#fff" : "#374151",
                border: `1.5px solid ${activeFilter === cat ? "#2563eb" : "#d1d5db"}`,
                borderRadius: 24, padding: "8px 20px",
                fontSize: 14, fontWeight: 500, cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { if (activeFilter !== cat) { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.color = "#2563eb"; } }}
              onMouseLeave={e => { if (activeFilter !== cat) { e.currentTarget.style.borderColor = "#d1d5db"; e.currentTarget.style.color = "#374151"; } }}
            >
              {cat} {cat === "All" ? `(${RECORDS.length})` : `(${RECORDS.filter(r => r.category === cat).length})`}
            </button>
          ))}
        </div>

        {/* RECORDS GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 60 }}>
          {filtered.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#9ca3af" }}>
            <div style={{ fontSize: 50, marginBottom: 12 }}>🔍</div>
            <p>Is category mein koi record nahi mila.</p>
          </div>
        )}
      </div>

      {/* CTA SECTION */}
      <section style={{ background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)", padding: "64px 40px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 34, fontWeight: 800, marginBottom: 14 }}>
          Ready to Break a Record?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, maxWidth: 500, margin: "0 auto 32px" }}>
          Join us in creating history. Register for our upcoming world record events and be part of something extraordinary.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button
            style={{ background: "#fff", color: "#1d4ed8", border: "none", borderRadius: 8, padding: "13px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Register Now
          </button>
          <button
            style={{ background: "transparent", color: "#fff", border: "2px solid #fff", borderRadius: 8, padding: "13px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            View Upcoming Events
          </button>
        </div>
      </section>
    </div>
  );
}
