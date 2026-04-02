import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import assessImg from "../assets/images/assessment.jpg";

const sections = [
  {
    number: "01",
    title: "Comprehensive Developmental Evaluation",
    desc: "At Autism Violet, our assessments begin with a detailed evaluation of your child's developmental, behavioral, and communication skills. We carefully analyze strengths and challenges to create a clear understanding of your child's unique needs.",
    accent: "#F97316",
  },
  {
    number: "02",
    title: "Personalized Therapy Planning",
    desc: "Based on assessment results, we design customized ABA therapy plans tailored to your child. Our goal is to create structured, goal-oriented programs that support long-term growth in communication, social skills, and daily functioning.",
    accent: "#7C3AED",
  },
  {
    number: "03",
    title: "Evidence-Based Assessment Methods",
    desc: "Our team uses scientifically validated tools and ABA-based assessment techniques to ensure accurate results. This allows us to track progress effectively and adjust therapy strategies for the best possible outcomes.",
    accent: "#F97316",
  },
  {
    number: "04",
    title: "Ongoing Monitoring & Progress Tracking",
    desc: "Assessment is not a one-time process. At Autism Violet, we continuously monitor your child's progress, update goals, and refine therapy plans to ensure consistent improvement and meaningful development over time.",
    accent: "#7C3AED",
  },
];

const Assessments = () => {
  return (
    <div className="bg-[#faf9ff]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-24 text-center">
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-5"
          >
            Our Process
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold text-[#1a0a3b] leading-[1.15] mb-6"
          >
            Autism Assessments{" "}
            <em className="italic text-orange-500">&amp; Evaluation</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[560px] mx-auto"
          >
            At Autism Violet, we provide comprehensive autism assessments to
            understand each child's unique needs and create personalized therapy
            plans for long-term development.
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
                src={assessImg}
                alt="Autism assessment session"
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
                Understanding Your{" "}
                <em className="italic text-orange-500">Child's Needs</em>
              </h2>
              <p className="text-[#5a4e72] text-[15px] leading-relaxed">
                Autism Violet focuses on accurate and detailed assessments to identify each child's strengths and areas for growth. This helps us design effective therapy plans that lead to meaningful and measurable progress.
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
              Start with a Professional{" "}
              <em className="italic text-orange-300">Assessment</em>
            </h2>

            <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mx-auto mb-8">
              Book a detailed autism assessment with Autism Violet and get a clear
              roadmap for your child's development and success.
            </p>

            <a
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#7C3AED] hover:bg-orange-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
            >
              Book Assessment
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

export default Assessments;