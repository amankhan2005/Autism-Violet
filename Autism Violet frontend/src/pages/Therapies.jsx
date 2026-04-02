 
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";
import therapyImg from "../assets/images/therapy.jpg";

const therapies = [
  {
    number: "01",
    title: "Speech Therapy",
    desc: "Helping children improve verbal and non-verbal communication skills, enabling them to express needs, understand language, and build meaningful social connections.",
    accent: "#F97316",
  },
  {
    number: "02",
    title: "Occupational Therapy",
    desc: "Focused on developing motor skills, sensory integration, and daily living abilities to help children become more independent and confident.",
    accent: "#7C3AED",
  },
  {
    number: "03",
    title: "Behavioral Therapy (ABA)",
    desc: "Evidence-based ABA therapy designed to improve behavior, learning, and social skills through structured and personalized interventions.",
    accent: "#F97316",
  },
];

const Therapies = () => {
  const { dark } = useTheme();

  const colors = {
    bg:          dark ? "#0a0a0a" : "#faf9ff",
    card:        dark ? "#161616" : "#ffffff",
    border:      dark ? "#262626" : "#EDE7F6",
    text:        dark ? "#efefef" : "#1a0a3b",
    textMid:     dark ? "#c0c0c0" : "#5a4e72",
    muted:       dark ? "#888888" : "#7b6fa0",
    statDiv:     dark ? "#2a2a2a" : "#DDD6FE",
    primary:     "#7C3AED",
    accent:      "#F97316",
  };

  const badgeShadow = dark
    ? "0 4px 24px rgba(0,0,0,0.5)"
    : "0 4px 24px rgba(26,10,59,0.12)";

  const iconBg = dark ? "rgba(124,58,237,0.2)" : "#EDE7F6";

  return (
    <div style={{ background: colors.bg, transition: "background 0.3s" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-24 text-center">
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5"
            style={{ color: colors.primary }}
          >
            What We Offer
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold leading-[1.15] mb-6"
            style={{ color: colors.text, transition: "color 0.3s" }}
          >
            Autism Therapy{" "}
            <em className="italic" style={{ color: colors.accent }}>Services</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[15px] leading-relaxed max-w-[560px] mx-auto"
            style={{ color: colors.textMid, transition: "color 0.3s" }}
          >
            At Autism Violet, we provide comprehensive therapy services for children
            with autism, combining ABA, speech, and occupational therapy to support
            communication, behavior, and independence.
          </motion.p>
        </Container>
      </section>

      {/* ── IMAGE + TEXT ──────────────────────────────────────── */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <img
                src={therapyImg}
                alt="Autism therapy session"
                className="rounded-2xl w-full h-80 object-cover"
              />
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-2 -z-10"
                style={{ borderColor: colors.statDiv, transition: "border-color 0.3s" }}
              />
              <div
                className="absolute top-5 left-5 rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{
                  background: colors.card,
                  boxShadow: badgeShadow,
                  transition: "background 0.3s, box-shadow 0.3s",
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: iconBg, transition: "background 0.3s" }}
                >
                  💜
                </div>
                <div>
                  <p
                    className="text-[13px] font-semibold m-0"
                    style={{ color: colors.text, transition: "color 0.3s" }}
                  >
                    Science-backed care
                  </p>
                  <p
                    className="text-[11px] m-0"
                    style={{ color: colors.muted, transition: "color 0.3s" }}
                  >
                    Every session, every child
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: colors.primary }}
              >
                Our Approach
              </p>
              <h2
                className="font-playfair text-3xl md:text-4xl font-bold leading-[1.15] mb-5"
                style={{ color: colors.text, transition: "color 0.3s" }}
              >
                Comprehensive Therapy for{" "}
                <em className="italic" style={{ color: colors.accent }}>Every Child</em>
              </h2>
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: colors.textMid, transition: "color 0.3s" }}
              >
                Autism Violet offers a combination of therapies designed to meet each child's unique needs. Our integrated approach helps children develop communication, independence, and essential life skills through structured and engaging sessions.
              </p>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── THERAPY CARDS ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-5"
          >
            {therapies.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -5,
                  boxShadow: dark
                    ? "0 8px 32px -8px rgba(124,58,237,0.25)"
                    : "0 8px 32px -8px rgba(124,58,237,0.12)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative rounded-2xl p-7 overflow-hidden"
                style={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  transition: "background 0.3s, border-color 0.3s",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-300 group-hover:h-[4px]"
                  style={{ backgroundColor: item.accent }}
                />
                <span
                  className="font-playfair text-[56px] font-bold leading-none mb-6 block"
                  style={{ color: item.accent, opacity: 0.12 }}
                >
                  {item.number}
                </span>
                <div className="pl-4 border-l-2" style={{ borderColor: item.accent }}>
                  <h3
                    className="font-semibold text-[16px] leading-snug mb-3"
                    style={{ color: colors.text, transition: "color 0.3s" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[13.5px] leading-relaxed"
                    style={{ color: colors.muted, transition: "color 0.3s" }}
                  >
                    {item.desc}
                  </p>
                </div>
                <div
                  className="absolute bottom-5 right-5 w-2 h-2 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundColor: item.accent }}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── INTEGRATED APPROACH ───────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: dark ? "#141414" : "#1a0a3b",
          transition: "background 0.3s",
        }}
      >
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="pl-7"
              style={{ borderLeft: "3px solid #F97316" }}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4"
                style={{ color: "#F97316" }}
              >
                Integrated Therapy Approach
              </p>
              <p className="font-playfair text-2xl md:text-3xl font-bold text-white leading-[1.35]">
                At Autism Violet, we combine multiple therapies to create a holistic approach tailored to each child.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center"
            >
              <p className="text-white/65 text-[15px] leading-relaxed">
                Our team works closely with families to ensure consistent progress across home, school, and social environments, helping children build confidence and long-term success.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: dark ? "#120a2e" : "#643C85",
          transition: "background 0.3s",
        }}
      >
        {[500, 740, 980].map((size, i) => (
          <div
            key={i}
            className="hidden md:block absolute rounded-full border border-white/[0.08] pointer-events-none -translate-x-1/2 left-1/2"
            style={{ width: size, height: size, top: -(size * 0.36) }}
          />
        ))}

        {dark && (
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "500px",
              height: "300px",
              background: "radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        )}

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative z-10 max-w-[600px] mx-auto text-center px-2"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              Free initial consultation
            </div>

            <h2 className="font-playfair text-[clamp(26px,6vw,42px)] font-bold text-white leading-[1.2] tracking-tight mb-4">
              Start Your Child's{" "}
              <em className="italic text-orange-300">Journey Today</em>
            </h2>

            <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mx-auto mb-8">
              Discover how Autism Violet can help your child grow with personalized therapy and expert care.
            </p>

            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#7C3AED] hover:bg-orange-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
            >
              Book Free Consultation
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};

export default Therapies;