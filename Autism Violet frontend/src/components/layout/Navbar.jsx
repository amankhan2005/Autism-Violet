import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useTheme } from "../../context/ThemeContext";

/* ─── Brand tokens ───────────────────────────────────────────────── */
const B = {
  primary:  "#6A3FA0",
  deep:     "#4B2C73",
  light:    "#F3E8FF",
  muted:    "#ddd5f5",
  gradient: "linear-gradient(135deg, #6A3FA0, #B58ED6)",
};

const NAV_LINKS = [
  { name: "Home",     path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Career",   path: "/career" },
];

/* ─── Icons ──────────────────────────────────────────────────────── */
const SunIcon = ({ color = B.primary }) => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle fill={color} cx="9" cy="9" r="3.2"/>
    {[[9,1.5,9,3],[9,15,9,16.5],[1.5,9,3,9],[15,9,16.5,9],
      [4.1,4.1,5.1,5.1],[12.9,12.9,13.9,13.9],
      [13.9,4.1,12.9,5.1],[5.1,12.9,4.1,13.9]
    ].map(([x1,y1,x2,y2], i) => (
      <line key={i} stroke={color} strokeWidth="1.6"
        strokeLinecap="round" x1={x1} y1={y1} x2={x2} y2={y2}/>
    ))}
  </svg>
);

const MoonIcon = ({ color = B.primary }) => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path fill={color} d="M14.5 10.5A6 6 0 0 1 7.5 3.5a5.5 5.5 0 1 0 7 7z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07
      A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3
      a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91
      a16 16 0 006.18 6.18l1.27-.56a2 2 0 012.11.45 12.84 12.84 0 002.81.7
      A2 2 0 0122 16.92z"/>
  </svg>
);

const HamburgerIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
    aria-hidden="true">
    {open ? (
      <>
        <line x1="18" y1="6"  x2="6"  y2="18"/>
        <line x1="6"  y1="6"  x2="18" y2="18"/>
      </>
    ) : (
      <>
        <line x1="4" y1="8"  x2="20" y2="8"/>
        <line x1="4" y1="16" x2="20" y2="16"/>
      </>
    )}
  </svg>
);

/* ─── ThemeToggle component ────────────────────────────────────────── */
const ThemeToggle = ({ dark, onToggle, compact = false }) => {
  const [hovered, setHovered] = useState(false);

  if (compact) {
    return (
      <button
        onClick={onToggle}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={dark}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 36, height: 36,
          borderRadius: "50%",
          border: `1px solid ${dark ? "#2a1f3d" : B.muted}`,
          background: hovered
            ? (dark ? "#1e1430" : "#ede5fb")
            : (dark ? "#130f1a" : B.light),
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer",
          transition: "all .2s",
        }}
      >
        {dark ? <MoonIcon color="#c4b5d8"/> : <SunIcon color={B.primary}/>}
      </button>
    );
  }

  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "6px 12px 6px 10px",
        borderRadius: 999,
        border: "none",
        background: hovered
          ? (dark ? "rgba(180,140,214,.1)" : "rgba(106,63,160,.07)")
          : "transparent",
        cursor: "pointer",
        transition: "background .2s",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", width: 18, height: 18 }}>
        {dark ? <MoonIcon color="#c4b5d8"/> : <SunIcon color={B.primary}/>}
      </span>

      <span style={{
        fontSize: 12, fontWeight: 500, whiteSpace: "nowrap",
        color: dark ? "#c4b5d8" : B.primary,
        transition: "color .3s",
      }}>
        {dark ? "Light mode" : "Dark mode"}
      </span>

      <span style={{
        position: "relative",
        width: 42, height: 24,
        borderRadius: 999,
        flexShrink: 0,
        display: "inline-block",
        background: dark ? B.gradient : "#e0d9f0",
        transition: "background .35s",
      }}>
        <span style={{
          position: "absolute",
          top: 3, left: 3,
          width: 18, height: 18,
          borderRadius: "50%",
          background: "#fff",
          boxShadow: dark ? "0 1px 6px rgba(0,0,0,.4)" : "0 1px 4px rgba(0,0,0,.18)",
          transform: dark ? "translateX(18px)" : "translateX(0)",
          transition: "transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .3s",
        }}/>
      </span>
    </button>
  );
};

/* ─── Navbar ─────────────────────────────────────────────────────── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const location                    = useLocation();
  const { dark, toggleTheme }       = useTheme();
  const menuRef                     = useRef(null);
  const toggleRef                   = useRef(null);

  /* Scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* Close on route change */
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  /* Close on outside click */
  useEffect(() => {
    if (!mobileOpen) return;
    const fn = (e) => {
      if (
        menuRef.current   && !menuRef.current.contains(e.target) &&
        toggleRef.current && !toggleRef.current.contains(e.target)
      ) setMobileOpen(false);
    };
    document.addEventListener("mousedown", fn);
    document.addEventListener("touchstart", fn);
    return () => {
      document.removeEventListener("mousedown", fn);
      document.removeEventListener("touchstart", fn);
    };
  }, [mobileOpen]);

  /* Escape key */
  useEffect(() => {
    if (!mobileOpen) return;
    const fn = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [mobileOpen]);

  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        background:   dark ? "#0a0a0a" : "#fff",
        borderBottom: `1px solid ${dark ? "#1f1f1f" : "#ede9f6"}`,
        boxShadow: scrolled
          ? dark
            ? "0 4px 24px rgba(0,0,0,.55)"
            : "0 4px 24px rgba(106,63,160,.10)"
          : "none",
        transition: "background .3s, box-shadow .3s, border-color .3s",
      }}
    >
      {/* ── Desktop bar ───────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Autism Violet — home"
        >
          <div
            className="flex items-center justify-center transition-all duration-300"
            style={{
              background:   dark ? "#fff" : "transparent",
              borderRadius: "50%",
              padding:      dark ? "6px" : "0px",
            }}
          >
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span
            className="text-xl font-semibold"
            style={{ color: dark ? "#e8d5ff" : B.deep }}
          >
            Autism Violet
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-10 text-sm font-medium"
        >
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                aria-current={active ? "page" : undefined}
                className="relative pb-0.5 transition-colors duration-200"
                style={{ color: active ? B.primary : dark ? "#c4b5d8" : "#374151" }}
              >
                {link.name}
                <span
                  aria-hidden="true"
                  style={{
                    position:     "absolute",
                    left: 0, bottom: -4,
                    height:       2,
                    width:        active ? "100%" : "0%",
                    borderRadius: 999,
                    background:   B.primary,
                    transition:   "width .3s cubic-bezier(.4,0,.2,1)",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">

          {/* Theme toggle */}
          <ThemeToggle dark={dark} onToggle={toggleTheme} />



   {/* Call Now */}
          <a
            href="tel:+15083734511"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full
              text-sm font-medium transition-all duration-200 hover:opacity-80"
            style={{
              border:     `1px solid ${B.primary}`,
              color:      dark ? "#e8d5ff" : B.primary,
              background: dark ? "#130f1a" : "transparent",
            }}
          >
            <PhoneIcon />
            <span>Call Now</span>
          </a>

          {/* Getting Started */}
          <Link
            to="/getting-started"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full
              text-sm font-medium transition-all duration-200 hover:opacity-90
              hover:scale-[1.03] active:scale-[0.97] text-white"
            style={{
              background: "linear-gradient(135deg, #FF6B00, #FF9A3C)",
              boxShadow:  "0 2px 12px rgba(255,107,0,.35)",
            }}
          >
            Getting Started
          </Link>

        

          {/* Primary CTA */}
          <Link
            to="/contact-us"
            className="px-5 py-2 rounded-full text-sm font-medium text-white
              transition-all duration-200 hover:opacity-90 hover:scale-[1.03]
              active:scale-[0.97]"
            style={{ background: B.gradient }}
          >
            Start Your Child's Journey
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center w-10 h-10
            rounded-full transition-colors duration-200"
          style={{
            color:      dark ? "#e8d5ff" : B.deep,
            background: dark ? "#1a1a1a" : B.light,
            border:     `1px solid ${dark ? "#2a1a3e" : B.muted}`,
          }}
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="false"
        className="md:hidden overflow-hidden"
        style={{
          background: dark ? "#0a0a0a" : "#fff",
          borderTop:  `1px solid ${dark ? "#1f1f1f" : "#ede9f6"}`,
          maxHeight:  mobileOpen ? "600px" : "0",
          opacity:    mobileOpen ? 1 : 0,
          transition: "max-height .35s cubic-bezier(.4,0,.2,1), opacity .25s",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        <div className="px-5 pt-4 pb-6 flex flex-col gap-1">

          {/* Theme toggle row */}
          <div
            className="mb-3 pb-3"
            style={{ borderBottom: `1px solid ${dark ? "#1f1f1f" : "#ede9f6"}` }}
          >
            <ThemeToggle dark={dark} onToggle={toggleTheme} />
          </div>

          {/* Nav links */}
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                aria-current={active ? "page" : undefined}
                className="flex items-center px-3 py-3 text-base font-medium
                  transition-colors duration-150"
                style={{
                  color:        active ? B.primary : dark ? "#c4b5d8" : "#374151",
                  background:   active ? (dark ? "#1a0f2e" : B.light) : "transparent",
                  borderLeft:   `3px solid ${active ? B.primary : "transparent"}`,
                  borderRadius: active ? "0 12px 12px 0" : "12px",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile CTAs */}
          <div
            className="flex flex-col gap-3 mt-4 pt-4"
            style={{ borderTop: `1px solid ${dark ? "#1f1f1f" : "#ede9f6"}` }}
          >
             
             {/* Call Now */}
              <a
              href="tel:+15083734511"
              className="flex items-center justify-center gap-2 py-2.5
                rounded-full text-sm font-medium transition-all duration-200"
              style={{
                border:     `1px solid ${B.primary}`,
                color:      dark ? "#e8d5ff" : B.primary,
                background: dark ? "#130f1a" : "transparent",
              }}
            >
              <PhoneIcon />
              <span>Call Now</span>
            </a>


            {/* Getting Started */}
            <Link
              to="/getting-started"
              className="text-center py-2.5 rounded-full text-sm font-medium
                text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF6B00, #FF9A3C)",
                boxShadow:  "0 2px 12px rgba(255,107,0,.35)",
              }}
            >
              Getting Started
            </Link>

            

            <Link
              to="/contact-us"
              className="text-center py-2.5 rounded-full text-sm font-medium
                text-white transition-all duration-200 hover:opacity-90"
              style={{ background: B.gradient }}
            >
              Start Your Child's Journey
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;