import React from "react";

const UPCOMING_EVENTS = [
  {
    title: "Grand World Record Carnival 2026",
    desc: "The biggest celebration of human achievement. Three days of record-breaking events across multiple categories.",
    date: "March 15-17, 2026 | 9:00 AM - 6:00 PM",
    location: "SMS Stadium, Jaipur",
    participants: "Expected 50,000+ Participants",
    categories: ["Mass Participation", "Cultural", "Sports", "Arts"],
    badge: "Registration Open",
    badgeColor: "#16a34a",
  },
  {
    title: "Youth Record Breakers Championship",
    desc: "Empowering the next generation of record breakers. Special youth-focused categories and mentorship sessions.",
    date: "April 21-22, 2026 | 10:00 AM - 5:00 PM",
    location: "Birla Auditorium, Jaipur",
    participants: "Expected 10,000+ Youth",
    categories: ["Innovation", "Technology", "Arts", "Performance"],
    badge: "Early Bird",
    badgeColor: "#d97706",
  },
  {
    title: "Traditional Arts Record Fest",
    desc: "Preserving cultural heritage through record attempts. Showcasing India's rich artistic traditions.",
    date: "May 10, 2026 | 8:00 AM - 7:00 PM",
    location: "Albert Hall Museum, Jaipur",
    participants: "Expected 5,000+ Artists",
    categories: ["Traditional Arts", "Handicrafts", "Music", "Dance"],
    badge: "Coming Soon",
    badgeColor: "#7c3aed",
  },
];

const FEATURES = [
  { icon: "🎯", title: "Professional Management", desc: "World-class event organization at every step" },
  { icon: "📜", title: "Official Recognition", desc: "Certified by national & international record bodies" },
  { icon: "🏅", title: "Multiple Categories", desc: "Opportunities for every skill and age group" },
  { icon: "📺", title: "Media Coverage", desc: "Full press & broadcast coverage of all events" },
];

const PROCESS = [
  { step: "01", label: "Choose Your Event", desc: "Browse upcoming events and pick the one that suits you" },
  { step: "02", label: "Register Online", desc: "Quick and easy registration process in minutes" },
  { step: "03", label: "Prepare & Practice", desc: "Get guidance and tips from our expert team" },
  { step: "04", label: "Break the Record", desc: "Show the world what you're capable of achieving" },
];

const PAST_EVENTS = [
  { year: "2023", name: "Mega Yoga Day", participants: "10,000+", records: "3 Records Set", icon: "🧘" },
  { year: "2023", name: "Art Fest", participants: "5,000+", records: "2 Records Set", icon: "🎨" },
  { year: "2022", name: "Cultural Heritage Day", participants: "8,000+", records: "4 Records Set", icon: "🏛️" },
  { year: "2021", name: "Independence Day Celebration", participants: "15,000+", records: "5 Records Set", icon: "🚩" },
];

const SOCIAL_LINKS = [{ icon: "f" }, { icon: "◎" }, { icon: "𝕏" }, { icon: "▶" }];

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

export default function Events() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a2e", background: "#f9fafb", minHeight: "100vh" }}>

      {/* HEADER */}
      <section style={{
        background: "#fff",
        textAlign: "center",
        padding: "60px 40px 50px",
        borderBottom: "1px solid #e5e7eb",
      }}>
        <p style={{ color: "#2563eb", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
          UPCOMING & PAST
        </p>
        <h1 style={{ fontSize: 52, fontWeight: 900, margin: "0 0 16px", color: "#111827" }}>
          Our <span style={{ color: "#2563eb" }}>Events</span>
        </h1>
        <p style={{ color: "#6b7280", fontSize: 17, maxWidth: 560, margin: "0 auto" }}>
          Join us in creating history and breaking records at our upcoming events.
        </p>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={{ padding: "60px 40px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111827", marginBottom: 32 }}>Upcoming Events</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {UPCOMING_EVENTS.map((event, index) => (
              <div key={index} style={{
                background: "#fff",
                borderRadius: 16,
                padding: "32px 36px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ background: event.badgeColor, color: "#fff", padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>
                      {event.badge}
                    </span>
                    <h2 style={{ marginTop: 14, fontSize: 22, fontWeight: 800, color: "#111827", marginBottom: 8 }}>
                      {event.title}
                    </h2>
                    <p style={{ color: "#6b7280", margin: "0 0 16px", fontSize: 14, lineHeight: 1.6 }}>{event.desc}</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                      <p style={{ margin: 0, fontSize: 14, color: "#374151" }}><span style={{ marginRight: 8 }}>📅</span>{event.date}</p>
                      <p style={{ margin: 0, fontSize: 14, color: "#374151" }}><span style={{ marginRight: 8 }}>📍</span>{event.location}</p>
                      <p style={{ margin: 0, fontSize: 14, color: "#374151" }}><span style={{ marginRight: 8 }}>👥</span>{event.participants}</p>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                      {event.categories.map((cat, i) => (
                        <span key={i} style={{ background: "#e0f2fe", color: "#0369a1", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>
                          {cat}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                      <button style={{
                        background: "#2563eb", color: "#fff", border: "none",
                        padding: "10px 22px", borderRadius: 8, cursor: "pointer",
                        fontWeight: 600, fontSize: 14,
                        transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                        boxShadow: "0 3px 10px rgba(37,99,235,0.3)",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(37,99,235,0.4)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 3px 10px rgba(37,99,235,0.3)"; }}
                      >Register Now</button>
                      <button style={{
                        background: "transparent", border: "2px solid #2563eb",
                        color: "#2563eb", padding: "10px 22px", borderRadius: 8,
                        cursor: "pointer", fontWeight: 600, fontSize: 14,
                        transition: "background 0.2s, transform 0.2s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#eff6ff"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
                      >View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PARTICIPATE */}
      <section style={{ padding: "60px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111827", marginBottom: 8, textAlign: "center" }}>Why Participate?</h2>
          <p style={{ color: "#6b7280", textAlign: "center", fontSize: 15, marginBottom: 36 }}>Everything you need for a world-class record-breaking experience</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: "#f9fafb", padding: "28px 20px", borderRadius: 14,
                textAlign: "center", border: "1px solid #e5e7eb",
                transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{f.icon}</div>
                <p style={{ fontWeight: 700, fontSize: 14, color: "#111827", margin: "0 0 6px" }}>{f.title}</p>
                <p style={{ color: "#6b7280", fontSize: 12, margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "60px 40px", background: "#f9fafb" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111827", marginBottom: 8, textAlign: "center" }}>Simple 4-Step Process</h2>
          <p style={{ color: "#6b7280", textAlign: "center", fontSize: 15, marginBottom: 36 }}>From registration to breaking the record in 4 easy steps</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {PROCESS.map((p, i) => (
              <div key={i} style={{
                background: "#fff", padding: "32px 24px", borderRadius: 16,
                border: "1px solid #e5e7eb", textAlign: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 38, fontWeight: 900, color: "#2563eb", marginBottom: 12, lineHeight: 1 }}>{p.step}</div>
                <p style={{ fontWeight: 700, fontSize: 15, color: "#111827", margin: "0 0 8px" }}>{p.label}</p>
                <p style={{ color: "#6b7280", fontSize: 13, margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section style={{ padding: "60px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#111827", marginBottom: 8, textAlign: "center" }}>Past Successful Events</h2>
          <p style={{ color: "#6b7280", textAlign: "center", fontSize: 15, marginBottom: 36 }}>A legacy of extraordinary achievements</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {PAST_EVENTS.map((event, i) => (
              <div key={i} style={{
                background: "#f9fafb", padding: "28px 20px", borderRadius: 14,
                textAlign: "center", border: "1px solid #e5e7eb",
                transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>{event.icon}</div>
                <div style={{ color: "#2563eb", fontWeight: 800, fontSize: 16, marginBottom: 4 }}>{event.year}</div>
                <p style={{ fontWeight: 700, fontSize: 14, color: "#111827", margin: "0 0 6px" }}>{event.name}</p>
                <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 6px" }}>{event.participants} Participants</p>
                <p style={{ color: "#16a34a", fontWeight: 700, fontSize: 13, margin: 0 }}>{event.records}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#1d4ed8,#0ea5e9)", padding: "64px 40px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 34, fontWeight: 800, marginBottom: 14 }}>Ready to Make History?</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, maxWidth: 500, margin: "0 auto 32px" }}>
          Register today and be part of something extraordinary.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button style={{ background: "#fff", color: "#1d4ed8", border: "none", borderRadius: 8, padding: "13px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >Register Now</button>
          <button style={{ background: "transparent", color: "#fff", border: "2px solid #fff", borderRadius: 8, padding: "13px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Contact Us</button>
        </div>
      </section>
    </div>
  );
}
