 import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-[0_4px_20px_rgba(106,63,160,0.08)]">

      {/* ✅ FIXED HEIGHT */}
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* 🔷 Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Autism Violet"
            className="h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-semibold text-[#4B2C73]">
            Autism Violet
          </span>
        </Link>

        {/* 🧭 Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative transition ${
                location.pathname === link.path
                  ? "text-[#6A3FA0]"
                  : "text-gray-700 hover:text-[#6A3FA0]"
              }`}
            >
              {link.name}

              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#6A3FA0]" />
              )}
            </Link>
          ))}
        </nav>

        {/* 🚀 CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="px-6 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #6A3FA0, #B58ED6)",
            }}
          >
            Start Your Child’s Journey
          </Link>
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden text-2xl text-[#4B2C73]"
        >
          {mobile ? "✕" : "☰"}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {mobile && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobile(false)}
              className="text-[#4B2C73] text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setMobile(false)}
            className="mt-2 text-center text-white py-2 rounded-full"
            style={{
              background: "linear-gradient(90deg, #6A3FA0, #B58ED6)",
            }}
          >
            Start Your Child’s Journey
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;