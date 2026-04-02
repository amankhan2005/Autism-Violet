import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "98%", label: "Family Satisfaction" },
  { value: "12+", label: "Years Experience" },
];

const values = [
  {
    number: "01",
    title: "Compassion",
    desc: "We treat every child with care, patience, and respect.",
    accent: "#F97316",
  },
  {
    number: "02",
    title: "Excellence",
    desc: "We provide evidence-based, high-quality therapy.",
    accent: "#7C3AED",
  },
  {
    number: "03",
    title: "Growth",
    desc: "We focus on continuous improvement and progress.",
    accent: "#F97316",
  },
];

const services = [
  "Early Intervention Programs",
  "School Readiness Support",
  "In-Home ABA Therapy",
  "Behavior & Communication Training",
];

const About = () => {
  return (
    <div className="bg-[#faf9ff]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-24 text-center">
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-5"
          >
            Who We Are
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold text-[#1a0a3b] leading-[1.15] mb-6"
          >
            About{" "}
            <em className="italic text-[#6A3FA0]">Autism Violet</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[560px] mx-auto mb-10"
          >
            Personalized ABA therapy for children with autism—helping them build
            confidence, communication, and independence through compassionate,
            science-based care.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.24 }}
            className="inline-flex gap-6 pt-6 border-t border-[#DDD6FE]"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="text-center">
                  <p className="font-playfair text-2xl font-bold text-[#1a0a3b]">{s.value}</p>
                  <p className="text-[11px] text-[#7b6fa0] mt-0.5">{s.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px self-stretch bg-[#DDD6FE]" />
                )}
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── ABOUT + IMAGE ─────────────────────────────────────── */}
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
                src="/images/about/team.avif"
                alt="child autism therapy session ABA therapy"
                className="rounded-2xl w-full h-80 object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ boxShadow: "0 4px 24px rgba(26,10,59,0.12)" }}>
                <div className="w-9 h-9 rounded-full bg-[#EDE7F6] flex items-center justify-center text-base">💜</div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1a0a3b] m-0">Science-backed care</p>
                  <p className="text-[11px] text-[#7b6fa0] m-0">Every session, every child</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-4">
                Our Story
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a0a3b] leading-[1.15] mb-5">
                About{" "}
                <em className="italic text-[#6A3FA0]">Autism Violet</em>
              </h2>
              <p className="text-[#5a4e72] text-[15px] leading-relaxed">
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
      <section className="bg-[#1a0a3b] py-20 my-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                label: "Our Mission",
                body: "To provide high-quality, personalized ABA therapy that improves communication, social skills, and independence in children with autism.",
                accent: "#F97316",
              },
              {
                label: "Our Vision",
                body: "To create a world where every child with autism has access to the support they need to live a confident and fulfilling life.",
                accent: "#7C3AED",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="pl-7"
                style={{ borderLeft: `3px solid ${item.accent}` }}
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4"
                  style={{ color: item.accent }}>
                  {item.label}
                </p>
                <p className="font-playfair text-2xl md:text-3xl font-bold text-white leading-[1.35]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CORE VALUES ───────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-4">
              What Drives Us
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a0a3b] leading-[1.15] max-w-[400px]">
                Our Core{" "}
                <em className="italic text-orange-500">Values</em>
              </h2>
              <p className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[300px] md:text-right">
                The principles that guide every session, every family, every day.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-5"
          >
            {values.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative bg-white rounded-2xl p-7 border border-[#EDE7F6] hover:border-[#DDD6FE] hover:shadow-[0_8px_32px_-8px_rgba(124,58,237,0.12)] transition-all duration-300 overflow-hidden"
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
                  <h3 className="font-semibold text-[#1a0a3b] text-[16px] leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#7b6fa0] text-[13.5px] leading-relaxed">
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

      {/* ── SERVICES + IMAGE ──────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-4">
                What We Offer
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a0a3b] leading-[1.15] mb-8">
                Our{" "}
                <em className="italic text-orange-500">Services</em>
              </h2>

              <div className="flex flex-col gap-4">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 px-5 py-4 bg-white border border-[#EDE7F6] rounded-xl"
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: i % 2 === 0 ? "#FFF3E8" : "#EDE7F6" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke={i % 2 === 0 ? "#F97316" : "#7C3AED"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-[14px] font-medium text-[#1a0a3b]">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <img
                src="/images/about/aba-therapy-session.avif"
                alt="ABA therapy services for autism children learning skills"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-[#DDD6FE] -z-10" />
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      <section className="py-20">
        <Container>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-4">
              Our People
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a0a3b] leading-[1.15] mb-4">
              Dedicated Team,{" "}
              <em className="italic text-orange-500">Real Results</em>
            </h2>
            <p className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[500px] mx-auto">
              Our certified professionals work closely with families to ensure every
              child receives consistent, high-quality support across all environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/about/aba-team.jpg"
              alt="professional autism therapy team working with children"
              className="rounded-2xl w-full h-120 object-cover"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-8 bg-white/95 rounded-full px-6 py-3"
              style={{ boxShadow: "0 4px 24px rgba(26,10,59,0.12)" }}>
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="font-playfair text-xl font-bold text-[#1a0a3b] m-0">{s.value}</p>
                    <p className="text-[10px] text-[#7b6fa0] m-0">{s.label}</p>
                  </div>
                  {i < stats.length - 1 && <div className="w-px h-7 bg-[#DDD6FE]" />}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative bg-[#643C85] py-20 md:py-28 overflow-hidden">
        {[500, 740, 980].map((size, i) => (
          <div
            key={i}
            className="hidden md:block absolute rounded-full border border-white/[0.08] pointer-events-none -translate-x-1/2 left-1/2"
            style={{ width: size, height: size, top: -(size * 0.36) }}
          />
        ))}

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
              Start Your Child's Journey to{" "}
              <em className="italic text-orange-300">Independence</em>
            </h2>

            <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mx-auto mb-8">
              Let's work together to build confidence, independence, and a brighter future.
            </p>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#7C3AED] hover:bg-orange-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
            >
              Book a Free Consultation
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
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