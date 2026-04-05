import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import { useTheme } from "../context/ThemeContext";
import { fadeUp } from "../utils/animations";

const API_URL = import.meta.env.VITE_API_URL || "https://autism-violet.onrender.com";

const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  return { a, b, answer: a + b };
};

// ─────────────────────────────────────────────────────────────────────────────
// FIX: Field is defined OUTSIDE Contact so React never recreates it as a new
//      component type on re-render. Defining it inside caused inputs to
//      unmount/remount on every keystroke, losing focus each time.
// ─────────────────────────────────────────────────────────────────────────────
const Field = ({ name, type = "text", placeholder, required, rows, form, touched, onChange, onBlur, colors, inputClass, validators }) => {
  const err = touched[name] ? validators[name]?.(form[name]) || "" : "";

  const fieldStyle = {
    background: colors.inputBg,
    border: `1px solid ${err ? "#ef4444" : colors.inputBorder}`,
    color: colors.inputText,
    caretColor: colors.primary,
    resize: "none",
  };

  const shared = {
    name,
    value: form[name],
    onChange,
    onBlur,
    placeholder,
    required,
    style: { ...fieldStyle, "--placeholder": colors.placeholder },
    className: `${inputClass} placeholder:text-[var(--placeholder)]`,
  };

  return (
    <div className="flex flex-col gap-1">
      {rows ? (
        <textarea {...shared} rows={rows} />
      ) : (
        <input {...shared} type={type} />
      )}
      <AnimatePresence>
        {err && (
          <motion.p
            key={name + "-err"}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="text-[12px] text-red-400 pl-1"
          >
            {err}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const { dark } = useTheme();

  const colors = {
    bg: dark ? "#000000" : "#faf9ff",
    card: dark ? "#050507" : "#ffffff",
    cardBorder: dark ? "#1f1f35" : "#EDE7F6",
    text: dark ? "#f0ebff" : "#1a0a3b",
    muted: dark ? "#9880c0" : "#5a4e72",
    inputBg: dark ? "#0d0d1c" : "#ffffff",
    inputBorder: dark ? "#2a2a45" : "#EDE7F6",
    inputText: dark ? "#f0ebff" : "#1a0a3b",
    placeholder: dark ? "#4a3d6a" : "#b8afd0",
    promiseBg: dark ? "#130e2a" : "#1a0a3b",
    captchaBg: dark ? "#12122a" : "#f5f3ff",
    captchaBorder: dark ? "#2a2a50" : "#DDD6FE",
    errorBg: dark ? "#2a1010" : "#fef2f2",
    errorBorder: dark ? "#5a1a1a" : "#fecaca",
    successBg: dark ? "#0f0f1a" : "#ffffff",
    primary: "#7C3AED",
    primaryHover: "#6D28D9",
    accent: "#F97316",
    shadow: dark
      ? "0 8px 32px -8px rgba(124,58,237,0.25)"
      : "0 8px 32px -8px rgba(124,58,237,0.10)",
  };

  const inputClass = `w-full text-[14px] px-4 py-3 rounded-xl focus:outline-none transition-colors duration-200`;

  const validators = {
    name: (v) => v.trim().length < 2 ? "Name must be at least 2 characters" : "",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address",
    message: (v) => v.trim().length < 10 ? "Message must be at least 10 characters" : "",
  };

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaTouched, setCaptchaTouched] = useState(false);

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setCaptchaTouched(false);
  }, []);

  useEffect(() => { refreshCaptcha(); }, []);

  const captchaCorrect = parseInt(captchaInput, 10) === captcha.answer;
  const captchaError = captchaTouched && !captchaCorrect ? "Incorrect answer, try again" : "";

  const isFormReady =
    form.name.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.message.trim().length >= 10 &&
    captchaCorrect;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormReady) return;
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
      setTouched({});
      refreshCaptcha();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Shared props passed down to Field
  const fieldProps = { form, touched, onChange: handleChange, onBlur: handleBlur, colors, inputClass, validators };

  const contactItems = [
    {
      label: "Location", value: "Massachusetts",
      accent: "#7C3AED", bg: dark ? "#1e1530" : "#EDE7F6",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5S12.5 9.5 12.5 6c0-2.5-2-4.5-4.5-4.5z" stroke="#7C3AED" strokeWidth="1.4" /><circle cx="8" cy="6" r="1.5" stroke="#7C3AED" strokeWidth="1.4" /></svg>,
    },
    {
      label: "Email", value: "info@autismviolet.com",
      accent: "#F97316", bg: dark ? "#2a1a0a" : "#FFF3E8",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="2" stroke="#F97316" strokeWidth="1.4" /><path d="M2 6l6 4 6-4" stroke="#F97316" strokeWidth="1.4" strokeLinecap="round" /></svg>,
    },
    {
      label: "Phone", value: "+1 (508) 373-4511",
      accent: "#7C3AED", bg: dark ? "#1e1530" : "#EDE7F6",
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2.5h2.5l1 3-1.5 1a8 8 0 003.5 3.5l1-1.5 3 1V13A1.5 1.5 0 0111 14.5C6.25 14.5 1.5 9.75 1.5 5A1.5 1.5 0 013 3.5v-1z" stroke="#7C3AED" strokeWidth="1.4" strokeLinejoin="round" /></svg>,
    },
  ];

  return (
    <div className="transition-colors duration-300" style={{ background: colors.bg }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-24 text-center">
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5"
            style={{ color: colors.primary }}
          >
            Get In Touch
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold leading-[1.15] mb-4"
            style={{ color: colors.text }}
          >
            Contact{" "}
            <em className="italic" style={{ color: dark ? "#c4b5fd" : "#6A3FA0" }}>
              Autism Violet
            </em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[15px] leading-relaxed max-w-[480px] mx-auto mb-5"
            style={{ color: colors.muted }}
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
                  className="flex items-center gap-4 rounded-2xl px-5 py-4"
                  style={{
                    background: colors.card,
                    border: `1px solid ${colors.cardBorder}`,
                  }}
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
                    <p className="text-[14px] font-medium" style={{ color: colors.text }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Promise callout */}
              <div
                className="mt-2 rounded-2xl px-6 py-6 pl-7 border-l-4"
                style={{ background: colors.promiseBg, borderColor: colors.accent }}
              >
                <p
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3"
                  style={{ color: colors.accent }}
                >
                  Our Promise
                </p>
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
              className="rounded-2xl p-7"
              style={{
                background: colors.card,
                border: `1px solid ${colors.cardBorder}`,
                boxShadow: colors.shadow,
              }}
            >
              <div className="h-[3px] rounded-full mb-6 w-12" style={{ background: colors.primary }} />

              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-1"
                style={{ color: colors.primary }}
              >
                Send a Message
              </p>
              <h2
                className="font-playfair text-[22px] font-bold mb-6"
                style={{ color: colors.text }}
              >
                We'll get back to you shortly
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

                <Field name="name" placeholder="Your name" required {...fieldProps} />
                <Field name="email" placeholder="Your email" type="email" required {...fieldProps} />
                <Field name="phone" placeholder="Phone number (optional)"                   {...fieldProps} />
                <Field name="message" placeholder="Your message" required rows={4} {...fieldProps} />

                {/* ── CAPTCHA ──────────────────────────────────── */}
                <div
                  className="rounded-xl px-4 py-4 flex flex-col gap-3"
                  style={{
                    background: colors.captchaBg,
                    border: `1px solid ${colors.captchaBorder}`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-semibold" style={{ color: colors.muted }}>
                      Human check
                    </p>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="text-[11px] flex items-center gap-1 transition-opacity hover:opacity-70"
                      style={{ color: colors.primary }}
                    >
                      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M13.5 2.5A7 7 0 1 0 14 8" strokeLinecap="round" />
                        <path d="M14 2.5V6h-3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      New question
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Question pill */}
                    <div
                      className="flex items-center justify-center rounded-lg px-4 py-2 min-w-[110px]"
                      style={{ background: dark ? "#1a1a35" : "#ede7f6" }}
                    >
                      <span
                        className="font-mono text-[18px] font-bold tracking-wider select-none"
                        style={{ color: colors.primary }}
                      >
                        {captcha.a} + {captcha.b} = ?
                      </span>
                    </div>

                    {/* Answer input */}
                    <input
                      type="number"
                      value={captchaInput}
                      onChange={(e) => { setCaptchaInput(e.target.value); setCaptchaTouched(true); }}
                      onBlur={() => setCaptchaTouched(true)}
                      placeholder="Answer"
                      className="w-24 text-[14px] px-3 py-2 rounded-lg focus:outline-none transition-colors duration-200"
                      style={{
                        background: colors.inputBg,
                        border: `1px solid ${captchaError ? "#ef4444" : captchaCorrect && captchaTouched ? "#22c55e" : colors.inputBorder}`,
                        color: colors.inputText,
                      }}
                    />

                    {/* Live tick / cross */}
                    <AnimatePresence mode="wait">
                      {captchaTouched && captchaInput !== "" && (
                        <motion.span
                          key={captchaCorrect ? "ok" : "no"}
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.7 }}
                          transition={{ duration: 0.15 }}
                        >
                          {captchaCorrect ? (
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="9" fill="#22c55e" opacity="0.15" />
                              <path d="M5.5 10.5l3 3 6-6" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                              <circle cx="10" cy="10" r="9" fill="#ef4444" opacity="0.15" />
                              <path d="M7 7l6 6M13 7l-6 6" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                          )}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <AnimatePresence>
                    {captchaError && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="text-[12px] text-red-400"
                      >
                        {captchaError}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* API error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-[13px] text-red-400 rounded-xl px-4 py-2"
                      style={{
                        background: colors.errorBg,
                        border: `1px solid ${colors.errorBorder}`,
                      }}
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={!isFormReady || loading}
                  whileHover={isFormReady && !loading ? { y: -1 } : {}}
                  whileTap={isFormReady && !loading ? { scale: 0.98 } : {}}
                  className="inline-flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200"
                  style={{
                    background: isFormReady && !loading ? colors.primary : dark ? "#2a1f45" : "#c4b5fd",
                    cursor: isFormReady && !loading ? "pointer" : "not-allowed",
                    opacity: isFormReady && !loading ? 1 : 0.6,
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </>
                  )}
                </motion.button>

                {/* Helper hint below button */}
                <AnimatePresence>
                  {!isFormReady && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-[11px] text-center"
                      style={{ color: colors.muted }}
                    >
                      {!captchaCorrect
                        ? "Complete the human check to submit"
                        : "Fill in all required fields to submit"}
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
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
            style={{ background: "rgba(26,10,59,0.55)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-8 text-center max-w-sm w-full"
              style={{
                background: colors.successBg,
                border: `1px solid ${colors.cardBorder}`,
                boxShadow: "0 24px 64px -12px rgba(26,10,59,0.3)",
              }}
            >
              <div className="h-[3px] rounded-full mb-6 w-12 mx-auto" style={{ background: colors.primary }} />

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: dark ? "#1e1530" : "#EDE7F6" }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 11l5 5 9-9" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h2
                className="font-playfair text-[22px] font-bold mb-2"
                style={{ color: colors.text }}
              >
                Message{" "}
                <em className="italic" style={{ color: colors.accent }}>Sent!</em>
              </h2>
              <p className="text-[14px] leading-relaxed mb-6" style={{ color: colors.muted }}>
                Thank you! We'll get back to you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="inline-flex items-center justify-center gap-2 text-white px-6 py-2.5 rounded-full text-[14px] font-semibold transition-colors duration-200 hover:opacity-90"
                style={{ background: colors.primary }}
              >
                Close
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Contact;