import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-24">
      <Container>

        {/* Section Title */}
        <SectionTitle 
          title="Welcome to Autism Violet"
          subtitle="We believe every child has the potential to grow, learn, and succeed."
        />

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-light leading-relaxed">
              At Autism Violet, our experienced team provides personalized ABA therapy 
              tailored to each child’s unique strengths and needs. We focus on building 
              communication, independence, and confidence through structured care.
            </p>

            <p className="text-light mt-4 leading-relaxed">
              We combine evidence-based practices with genuine compassion—supporting 
              not just children, but families throughout their journey.
            </p>
          </motion.div>

          {/* Image / Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-72 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-light">Image Placeholder</span>
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default About;