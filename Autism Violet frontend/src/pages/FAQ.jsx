import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import { Link } from "react-router-dom";
const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "98%", label: "Family Satisfaction" },
  { value: "12+", label: "Years Experience" },
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
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#faf9ff]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-24 text-center">
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-5"
          >
            Got Questions?
          </motion.p>

          {/* font-playfair (not font-display) — consistent with About & Services */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold text-[#1a0a3b] leading-[1.15] mb-6"
          >
            Your Questions,{" "}
            <em className="italic text-orange-500">Answered</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[520px] mx-auto mb-10"
          >
            Learn more about autism, ABA therapy, and how Autism Violet supports
            children and families through personalized care.
          </motion.p>

          {/* Stats strip — matches About & Services hero */}
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

      {/* ── FAQ LIST ──────────────────────────────────────────── */}
      <section className="pb-20">
        <Container>
          <div className="max-w-[780px] mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-3"
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="group bg-white border border-[#EDE7F6] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#DDD6FE]"
                    style={{
                      boxShadow: isOpen
                        ? "0 8px 32px -8px rgba(124,58,237,0.10)"
                        : "none",
                    }}
                  >
                    {/* Top accent bar — visible when open */}
                    <div
                      className="h-[3px] w-full transition-all duration-300"
                      style={{
                        backgroundColor: faq.accent,
                        opacity: isOpen ? 1 : 0,
                      }}
                    />

                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left flex justify-between items-center gap-4 px-6 py-5"
                    >
                      {/* font-playfair for question — consistent with value card titles */}
                      <span
                        className="font-playfair font-semibold text-[16px] leading-snug transition-colors duration-200"
                        style={{ color: isOpen ? faq.accent : "#1a0a3b" }}
                      >
                        {faq.question}
                      </span>

                      {/* +/− icon */}
                      <span
                        className="flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200"
                        style={{
                          borderColor: isOpen ? faq.accent : "#DDD6FE",
                          backgroundColor: isOpen
                            ? faq.accent === "#7C3AED"
                              ? "#EDE7F6"
                              : "#FFF3E8"
                            : "transparent",
                          color: isOpen ? faq.accent : "#7b6fa0",
                        }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          style={{
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        >
                          <path
                            d="M6 1v10M1 6h10"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
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
                          className="overflow-hidden"
                        >
                          {/* Left border accent — matches value card pattern */}
                          <div
                            className="mx-6 mb-5 pl-4 border-l-2"
                            style={{ borderColor: faq.accent }}
                          >
                            <p className="text-[#5a4e72] text-[14px] leading-relaxed">
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

            {/* font-playfair + em italic — consistent CTA heading pattern */}
            <h2 className="font-playfair text-[clamp(26px,6vw,42px)] font-bold text-white leading-[1.2] tracking-tight mb-4">
              Still have{" "}
              <em className="italic text-orange-300">questions?</em>
            </h2>

            <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mx-auto mb-8">
              Our team is here to help you understand your child's needs and
              guide you forward.
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

export default FAQ;