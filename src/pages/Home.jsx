import { useState, useEffect } from "react";

const TIMELINE = [
  { year: "2003", title: "The Beginning", desc: "Mr. Manmohan Agarwal's journey started with a vision to create a platform for celebrating human potential and achievements in India.", side: "left" },
  { year: "2010", title: "First Major Event", desc: "Successfully organized the first large-scale world record event in Jaipur with over 1,000 participants.", side: "right" },
  { year: "2015", title: "National Recognition", desc: "Received national recognition for promoting Indian culture and heritage through record-breaking events.", side: "left" },
  { year: "2018", title: "Carnival Established", desc: "Officially established the Jaipur World Record Carnival as an annual celebration of achievements.", side: "right" },
  { year: "2020", title: "Digital Expansion", desc: "Adapted to virtual events during the pandemic, reaching global audiences and inspiring millions.", side: "left" },
  { year: "2023", title: "Milestone Achievement", desc: "Organized the largest yoga session with 10,000+ participants, setting a new national record.", side: "right" },
];

const PRINCIPLES = [
  { icon: "👥", title: "Inclusivity", desc: "We believe everyone has a unique talent worth celebrating. Our events welcome participants from all backgrounds, ages, and abilities." },
  { icon: "🏅", title: "Authenticity", desc: "Every record is verified and certified by recognized world record organizations, maintaining the highest standards of authenticity." },
  { icon: "📖", title: "Cultural Preservation", desc: "We promote traditional Indian arts, crafts, and heritage through innovative record-breaking initiatives." },
  { icon: "⚡", title: "Innovation", desc: "Constantly evolving our approach to create new categories and opportunities for achievement." },
];

const TEAM = [
  { initial: "M", name: "Mr. Manmohan Agarwal", role: "Founder & Chief Organizer", desc: "Visionary leader with 20+ years of experience in organizing world record events" },
  { initial: "E", name: "Event Management Team", role: "Professional Coordinators", desc: "Dedicated team ensuring smooth execution of every event" },
  { initial: "T", name: "Technical Experts", role: "Verification Specialists", desc: "Certified professionals for record validation and documentation" },
  { initial: "M", name: "Media Relations", role: "Communications Team", desc: "Managing press coverage and social media presence" },
];

const IMPACT = [
  { icon: "👥", num: "100,000+", label: "Lives Impacted", sub: "Participants whose lives have been transformed" },
  { icon: "🏆", num: "15+", label: "World Records", sub: "Successfully organized and certified" },
  { icon: "🌐", num: "25+", label: "Countries", sub: "International participants represented" },
  { icon: "📈", num: "100+", label: "Events", sub: "Record-breaking events conducted" },
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

export default function Home() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a2e", margin: 0, padding: 0 }}>

      {/* HERO SECTION */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #f0f7ff 0%, #e8f4fd 60%, #dbeafe 100%)" }}>
        <div style={{ display: "flex", alignItems: "center", maxWidth: 1100, margin: "0 auto", padding: "80px 40px", gap: 60, flex: 1 }}>
          {/* LEFT */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e0f2fe", borderRadius: 20, padding: "6px 14px", marginBottom: 24 }}>
              <span>🏆</span>
              <span style={{ color: "#0369a1", fontSize: 13, fontWeight: 500 }}>World Record Holder & Event Organizer</span>
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 800, margin: "0 0 4px", color: "#111827", lineHeight: 1.1 }}>Mr. Manmohan</h1>
            <h1 style={{ fontSize: 52, fontWeight: 800, margin: "0 0 20px", color: "#2563eb", lineHeight: 1.1 }}>Agarwal</h1>
            <p style={{ fontSize: 18, color: "#374151", marginBottom: 20, fontWeight: 500 }}>Founder - Jaipur World Record Carnival</p>
            <div style={{ background: "#e0f2fe", borderLeft: "4px solid #2563eb", borderRadius: 4, padding: "14px 18px", marginBottom: 32 }}>
              <p style={{ margin: 0, color: "#1e3a8a", fontSize: 15, fontWeight: 600 }}>बनायें विश्व कीर्तिमान मनमोहन अग्रवाल के साथ</p>
            </div>
            <p style={{ color: "#6b7280", lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
              A visionary leader who has dedicated his life to celebrating human potential and achievements. Holder of multiple world records and organizer of India's most prestigious world record events.
            </p>
            <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
              <button style={{
                background: "#2563eb", color: "#fff", border: "none", borderRadius: 8,
                padding: "12px 24px", fontWeight: 600, fontSize: 15, cursor: "pointer",
                transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,99,235,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,99,235,0.3)"; }}
              >View World Records</button>
              <button style={{
                background: "transparent", color: "#2563eb", border: "1.5px solid #2563eb",
                borderRadius: 8, padding: "12px 24px", fontWeight: 600, fontSize: 15, cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#eff6ff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
              >Upcoming Events</button>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              {[
                { icon: "🏆", num: "15+", label: "Multiple World Records" },
                { icon: "🎖️", num: "20+", label: "Years of Excellence" },
                { icon: "📅", num: "100+", label: "Events Organized" },
              ].map(s => (
                <div key={s.label} style={{
                  textAlign: "center", background: "#fff", borderRadius: 12,
                  padding: "14px 20px", boxShadow: "0 2px 12px rgba(37,99,235,0.08)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(37,99,235,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ fontSize: 22 }}>{s.icon}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#2563eb" }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: "#6b7280" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT - Photo placeholder */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: -10, right: -10, background: "#2563eb", color: "#fff", borderRadius: 10, padding: "10px 16px", zIndex: 2, textAlign: "center", fontSize: 12, fontWeight: 700, lineHeight: 1.3 }}>
              Multiple World<br />Record Holder
            </div>
            <div style={{ width: 380, height: 420, borderRadius: 16, background: "linear-gradient(135deg,#bfdbfe,#93c5fd)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", boxShadow: "0 20px 60px rgba(37,99,235,0.2)" }}>
              <div style={{ textAlign: "center", color: "#1d4ed8" }}>
                <div style={{ fontSize: 80 }}>👤</div>
                <p style={{ margin: 0, fontWeight: 600 }}>Mr. Manmohan Agarwal</p>
                <p style={{ margin: 0, fontSize: 13 }}>Add photo here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ background: "#fff", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <p style={{ color: "#2563eb", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>ABOUT THE FOUNDER</p>
            <h2 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 12px" }}>Meet <span style={{ color: "#2563eb" }}>Mr. Manmohan Agarwal</span></h2>
            <p style={{ color: "#6b7280", fontSize: 16 }}>A pioneering figure in the world of record-breaking events and achievements</p>
          </div>
          <div style={{ display: "flex", gap: 60, alignItems: "flex-start" }}>
            {/* LEFT TEXT */}
            <div style={{ flex: 1 }}>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: 20 }}>Mr. Manmohan Agarwal is not just a world record holder; he is a catalyst for change and inspiration. With over two decades of experience in organizing record-breaking events, he has established the Jaipur World Record Carnival as one of India's most prestigious platforms for recognizing human potential.</p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: 20 }}>His journey began with a simple belief: every person has the potential to achieve something extraordinary. This philosophy has driven him to create opportunities for thousands of individuals to showcase their unique talents and abilities.</p>
              <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: 20 }}>Under his leadership, the Jaipur World Record Carnival has grown into a movement that celebrates diversity in achievement - from traditional arts to modern innovations, from physical feats to intellectual accomplishments.</p>
              <div style={{ background: "#eff6ff", borderLeft: "4px solid #2563eb", borderRadius: 8, padding: "18px 22px", fontStyle: "italic", color: "#1e3a8a", marginTop: 24 }}>
                <p style={{ margin: "0 0 8px", fontSize: 15 }}>"Records are not just about numbers; they're about inspiring others to dream bigger and achieve greater."</p>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 13 }}>- Mr. Manmohan Agarwal</p>
              </div>
            </div>

            {/* RIGHT - 2x2 GRID */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, width: 420, flexShrink: 0 }}>
              {[
                { icon: "🎯", title: "Vision", desc: "To create a platform that recognizes and celebrates extraordinary human achievements across India." },
                { icon: "❤️", title: "Passion", desc: "Dedicated to inspiring people to push boundaries and achieve what seems impossible." },
                { icon: "👥", title: "Community", desc: "Building a community of record breakers, achievers, and dreamers across the nation." },
                { icon: "⚡", title: "Excellence", desc: "Maintaining the highest standards in organizing world-class record attempt events." },
              ].map(c => (
                <div key={c.title} style={{
                  background: "#f0f9ff", borderRadius: 12, padding: "20px 16px",
                  textAlign: "center", border: "1px solid #e0f2fe",
                  transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#e0f2fe"; }}
                >
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                  <h4 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700 }}>{c.title}</h4>
                  <p style={{ margin: 0, fontSize: 12, color: "#6b7280", lineHeight: 1.5 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: "#f8fafc", padding: "80px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#2563eb", marginBottom: 8 }}>The Journey</h2>
            <p style={{ color: "#6b7280" }}>Two decades of dedication, innovation, and record-breaking achievements</p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "#bfdbfe", transform: "translateX(-50%)" }} />
            {TIMELINE.map((t, i) => (
              <div key={i} style={{ display: "flex", justifyContent: t.side === "left" ? "flex-start" : "flex-end", marginBottom: 40, position: "relative" }}>
                <div style={{ position: "absolute", left: "50%", top: 20, width: 14, height: 14, background: "#2563eb", borderRadius: "50%", transform: "translate(-50%,-50%)", border: "3px solid #fff", zIndex: 1, boxShadow: "0 0 0 3px #bfdbfe" }} />
                <div style={{
                  width: "44%", background: "#f0f9ff", borderRadius: 12,
                  padding: "20px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  textAlign: t.side === "left" ? "right" : "left",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.14)"; e.currentTarget.style.transform = t.side === "left" ? "translateX(-4px)" : "translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <div style={{ color: "#2563eb", fontWeight: 800, fontSize: 18, marginBottom: 4 }}>{t.year}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{t.title}</div>
                  <p style={{ color: "#6b7280", margin: 0, fontSize: 13, lineHeight: 1.6 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section style={{ background: "#fff", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "#2563eb", marginBottom: 8 }}>Our Impact</h2>
          <p style={{ color: "#6b7280", marginBottom: 50 }}>Numbers that reflect our commitment to celebrating human achievement</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {IMPACT.map(item => (
              <div key={item.label} style={{
                background: "#f0f9ff", borderRadius: 16, padding: "32px 20px", border: "1px solid #dbeafe",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.14)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#2563eb", marginBottom: 4 }}>{item.num}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.label}</div>
                <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section style={{ background: "#f8fafc", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#2563eb", marginBottom: 8 }}>Our Guiding Principles</h2>
            <p style={{ color: "#6b7280" }}>The values that drive everything we do</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {PRINCIPLES.map(p => (
              <div key={p.title} style={{
                background: "#fff", borderRadius: 16, padding: "28px",
                display: "flex", gap: 16, alignItems: "flex-start",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                <div style={{ background: "#2563eb", borderRadius: 12, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h4 style={{ margin: "0 0 8px", fontWeight: 700, fontSize: 17 }}>{p.title}</h4>
                  <p style={{ margin: 0, color: "#6b7280", fontSize: 14, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section style={{ background: "#fff", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Our Team</h2>
            <p style={{ color: "#6b7280" }}>Dedicated professionals committed to excellence</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {TEAM.map(m => (
              <div key={m.name} style={{
                background: "#f8fafc", borderRadius: 16, padding: "28px 20px",
                textAlign: "center", border: "1px solid #e5e7eb",
                transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,99,235,0.12)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "#bfdbfe"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
              >
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#2563eb", color: "#fff", fontSize: 26, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{m.initial}</div>
                <h4 style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 700 }}>{m.name}</h4>
                <p style={{ color: "#2563eb", fontSize: 12, fontWeight: 600, margin: "0 0 10px" }}>{m.role}</p>
                <p style={{ color: "#6b7280", fontSize: 13, margin: 0, lineHeight: 1.5 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOMENTS OF EXCELLENCE */}
      <section style={{ background: "#f8fafc", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#2563eb", marginBottom: 8 }}>Moments of Excellence</h2>
            <p style={{ color: "#6b7280" }}>Capturing the spirit of achievement and celebration</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { emoji: "🧘", label: "Yoga World Record", color: "#e0f2fe" },
              { emoji: "🎉", label: "Mass Events", color: "#dbeafe" },
              { emoji: "🏰", label: "Cultural Heritage", color: "#ede9fe" },
            ].map(img => (
              <div key={img.label} style={{
                borderRadius: 16, overflow: "hidden", height: 220,
                background: img.color, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 12,
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,99,235,0.14)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: 60 }}>{img.emoji}</div>
                <p style={{ margin: 0, fontWeight: 600, color: "#374151" }}>{img.label}</p>
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>Add image here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)", padding: "70px 40px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Join Our Mission</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, maxWidth: 560, margin: "0 auto 36px" }}>Be part of a community that celebrates excellence and pushes the boundaries of human achievement. Together, we can inspire the world.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button style={{ background: "transparent", border: "2px solid #fff", color: "#fff", borderRadius: 8, padding: "14px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Become a Participant</button>
          <button style={{ background: "transparent", border: "2px solid #fff", color: "#fff", borderRadius: 8, padding: "14px 28px", fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "background 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Partner With Us</button>
        </div>
      </section>
    </div>
  );
}