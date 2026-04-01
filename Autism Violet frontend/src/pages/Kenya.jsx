import { motion } from "framer-motion";
import kenyaFlag from "../assets/images/kenya.avif";

const Kenya = () => {
  return (
    <div className="section bg-white flex items-center justify-center text-center min-h-[70vh]">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl px-4"
      >

        {/* FLAG */}
        <div className="flex justify-center mb-6">
          <img
            src={kenyaFlag}
            alt="Kenya Flag"
            className="w-80 h-40 object-cover rounded-md shadow"
          />
        </div>

        {/* Title */}
        <h1 className="heading mb-4">
          Autism Violet — Kenya
        </h1>

        {/* Message */}
        <p className="subtext mb-6">
          Our Services Available In Kenya Soon..!
        </p>

        <p className="subtext mb-8">
          For more information, contact our team in Kenya.
        </p>

        {/* Contact Card */}
        <div className="border rounded-2xl p-6 shadow-sm bg-gray-50">
          <p className="font-semibold mb-2">Josh</p>
          <p className="text-lg text-[#4B2C73] font-medium">
            +254-796-142092
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default Kenya;