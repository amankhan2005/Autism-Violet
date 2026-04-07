import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";

const steps = [
  {
    number: "01",
    title: "Initial Information",
    desc: "Fill out the intake form so our coordinator can reach you.",
    formId: "253065506574459",
    accent: "#F97316",
  },
  {
    number: "02",
    title: "Pre-Assessment",
    desc: "Our coordinator will guide you through the next steps after Step 1.",
    formId: "253064066582458",
    accent: "#7C3AED",
  },
];

/* ─── SVG Icons ────────────────────────────────────────────────────── */
const ClipboardIcon = ({ color = "currentColor", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
    <line x1="9" y1="16" x2="13" y2="16"/>
  </svg>
);

const PhoneCallIcon = ({ color = "currentColor", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94"/>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
      A19.5 19.5 0 0 1 3.07 9.8 19.79 19.79 0 0 1 .22 1.18 2 2 0 0 1 2.22 0h3
      a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.91 7.91
      a16 16 0 0 0 6.18 6.18l1.27-.56a2 2 0 0 1 2.11.45 12.84 12.84 0 0 0 2.81.7
      A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const FileTextIcon = ({ color = "currentColor", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="9" y1="13" x2="15" y2="13"/>
    <line x1="9" y1="17" x2="13" y2="17"/>
  </svg>
);

const HeartIcon = ({ color = "currentColor", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
      a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
      1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const TargetIcon = ({ color = "currentColor", size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const CheckIcon = ({ color = "#fff", size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M2.5 6.5l2.5 2.5 4.5-5"
      stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = ({ color = "currentColor", size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/* ─── Process steps data ───────────────────────────────────────────── */
const processSteps = [
  {
    Icon: ClipboardIcon,
    label: "Complete Step 1",
    desc: "Fill out the initial information form below.",
    accent: "#F97316",
  },
  {
    Icon: PhoneCallIcon,
    label: "We Contact You",
    desc: "Our intake coordinator reaches out promptly.",
    accent: "#7C3AED",
  },
  {
    Icon: FileTextIcon,
    label: "Paperwork & Referrals",
    desc: "We assist with all requirements end-to-end.",
    accent: "#F97316",
  },
  {
    Icon: HeartIcon,
    label: "Therapy Begins",
    desc: "Your child starts their journey with us.",
    accent: "#7C3AED",
  },
];

/* ─── Form Spinner ─────────────────────────────────────────────────── */
const FormLoader = ({ dark }) => (
  <div style={{
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    padding: "64px 32px", gap: "20px",
  }}>
    {/* Animated ring */}
    <div style={{ position: "relative", width: "52px", height: "52px" }}>
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: `3px solid ${dark ? "#2a2a2a" : "#EDE7F6"}`,
      }} />
      <div style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        border: "3px solid transparent",
        borderTopColor: "#7C3AED",
        borderRightColor: "#F97316",
        animation: "gs-spin 0.9s linear infinite",
      }} />
    </div>
    <p style={{
      fontSize: "13.5px",
      color: dark ? "#888" : "#7b6fa0",
      margin: 0, letterSpacing: "0.02em",
    }}>
      Loading form…
    </p>
    <style>{`
      @keyframes gs-spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

/* ─── Main Component ───────────────────────────────────────────────── */
const GettingStarted = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formLoading, setFormLoading] = useState(true);
  const containerRef = useRef(null);
  const { dark } = useTheme();

  const colors = {
    bg:          dark ? "#0a0a0a" : "#faf9ff",
    card:        dark ? "#161616" : "#ffffff",
    border:      dark ? "#262626" : "#EDE7F6",
    text:        dark ? "#efefef" : "#1a0a3b",
    textMid:     dark ? "#c0c0c0" : "#5a4e72",
    muted:       dark ? "#888888" : "#7b6fa0",
    statDiv:     dark ? "#2a2a2a" : "#DDD6FE",
    mvBg:        dark ? "#0d0620" : "#1a0a3b",
    primary:     "#7C3AED",
    accent:      "#F97316",
  };

  useEffect(() => {
    const { formId } = steps[activeStep];
    const container = containerRef.current;
    if (!container) return;

    setFormLoading(true);
    container.innerHTML = "";

    const oldScript = document.getElementById("jotform-script");
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.id = "jotform-script";
    script.src = `https://form.jotform.com/jsform/${formId}`;
    script.async = true;

    // Hide loader once form iframe appears
    const observer = new MutationObserver(() => {
      const iframe = container.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", () => setFormLoading(false), { once: true });
        // Fallback: hide loader after 4s even if load event doesn't fire
        setTimeout(() => setFormLoading(false), 4000);
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    container.appendChild(script);

    return () => observer.disconnect();
  }, [activeStep]);

  return (
    <div style={{ background: colors.bg, transition: "background 0.3s" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(56px,10vw,96px) 0 clamp(48px,8vw,80px)", textAlign: "center" }}>
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: colors.primary, marginBottom: "20px",
            }}
          >
            Begin Your Journey
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair"
            style={{
              fontSize: "clamp(2rem,6vw,4.5rem)", fontWeight: 700,
              color: colors.text, lineHeight: 1.15, marginBottom: "24px",
            }}
          >
            Getting{" "}
            <em style={{ fontStyle: "italic", color: "#6A3FA0" }}>Started</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            style={{
              color: colors.textMid, fontSize: "clamp(13.5px,2vw,15px)", lineHeight: 1.7,
              maxWidth: "520px", margin: "0 auto 40px",
              padding: "0 16px",
            }}
          >
            We're excited to support you and your learner on this journey.
            Complete Step 1 and our intake coordinator will contact you — we
            handle all paperwork, referrals, and requirements.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.24 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "clamp(16px,4vw,24px)",
              paddingTop: "24px",
              borderTop: `1px solid ${colors.statDiv}`,
              margin: "0 auto",
              maxWidth: "480px",
            }}
          >
            {[
              { value: "2 Steps", label: "Simple Process" },
              { value: "Free",    label: "Initial Consultation" },
              { value: "Full",    label: "Paperwork Support" },
            ].map((s, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "clamp(16px,4vw,24px)" }}>
                <div style={{ textAlign: "center" }}>
                  <p className="font-playfair" style={{
                    fontSize: "clamp(18px,3vw,24px)", fontWeight: 700,
                    color: colors.text, margin: 0,
                  }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: "11px", color: colors.muted, marginTop: "2px" }}>{s.label}</p>
                </div>
                {i < arr.length - 1 && (
                  <div style={{
                    width: "1px", height: "36px",
                    background: colors.statDiv,
                    flexShrink: 0,
                  }} />
                )}
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── PROCESS STEPS ────────────────────────────────────────────── */}
      <section style={{
        background: colors.mvBg,
        padding: "clamp(48px,8vw,80px) 0",
        margin: "0 0 clamp(40px,6vw,64px)",
        transition: "background 0.3s",
      }}>
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: colors.accent,
              marginBottom: "12px", textAlign: "center",
            }}
          >
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-playfair"
            style={{
              fontSize: "clamp(1.4rem,3.5vw,2.4rem)", fontWeight: 700,
              color: "#ffffff", textAlign: "center",
              marginBottom: "clamp(32px,5vw,48px)",
              padding: "0 16px",
            }}
          >
            Your path to{" "}
            <em style={{ fontStyle: "italic", color: "#fdba74" }}>starting therapy</em>
          </motion.h2>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "clamp(16px,3vw,20px)",
            }}
          >
            {processSteps.map(({ Icon, label, desc, accent }, i) => (
              <motion.div
                key={i} variants={fadeUp}
                style={{
                  paddingLeft: "20px",
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                {/* SVG icon in circle */}
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: i % 2 === 0
                    ? "rgba(249,115,22,0.15)"
                    : "rgba(124,58,237,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "14px", flexShrink: 0,
                }}>
                  <Icon color={accent} size={18} />
                </div>
                <p style={{
                  fontWeight: 600, color: "#ffffff",
                  fontSize: "clamp(13.5px,2vw,15px)", margin: "0 0 8px",
                }}>
                  {label}
                </p>
                <p style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "clamp(12.5px,1.8vw,13.5px)",
                  lineHeight: 1.6, margin: 0,
                }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── STEP SELECTOR + FORM ─────────────────────────────────────── */}
      <section style={{ padding: "0 0 clamp(64px,10vw,112px)" }}>
        <Container>

          {/* Section label */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "clamp(32px,5vw,48px)" }}
          >
            <p style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: colors.primary, marginBottom: "16px",
            }}>
              Complete Your Forms
            </p>
            <h2 className="font-playfair" style={{
              fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700,
              color: colors.text, lineHeight: 1.15, marginBottom: "16px",
            }}>
              Ready to{" "}
              <em style={{ fontStyle: "italic", color: colors.accent }}>Begin?</em>
            </h2>
            <p style={{
              color: colors.textMid, fontSize: "clamp(13.5px,2vw,15px)", lineHeight: 1.7,
              maxWidth: "480px", margin: "0 auto",
              padding: "0 16px",
            }}>
              Start with Step 1 — our intake coordinator will walk you through everything that follows.
            </p>
          </motion.div>

          {/* Step toggle cards */}
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "clamp(12px,2.5vw,20px)",
              marginBottom: "clamp(24px,4vw,40px)",
            }}
          >
            {steps.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp}
                onClick={() => setActiveStep(i)}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                style={{
                  position: "relative",
                  background: activeStep === i ? "#1a0a3b" : colors.card,
                  borderRadius: "16px",
                  padding: "clamp(20px,3vw,28px)",
                  border: `1px solid ${activeStep === i ? item.accent : colors.border}`,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  boxShadow: activeStep === i
                    ? `0 8px 32px -8px ${item.accent}44`
                    : "none",
                }}
              >
                {/* top accent bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  height: "3px", borderRadius: "16px 16px 0 0",
                  backgroundColor: item.accent,
                }} />

                <span className="font-playfair" style={{
                  fontSize: "clamp(36px,6vw,52px)", fontWeight: 700, lineHeight: 1,
                  color: item.accent,
                  opacity: activeStep === i ? 0.25 : (dark ? 0.15 : 0.1),
                  display: "block", marginBottom: "clamp(14px,2.5vw,20px)",
                }}>
                  {item.number}
                </span>

                <div style={{ paddingLeft: "16px", borderLeft: `2px solid ${item.accent}` }}>
                  <p style={{
                    fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: activeStep === i ? item.accent : colors.muted,
                    margin: "0 0 6px",
                  }}>
                    Step {i + 1}
                  </p>
                  <h3 style={{
                    fontWeight: 600,
                    color: activeStep === i ? "#ffffff" : colors.text,
                    fontSize: "clamp(14px,2vw,16px)", lineHeight: 1.35, marginBottom: "10px",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: activeStep === i ? "rgba(255,255,255,0.6)" : colors.muted,
                    fontSize: "clamp(12.5px,1.8vw,13.5px)", lineHeight: 1.7, margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>

                {activeStep === i && (
                  <div style={{
                    position: "absolute", bottom: "20px", right: "20px",
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: item.accent,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <CheckIcon />
                  </div>
                )}

                <div style={{
                  position: "absolute", bottom: "20px",
                  right: activeStep === i ? "60px" : "20px",
                  width: "6px", height: "6px", borderRadius: "50%",
                  backgroundColor: item.accent, opacity: 0.3,
                  transition: "right 0.25s",
                }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Form container */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: colors.card,
              borderRadius: "20px",
              border: `1px solid ${colors.border}`,
              overflow: "hidden",
              transition: "background 0.3s, border-color 0.3s",
            }}
          >
            {/* Form header */}
            <div style={{
              padding: "clamp(20px,3vw,28px) clamp(20px,4vw,32px) clamp(16px,2.5vw,24px)",
              borderBottom: `1px solid ${colors.border}`,
              display: "flex", alignItems: "center",
              gap: "clamp(12px,2vw,16px)",
              flexWrap: "wrap",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: steps[activeStep].accent === "#F97316"
                  ? (dark ? "rgba(249,115,22,0.15)" : "#FFF3E8")
                  : (dark ? "rgba(124,58,237,0.15)" : "#EDE7F6"),
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {activeStep === 0
                  ? <ClipboardIcon color={steps[activeStep].accent} size={20} />
                  : <TargetIcon color={steps[activeStep].accent} size={20} />
                }
              </div>
              <div>
                <p style={{
                  fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em",
                  textTransform: "uppercase", color: steps[activeStep].accent,
                  margin: "0 0 4px",
                }}>
                  Step {activeStep + 1} of 2
                </p>
                <h3 className="font-playfair" style={{
                  fontSize: "clamp(16px,2.5vw,20px)", fontWeight: 700,
                  color: colors.text, margin: 0,
                }}>
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            {/* Jotform + loader */}
            <div style={{ padding: "clamp(20px,4vw,32px)", minHeight: "200px", position: "relative" }}>
              {formLoading && (
                <div style={{
                  position: "absolute", inset: 0, zIndex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <FormLoader dark={dark} />
                </div>
              )}
              <div
                ref={containerRef}
                style={{
                  minHeight: "500px",
                  opacity: formLoading ? 0 : 1,
                  transition: "opacity 0.4s ease",
                }}
              />
            </div>
          </motion.div>

        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        background: dark ? "#120a2e" : "#643C85",
        padding: "clamp(56px,8vw,80px) 0 clamp(64px,10vw,112px)",
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
            position: "absolute", top: "-60px", left: "50%",
            transform: "translateX(-50%)",
            width: "500px", height: "300px",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
        )}

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55 }}
            style={{
              position: "relative", zIndex: 10, maxWidth: "600px",
              margin: "0 auto", textAlign: "center",
              padding: "0 clamp(16px,4vw,8px)",
            }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.20)",
              color: "rgba(255,255,255,0.80)",
              fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "6px 16px", borderRadius: "50px", marginBottom: "24px",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "rgba(255,255,255,0.6)", flexShrink: 0,
              }} />
              Questions? We're here to help
            </div>

            <h2 className="font-playfair" style={{
              fontSize: "clamp(1.5rem,5vw,2.6rem)", fontWeight: 700,
              color: "#fff", lineHeight: 1.2,
              letterSpacing: "-0.01em", marginBottom: "16px",
            }}>
              Not Sure Where to{" "}
              <em style={{ fontStyle: "italic", color: "#fdba74" }}>Start?</em>
            </h2>

            <p style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "clamp(13.5px,2vw,15px)", lineHeight: 1.7,
              maxWidth: "440px", margin: "0 auto 32px",
            }}>
              Our team is happy to walk you through the process. Reach out and
              we'll guide you every step of the way.
            </p>

            <a
              href="/contact-us"
              style={{
                display: "inline-flex", alignItems: "center",
                justifyContent: "center", gap: "8px",
                background: "#fff", color: "#7C3AED",
                padding: "clamp(12px,2vw,14px) clamp(20px,4vw,28px)",
                borderRadius: "50px",
                fontSize: "clamp(13px,1.8vw,14px)", fontWeight: 600,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#fef3ec";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Our Team
              <ArrowRightIcon color="#7C3AED" />
            </a>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};

export default GettingStarted;