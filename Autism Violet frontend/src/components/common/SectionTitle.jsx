import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="heading text-3xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <p className="subtext max-w-2xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;