import { motion } from "framer-motion";
import Container from "../common/Container";
import { fadeUp } from "../../utils/animations";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "98%", label: "Family Satisfaction" },
  { value: "12+", label: "Years Experience" },
];

const Hero = () => {
  const { dark } = useTheme();

  // ✅ DESIGN SYSTEM COLORS
  const colors = {
    bg: dark ? "#000" : "#faf9ff",
    text: dark ? "#fff" : "#1a0a3b",
    muted: dark ? "#bbb" : "#7b6fa0",
    border: dark ? "#1f1f1f" : "#DDD6FE",
  };

  return (
    <section
      className="relative overflow-hidden py-16 transition-colors duration-300"
      style={{ background: colors.bg }}
    >
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-10 min-h-[440px]">

          {/* LEFT */}
          <div className="text-center md:text-left z-10">

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-8xl font-bold leading-[1.18] mb-5"
              style={{ color: colors.text }}
            >
              Empowering Every Child with Autism to{" "}
              <em className="italic text-orange-500">Thrive</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="text-[15px] leading-relaxed mt-4 max-w-[440px] mx-auto md:mx-0"
              style={{ color: colors.muted }}
            >
              Science-backed ABA therapy delivered with compassion — helping
              children build skills, confidence, and independence every single day.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="flex gap-3 mt-8 flex-wrap justify-center md:justify-start"
            >
              <Link to="/about-us">
                <button className="bg-orange-500 hover:bg-[#6D28D9] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition">
                  Know More
                </button>
              </Link>

              <Link to="/contact-us">
                <button
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition"
                  style={{
                    border: `1.5px solid ${dark ? "#9b6dff" : "#7C3AED"}`,
                    color: dark ? "#c4a5ff" : "#7C3AED",
                  }}
                >
                  Book a Consultation
                </button>
              </Link>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.4 }}
              className="flex gap-6 mt-8 pt-6 justify-center md:justify-start"
              style={{ borderTop: `1px solid ${colors.border}` }}
            >
              {stats.map((s, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div>
                    <p
                      className="font-playfair text-2xl font-bold"
                      style={{ color: colors.text }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ color: colors.muted }}
                    >
                      {s.label}
                    </p>
                  </div>

                  {i < stats.length - 1 && (
                    <div
                      className="w-px self-stretch"
                      style={{ background: colors.border }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-full min-h-[420px]">
            <motion.img
              src="/images/hero/child.png"
              alt="Child receiving ABA therapy"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute right-0 top-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </Container>

      {/* SCROLL */}
      <div
        className="absolute bottom-5 left-12 flex items-center gap-2 text-[11px]"
        style={{ color: colors.muted }}
      >
        <span className="text-[10px]">•</span>
        <span>Scroll</span>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ border: `1px solid ${colors.border}` }}
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke={colors.muted}
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;