import { useState } from "react";

// ============================================================
// DATA
// ============================================================
const CONTACT_INFO = [
  {
    icon: "✉️",
    label: "Email",
    value: "info@jaipurworldrecordcarnival.in",
    href: "mailto:info@jaipurworldrecordcarnival.in",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 9145909026",
    href: "tel:+91 9145909026",
  },
  {
    icon: "📍",
    label: "Address",
    value: "Jaipur, Rajasthan, India",
    href: "#",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "www.jaipurworldrecordcarnival.in",
    href: "#",
  },
];

const SOCIAL_LINKS = [
  { icon: "f", label: "Facebook" },
  { icon: "◎", label: "Instagram" },
  { icon: "𝕏", label: "Twitter" },
  { icon: "▶", label: "YouTube" },
];

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer style={{ background: "#111827", color: "#d1d5db", padding: "50px 40px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 36 }}>
          <div>
            <div style={{
              width: 44, height: 44,
              background: "linear-gradient(135deg,#ff6b35,#f7c59f)",
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 15, fontWeight: 800, color: "#fff",
              marginBottom: 14,
            }}>JW</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>
              Jaipur World Record Carnival is India's premier platform for celebrating extraordinary human achievements and breaking world records.
            </p>
            <p style={{ fontSize: 13, marginBottom: 6 }}>✉️ info@jaipurworldrecordcarnival.in</p>
            <p style={{ fontSize: 13 }}>📞 +91 98290 XXXXX</p>
          </div>
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 14 }}>Quick Links</h5>
            {["Home", "World Records", "Events", "News"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px", fontSize: 13 }}>
                <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>{l}</a>
              </p>
            ))}
          </div>
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 14 }}>Resources</h5>
            {["How to Participate", "Guidelines", "Registration", "FAQs"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px", fontSize: 13 }}>
                <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>{l}</a>
              </p>
            ))}
          </div>
          <div>
            <h5 style={{ color: "#f9fafb", fontWeight: 700, marginBottom: 14 }}>Legal</h5>
            {["Privacy Policy", "Terms & Conditions", "Refund Policy", "Media Kit"].map((l) => (
              <p key={l} style={{ margin: "0 0 10px", fontSize: 13 }}>
                <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>{l}</a>
              </p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #374151", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 12, margin: 0 }}>
            © 2026 Jaipur World Record Carnival. All rights reserved. Founded by{" "}
            <span style={{ color: "#60a5fa" }}>Mr. Manmohan Agarwal</span>
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {SOCIAL_LINKS.map((s, i) => (
              <div key={i} style={{
                width: 34, height: 34, borderRadius: 8,
                background: "#374151",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, cursor: "pointer", color: "#d1d5db",
                transition: "background 0.2s, transform 0.2s",
              }}
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
// INPUT COMPONENT
// ============================================================
function InputField({ label, required, type = "text", placeholder, value, onChange, isTextarea }) {
  const [focused, setFocused] = useState(false);

  const baseStyle = {
    width: "100%",
    padding: "12px 14px",
    border: `1.5px solid ${focused ? "#2563eb" : "#e5e7eb"}`,
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    color: "#374151",
    fontFamily: "'Segoe UI', sans-serif",
    background: focused ? "#eff6ff" : "#fff",
    transition: "border-color 0.2s, background 0.2s",
    resize: isTextarea ? "vertical" : undefined,
    minHeight: isTextarea ? 130 : undefined,
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block", fontSize: 13, fontWeight: 600,
        color: "#374151", marginBottom: 6,
      }}>
        {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
      </label>
      {isTextarea ? (
        <textarea placeholder={placeholder} value={value} onChange={onChange} style={baseStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      ) : (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={baseStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
      )}
    </div>
  );
}

// ============================================================
// MAIN CONTACT PAGE
// ============================================================
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a2e", background: "#f9fafb", minHeight: "100vh" }}>

      {/* PAGE HEADER */}
      <div style={{
        background: "#fff",
        textAlign: "center",
        padding: "60px 40px 50px",
        borderBottom: "1px solid #e5e7eb",
      }}>
        <p style={{
          color: "#2563eb", fontWeight: 700, fontSize: 13,
          letterSpacing: 2, textTransform: "uppercase", marginBottom: 10,
        }}>GET IN TOUCH</p>
        <h1 style={{ fontSize: 52, fontWeight: 900, margin: "0 0 16px", color: "#111827" }}>
          Contact
        </h1>
        <p style={{ color: "#6b7280", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
          Contact Jaipur Record Carnival For Any Query...
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1000, margin: "48px auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 28 }}>

        {/* SEND MESSAGE FORM */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "36px 40px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s, transform 0.3s",
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 28px", color: "#2563eb" }}>
            बनायें विश्व कीर्तिमान मनमोहन अग्रवाल के साथ
          </h2>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "#16a34a" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ color: "#6b7280", fontSize: 15 }}>
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                style={{
                  marginTop: 20, background: "#2563eb", color: "#fff",
                  border: "none", borderRadius: 8, padding: "10px 24px",
                  fontSize: 14, fontWeight: 600, cursor: "pointer",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.target.style.background = "#1d4ed8"; e.target.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.target.style.background = "#2563eb"; e.target.style.transform = "translateY(0)"; }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
                <InputField label="Full Name" required placeholder="Enter your name" value={form.name} onChange={handleChange("name")} />
                <InputField label="Email Address" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange("email")} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
                <InputField label="Phone Number" required type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange("phone")} />
                <InputField label="Subject" placeholder="How can we help?" value={form.subject} onChange={handleChange("subject")} />
              </div>
              <InputField label="Message" required placeholder="Tell us about your inquiry or how you'd like to participate..." value={form.message} onChange={handleChange("message")} isTextarea />

              <div style={{ textAlign: "right", marginTop: 8 }}>
                <button
                  onClick={handleSubmit}
                  style={{
                    background: "#2563eb", color: "#fff", border: "none",
                    borderRadius: 10, padding: "13px 36px", fontSize: 15,
                    fontWeight: 700, cursor: "pointer",
                    transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
                  }}
                  onMouseEnter={e => { e.target.style.background = "#1d4ed8"; e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 22px rgba(37,99,235,0.4)"; }}
                  onMouseLeave={e => { e.target.style.background = "#2563eb"; e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 14px rgba(37,99,235,0.3)"; }}
                >
                  Send Message
                </button>
              </div>
            </>
          )}
        </div>

        {/* CONTACT INFORMATION */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "36px 40px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s, transform 0.3s",
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 28px", color: "#111827" }}>
            Contact Information
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {CONTACT_INFO.map((item) => (
              <a key={item.label} href={item.href} style={{
                display: "flex", alignItems: "flex-start", gap: 16,
                padding: "20px",
                background: "#f9fafb",
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                textDecoration: "none",
                transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s, background 0.2s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#2563eb";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.12)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.background = "#f0f6ff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "#f9fafb";
                }}
              >
                <div style={{
                  width: 44, height: 44, background: "#eff6ff",
                  borderRadius: 10, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 20, flexShrink: 0,
                  border: "1px solid #dbeafe",
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ margin: "0 0 4px", fontSize: 12, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {item.label}
                  </p>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#111827", lineHeight: 1.4 }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid #f3f4f6" }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 14 }}>
              Follow Us
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIAL_LINKS.map((s, i) => (
                <div key={i} title={s.label} style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "#2563eb",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, cursor: "pointer", color: "#fff",
                  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.transform = "translateY(-3px) scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 16px rgba(37,99,235,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#2563eb"; e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
                >{s.icon}</div>
              ))}
            </div>
          </div>
        </div>

        {/* MAP PLACEHOLDER */}
        <div style={{
          background: "#e0f2fe",
          borderRadius: 16,
          height: 220,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid #bae6fd",
          flexDirection: "column", gap: 10,
          transition: "box-shadow 0.3s, transform 0.3s",
          cursor: "pointer",
        }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(3,105,161,0.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          <div style={{ fontSize: 48 }}>🗺️</div>
          <p style={{ color: "#0369a1", fontWeight: 600, margin: 0, fontSize: 15 }}>Jaipur, Rajasthan, India</p>
          <p style={{ color: "#0284c7", margin: 0, fontSize: 13 }}>Embed Google Maps here</p>
        </div>
      </div>
    </div>
  );
}
