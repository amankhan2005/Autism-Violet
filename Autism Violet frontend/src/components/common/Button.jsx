import { motion } from "framer-motion";

const Button = ({ children, className = "", ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`bg-primary text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;