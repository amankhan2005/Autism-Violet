import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import kenyaFlag from "../assets/images/kenya.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const Kenya = () => {
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

  const hoverShadow = dark
    ? "0 8px 32px -8px rgba(124,58,237,0.25)"
    : "0 8px 32px -8px rgba(124,58,237,0.12)";

  const avatarBg = dark ? "rgba(124,58,237,0.2)" : "#EDE7F6";
  const avatarBorder = dark ? "rgba(124,58,237,0.3)" : "#DDD6FE";
  const avatarText = dark ? "#a78bfa" : "#5b21b6";

  return (
    <div 
      className="min-h-[70vh] flex items-center justify-center py-20 px-4"
      style={{ background: colors.bg, transition: "background 0.3s" }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-[480px] w-full text-center"
      >

        {/* ── SECTION TAG ── */}
        <motion.p
          variants={fadeUp}
          className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: colors.primary }}
        >
          Family Support
        </motion.p>

        {/* ── FLAG ── */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="relative">
            <img
              src={kenyaFlag}
              alt="Kenya Flag"
              className="w-80 h-44 object-cover rounded-2xl"
              style={{ boxShadow: badgeShadow, transition: "box-shadow 0.3s" }}
            />
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white text-[11px] font-semibold tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
              Kenya
            </div>
          </div>
        </motion.div>

        {/* ── HEADING ── */}
        <motion.h1
          variants={fadeUp}
          className="font-playfair text-4xl md:text-5xl font-bold leading-[1.15] mb-5 mt-4"
          style={{ color: colors.text, transition: "color 0.3s" }}
        >
          Autism Violet —{" "}
          <em className="italic" style={{ color: colors.accent }}>Kenya</em>
        </motion.h1>

        {/* ── SUBTEXT ── */}
        <motion.p 
          variants={fadeUp} 
          className="text-[15px] leading-relaxed mb-3"
          style={{ color: colors.textMid, transition: "color 0.3s" }}
        >
          Our Services Available In Kenya Soon..!
        </motion.p>

        <motion.p 
          variants={fadeUp} 
          className="text-[15px] leading-relaxed mb-8"
          style={{ color: colors.textMid, transition: "color 0.3s" }}
        >
          For more information, contact our team in Kenya.
        </motion.p>

        {/* ── DIVIDER ── */}
        <motion.div
          variants={fadeUp}
          className="w-10 h-0.5 rounded-full mx-auto mb-8"
          style={{ background: colors.statDiv, transition: "background 0.3s" }}
        />

        {/* ── CONTACT CARD ── */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5, boxShadow: hoverShadow }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="relative rounded-2xl p-7 overflow-hidden transition-all duration-300"
          style={{
            background: colors.card,
            border: `1px solid ${colors.border}`,
            transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          }}
        >
          {/* top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#7C3AED] rounded-t-2xl" />

          {/* Avatar */}
          <div
            className="w-11 h-11 rounded-full border-2 flex items-center justify-center mx-auto mb-4 text-[15px] font-semibold"
            style={{
              background: avatarBg,
              borderColor: avatarBorder,
              color: avatarText,
              transition: "all 0.3s",
            }}
          >
            J
          </div>

          <p
            className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1"
            style={{ color: colors.muted, transition: "color 0.3s" }}
          >
            Kenya contact
          </p>

          <p
            className="text-[16px] font-semibold mb-3"
            style={{ color: colors.text, transition: "color 0.3s" }}
          >
            Josh
          </p>

          <div className="pl-4 border-l-2 border-[#7C3AED] inline-block text-left">
            <a
              href="tel:+254796142092"
              className="text-[18px] font-semibold tracking-wide"
              style={{ color: colors.primary, transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.primary)}
            >
              +254-796-142092
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Kenya;