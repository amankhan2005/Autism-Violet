import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { useTheme } from "../../context/ThemeContext";

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
  const { dark } = useTheme();

  const bg        = dark ? "#1a0a2e" : "#643C85";
  const ringColor = dark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.08)";
  const badgeBg   = dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.10)";
  const badgeBorder = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.20)";
  const badgeText = dark ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.80)";
  const headingColor  = "#ffffff";
  const emColor       = dark ? "#fda46a" : "#fdba74"; // orange-300 equivalent, slightly richer in dark
  const subCopyColor  = dark ? "rgba(255,255,255,0.50)" : "rgba(255,255,255,0.65)";
  const btnBg         = dark ? "rgba(255,255,255,0.92)" : "#ffffff";
  const btnText       = dark ? "#5b21b6" : "#7C3AED";
  const btnHoverBg    = dark ? "rgba(255,237,213,0.95)" : "#fff7ed";
  const trustColor    = dark ? "rgba(255,255,255,0.40)" : "rgba(255,255,255,0.50)";
  const trustDivider  = dark ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.15)";

  return (
    <section
      className="relative py-16 md:py-28 overflow-hidden transition-colors duration-300"
      style={{ background: bg }}
    >
      {[500, 740, 980].map((size, i) => (
        <div
          key={i}
          className="hidden md:block absolute rounded-full pointer-events-none -translate-x-1/2 left-1/2"
          style={{
            width: size,
            height: size,
            top: -(size * 0.36),
            border: `1px solid ${ringColor}`,
          }}
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
          <div
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6 transition-colors duration-300"
            style={{
              background: badgeBg,
              border: `1px solid ${badgeBorder}`,
              color: badgeText,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: badgeText }}
            />
            Free initial consultation
          </div>

          {/* Heading */}
          <h2
            className="font-playfair text-[clamp(26px,6vw,42px)] font-bold leading-[1.2] tracking-tight mb-4 transition-colors duration-300"
            style={{ color: headingColor }}
          >
            Ready to start your child's{" "}
            <em className="italic" style={{ color: emColor }}>
              journey to independence?
            </em>
          </h2>

          {/* Sub-copy */}
          <p
            className="text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mx-auto mb-8 transition-colors duration-300"
            style={{ color: subCopyColor }}
          >
            Let's build a personalized care plan together. Compassionate,
            science-backed ABA therapy — starting with a free family assessment.
          </p>

          {/* CTA button */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10 px-4 sm:px-0">
            <Link
              to="/contact-us?type=assessment"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px w-full sm:w-auto"
              style={{ background: btnBg, color: btnText }}
              onMouseEnter={e => (e.currentTarget.style.background = btnHoverBg)}
              onMouseLeave={e => (e.currentTarget.style.background = btnBg)}
            >
              Book a free assessment
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:flex-wrap gap-y-2 sm:gap-y-0">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 text-[12px] px-4 py-1.5 sm:py-1 w-full sm:w-auto justify-center sm:justify-start transition-colors duration-300"
                style={{
                  color: trustColor,
                  borderTop: i > 0 ? `1px solid ${trustDivider}` : undefined,
                  borderLeft: undefined, // handled below via className
                }}
              >
                <span style={{ opacity: 0.5, flexShrink: 0 }}>{item.icon}</span>
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