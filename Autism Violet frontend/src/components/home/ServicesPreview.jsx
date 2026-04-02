import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { useTheme } from "../../context/ThemeContext";

const services = [
  {
    number: "01",
    title: "Early Intervention",
    desc: "Building strong communication and behavioral foundations during the most critical window of development.",
    link: "/services#early",
    tag: "Ages 2–5",
  },
  {
    number: "02",
    title: "School Readiness",
    desc: "Equipping children with the social, emotional, and learning skills they need to thrive in a classroom.",
    link: "/services#school",
    tag: "Ages 4–7",
  },
  {
    number: "03",
    title: "In-Home ABA Therapy",
    desc: "Personalized therapy delivered in real-life environments where skills are practiced and generalized naturally.",
    link: "/services#home",
    tag: "All ages",
  },
];

const ServicesPreview = () => {
  const { dark } = useTheme();

  // ✅ DESIGN SYSTEM COLORS
  const colors = {
    bg: dark ? "#000" : "#fff",
    card: dark ? "#0f0f0f" : "#faf9ff",
    border: dark ? "#1f1f1f" : "#EDE7F6",
    text: dark ? "#fff" : "#1a0a3b",
    muted: dark ? "#bbb" : "#7b6fa0",
    primary: "#7C3AED",
    accent: "#F97316",
  };

  return (
    <section
      className="py-20 md:py-28 transition-colors duration-300"
      style={{ background: colors.bg }}
    >
      <Container>

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: colors.primary }}
          >
            What We Offer
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-playfair text-4xl md:text-5xl font-bold leading-[1.15] max-w-[440px]"
              style={{ color: colors.text }}
            >
              Programs built for{" "}
              <em className="italic text-orange-500">every stage</em>
            </h2>

            <p
              className="text-[15px] leading-relaxed max-w-[320px] md:text-right"
              style={{ color: colors.muted }}
            >
              Personalized support from early childhood through school — wherever your child is in their journey.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative rounded-2xl p-8 transition-all duration-300 flex flex-col"
              style={{
                background: colors.card,
                border: `1px solid ${colors.border}`,
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-playfair text-[44px] font-bold leading-none"
                  style={{
                    color: colors.primary,
                    opacity: dark ? 0.25 : 0.13,
                  }}
                >
                  {service.number}
                </span>

                <span
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                  style={{
                    color: colors.primary,
                    background: dark ? "#1a1a1a" : "#EDE7F6",
                  }}
                >
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div
                className="pl-4 border-l-2 flex-1"
                style={{ borderColor: colors.accent }}
              >
                <h3
                  className="font-semibold text-[16px] leading-snug mb-3"
                  style={{ color: colors.text }}
                >
                  {service.title}
                </h3>

                <p
                  className="text-[13.5px] leading-relaxed"
                  style={{ color: colors.muted }}
                >
                  {service.desc}
                </p>
              </div>

              {/* Link */}
              <div className="mt-8 flex items-center gap-2">
                <Link
                  to={service.link}
                  className="text-[13px] font-semibold flex items-center gap-1.5 transition"
                  style={{ color: colors.primary }}
                >
                  Learn more
                  <svg
                    className="w-3.5 h-3.5 group-hover:translate-x-1 transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Dot */}
              <div
                className="absolute bottom-5 right-5 w-2 h-2 rounded-full transition-opacity duration-300"
                style={{
                  background: colors.accent,
                  opacity: dark ? 0.4 : 0.2,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          <p style={{ color: colors.muted }} className="text-[13px]">
            Not sure which program fits? We'll guide you.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/services"
              className="text-[13px] font-semibold flex items-center gap-1.5"
              style={{ color: colors.primary }}
            >
              View all services
            </Link>

            <Link
              to="/contact-us"
              className="text-white text-[13px] font-semibold px-6 py-3 rounded-full transition"
              style={{
                background: dark ? "#7C3AED" : "#1a0a3b",
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default ServicesPreview;