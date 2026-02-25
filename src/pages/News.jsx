import { useState } from "react";

const NEWS_ARTICLES = [
  {
    id: 1,
    category: "Events",
    featured: true,
    title: "Jaipur World Record Carnival Sets New Milestone with 10,000 Participants",
    excerpt:
      "The largest yoga session ever organized in Rajasthan brings together people from all walks of life in a celebration of health and unity.",
    body: "In a breathtaking display of coordination and dedication, the Jaipur World Record Carnival successfully organized a yoga session featuring over 10,000 participants from across India and beyond.",
    date: "February 10, 2026",
    views: "2.5K",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
  },
  {
    id: 2,
    category: "Awards",
    featured: false,
    title: "Mr. Manmohan Agarwal Honored with Cultural Ambassador Award",
    excerpt: "Recognition for outstanding contribution to promoting Indian culture and heritage through world record events.",
    date: "February 8, 2026",
    views: "1.8K",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=700&q=80",
  },
  {
    id: 3,
    category: "Announcements",
    featured: false,
    title: "Grand World Record Carnival 2026 Announces Registration",
    excerpt: "Get ready for the biggest celebration of human achievement. Early bird registrations now open for March 2026 event.",
    date: "February 5, 2026",
    views: "3.2K",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=700&q=80",
  },
  {
    id: 4,
    category: "Trends",
    featured: false,
    title: "Youth Participation Reaches All-Time High in Record Events",
    excerpt: "A new generation of record breakers emerges as youth engagement in world record attempts soars.",
    date: "January 28, 2026",
    views: "2.1K",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&q=80",
  },
  {
    id: 5,
    category: "Culture",
    featured: false,
    title: "Traditional Arts Get Modern Recognition Through Record Attempts",
    excerpt: "How world record events are helping preserve and promote India's rich cultural heritage.",
    date: "January 25, 2026",
    views: "1.9K",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=700&q=80",
  },
  {
    id: 6,
    category: "Media",
    featured: false,
    title: "International Recognition for Jaipur's Record-Breaking Events",
    excerpt: "Global media spotlight on Jaipur's emergence as a hub for world record achievements.",
    date: "January 20, 2026",
    views: "2.8K",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=80",
  },
  {
    id: 7,
    category: "Education",
    featured: false,
    title: "Record Carnival Partners with Educational Institutions",
    excerpt: "New initiative aims to bring world record opportunities to students across India.",
    date: "January 15, 2026",
    views: "1.6K",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=700&q=80",
  },
  {
    id: 8,
    category: "Innovation",
    featured: false,
    title: "Environmental Records: Breaking Barriers for a Green Future",
    excerpt: "New category of eco-friendly world records inspires sustainable achievements across communities.",
    date: "January 10, 2026",
    views: "2.3K",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80",
  },
];

const TRENDING = [
  { rank: 1, title: "World Record Yoga Session", views: "5.2K views" },
  { rank: 2, title: "Youth Championship 2026", views: "4.8K views" },
  { rank: 3, title: "Cultural Heritage Records", views: "3.9K views" },
  { rank: 4, title: "Traditional Arts Revival", views: "3.5K views" },
];

const ARCHIVE = ["February 2026", "January 2026", "December 2025", "November 2025"];

const CATEGORY_COLORS = {
  Events:        { bg: "#dbeafe", color: "#1d4ed8" },
  Awards:        { bg: "#fce7f3", color: "#9d174d" },
  Announcements: { bg: "#dcfce7", color: "#166534" },
  Trends:        { bg: "#fef9c3", color: "#854d0e" },
  Culture:       { bg: "#ede9fe", color: "#6b21a8" },
  Media:         { bg: "#e0f2fe", color: "#075985" },
  Education:     { bg: "#ffedd5", color: "#9a3412" },
  Innovation:    { bg: "#d1fae5", color: "#065f46" },
};

// ============================================================
// BADGE
// ============================================================
function Badge({ category }) {
  const style = CATEGORY_COLORS[category] || { bg: "#f3f4f6", color: "#374151" };
  return (
    <span
      style={{
        background: style.bg,
        color: style.color,
        fontSize: 12,
        fontWeight: 600,
        padding: "4px 12px",
        borderRadius: 20,
        border: `1px solid ${style.color}30`,
        display: "inline-block",
      }}
    >
      {category}
    </span>
  );
}

// ============================================================
// FEATURED CARD
// ============================================================
function FeaturedCard({ article }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 24,
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }}
          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
        />
        <div style={{ display: "none", width: "100%", height: 340, background: "linear-gradient(135deg,#bfdbfe,#93c5fd)", alignItems: "center", justifyContent: "center", fontSize: 60 }}>
          🏟️
        </div>
        <span style={{ position: "absolute", top: 16, left: 16, background: "rgba(255,255,255,0.9)", color: "#374151", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>
          Featured
        </span>
      </div>
      <div style={{ padding: "28px 32px 24px" }}>
        <Badge category={article.category} />
        <h2 style={{ fontSize: 26, fontWeight: 800, margin: "14px 0 10px", color: "#111827", lineHeight: 1.3 }}>
          {article.title}
        </h2>
        <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.6, marginBottom: 10 }}>{article.excerpt}</p>
        <p style={{ color: "#374151", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{article.body}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f3f4f6", paddingTop: 16 }}>
          <div style={{ display: "flex", gap: 20, color: "#9ca3af", fontSize: 13 }}>
            <span>📅 {article.date}</span>
            <span>👁 {article.views} views</span>
          </div>
          <a href="#" style={{ color: "#9ca3af", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>Read Full Article</a>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// ARTICLE CARD
// ============================================================
function ArticleCard({ article }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 16, overflow: "hidden", marginBottom: 20, background: "#fff", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: "100%", height: 220, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
          onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.03)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
        <div style={{ display: "none", height: 220, background: "linear-gradient(135deg,#e0f2fe,#bfdbfe)", alignItems: "center", justifyContent: "center", fontSize: 50 }}>📰</div>
      </div>
      <div style={{ padding: "20px 24px" }}>
        <Badge category={article.category} />
        <h3 style={{ fontSize: 18, fontWeight: 700, margin: "12px 0 8px", color: "#111827", lineHeight: 1.4 }}>{article.title}</h3>
        <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{article.excerpt}</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #f3f4f6", paddingTop: 14 }}>
          <div style={{ display: "flex", gap: 16, color: "#9ca3af", fontSize: 12 }}>
            <span>📅 {article.date}</span>
            <span>👁 {article.views}</span>
          </div>
          <a href="#" style={{ color: "#2563eb", fontSize: 14, textDecoration: "none", fontWeight: 600 }}>Read More →</a>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN EXPORT
// ============================================================
export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const FILTER_TABS = [
    { label: "All",     count: NEWS_ARTICLES.length },
    { label: "Events",  count: NEWS_ARTICLES.filter((a) => a.category === "Events").length },
    { label: "Awards",  count: NEWS_ARTICLES.filter((a) => a.category === "Awards").length },
    { label: "Trends",  count: NEWS_ARTICLES.filter((a) => a.category === "Trends").length },
    { label: "Culture", count: NEWS_ARTICLES.filter((a) => a.category === "Culture").length },
  ];

  const featured = NEWS_ARTICLES.find((a) => a.featured);
  const rest = NEWS_ARTICLES.filter((a) => !a.featured);
  const filtered = activeFilter === "All" ? rest : rest.filter((a) => a.category === activeFilter);
  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a2e", background: "#f9fafb", minHeight: "100vh" }}>

      {/* PAGE HEADER */}
      <div style={{ background: "#fff", textAlign: "center", padding: "60px 40px 40px", borderBottom: "1px solid #e5e7eb" }}>
        <p style={{ color: "#2563eb", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>
          NEWS & UPDATES
        </p>
        <h1 style={{ fontSize: 52, fontWeight: 900, margin: "0 0 16px", color: "#111827" }}>Latest</h1>
        <p style={{ color: "#6b7280", fontSize: 17, maxWidth: 560, margin: "0 auto 32px" }}>
          Stay updated with the latest news, events, and achievements from Jaipur World Record Carnival
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.label}
              onClick={() => { setActiveFilter(tab.label); setVisibleCount(4); }}
              style={{
                background: activeFilter === tab.label ? "#2563eb" : "#fff",
                color: activeFilter === tab.label ? "#fff" : "#374151",
                border: `1.5px solid ${activeFilter === tab.label ? "#2563eb" : "#d1d5db"}`,
                borderRadius: 24, padding: "8px 20px", fontSize: 14, fontWeight: 500,
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 32, alignItems: "start" }}>

        {/* LEFT: Articles */}
        <div>
          {activeFilter === "All" && featured && <FeaturedCard article={featured} />}
          {visibleArticles.map((article) => <ArticleCard key={article.id} article={article} />)}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#9ca3af" }}>
              <div style={{ fontSize: 50, marginBottom: 12 }}>📭</div>
              <p>Is category mein koi article nahi mila.</p>
            </div>
          )}

          {hasMore && (
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <button
                onClick={() => setVisibleCount((v) => v + 4)}
                style={{ background: "#fff", color: "#374151", border: "1.5px solid #d1d5db", borderRadius: 24, padding: "12px 32px", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.target.style.borderColor = "#2563eb"; e.target.style.color = "#2563eb"; }}
                onMouseLeave={(e) => { e.target.style.borderColor = "#d1d5db"; e.target.style.color = "#374151"; }}
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: Sidebar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

          {/* Trending */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #e5e7eb", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
            <h4 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, color: "#111827" }}>
              📈 Trending Topics
            </h4>
            {TRENDING.map((t) => (
              <div key={t.rank} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 0", borderBottom: t.rank < TRENDING.length ? "1px solid #f3f4f6" : "none", cursor: "pointer" }}>
                <span style={{ color: "#9ca3af", fontSize: 16, fontWeight: 700, minWidth: 20, textAlign: "center" }}>{t.rank}</span>
                <div>
                  <p style={{ margin: "0 0 3px", fontWeight: 600, fontSize: 14, color: "#111827" }}>{t.title}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>{t.views}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #e5e7eb", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
            <h4 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#111827" }}>Subscribe to Newsletter</h4>
            <p style={{ margin: "0 0 16px", fontSize: 13, color: "#6b7280" }}>Get the latest news and updates delivered to your inbox.</p>
            <input
              type="email" placeholder="Enter your email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #e5e7eb", borderRadius: 10, fontSize: 14, outline: "none", marginBottom: 10, boxSizing: "border-box", color: "#374151" }}
              onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
            <button style={{ width: "100%", background: "#2563eb", color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              Subscribe
            </button>
          </div>

          {/* Archive */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #e5e7eb", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
            <h4 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, color: "#111827" }}>🗂 Archive</h4>
            {ARCHIVE.map((month, i) => (
              <p key={month} style={{ margin: 0, padding: "11px 0", borderBottom: i < ARCHIVE.length - 1 ? "1px solid #f3f4f6" : "none", fontSize: 14, color: "#2563eb", fontWeight: 500, cursor: "pointer" }}>
                {month}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}