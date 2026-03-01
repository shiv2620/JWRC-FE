import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "World Records", path: "/world-records" },
  { name: "Achievements", path: "/achievements" },
  { name: "Events", path: "/events" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
  {name: "Blog", path: "/Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <style>{`
        .nav-register-btn {
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 9px 20px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .nav-register-btn:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(37,99,235,0.4);
        }
        .nav-register-btn:active {
          transform: translateY(0);
        }
        .logo-box {
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .logo-box:hover {
          transform: scale(1.08);
          box-shadow: 0 4px 14px rgba(255,107,53,0.45) !important;
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.98)" : "#fff",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.10)"
            : "0 1px 0 #e5e7eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: 68,
          transition: "box-shadow 0.3s, background 0.3s",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
        >
          
            <img
            src="/images/logo.jpeg"
            alt="Jaipur World Record Carnival"
            className="nav-logo-img"
            style={{
              height: 52,
              width: "auto",
              objectFit: "contain",
            }}
          />
          
          <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600 }}>
            Create a world record with Manmohan Agarwal
          </span>
        </Link>

        {/* NAV LINKS */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map((link) => {
            const active = isActive(link.path);
            const hovered = hoveredLink === link.name;
            return (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  textDecoration: "none",
                  color: active ? "#2563eb" : hovered ? "#2563eb" : "#374151",
                  fontSize: 14,
                  fontWeight: active ? 600 : 500,
                  padding: "7px 14px",
                  borderRadius: 8,
                  background: active ? "#eff6ff" : hovered ? "#f0f5ff" : "transparent",
                  transition: "all 0.18s ease",
                  position: "relative",
                }}
              >
                {link.name}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 3,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4, height: 4,
                      borderRadius: "50%",
                      background: "#2563eb",
                    }}
                  />
                )}
              </Link>
            );
          })}

          {/* REGISTER BUTTON */}
          <Link to="/contact" style={{ textDecoration: "none", marginLeft: 12 }}>
            <button className="nav-register-btn">
              Register Event
            </button>
          </Link>
        </div>
      </nav>

      {/* Navbar height spacer */}
      <div style={{ height: 68 }} />
    </>
  );
}
