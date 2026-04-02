import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "98%",  label: "Family Satisfaction" },
  { value: "12+",  label: "Years Experience" },
];

const faqs = [
  {
    question: "What is Autism Spectrum Disorder (ASD)?",
    answer:
      "Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interaction. Each child experiences autism differently, which is why personalized therapy is essential.",
    accent: "#7C3AED",
  },
  {
    question: "What is ABA therapy and how does it help?",
    answer:
      "Applied Behavior Analysis (ABA) therapy is an evidence-based approach that helps children improve communication, social skills, and behavior. It focuses on positive reinforcement and structured learning.",
    accent: "#F97316",
  },
  {
    question: "At what age should I start ABA therapy?",
    answer:
      "Early intervention is highly recommended. Signs of autism can appear as early as 18 months, and starting therapy early can significantly improve long-term outcomes.",
    accent: "#7C3AED",
  },
  {
    question: "What services does Autism Violet provide?",
    answer:
      "We provide personalized ABA therapy, early intervention programs, school readiness support, and in-home therapy designed to meet each child's unique needs.",
    accent: "#F97316",
  },
  {
    question: "How are therapy plans customized?",
    answer:
      "Each child receives an individualized treatment plan based on assessments, strengths, and developmental goals. Our therapists continuously monitor and adjust the plan for best results.",
    accent: "#7C3AED",
  },
  {
    question: "Do parents get involved in the therapy process?",
    answer:
      "Yes! We strongly believe in a family-centered approach. We guide parents with tools and strategies so progress continues at home.",
    accent: "#F97316",
  },
  {
    question: "How can I get started?",
    answer:
      "You can book a free consultation by clicking on 'Book a Free Consultation' or contacting us directly. Our team will guide you through the next steps.",
    accent: "#7C3AED",
  },
];

const FAQ = () => {
  const { dark } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  // ✅ DESIGN SYSTEM — mirrors Career & InsuranceSection tokens
  const colors = {
    bg:          dark ? "#0a0a0a" : "#faf9ff",
    card:        dark ? "#161616" : "#ffffff",
    border:      dark ? "#262626" : "#EDE7F6",
    borderHover: dark ? "#333333" : "#DDD6FE",
    text:        dark ? "#efefef" : "#1a0a3b",
    textMid:     dark ? "#c0c0c0" : "#5a4e72",
    muted:       dark ? "#888888" : "#7b6fa0",
    statDiv:     dark ? "#2a2a2a" : "#DDD6FE",
    primary:     "#7C3AED",
    accent:      "#F97316",
  };

  // accent-specific tinted bg for the +/− icon
  const iconBg = (faqAccent, isOpen) => {
    if (!isOpen) return "transparent";
    if (faqAccent === "#7C3AED") return dark ? "rgba(124,58,237,0.2)" : "#EDE7F6";
    return dark ? "rgba(249,115,22,0.15)" : "#FFF3E8";
  };

  return (
    <div style={{ background: colors.bg, transition: "background 0.3s" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0 80px", textAlign: "center" }}>
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: colors.primary, marginBottom: "20px",
            }}
          >
            Got Questions?
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
              fontWeight: 700, color: colors.text,
              lineHeight: 1.15, marginBottom: "24px",
            }}
          >
            Your Questions,{" "}
            <em style={{ fontStyle: "italic", color: colors.accent }}>Answered</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            style={{
              color: colors.textMid, fontSize: "15px",
              lineHeight: 1.7, maxWidth: "520px",
              margin: "0 auto 40px",
            }}
          >
            Learn more about autism, ABA therapy, and how Autism Violet supports
            children and families through personalized care.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.24 }}
            style={{
              display: "inline-flex", gap: "24px",
              paddingTop: "24px",
              borderTop: `1px solid ${colors.statDiv}`,
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
                <div style={{ textAlign: "center" }}>
                  <p className="font-playfair" style={{
                    fontSize: "24px", fontWeight: 700,
                    color: colors.text, margin: 0,
                  }}>{s.value}</p>
                  <p style={{ fontSize: "11px", color: colors.muted, marginTop: "2px" }}>{s.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div style={{
                    width: "1px", alignSelf: "stretch",
                    background: colors.statDiv,
                  }} />
                )}
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── FAQ LIST ──────────────────────────────────────────── */}
      <section style={{ paddingBottom: "80px" }}>
        <Container>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    style={{
                      background: colors.card,
                      border: `1px solid ${isOpen ? faq.accent + "55" : colors.border}`,
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                      boxShadow: isOpen
                        ? dark
                          ? `0 8px 32px -8px ${faq.accent}22`
                          : `0 8px 32px -8px rgba(124,58,237,0.10)`
                        : "none",
                    }}
                  >
                    {/* Top accent bar */}
                    <div style={{
                      height: "3px", width: "100%",
                      backgroundColor: faq.accent,
                      opacity: isOpen ? 1 : 0,
                      transition: "opacity 0.3s",
                    }} />

                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      style={{
                        width: "100%", textAlign: "left",
                        display: "flex", justifyContent: "space-between",
                        alignItems: "center", gap: "16px",
                        padding: "20px 24px",
                        background: "transparent",
                        border: "none", cursor: "pointer",
                      }}
                    >
                      <span
                        className="font-playfair"
                        style={{
                          fontWeight: 600, fontSize: "16px", lineHeight: 1.35,
                          color: isOpen ? faq.accent : colors.text,
                          transition: "color 0.2s",
                        }}
                      >
                        {faq.question}
                      </span>

                      {/* +/− icon */}
                      <span style={{
                        flexShrink: 0, width: "28px", height: "28px",
                        borderRadius: "50%",
                        border: `1px solid ${isOpen ? faq.accent : colors.borderHover}`,
                        backgroundColor: iconBg(faq.accent, isOpen),
                        color: isOpen ? faq.accent : colors.muted,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s",
                      }}>
                        <svg
                          width="12" height="12" viewBox="0 0 12 12" fill="none"
                          style={{
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        >
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{
                            margin: "0 24px 20px",
                            paddingLeft: "16px",
                            borderLeft: `2px solid ${faq.accent}`,
                          }}>
                            <p style={{
                              color: colors.textMid,
                              fontSize: "14px", lineHeight: 1.7, margin: 0,
                            }}>
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        background: dark ? "#120a2e" : "#643C85",
        padding: "80px 0 112px",
        overflow: "hidden",
        transition: "background 0.3s",
      }}>
        {[500, 740, 980].map((size, i) => (
          <div key={i} style={{
            position: "absolute", borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            width: size, height: size,
            top: -(size * 0.36), left: "50%",
            transform: "translateX(-50%)", pointerEvents: "none",
          }} />
        ))}

        {dark && (
          <div style={{
            position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
            width: "500px", height: "300px",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
        )}

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            style={{ position: "relative", zIndex: 10, maxWidth: "600px",
              margin: "0 auto", textAlign: "center", padding: "0 8px" }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)",
              color: "rgba(255,255,255,0.80)", fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "6px 16px", borderRadius: "50px", marginBottom: "24px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(255,255,255,0.6)" }} />
              Free initial consultation
            </div>

            <h2 className="font-playfair" style={{
              fontSize: "clamp(1.6rem,6vw,2.6rem)", fontWeight: 700,
              color: "#fff", lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: "16px",
            }}>
              Start Your Child's Journey to{" "}
              <em style={{ fontStyle: "italic", color: "#fdba74" }}>Independence</em>
            </h2>

            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: 1.7,
              maxWidth: "440px", margin: "0 auto 32px" }}>
              Let's work together to build confidence, independence, and a brighter future.
            </p>

            <Link
              to="/contact-us"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                background: "#fff", color: "#7C3AED",
                padding: "14px 28px", borderRadius: "50px",
                fontSize: "14px", fontWeight: 600,
                textDecoration: "none", transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fef3ec"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff";    e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book a Free Consultation
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};

export default FAQ;