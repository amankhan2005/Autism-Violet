import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const sections = [
  {
    number: "01",
    title: "No Sharing of Mobile Information with Third Parties",
    body: "We do not share any mobile information, including phone numbers, with third parties or affiliates for marketing or promotional purposes. Your data is used only to improve services such as scheduling updates, reminders, and support.",
    accent: "#7C3AED",
  },
  {
    number: "02",
    title: "Text Messaging Consent Privacy",
    body: "When you opt-in to receive SMS communications, your consent is used solely by Autism Violet. This data is never shared with third parties or affiliates under any circumstances.",
    accent: "#F97316",
  },
  {
    number: "03",
    title: "Data Security",
    body: "We implement strict security measures to protect your information from unauthorized access, misuse, or disclosure.",
    accent: "#7C3AED",
  },
  {
    number: "04",
    title: "Limited Use of Mobile Information",
    body: null,
    list: ["Event scheduling", "Service reminders", "Customer support notifications", "Operational updates"],
    footer: "Your information will never be used for marketing without your explicit consent.",
    accent: "#F97316",
  },
  {
    number: "05",
    title: "Reviewing and Updating Consent",
    body: "You can withdraw or update your SMS consent at any time by contacting our support team.",
    accent: "#7C3AED",
  },
  {
    number: "06",
    title: "Changes to This Policy",
    body: "We may update this policy from time to time. Please review it periodically to stay informed.",
    accent: "#F97316",
  },
];

const PrivacyPolicy = () => {
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

  const hoverShadow = dark
    ? "0 8px 32px -8px rgba(124,58,237,0.25)"
    : "0 8px 32px -8px rgba(124,58,237,0.12)";

  return (
    <div 
      className="py-24 px-4"
      style={{ background: colors.bg, transition: "background 0.3s" }}
    >
      <div className="max-w-4xl mx-auto">

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
        >

          {/* ── HERO ── */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <p
              className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: colors.primary }}
            >
              Legal
            </p>
            <h1
              className="font-playfair text-4xl md:text-6xl font-bold leading-[1.15] mb-6"
              style={{ color: colors.text, transition: "color 0.3s" }}
            >
              Privacy{" "}
              <em className="italic" style={{ color: colors.accent }}>Policy</em>
            </h1>
            <p
              className="text-[15px] leading-relaxed max-w-[560px] mx-auto"
              style={{ color: colors.textMid, transition: "color 0.3s" }}
            >
              At Autism Violet, we are committed to protecting the privacy and
              confidentiality of our customers' personal information. This policy
              explains how we handle mobile information and text messaging consent.
            </p>
            <div
              className="w-10 h-0.5 rounded-full mx-auto mt-8"
              style={{ background: colors.statDiv, transition: "background 0.3s" }}
            />
          </motion.div>

          {/* ── SECTIONS GRID ── */}
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 gap-5 mb-12"
          >
            {sections.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: hoverShadow }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300"
                style={{
                  background: colors.card,
                  border: `1px solid ${colors.border}`,
                  transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-300 group-hover:h-[4px]"
                  style={{ backgroundColor: item.accent }}
                />

                {/* ghost number */}
                <span
                  className="font-playfair text-[52px] font-bold leading-none mb-4 block"
                  style={{ color: item.accent, opacity: 0.1 }}
                >
                  {item.number}
                </span>

                <div className="pl-4 border-l-2" style={{ borderColor: item.accent }}>
                  <h2
                    className="font-semibold text-[15px] leading-snug mb-3"
                    style={{ color: colors.text, transition: "color 0.3s" }}
                  >
                    {item.title}
                  </h2>

                  {item.body && (
                    <p
                      className="text-[13.5px] leading-relaxed"
                      style={{ color: colors.muted, transition: "color 0.3s" }}
                    >
                      {item.body}
                    </p>
                  )}

                  {item.list && (
                    <ul className="space-y-2 mb-3">
                      {item.list.map((li, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-2 text-[13.5px]"
                          style={{ color: colors.muted, transition: "color 0.3s" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: item.accent }}
                          />
                          {li}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.footer && (
                    <p
                      className="text-[13px] leading-relaxed mt-2 italic"
                      style={{ color: colors.muted, transition: "color 0.3s" }}
                    >
                      {item.footer}
                    </p>
                  )}
                </div>

                {/* dot indicator */}
                <div
                  className="absolute bottom-5 right-5 w-2 h-2 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundColor: item.accent }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* ── CONTACT CARD ── */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl p-10 overflow-hidden text-center"
            style={{
              background: dark ? "#120a2e" : "#643C85",
              transition: "background 0.3s",
            }}
          >
            {/* decorative rings */}
            {[400, 580, 760].map((size, i) => (
              <div
                key={i}
                className="hidden md:block absolute rounded-full border border-white/[0.08] pointer-events-none -translate-x-1/2 left-1/2"
                style={{ width: size, height: size, top: -(size * 0.38) }}
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

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Contact Us
              </div>

              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
                Questions about your{" "}
                <em className="italic text-orange-300">privacy?</em>
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:info@autismviolet.com"
                  className="inline-flex items-center gap-2 bg-white text-[#7C3AED] hover:bg-orange-50 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="14" height="10" rx="2" />
                    <path d="M1 5l7 5 7-5" />
                  </svg>
                  info@autismviolet.com
                </a>
                
                <a
                  href="tel:+16174672342"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
                >
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 2.5C2 2.5 4 1 5 3l1 2c.5 1 0 1.5-.5 2C4.5 8 4 9 7 12s4 2.5 5 1.5c.5-.5 1-1 2-.5l2 1c2 1 .5 3 .5 3-1 1-4 2-8-2S1 3.5 2 2.5z" />
                  </svg>
                  +1 (617) 467-2342
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;