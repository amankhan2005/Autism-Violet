 
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import { useTheme } from "../context/ThemeContext";
import earlyImg from "../assets/images/early.jpg";

const sections = [
  {
    number: "01",
    title: "Why Early Intervention Matters",
    desc: "Early intervention plays a vital role in improving developmental outcomes for children with autism. At Autism Violet, we focus on identifying delays early and applying evidence-based ABA therapy techniques that enhance learning ability, reduce challenging behaviors, and promote meaningful engagement with the world around them.",
    accent: "#F97316",
  },
  {
    number: "02",
    title: "Personalized ABA Therapy Programs",
    desc: "Every child is unique, and so is our approach. At Autism Violet, we create individualized therapy plans tailored to each child's strengths, challenges, and goals. Our programs focus on improving speech, social interaction, daily living skills, and emotional development through structured and engaging sessions.",
    accent: "#7C3AED",
  },
  {
    number: "03",
    title: "Family-Centered Support",
    desc: "We believe parents and caregivers are key partners in a child's progress. That's why Autism Violet provides continuous guidance, training, and support to families. This ensures that therapy continues beyond sessions, helping children practice and strengthen their skills in real-life environments.",
    accent: "#F97316",
  },
  {
    number: "04",
    title: "Building a Strong Future",
    desc: "Our goal at Autism Violet is to empower children with autism to reach their full potential. Through early intervention ABA therapy, we help children gain confidence, independence, and the ability to thrive in school and social settings, setting them up for long-term success.",
    accent: "#7C3AED",
  },
];

const EarlyIntervention = () => {
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
            Our Programs
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold leading-[1.15] mb-6"
            style={{ color: colors.text, transition: "color 0.3s" }}
          >
            Early Intervention{" "}
            <em className="italic" style={{ color: colors.accent }}>ABA Therapy</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[15px] leading-relaxed max-w-[560px] mx-auto"
            style={{ color: colors.textMid, transition: "color 0.3s" }}
          >
            At Autism Violet, our early intervention programs support young children
            in building communication, behavior, and social skills during their most
            important developmental years.
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
                src={earlyImg}
                alt="Early intervention therapy session"
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
                Building Strong{" "}
                <em className="italic" style={{ color: colors.accent }}>Foundations Early</em>
              </h2>
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: colors.textMid, transition: "color 0.3s" }}
              >
                Autism Violet focuses on early support to help children develop essential life skills. Our structured programs encourage learning through play, interaction, and guided therapy to create long-term success.
              </p>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── CARDS ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5"
          >
            {sections.map((item, i) => (
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
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-300 group-hover:h-[4px]"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Ghost number watermark */}
                <span
                  className="font-playfair text-[56px] font-bold leading-none mb-6 block"
                  style={{ color: item.accent, opacity: 0.12 }}
                >
                  {item.number}
                </span>

                {/* Left border + content */}
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

                {/* Dot accent */}
                <div
                  className="absolute bottom-5 right-5 w-2 h-2 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundColor: item.accent }}
                />
              </motion.div>
            ))}
          </motion.div>
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
              Give Your Child the{" "}
              <em className="italic text-orange-300">Best Start</em>
            </h2>

            <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mx-auto mb-8">
              Start early intervention today with Autism Violet and help your child
              build essential skills for a brighter and more independent future.
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

export default EarlyIntervention;
