import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
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
  return (
    <div className="bg-[#faf9ff]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-24 text-center">
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-5"
          >
            Our Programs
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold text-[#1a0a3b] leading-[1.15] mb-6"
          >
            Early Intervention{" "}
            <em className="italic text-orange-500">ABA Therapy</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[560px] mx-auto"
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
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-2 border-[#DDD6FE] -z-10" />
              <div
                className="absolute top-5 left-5 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ boxShadow: "0 4px 24px rgba(26,10,59,0.12)" }}
              >
                <div className="w-9 h-9 rounded-full bg-[#EDE7F6] flex items-center justify-center text-base flex-shrink-0">
                  💜
                </div>
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
                Our Approach
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a0a3b] leading-[1.15] mb-5">
                Building Strong{" "}
                <em className="italic text-orange-500">Foundations Early</em>
              </h2>
              <p className="text-[#5a4e72] text-[15px] leading-relaxed">
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
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative bg-white rounded-2xl p-7 border border-[#EDE7F6] hover:border-[#DDD6FE] hover:shadow-[0_8px_32px_-8px_rgba(124,58,237,0.12)] transition-all duration-300 overflow-hidden"
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
                  <h3 className="font-semibold text-[#1a0a3b] text-[16px] leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#7b6fa0] text-[13.5px] leading-relaxed">
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