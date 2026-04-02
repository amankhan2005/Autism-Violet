import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import InsuranceSection from "../components/home/Insurance";

const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "98%",  label: "Family Satisfaction" },
  { value: "12+",  label: "Years Experience" },
];

const values = [
  { number: "01", title: "Compassion", desc: "We treat every child with care, patience, and respect.",          accent: "#F97316" },
  { number: "02", title: "Excellence", desc: "We provide evidence-based, high-quality therapy.",               accent: "#7C3AED" },
  { number: "03", title: "Growth",     desc: "We focus on continuous improvement and progress.",               accent: "#F97316" },
];

const services = [
  "Early Intervention Programs",
  "School Readiness Support",
  "In-Home ABA Therapy",
  "Behavior & Communication Training",
];

const About = () => {
  const { dark } = useTheme();

  // ✅ DESIGN SYSTEM — mirrors Career, FAQ & InsuranceSection tokens
  const colors = {
    bg:          dark ? "#0a0a0a" : "#faf9ff",
    card:        dark ? "#161616" : "#ffffff",
    cardAlt:     dark ? "#111111" : "#faf9ff",
    border:      dark ? "#262626" : "#EDE7F6",
    borderHover: dark ? "#333333" : "#DDD6FE",
    text:        dark ? "#efefef" : "#1a0a3b",
    textMid:     dark ? "#c0c0c0" : "#5a4e72",
    muted:       dark ? "#888888" : "#7b6fa0",
    statDiv:     dark ? "#2a2a2a" : "#DDD6FE",
    mvBg:        dark ? "#0d0620" : "#1a0a3b",   // mission/vision section bg
    primary:     "#7C3AED",
    primarySoft: dark ? "#6A3FA0" : "#6A3FA0",
    accent:      "#F97316",
  };

  // icon bg helper for service rows
  const iconBg = (i) =>
    i % 2 === 0
      ? dark ? "rgba(249,115,22,0.12)" : "#FFF3E8"
      : dark ? "rgba(124,58,237,0.12)" : "#EDE7F6";

  return (
    <div style={{ background: colors.bg, transition: "background 0.3s" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ padding: "96px 0 80px", textAlign: "center" }}>
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: colors.primary, marginBottom: "20px" }}
          >
            Who We Are
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair"
            style={{ fontSize: "clamp(2.2rem,6vw,4.5rem)", fontWeight: 700,
              color: colors.text, lineHeight: 1.15, marginBottom: "24px" }}
          >
            About{" "}
            <em style={{ fontStyle: "italic", color: colors.primarySoft }}>Autism Violet</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            style={{ color: colors.textMid, fontSize: "15px", lineHeight: 1.7,
              maxWidth: "560px", margin: "0 auto 40px" }}
          >
            Personalized ABA therapy for children with autism—helping them build
            confidence, communication, and independence through compassionate,
            science-based care.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.24 }}
            style={{ display: "inline-flex", gap: "24px",
              paddingTop: "24px", borderTop: `1px solid ${colors.statDiv}` }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
                <div style={{ textAlign: "center" }}>
                  <p className="font-playfair" style={{ fontSize: "24px", fontWeight: 700, color: colors.text, margin: 0 }}>{s.value}</p>
                  <p style={{ fontSize: "11px", color: colors.muted, marginTop: "2px" }}>{s.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div style={{ width: "1px", alignSelf: "stretch", background: colors.statDiv }} />
                )}
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── ABOUT + IMAGE ─────────────────────────────────────── */}
      <section style={{ padding: "64px 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "56px", alignItems: "center" }}>

            <motion.div
              initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
              style={{ position: "relative" }}
            >
              <img
                src="/images/about/team.avif"
                alt="child autism therapy session ABA therapy"
                style={{ borderRadius: "16px", width: "100%", height: "320px", objectFit: "cover" }}
              />
              {/* badge */}
              <div style={{
                position: "absolute", bottom: "20px", left: "20px",
                background: colors.card,
                border: `1px solid ${colors.border}`,
                borderRadius: "16px", padding: "12px 16px",
                display: "flex", alignItems: "center", gap: "12px",
                boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.4)" : "0 4px 24px rgba(26,10,59,0.12)",
                transition: "background 0.3s",
              }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%",
                  background: dark ? "rgba(124,58,237,0.15)" : "#EDE7F6",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>💜</div>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: colors.text, margin: 0 }}>Science-backed care</p>
                  <p style={{ fontSize: "11px", color: colors.muted, margin: 0 }}>Every session, every child</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
            >
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: colors.primary, marginBottom: "16px" }}>
                Our Story
              </p>
              <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 700, color: colors.text, lineHeight: 1.15, marginBottom: "20px" }}>
                About{" "}
                <em style={{ fontStyle: "italic", color: colors.primarySoft }}>Autism Violet</em>
              </h2>
              <p style={{ color: colors.textMid, fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
                At Autism Violet, we believe every child has the ability to grow and
                succeed. Our ABA therapy programs are tailored to each child's
                strengths and needs, helping them develop essential life skills in a
                supportive and nurturing environment.
              </p>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────── */}
      <section style={{ background: colors.mvBg, padding: "80px 0", margin: "64px 0", transition: "background 0.3s" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "48px" }}>
            {[
              { label: "Our Mission", body: "To provide high-quality, personalized ABA therapy that improves communication, social skills, and independence in children with autism.", accent: "#F97316" },
              { label: "Our Vision",  body: "To create a world where every child with autism has access to the support they need to live a confident and fulfilling life.",             accent: "#7C3AED" },
            ].map((item, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ paddingLeft: "28px", borderLeft: `3px solid ${item.accent}` }}
              >
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em",
                  textTransform: "uppercase", color: item.accent, marginBottom: "16px" }}>
                  {item.label}
                </p>
                <p className="font-playfair" style={{ fontSize: "clamp(1.3rem,2.5vw,1.75rem)",
                  fontWeight: 700, color: "#ffffff", lineHeight: 1.35, margin: 0 }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────── */}
      <section style={{ padding: "80px 0 112px" }}>
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ marginBottom: "64px" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: colors.primary, marginBottom: "16px" }}>
              What Drives Us
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end",
              justifyContent: "space-between", gap: "24px" }}>
              <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 700, color: colors.text, lineHeight: 1.15, maxWidth: "400px", margin: 0 }}>
                Our Core{" "}
                <em style={{ fontStyle: "italic", color: colors.accent }}>Values</em>
              </h2>
              <p style={{ color: colors.textMid, fontSize: "15px", lineHeight: 1.7,
                maxWidth: "300px", textAlign: "right", margin: 0 }}>
                The principles that guide every session, every family, every day.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "20px" }}
          >
            {values.map((item, i) => (
              <motion.div
                key={i} variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                style={{
                  position: "relative",
                  background: colors.card,
                  borderRadius: "16px",
                  padding: "28px",
                  border: `1px solid ${colors.border}`,
                  overflow: "hidden",
                  transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = colors.borderHover;
                  e.currentTarget.style.boxShadow = dark
                    ? `0 8px 32px -8px ${item.accent}22`
                    : "0 8px 32px -8px rgba(124,58,237,0.12)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* top accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0,
                  height: "3px", borderRadius: "16px 16px 0 0",
                  backgroundColor: item.accent }} />

                <span className="font-playfair" style={{
                  fontSize: "56px", fontWeight: 700, lineHeight: 1,
                  color: item.accent, opacity: dark ? 0.18 : 0.12,
                  display: "block", marginBottom: "24px",
                }}>
                  {item.number}
                </span>

                <div style={{ paddingLeft: "16px", borderLeft: `2px solid ${item.accent}` }}>
                  <h3 style={{ fontWeight: 600, color: colors.text, fontSize: "16px",
                    lineHeight: 1.35, marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: colors.muted, fontSize: "13.5px", lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                {/* dot decoration */}
                <div style={{ position: "absolute", bottom: "20px", right: "20px",
                  width: "8px", height: "8px", borderRadius: "50%",
                  backgroundColor: item.accent, opacity: 0.3 }} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── SERVICES + IMAGE ──────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "56px", alignItems: "center" }}>

            <motion.div
              initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
            >
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
                textTransform: "uppercase", color: colors.primary, marginBottom: "16px" }}>
                What We Offer
              </p>
              <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 700, color: colors.text, lineHeight: 1.15, marginBottom: "32px" }}>
                Our{" "}
                <em style={{ fontStyle: "italic", color: colors.accent }}>Services</em>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "16px",
                      padding: "16px 20px",
                      background: colors.card,
                      border: `1px solid ${colors.border}`,
                      borderRadius: "12px",
                      transition: "background 0.3s, border-color 0.3s",
                    }}
                  >
                    <div style={{
                      width: "28px", height: "28px", borderRadius: "50%",
                      background: iconBg(i),
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5"
                          stroke={i % 2 === 0 ? "#F97316" : "#7C3AED"}
                          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: colors.text }}>{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55 }}
              style={{ position: "relative" }}
            >
              <img
                src="/images/about/aba-therapy-session.avif"
                alt="ABA therapy services for autism children learning skills"
                style={{ borderRadius: "16px", width: "100%", height: "400px", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute", top: "-16px", right: "-16px",
                width: "80px", height: "80px", borderRadius: "50%",
                border: `2px solid ${colors.borderHover}`, zIndex: -1,
              }} />
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em",
              textTransform: "uppercase", color: colors.primary, marginBottom: "16px" }}>
              Our People
            </p>
            <h2 className="font-playfair" style={{ fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700, color: colors.text, lineHeight: 1.15, marginBottom: "16px" }}>
              Dedicated Team,{" "}
              <em style={{ fontStyle: "italic", color: colors.accent }}>Real Results</em>
            </h2>
            <p style={{ color: colors.textMid, fontSize: "15px", lineHeight: 1.7,
              maxWidth: "500px", margin: "0 auto" }}>
              Our certified professionals work closely with families to ensure every
              child receives consistent, high-quality support across all environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ position: "relative" }}
          >
            <img
              src="/images/about/aba-team.jpg"
              alt="professional autism therapy team working with children"
              style={{ borderRadius: "16px", width: "100%", height: "480px", objectFit: "cover" }}
            />
            {/* stats pill */}
            <div style={{
              position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)",
              display: "flex", gap: "32px",
              background: dark ? "rgba(22,22,22,0.95)" : "rgba(255,255,255,0.95)",
              border: `1px solid ${colors.border}`,
              borderRadius: "50px", padding: "12px 24px",
              boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.5)" : "0 4px 24px rgba(26,10,59,0.12)",
              whiteSpace: "nowrap",
              transition: "background 0.3s",
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                  <div style={{ textAlign: "center" }}>
                    <p className="font-playfair" style={{ fontSize: "20px", fontWeight: 700, color: colors.text, margin: 0 }}>{s.value}</p>
                    <p style={{ fontSize: "10px", color: colors.muted, margin: 0 }}>{s.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div style={{ width: "1px", height: "28px", background: colors.statDiv }} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
  
     <InsuranceSection/>

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

export default About;