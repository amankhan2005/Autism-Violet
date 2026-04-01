import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >

          {/* Title */}
          <h2 className="heading text-3xl mb-4">
            Ready to Start Your Child’s Journey?
          </h2>

          {/* Content */}
          <p className="subtext mb-8">
            Let’s work together to unlock your child’s full potential with
            personalized, compassionate care.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/contact"
              className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Contact Us
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-full border hover:bg-gray-100 transition"
            >
              Schedule Assessment
            </Link>

          </div>

        </motion.div>

      </Container>
    </section>
  );
};

export default CTA;