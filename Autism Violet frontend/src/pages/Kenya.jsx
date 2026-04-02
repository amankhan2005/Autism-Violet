import { motion } from "framer-motion";
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
  return (
    <div className="bg-[#faf9ff] min-h-[70vh] flex items-center justify-center py-20 px-4">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-[480px] w-full text-center"
      >

        {/* ── SECTION TAG ── */}
        <motion.p
          variants={fadeUp}
          className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-6"
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
              style={{ boxShadow: "0 4px 24px rgba(26,10,59,0.12)" }}
            />
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white text-[11px] font-semibold tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
              Kenya
            </div>
          </div>
        </motion.div>

        {/* ── HEADING ── */}
        <motion.h1
          variants={fadeUp}
          className="font-playfair text-4xl md:text-5xl font-bold text-[#6A3FA0] leading-[1.15] mb-5 mt-4"
        >
          Autism Violet —{" "}
          <em className="italic text-orange-500">Kenya</em>
        </motion.h1>

        {/* ── SUBTEXT ── */}
        <motion.p variants={fadeUp} className="text-[#5a4e72] text-[15px] leading-relaxed mb-3">
          Our Services Available In Kenya Soon..!
        </motion.p>

        <motion.p variants={fadeUp} className="text-[#5a4e72] text-[15px] leading-relaxed mb-8">
          For more information, contact our team in Kenya.
        </motion.p>

        {/* ── DIVIDER ── */}
        <motion.div
          variants={fadeUp}
          className="w-10 h-0.5 bg-[#DDD6FE] rounded-full mx-auto mb-8"
        />

        {/* ── CONTACT CARD ── */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="relative bg-white border border-[#EDE7F6] rounded-2xl p-7 overflow-hidden hover:border-[#DDD6FE] hover:shadow-[0_8px_32px_-8px_rgba(124,58,237,0.12)] transition-all duration-300"
        >
          {/* top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#7C3AED] rounded-t-2xl" />

          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-[#EDE7F6] border-2 border-[#DDD6FE] flex items-center justify-center mx-auto mb-4 text-[15px] font-semibold text-[#5b21b6]">
            J
          </div>

          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#7b6fa0] mb-1">
            Kenya contact
          </p>

          <p className="text-[16px] font-semibold text-[#1a0a3b] mb-3">
            Josh
          </p>

          <div className="pl-4 border-l-2 border-[#7C3AED] inline-block text-left">
            <a
              href="tel:+254796142092"
              className="text-[18px] font-semibold text-[#7C3AED] tracking-wide hover:text-orange-500 transition-colors duration-200"
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