import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
    >
      {/* Icon */}
      <div className="text-3xl mb-4 text-primary">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-light text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;