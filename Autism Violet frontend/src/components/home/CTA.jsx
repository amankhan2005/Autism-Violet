import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const trustItems = [
  {
    label: "Certified BCBAs & RBTs",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8 2l1.5 4h4l-3.25 2.4 1.25 4L8 10 4.5 12.4l1.25-4L2.5 6H6.5L8 2z" />
      </svg>
    ),
  },
  {
    label: "500+ children supported",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="8" cy="8" r="6.5" />
        <path d="M5.5 8l2 2 3.5-3.5" />
      </svg>
    ),
  },
  {
    label: "98% family satisfaction",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3L5 9 1 6h5L8 1z" />
      </svg>
    ),
  },
];

const CTA = () => {
  return (
    <section className="relative bg-[#643C85] py-16 md:py-28 overflow-hidden">

      {/* Concentric ring decorations — hidden on mobile to avoid clipping artifacts */}
      {[500, 740, 980].map((size, i) => (
        <div
          key={i}
          className="hidden md:block absolute rounded-full border border-white/[0.08] pointer-events-none -translate-x-1/2 left-1/2"
          style={{ width: size, height: size, top: -(size * 0.36) }}
        />
      ))}

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative z-10 max-w-[600px] mx-auto text-center px-2"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            Free initial consultation
          </div>

          {/* Heading */}
          <h2 className="font-playfair text-[clamp(26px,6vw,42px)] font-bold text-white leading-[1.2] tracking-tight mb-4">
            Ready to start your child's{" "}
            <em className="italic text-orange-300">journey to independence?</em>
          </h2>

          {/* Sub-copy */}
          <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mx-auto mb-8">
            Let's build a personalized care plan together. Compassionate,
            science-backed ABA therapy — starting with a free family assessment.
          </p>

          {/* CTAs — stack on mobile, row on md+ */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10 px-4 sm:px-0">
            <Link
              to="/contact?type=assessment"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#7C3AED] hover:bg-orange-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px w-full sm:w-auto"
            >
              Book a free assessment
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

            <Link
              to="/contact?type=call"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-px w-full sm:w-auto"
            >
              <svg className="w-3.5 h-3.5 opacity-60 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="3" width="12" height="11" rx="1.5" />
                <path d="M5 1v4M11 1v4M2 7h12" />
              </svg>
              Schedule a call
            </Link>
          </div>

          {/* Trust signals — stack vertically on mobile, row on md+ */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:flex-wrap gap-y-2 sm:gap-y-0">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-1.5 text-white/50 text-[12px] px-4 py-1.5 sm:py-1
                  ${i > 0 ? "sm:border-l sm:border-white/15" : ""}
                  ${i > 0 ? "border-t border-white/10 sm:border-t-0 w-full sm:w-auto justify-center sm:justify-start" : "w-full sm:w-auto justify-center sm:justify-start"}
                `}
              >
                <span className="opacity-50 flex-shrink-0">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>

        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;