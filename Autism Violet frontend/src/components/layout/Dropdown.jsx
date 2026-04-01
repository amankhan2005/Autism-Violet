import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Dropdown = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="absolute top-10 left-0 w-72 bg-white rounded-2xl shadow-xl p-4"
        >
          <div className="flex flex-col gap-4 text-sm">

            <Link to="/services" className="group">
              <p className="font-medium group-hover:text-primary">
                All Services
              </p>
              <span className="text-light text-xs">
                View complete therapy programs
              </span>
            </Link>

            <Link to="/services#early" className="group">
              <p className="font-medium group-hover:text-primary">
                Early Intervention
              </p>
              <span className="text-light text-xs">
                Build strong foundations early
              </span>
            </Link>

            <Link to="/services#school" className="group">
              <p className="font-medium group-hover:text-primary">
                School Readiness
              </p>
              <span className="text-light text-xs">
                Prepare for structured learning
              </span>
            </Link>

            <Link to="/services#home" className="group">
              <p className="font-medium group-hover:text-primary">
                In-Home ABA Therapy
              </p>
              <span className="text-light text-xs">
                Real-world environment learning
              </span>
            </Link>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;