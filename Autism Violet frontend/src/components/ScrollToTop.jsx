import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop({ threshold = 250 }) {
  const [visible, setVisible] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > threshold);
      setScrollPct(total > 0 ? Math.min(scrolled / total, 1) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const size = 52;
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = circumference * scrollPct;

  return (
    <div
      style={{ position: "fixed", right: "1.5rem", bottom: "1.5rem", zIndex: 9999 }}
      aria-hidden={!visible}
    >
      <AnimatePresence>
        {visible && (
          <motion.button
            key="scroll-btn"
            onClick={handleClick}
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            style={{
              width: size,
              height: size,
              borderRadius: "50%",
              background: "white",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxShadow: "0 4px 24px rgba(124,58,237,0.18)",
              padding: 0,
            }}
          >
            {/* progress ring */}
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              style={{ position: "absolute", top: 0, left: 0, transform: "rotate(-90deg)" }}
            >
              {/* track */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#EDE7F6"
                strokeWidth="2.5"
              />
              {/* progress */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#7C3AED"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={`${strokeDash} ${circumference}`}
                style={{ transition: "stroke-dasharray 0.1s linear" }}
              />
            </svg>

            {/* icon */}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ position: "relative", zIndex: 1 }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M3 10l5-5 5 5" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}