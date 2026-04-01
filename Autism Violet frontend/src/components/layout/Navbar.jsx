 import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">

        {/* Logo */}
        <Link to="/" className="text-primary font-bold text-xl">
          Autism Violet
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="cursor-pointer">Services</span>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-8 left-0 bg-white shadow-xl rounded-xl p-4 w-64"
                >
                  <div className="flex flex-col gap-3 text-sm">
                    <Link to="/services">All Services</Link>
                    <Link to="/services#early">Early Intervention</Link>
                    <Link to="/services#school">School Readiness</Link>
                    <Link to="/services#home">In-Home Therapy</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:block bg-primary text-white px-5 py-2 rounded-full text-sm"
        >
          Get Started
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMobile(!mobile)}
          className="md:hidden text-xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-4 flex flex-col gap-4"
          >
            <Link to="/" onClick={() => setMobile(false)}>Home</Link>
            <Link to="/about" onClick={() => setMobile(false)}>About</Link>
            <Link to="/services" onClick={() => setMobile(false)}>Services</Link>
            <Link to="/contact" onClick={() => setMobile(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;