import { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      "https://blog.jaipurworldrecordcarnival.in/wp-json/wp/v2/posts?_embed"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load blog posts right now. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <p style={{ color: "#6b7280", fontSize: 15 }}>Loading latest blogs...</p>
      );
    }

    if (error) {
      return (
        <p style={{ color: "#b91c1c", fontSize: 15 }}>
          {error}
        </p>
      );
    }

    if (!posts.length) {
      return (
        <p style={{ color: "#6b7280", fontSize: 15 }}>
          No blog posts found at the moment.
        </p>
      );
    }

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
        }}
      >
        {posts.map((post) => {
          const date = post.date
            ? new Date(post.date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "";

          const featuredImage =
            post._embedded &&
            post._embedded["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0] &&
            post._embedded["wp:featuredmedia"][0].source_url;

          return (
            <article
              key={post.id}
              style={{
                background: "#ffffff",
                borderRadius: 16,
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 10px rgba(15,23,42,0.06)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {featuredImage && (
                <div style={{ width: "100%", height: 180, overflow: "hidden" }}>
                  <img
                    src={featuredImage}
                    alt={post.title?.rendered || "Blog image"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              )}

              <div style={{ padding: "18px 20px 20px" }}>
                {date && (
                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: 12,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      color: "#6b7280",
                    }}
                  >
                    {date}
                  </p>
                )}

                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#111827",
                  }}
                  dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
                />

                <div
                  style={{
                    fontSize: 14,
                    color: "#4b5563",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                  dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }}
                />

                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#2563eb",
                      textDecoration: "none",
                    }}
                  >
                    Read full article
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <section
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "80px 40px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              color: "#2563eb",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Our Blog
          </p>
          <h2
            style={{
              fontSize: 34,
              fontWeight: 800,
              margin: "0 0 10px",
              color: "#111827",
            }}
          >
            Latest Updates & Stories
          </h2>
          <p style={{ color: "#6b7280", fontSize: 15, margin: 0 }}>
            News, insights and highlights from Jaipur World Record Carnival,
            powered by our official WordPress blog.
          </p>
        </div>

        {renderContent()}
      </div>
    </section>
  );
}

export default Blog;