import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp } from "../utils/animations";

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-[#EDE7F6] text-[#1a0a3b] text-[14px] placeholder-[#b8afd0] px-4 py-3 rounded-xl focus:outline-none focus:border-[#7C3AED] transition-colors duration-200";

  const stats = [
    { value: "500+", label: "Children Supported" },
    { value: "98%",  label: "Family Satisfaction" },
    { value: "12+",  label: "Years Experience" },
  ];

  const contactItems = [
    {
      label: "Location",
      value: "Massachusetts",
      accent: "#7C3AED",
      bg: "#EDE7F6",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z" stroke="#7C3AED" strokeWidth="1.4"/>
          <circle cx="8" cy="6" r="1.5" stroke="#7C3AED" strokeWidth="1.4"/>
        </svg>
      ),
    },
    {
      label: "Email",
      value: "info@autismviolet.com",
      accent: "#F97316",
      bg: "#FFF3E8",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="4" width="12" height="9" rx="2" stroke="#F97316" strokeWidth="1.4"/>
          <path d="M2 6l6 4 6-4" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+1 (508) 373-4511",
      accent: "#7C3AED",
      bg: "#EDE7F6",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 2.5h2.5l1 3-1.5 1a8 8 0 003.5 3.5l1-1.5 3 1V13A1.5 1.5 0 0111 14.5C6.25 14.5 1.5 9.75 1.5 5A1.5 1.5 0 013 3.5v-1z" stroke="#7C3AED" strokeWidth="1.4" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#faf9ff]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-24 text-center">
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-5"
          >
            Get In Touch
          </motion.p>

          {/* font-playfair + em italic — consistent with About, Services, FAQ */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold text-[#1a0a3b] leading-[1.15] mb-4"
          >
            Contact{" "}
            <em className="italic text-orange-500">Autism Violet</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[480px] mx-auto mb-5"
          >
            Have questions about ABA therapy? We're here to help you and your
            family take the next step.
          </motion.p>

          
        </Container>
      </section>

      {/* ── MAIN GRID ─────────────────────────────────────────── */}
      <section className="pb-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-[900px] mx-auto">

            {/* ── LEFT: INFO ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex flex-col gap-5"
            >
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white border border-[#EDE7F6] rounded-2xl px-5 py-4"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-0.5"
                      style={{ color: item.accent }}
                    >
                      {item.label}
                    </p>
                    <p className="text-[14px] font-medium text-[#1a0a3b]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Mission callout — matches Mission/Vision dark section from About */}
              <div className="mt-2 bg-[#1a0a3b] rounded-2xl px-6 py-6 pl-7 border-l-4 border-[#F97316]">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#F97316] mb-3">
                  Our Promise
                </p>
                {/* font-playfair for quote — consistent with Mission/Vision block */}
                <p className="font-playfair text-[20px] font-bold text-white leading-[1.35]">
                  Every child deserves personalized care and the chance to thrive.
                </p>
              </div>
            </motion.div>

            {/* ── RIGHT: FORM ─────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-white border border-[#EDE7F6] rounded-2xl p-7"
              style={{ boxShadow: "0 8px 32px -8px rgba(124,58,237,0.10)" }}
            >
              {/* Top accent bar — matches value card & FAQ open-state pattern */}
              <div className="h-[3px] rounded-full bg-[#7C3AED] mb-6 w-12" />

              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-1">
                Send a Message
              </p>
              {/* font-playfair for form heading */}
              <h2 className="font-playfair text-[22px] font-bold text-[#1a0a3b] mb-6">
                We'll get back to you shortly
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={inputClass}
                />

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number (optional)"
                  className={inputClass}
                />

                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className={inputClass}
                  style={{ resize: "none" }}
                />

                {/* ERROR */}
                {error && (
                  <p className="text-[13px] text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-7 py-3.5 rounded-full text-[14px] font-semibold hover:bg-[#6D28D9] hover:-translate-y-px transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── SUCCESS MODAL ─────────────────────────────────────── */}
      {success && (
        <div className="fixed inset-0 bg-[#1a0a3b]/50 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl p-8 text-center max-w-sm w-full"
            style={{ boxShadow: "0 24px 64px -12px rgba(26,10,59,0.2)" }}
          >
            {/* Accent bar at top of modal — consistent with form card */}
            <div className="h-[3px] rounded-full bg-[#7C3AED] mb-6 w-12 mx-auto" />

            <div className="w-12 h-12 rounded-full bg-[#EDE7F6] flex items-center justify-center mx-auto mb-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11l5 5 9-9" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* font-playfair for modal heading */}
            <h2 className="font-playfair text-[22px] font-bold text-[#1a0a3b] mb-2">
              Message <em className="italic text-orange-500">Sent!</em>
            </h2>
            <p className="text-[#5a4e72] text-[14px] leading-relaxed mb-6">
              Thank you! We'll get back to you shortly.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#7C3AED] text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:bg-[#6D28D9] transition-colors duration-200"
            >
              Close
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Contact;