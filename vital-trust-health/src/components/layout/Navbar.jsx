import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="h-10" />
            <span className="font-bold text-primary text-lg">
              Vital Trust
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            {/* Services Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer flex items-center gap-1">
                Services ▾
              </span>

              <ul className="absolute top-8 left-0 hidden group-hover:block bg-white shadow-lg rounded-xl p-4 w-64 space-y-2">
                <li><Link to="/services/individual-therapy">Individual Therapy</Link></li>
                <li><Link to="/services/couples-therapy">Couples Therapy</Link></li>
                <li><Link to="/services/anxiety-depression">Anxiety & Depression</Link></li>
                <li><Link to="/services/stress-management">Stress Management</Link></li>
                <li><Link to="/services/trauma-therapy">Trauma Therapy</Link></li>
                <li><Link to="/services/online-counseling">Online Counseling</Link></li>
              </ul>
            </li>

            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-primary text-white px-4 py-2 rounded-lg"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full text-left"
              >
                Services ▾
              </button>

              {serviceOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/services/individual-therapy">Individual Therapy</Link>
                  <Link to="/services/couples-therapy">Couples Therapy</Link>
                  <Link to="/services/anxiety-depression">Anxiety & Depression</Link>
                  <Link to="/services/stress-management">Stress Management</Link>
                  <Link to="/services/trauma-therapy">Trauma Therapy</Link>
                  <Link to="/services/online-counseling">Online Counseling</Link>
                </div>
              )}
            </div>

            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>

            <Link
              to="/contact"
              className="block bg-primary text-white px-4 py-2 rounded-lg text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;