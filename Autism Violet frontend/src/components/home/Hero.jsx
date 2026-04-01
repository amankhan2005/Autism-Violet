import { motion } from "framer-motion";
import Button from "../common/Button";
import Container from "../common/Container";
import { fadeUp } from "../../utils/animations";

const Hero = () => {
  return (
<section className="section text-center bg-gradient-to-b from-white to-purple-50">
          <Container>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-primary font-medium mb-4"
        >
          Supporting Every Unique Mind
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="heading max-w-3xl mx-auto"
        >
          Empowering Every Child with Autism to Thrive
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="subtext max-w-2xl mx-auto"
        >
          Science-backed ABA therapy delivered with compassion—helping children
          build skills, confidence, and independence every single day.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mt-8 flex-wrap"
        >
          <Button>Get Started</Button>

          <button className="px-6 py-3 rounded-full border hover:bg-gray-100 transition">
            Book a Consultation
          </button>
        </motion.div>

      </Container>
    </section>
  );
};

export default Hero;