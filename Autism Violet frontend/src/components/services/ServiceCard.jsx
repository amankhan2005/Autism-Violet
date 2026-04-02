import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

const ServiceCard = ({ icon, title, description, accent = "#7C3AED" }) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative bg-white rounded-2xl p-7 border border-[#EDE7F6] hover:border-[#DDD6FE] hover:shadow-[0_8px_32px_-8px_rgba(124,58,237,0.12)] transition-all duration-300 overflow-hidden"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-300 group-hover:h-[4px]"
        style={{ backgroundColor: accent }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 text-[20px]"
        style={{ backgroundColor: `${accent}18` }}
      >
        {icon}
      </div>

      {/* Left rule + text */}
      <div className="pl-4 border-l-2" style={{ borderColor: accent }}>
        <h3 className="font-semibold text-[#1a0a3b] text-[16px] leading-snug mb-3">
          {title}
        </h3>
        <p className="text-[#7b6fa0] text-[13.5px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Corner dot */}
      <div
        className="absolute bottom-5 right-5 w-2 h-2 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"
        style={{ backgroundColor: accent }}
      />
    </motion.div>
  );
};

export default ServiceCard;