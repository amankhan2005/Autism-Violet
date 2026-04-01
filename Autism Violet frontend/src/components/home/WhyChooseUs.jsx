import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { fadeUp, staggerContainer } from "../../utils/animations";

const data = [
  {
    title: "Personalized Therapy Plans",
    desc: "Each child receives a customized program tailored to their development.",
  },
  {
    title: "Certified Experts",
    desc: "Highly trained BCBAs and RBTs ensuring quality care.",
  },
  {
    title: "Family-Centered Approach",
    desc: "Empowering parents with tools and continuous support.",
  },
  {
    title: "Proven ABA Methods",
    desc: "Science-backed strategies for measurable progress.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <Container>

        <SectionTitle
          title="Why Families Trust Autism Violet"
          subtitle="We focus on personalized care, expert support, and proven methods."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {data.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-light text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </motion.div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;