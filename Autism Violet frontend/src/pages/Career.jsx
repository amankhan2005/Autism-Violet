import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { useTheme } from "../context/ThemeContext";

const API_URL = import.meta.env.VITE_API_URL;

const Career = () => {
  const { dark } = useTheme();

  // ✅ DESIGN SYSTEM — mirrors InsuranceSection tokens
  const colors = {
    bg:       dark ? "#0a0a0a" : "#faf9ff",
    surface:  dark ? "#111111" : "#ffffff",
    card:     dark ? "#161616" : "#ffffff",
    cardAlt:  dark ? "#0f0f0f" : "#f5f2ff",
    border:   dark ? "#262626" : "#EDE7F6",
    borderFocus: dark ? "#7C3AED" : "#7C3AED",
    text:     dark ? "#efefef" : "#1a0a3b",
    textSoft: dark ? "#c0c0c0" : "#4b4069",
    muted:    dark ? "#888888" : "#6b7280",
    primary:  "#7C3AED",
    primaryHover: "#6D28D9",
    accent:   "#F97316",
    dark_hero: "#1a0a3b",
  };

  // ─── all original state & logic — untouched ───────────────────────────────
  const [form, setForm] = useState({
    name: "", email: "", phone: "", position: "",
    experience: "", message: "", resume: null,
  });
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [error,   setError]     = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const isValid = form.name && form.email && form.phone && form.position && form.resume;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));
      const res  = await fetch(`${API_URL}/api/career`, { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", position: "", experience: "", message: "", resume: null });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  // ─────────────────────────────────────────────────────────────────────────

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };
  const stagger = { show: { transition: { staggerChildren: 0.1 } } };

  /* Shared input className — uses inline style for theming */
  const inputBase = {
    width: "100%",
    background: colors.card,
    border: `1px solid ${colors.border}`,
    color: colors.text,
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const LeftCard = ({ children, style = {} }) => (
    <div style={{
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: "20px",
      padding: "24px",
      transition: "border-color 0.3s, box-shadow 0.3s",
      ...style,
    }}>
      {children}
    </div>
  );

  return (
    <div style={{ background: colors.bg, transition: "background 0.3s" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ paddingTop: "112px", paddingBottom: "80px", textAlign: "center", position: "relative", overflow: "hidden" }}>

        {/* soft radial glow behind hero text */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "300px",
          background: dark
            ? "radial-gradient(ellipse, rgba(124,58,237,0.10) 0%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <Container>
          <motion.div variants={stagger} initial="hidden" animate="show">

            <motion.p variants={fadeUp} style={{
              fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
              color: colors.primary, marginBottom: "16px", fontWeight: 500,
            }}>
              Careers at Autism Violet
            </motion.p>

            <motion.h1 variants={fadeUp} className="font-playfair" style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700,
              color: colors.text, lineHeight: 1.1, marginBottom: "20px",
            }}>
              Build a Meaningful{" "}
              <em style={{ color: colors.accent, fontStyle: "italic" }}>Career</em>
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              color: colors.muted, maxWidth: "520px", margin: "0 auto",
              fontSize: "15px", lineHeight: 1.7,
            }}>
              Join a team dedicated to making a real difference in children's lives
              through compassionate and evidence-based care.
            </motion.p>

          </motion.div>
        </Container>
      </section>

      {/* ── MAIN GRID ─────────────────────────────────────────── */}
      <section style={{ paddingBottom: "96px" }}>
        <Container>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}>

            {/* ── LEFT: info cards ─────────────────────── */}
            <motion.div
              variants={stagger} initial="hidden" animate="show"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >

              {/* Open Roles */}
              <motion.div variants={fadeUp}>
                <LeftCard>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <span style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      background: dark ? "rgba(124,58,237,0.15)" : "#EDE7F6",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "16px",
                    }}>📋</span>
                    <h3 style={{ fontWeight: 600, color: colors.text, fontSize: "15px", margin: 0 }}>
                      Open Roles
                    </h3>
                  </div>
                  <p style={{ color: colors.muted, fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
                    RBT &amp; BCBA positions available across multiple locations.
                  </p>
                </LeftCard>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={fadeUp}>
                <LeftCard>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <span style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      background: dark ? "rgba(249,115,22,0.12)" : "#FEF3EC",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "16px",
                    }}>✦</span>
                    <h3 style={{ fontWeight: 600, color: colors.text, fontSize: "15px", margin: 0 }}>
                      Benefits
                    </h3>
                  </div>
                  {["Competitive Salary", "Flexible Schedule", "Career Growth"].map((b) => (
                    <div key={b} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "8px 0",
                      borderBottom: `1px solid ${colors.border}`,
                    }}>
                      <span style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: colors.primary, flexShrink: 0,
                      }} />
                      <span style={{ color: colors.textSoft, fontSize: "14px" }}>{b}</span>
                    </div>
                  ))}
                </LeftCard>
              </motion.div>

              {/* Quote card */}
              <motion.div variants={fadeUp}>
                <div style={{
                  background: dark ? "#1a0a3b" : "#1a0a3b",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* decorative violet glow */}
                  <div style={{
                    position: "absolute", top: "-30px", right: "-30px",
                    width: "120px", height: "120px", borderRadius: "50%",
                    background: "rgba(124,58,237,0.25)", filter: "blur(40px)",
                    pointerEvents: "none",
                  }} />
                  <span style={{
                    fontSize: "40px", color: colors.primary, lineHeight: 1,
                    display: "block", marginBottom: "8px", opacity: 0.6,
                  }}>"</span>
                  <p className="font-playfair" style={{
                    color: "#fff", fontSize: "17px", fontStyle: "italic",
                    lineHeight: 1.65, margin: 0,
                  }}>
                    Every child deserves the chance to thrive — and so do you.
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* ── RIGHT: form ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: "24px",
                padding: "36px 32px",
              }}
            >
              <h2 className="font-playfair" style={{
                fontSize: "26px", fontWeight: 700,
                color: colors.text, marginBottom: "28px",
              }}>
                Apply Now
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                {/* Full Name */}
                <input
                  name="name" placeholder="Full Name" required
                  onChange={handleChange}
                  style={inputBase}
                  onFocus={e => e.target.style.borderColor = colors.borderFocus}
                  onBlur={e  => e.target.style.borderColor = colors.border}
                />

                {/* Email */}
                <input
                  name="email" type="email" placeholder="Email" required
                  onChange={handleChange}
                  style={inputBase}
                  onFocus={e => e.target.style.borderColor = colors.borderFocus}
                  onBlur={e  => e.target.style.borderColor = colors.border}
                />

                {/* Phone */}
                <input
                  name="phone" placeholder="Phone" required
                  onChange={handleChange}
                  style={inputBase}
                  onFocus={e => e.target.style.borderColor = colors.borderFocus}
                  onBlur={e  => e.target.style.borderColor = colors.border}
                />

                {/* Position */}
                <select
                  name="position" required
                  onChange={handleChange}
                  style={{ ...inputBase, cursor: "pointer", appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center",
                  }}
                  onFocus={e => e.target.style.borderColor = colors.borderFocus}
                  onBlur={e  => e.target.style.borderColor = colors.border}
                >
                  <option value="">Select Position</option>
                  <option value="RBT">RBT</option>
                  <option value="BCBA">BCBA</option>
                </select>

                {/* Experience */}
                <input
                  name="experience" placeholder="Years of Experience"
                  onChange={handleChange}
                  style={inputBase}
                  onFocus={e => e.target.style.borderColor = colors.borderFocus}
                  onBlur={e  => e.target.style.borderColor = colors.border}
                />

                {/* Resume upload */}
                <label style={{
                  border: `2px dashed ${colors.border}`,
                  borderRadius: "12px",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  color: colors.muted,
                  fontSize: "14px",
                  transition: "border-color 0.2s, color 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = colors.primary; e.currentTarget.style.color = colors.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = colors.border;  e.currentTarget.style.color = colors.muted; }}
                >
                  <span style={{ fontSize: "22px" }}>📎</span>
                  <span>
                    {form.resume ? form.resume.name : "Upload Resume (PDF / DOC)"}
                  </span>
                  <input type="file" name="resume" onChange={handleChange} className="hidden" required style={{ display: "none" }} />
                </label>

                {/* Cover letter */}
                <textarea
                  name="message" rows="4" placeholder="Cover Letter (optional)"
                  onChange={handleChange}
                  style={{ ...inputBase, resize: "vertical" }}
                  onFocus={e => e.target.style.borderColor = colors.borderFocus}
                  onBlur={e  => e.target.style.borderColor = colors.border}
                />

                {/* Error */}
                {error && (
                  <p style={{ color: "#ef4444", fontSize: "13px", margin: 0 }}>{error}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid || loading}
                  style={{
                    padding: "14px",
                    borderRadius: "50px",
                    fontWeight: 600,
                    fontSize: "15px",
                    border: "none",
                    cursor: isValid && !loading ? "pointer" : "not-allowed",
                    background: isValid ? colors.primary : (dark ? "#2a2a2a" : "#d1d5db"),
                    color: isValid ? "#fff" : (dark ? "#555" : "#9ca3af"),
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={e => { if (isValid) e.currentTarget.style.background = colors.primaryHover; }}
                  onMouseLeave={e => { if (isValid) e.currentTarget.style.background = colors.primary; }}
                  onMouseDown={e  => { if (isValid) e.currentTarget.style.transform = "scale(0.98)"; }}
                  onMouseUp={e    => { e.currentTarget.style.transform = "scale(1)"; }}
                >
                  {loading ? "Submitting…" : "Apply Now →"}
                </button>

              </form>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── SUCCESS MODAL ─────────────────────────────────────── */}
      {success && (
        <div style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.55)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 50,
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: "24px",
              padding: "40px 36px",
              textAlign: "center",
              maxWidth: "360px",
              width: "90%",
            }}
          >
            <div style={{ fontSize: "44px", marginBottom: "12px" }}>🎉</div>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: colors.text, marginBottom: "10px" }}>
              Application Submitted!
            </h2>
            <p style={{ color: colors.muted, fontSize: "14px", marginBottom: "24px", lineHeight: 1.6 }}>
              We'll review your profile and contact you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              style={{
                background: colors.primary,
                color: "#fff",
                border: "none",
                padding: "12px 32px",
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = colors.primaryHover}
              onMouseLeave={e => e.currentTarget.style.background = colors.primary}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default Career;