import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import { useTheme } from "../context/ThemeContext";

const API_URL = import.meta.env.VITE_API_URL;

// ─── Constants ────────────────────────────────────────────────────────────────
const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_FILE_SIZE_MB   = 5;
const MAX_FILE_SIZE_B    = MAX_FILE_SIZE_MB * 1024 * 1024;

const POSITIONS = ["RBT", "BCBA"];

const BENEFITS = ["Competitive Salary", "Flexible Schedule", "Career Growth"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

// ─── Sub-components (defined outside to avoid remount issues) ─────────────────

const InfoCard = ({ children, colors, style = {} }) => (
  <div style={{
    background: colors.card,
    border: `1px solid ${colors.border}`,
    borderRadius: "20px",
    padding: "24px",
    transition: "border-color 0.3s",
    ...style,
  }}>
    {children}
  </div>
);

const FormInput = ({ colors, ...props }) => (
  <input
    style={{
      width: "100%",
      background: colors.card,
      border: `1px solid ${colors.border}`,
      color: colors.text,
      borderRadius: "12px",
      padding: "12px 16px",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
    }}
    onFocus={e  => (e.target.style.borderColor = colors.primary)}
    onBlur={e   => (e.target.style.borderColor = colors.border)}
    {...props}
  />
);

const FormTextarea = ({ colors, ...props }) => (
  <textarea
    style={{
      width: "100%",
      background: colors.card,
      border: `1px solid ${colors.border}`,
      color: colors.text,
      borderRadius: "12px",
      padding: "12px 16px",
      fontSize: "14px",
      outline: "none",
      resize: "vertical",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
      fontFamily: "inherit",
    }}
    onFocus={e  => (e.target.style.borderColor = colors.primary)}
    onBlur={e   => (e.target.style.borderColor = colors.border)}
    {...props}
  />
);

const FormSelect = ({ colors, children, ...props }) => (
  <select
    style={{
      width: "100%",
      background: colors.card,
      border: `1px solid ${colors.border}`,
      color: colors.text,
      borderRadius: "12px",
      padding: "12px 16px",
      fontSize: "14px",
      outline: "none",
      cursor: "pointer",
      appearance: "none",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 16px center",
    }}
    onFocus={e  => (e.target.style.borderColor = colors.primary)}
    onBlur={e   => (e.target.style.borderColor = colors.border)}
    {...props}
  >
    {children}
  </select>
);

// ─── File Upload Zone ─────────────────────────────────────────────────────────
const FileUploadZone = ({ file, fileError, onFileChange, colors }) => {
  const inputRef  = useRef(null);
  const [hovered, setHovered] = useState(false);

  const hasFile  = !!file;
  const hasError = !!fileError;

  const borderColor = hasError
    ? "#ef4444"
    : hasFile
    ? "#22c55e"
    : hovered
    ? colors.primary
    : colors.border;

  const textColor = hasError
    ? "#ef4444"
    : hasFile
    ? "#22c55e"
    : hovered
    ? colors.primary
    : colors.muted;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        style={{
          border: `2px dashed ${borderColor}`,
          borderRadius: "12px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          color: textColor,
          fontSize: "14px",
          transition: "border-color 0.2s, color 0.2s, background 0.2s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          background: hasFile
            ? (colors.dark ? "rgba(34,197,94,0.05)" : "rgba(34,197,94,0.04)")
            : hasError
            ? "rgba(239,68,68,0.04)"
            : hovered
            ? (colors.dark ? "rgba(124,58,237,0.06)" : "rgba(124,58,237,0.04)")
            : "transparent",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Icon */}
        {hasFile ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="rgba(34,197,94,0.15)" />
            <path d="M7 12l3.5 3.5L17 9" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 16V8M8 12l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )}

        {/* Label text */}
        <span style={{ fontWeight: 500 }}>
          {hasFile ? file.name : "Click to upload resume"}
        </span>

        {/* Helper */}
        <span style={{
          fontSize: "12px",
          color: hasFile ? "#22c55e" : colors.muted,
          opacity: 0.85,
        }}>
          {hasFile ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : `Max size ${MAX_FILE_SIZE_MB}MB • PDF, DOC, DOCX only`}
        </span>

        <input
          ref={inputRef}
          type="file"
          name="resume"
          accept={ALLOWED_EXTENSIONS.join(",")}
          onChange={onFileChange}
          style={{ display: "none" }}
          required
        />
      </label>

      {/* Validation error */}
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            style={{ color: "#ef4444", fontSize: "12px", margin: 0, paddingLeft: "4px" }}
          >
            {fileError}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Success Modal ────────────────────────────────────────────────────────────
const SuccessModal = ({ onClose, colors }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(10, 5, 30, 0.6)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      padding: "16px",
    }}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: colors.card,
        border: `1px solid ${colors.border}`,
        borderRadius: "24px",
        padding: "44px 40px",
        textAlign: "center",
        maxWidth: "400px",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 32px 80px -12px rgba(124, 58, 237, 0.25), 0 0 0 1px rgba(124,58,237,0.08)",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "-60px", left: "50%",
        transform: "translateX(-50%)",
        width: "240px", height: "240px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Accent bar */}
      <div style={{
        width: "48px", height: "3px",
        borderRadius: "2px",
        background: colors.primary,
        margin: "0 auto 28px",
      }} />

      {/* Animated check icon */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.15, duration: 0.45, type: "spring", stiffness: 220, damping: 14 }}
        style={{
          width: "64px", height: "64px",
          borderRadius: "50%",
          background: "rgba(124,58,237,0.12)",
          border: "1.5px solid rgba(124,58,237,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <motion.path
            d="M6 14l5.5 5.5L22 9"
            stroke="#7C3AED"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
          />
        </svg>
      </motion.div>

      {/* Title */}
      <h2
        className="font-playfair"
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: colors.text,
          marginBottom: "12px",
          lineHeight: 1.25,
        }}
      >
        Application Submitted{" "}
        <em style={{ color: colors.accent, fontStyle: "italic" }}>Successfully</em>
      </h2>

      {/* Subtitle */}
      <p style={{
        color: colors.muted,
        fontSize: "14px",
        lineHeight: 1.7,
        marginBottom: "32px",
        maxWidth: "300px",
        margin: "0 auto 32px",
      }}>
        Our team will review your application and get back to you shortly.
      </p>

      {/* CTA */}
      <motion.button
        whileHover={{ y: -1, background: "#6D28D9" }}
        whileTap={{ scale: 0.97 }}
        onClick={onClose}
        style={{
          background: colors.primary,
          color: "#fff",
          border: "none",
          padding: "13px 36px",
          borderRadius: "50px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          transition: "background 0.2s",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Done
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </motion.div>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Career = () => {
  const { dark } = useTheme();

  const colors = {
    bg:           dark ? "#0a0a0a" : "#faf9ff",
    surface:      dark ? "#111111" : "#ffffff",
    card:         dark ? "#161616" : "#ffffff",
    border:       dark ? "#262626" : "#EDE7F6",
    borderFocus:  "#7C3AED",
    text:         dark ? "#efefef" : "#1a0a3b",
    textSoft:     dark ? "#c0c0c0" : "#4b4069",
    muted:        dark ? "#888888" : "#6b7280",
    primary:      "#7C3AED",
    primaryHover: "#6D28D9",
    accent:       "#F97316",
    dark,
  };

  const [form, setForm]       = useState({ name: "", email: "", phone: "", position: "", experience: "", message: "", resume: null });
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Extension check
    const ext = "." + file.name.split(".").pop().toLowerCase();
    const validExt  = ALLOWED_EXTENSIONS.includes(ext);
    const validMime = ALLOWED_MIME_TYPES.includes(file.type);

    if (!validExt || !validMime) {
      setFileError("Only PDF, DOC, DOCX files are allowed");
      setForm((prev) => ({ ...prev, resume: null }));
      e.target.value = ""; // reset input
      return;
    }

    if (file.size > MAX_FILE_SIZE_B) {
      setFileError(`File exceeds ${MAX_FILE_SIZE_MB}MB limit`);
      setForm((prev) => ({ ...prev, resume: null }));
      e.target.value = "";
      return;
    }

    setFileError("");
    setForm((prev) => ({ ...prev, resume: file }));
  };

  const isValid = form.name && form.email && form.phone && form.position && form.resume && !fileError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, val]) => { if (val !== null) formData.append(key, val); });
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

  return (
    <div style={{ background: colors.bg, transition: "background 0.3s" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: "112px", paddingBottom: "80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
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

            {/* ── LEFT: info ───────────────────────────── */}
            <motion.div variants={stagger} initial="hidden" animate="show"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Open Roles */}
              <motion.div variants={fadeUp}>
                <InfoCard colors={colors}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <span style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      background: dark ? "rgba(124,58,237,0.15)" : "#EDE7F6",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px",
                    }}>📋</span>
                    <h3 style={{ fontWeight: 600, color: colors.text, fontSize: "15px", margin: 0 }}>Open Roles</h3>
                  </div>
                  <p style={{ color: colors.muted, fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
                    RBT &amp; BCBA positions available across multiple locations.
                  </p>
                </InfoCard>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={fadeUp}>
                <InfoCard colors={colors}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <span style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      background: dark ? "rgba(249,115,22,0.12)" : "#FEF3EC",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px",
                    }}>✦</span>
                    <h3 style={{ fontWeight: 600, color: colors.text, fontSize: "15px", margin: 0 }}>Benefits</h3>
                  </div>
                  {BENEFITS.map((b) => (
                    <div key={b} style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "8px 0",
                      borderBottom: `1px solid ${colors.border}`,
                    }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: colors.primary, flexShrink: 0 }} />
                      <span style={{ color: colors.textSoft, fontSize: "14px" }}>{b}</span>
                    </div>
                  ))}
                </InfoCard>
              </motion.div>

              {/* Quote */}
              <motion.div variants={fadeUp}>
                <div style={{
                  background: "#1a0a3b", borderRadius: "20px", padding: "28px 24px",
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: "-30px", right: "-30px",
                    width: "120px", height: "120px", borderRadius: "50%",
                    background: "rgba(124,58,237,0.25)", filter: "blur(40px)", pointerEvents: "none",
                  }} />
                  <span style={{ fontSize: "40px", color: colors.primary, lineHeight: 1, display: "block", marginBottom: "8px", opacity: 0.6 }}>"</span>
                  <p className="font-playfair" style={{ color: "#fff", fontSize: "17px", fontStyle: "italic", lineHeight: 1.65, margin: 0 }}>
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
              {/* Accent bar */}
              <div style={{ width: "40px", height: "3px", borderRadius: "2px", background: colors.primary, marginBottom: "20px" }} />

              <h2 className="font-playfair" style={{ fontSize: "26px", fontWeight: 700, color: colors.text, marginBottom: "28px" }}>
                Apply Now
              </h2>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }} noValidate>

                <FormInput colors={colors} name="name"       placeholder="Full Name"             value={form.name}       onChange={handleChange} required />
                <FormInput colors={colors} name="email"      placeholder="Email"       type="email" value={form.email}    onChange={handleChange} required />
                <FormInput colors={colors} name="phone"      placeholder="Phone"                  value={form.phone}      onChange={handleChange} required />

                <FormSelect colors={colors} name="position" value={form.position} onChange={handleChange} required>
                  <option value="">Select Position</option>
                  {POSITIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                </FormSelect>

                <FormInput colors={colors} name="experience" placeholder="Years of Experience"   value={form.experience} onChange={handleChange} />

                {/* File Upload */}
                <FileUploadZone
                  file={form.resume}
                  fileError={fileError}
                  onFileChange={handleFileChange}
                  colors={colors}
                />

                <FormTextarea colors={colors} name="message" rows={4} placeholder="Cover Letter (optional)" value={form.message} onChange={handleChange} />

                {/* API error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      style={{
                        color: "#ef4444", fontSize: "13px", margin: 0,
                        background: dark ? "rgba(239,68,68,0.08)" : "rgba(239,68,68,0.06)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        borderRadius: "10px",
                        padding: "10px 14px",
                      }}
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={!isValid || loading}
                  whileHover={isValid && !loading ? { y: -1 } : {}}
                  whileTap={isValid && !loading ? { scale: 0.98 } : {}}
                  style={{
                    padding: "14px",
                    borderRadius: "50px",
                    fontWeight: 600,
                    fontSize: "15px",
                    border: "none",
                    cursor: isValid && !loading ? "pointer" : "not-allowed",
                    background: isValid && !loading ? colors.primary : dark ? "#2a2a2a" : "#d1d5db",
                    color: isValid && !loading ? "#fff" : dark ? "#555" : "#9ca3af",
                    transition: "background 0.2s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    <>
                      Apply Now
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </motion.button>

                {/* Hint */}
                <AnimatePresence>
                  {!isValid && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ color: colors.muted, fontSize: "11px", textAlign: "center", margin: 0 }}
                    >
                      Fill all required fields and upload a valid resume to apply
                    </motion.p>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── SUCCESS MODAL ─────────────────────────────────────── */}
      <AnimatePresence>
        {success && <SuccessModal onClose={() => setSuccess(false)} colors={colors} />}
      </AnimatePresence>

    </div>
  );
};

export default Career;