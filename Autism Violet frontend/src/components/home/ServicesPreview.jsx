import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const services = [
  {
    title: "Early Intervention",
    desc: "Building strong communication and behavioral foundations in early years.",
    link: "/services#early",
  },
  {
    title: "School Readiness",
    desc: "Preparing children with social and learning skills for school success.",
    link: "/services#school",
  },
  {
    title: "In-Home ABA Therapy",
    desc: "Personalized therapy delivered in real-life environments.",
    link: "/services#home",
  },
];

const ServicesPreview = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <Container>

        {/* Title */}
        <SectionTitle 
          title="Our Services"
          subtitle="Personalized programs designed to support every stage of your child’s journey."
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border rounded-2xl p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-light text-sm mb-4">
                {service.desc}
              </p>

              <Link
                to={service.link}
                className="text-primary text-sm font-medium"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}

        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            View All Services
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default ServicesPreview;