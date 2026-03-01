import { useState } from "react";
import { jsPDF } from "jspdf";

// ── Put cert_template.png in your /public folder ──

export default function CertificateDownload() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("4 February 2026");
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    if (!name.trim()) {
      alert("Please enter participant name.");
      return;
    }
    setLoading(true);

    // Load template image first
    const img = new Image();
    img.src = "images/cert_template.png";
    img.onload = () => {
      // A4 portrait: 210 x 297 mm
      const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const W = 210;
      const H = 297;

      // ── 1. BACKGROUND TEMPLATE IMAGE ──
      doc.addImage(img, "PNG", 0, 0, W, H);

      // ── 2. TEXT OVERLAY ──
      // All positions are tuned to match the blank template

      // RECORD TITLE LINE 1
      doc.setFont("helvetica", "bolditalic");
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text('"WORLD RECORD', W / 2, 179, { align: "center" });

      // RECORD TITLE LINE 2
      doc.text('LARGEST CPR RELAY FOR A SOCIAL CAUSE"', W / 2, 185, { align: "center" });

      // BODY TEXT
      doc.setFont("helvetica", "bolditalic");
      doc.setFontSize(8.5);
      doc.setTextColor(10, 10, 10);

      const bodyLines = doc.splitTextToSize(
        "Manmohan Agarwal (Founder of Jaipur World Record Carnival), Dr. V. K. Jain, Rev. Fr. Sangeeth Raj, S.J. (Principal, St. Xavier's School, Nevta), Dr. (Fr.) Arokya Swamy, S.J. (Principal, St. Xavier's College, Jaipur), and Fr. Dominic Arockiam, S.J. (C-Scheme, Jaipur) from Jaipur, Rajasthan, India, have been selected for this achievement as they successfully organized and conducted the Largest CPR Relay for a Social Cause on " + date + ".",
        W - 68
      );
      doc.text(bodyLines, W / 2, 190, { align: "center" });

      let y = 186 + bodyLines.length * 5.5 + 3;

      const body2Lines = doc.splitTextToSize(
        "The record was achieved through the coordinated participation of 4,317 individuals in a large-scale CPR relay activity conducted at the St. Xavier's Campus, Nevta, Jaipur, India.",
        W - 68
      );
      doc.text(body2Lines, W / 2, y, { align: "center" });

      y += body2Lines.length * 5.5 + 6;

      // PARTICIPATED BY
      doc.setFont("helvetica", "bolditalic");
      doc.setFontSize(9);
      doc.text("Participated by: " + name, W / 2, y, { align: "center" });

      // DATE
      y += 7;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.text("Dated : " + date, 33, y);

      // ── SAVE ──
      const safeName = name.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
      doc.save(`Certificate_CPR_${safeName}.pdf`);
      setLoading(false);
    };

    img.onerror = () => {
      alert("Template image not found! Make sure cert_template.png is in /public folder.");
      setLoading(false);
    };
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      border: "1px solid #d4af37",
      borderRadius: 16,
      padding: "32px 28px",
      maxWidth: 500,
      margin: "0 auto",
      boxShadow: "0 8px 32px rgba(212,175,55,0.15)",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>👑</div>
        <h3 style={{ color: "#d4af37", fontSize: 16, fontWeight: 800, margin: "0 0 4px", letterSpacing: 1 }}>
          WORLD RECORD CERTIFICATE
        </h3>
        <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>
          LARGEST CPR RELAY FOR A SOCIAL CAUSE
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #d4af37, transparent)", marginBottom: 24 }} />

      {/* NAME INPUT */}
      <label style={{ display: "block", color: "#d4af37", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 }}>
        Participated by — Naam *
      </label>
      <input
        type="text"
        placeholder="Participant ka naam likhein..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%", padding: "12px 14px",
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(212,175,55,0.4)",
          borderRadius: 10, fontSize: 14, color: "#f1f5f9",
          outline: "none", boxSizing: "border-box",
          fontFamily: "'Segoe UI', sans-serif", marginBottom: 16,
        }}
        onFocus={(e) => (e.target.style.borderColor = "#d4af37")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.4)")}
      />

      {/* DATE INPUT */}
      <label style={{ display: "block", color: "#d4af37", fontSize: 12, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 }}>
        Date
      </label>
      <input
        type="text"
        placeholder="e.g. 4 February 2026"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          width: "100%", padding: "12px 14px",
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(212,175,55,0.4)",
          borderRadius: 10, fontSize: 14, color: "#f1f5f9",
          outline: "none", boxSizing: "border-box",
          fontFamily: "'Segoe UI', sans-serif", marginBottom: 20,
        }}
        onFocus={(e) => (e.target.style.borderColor = "#d4af37")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.4)")}
      />

      {/* DOWNLOAD BUTTON */}
      <button
        onClick={handleDownload}
        disabled={loading}
        style={{
          width: "100%",
          background: loading ? "#374151" : "linear-gradient(135deg, #d4af37, #f7c559)",
          color: loading ? "#9ca3af" : "#0f172a",
          border: "none", borderRadius: 10, padding: "14px",
          fontSize: 15, fontWeight: 800, cursor: loading ? "not-allowed" : "pointer",
          transition: "all 0.2s",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}
        onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,175,55,0.4)"; } }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
      >
        {loading ? "⏳ Generating..." : "⬇️ Download Certificate PDF"}
      </button>

      <p style={{ textAlign: "center", color: "#475569", fontSize: 11, marginTop: 12, marginBottom: 0 }}>
        King's Book of World Records  •  www.kingsbwr.com
      </p>
    </div>
  );
}