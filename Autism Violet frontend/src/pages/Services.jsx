import { motion } from "framer-motion";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServicesList from "../components/services/ServicesList";

const Services = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="py-24 text-center">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading"
          >
            ABA Therapy Services for Children with Autism
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="subtext max-w-3xl mx-auto"
          >
            Our personalized ABA therapy programs are designed to improve
            communication, behavior, and independence—helping children achieve
            meaningful, long-term success.
          </motion.p>
        </Container>
      </section>

      {/* INTRO + IMAGE */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGE 1 */}
            <motion.img
              src="/images/services/aba-therapy.jpg"
              alt="ABA therapy session helping child with autism"
              className="rounded-2xl w-full h-80 object-cover"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            />

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="heading text-3xl mb-4">
                Personalized Autism Therapy Services
              </h2>
              <p className="subtext">
                At Autism Violet, we offer evidence-based ABA therapy tailored
                to each child’s unique strengths and challenges. Our goal is to
                help children develop essential life skills, improve behavior,
                and build confidence in everyday situations.
              </p>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20">
        <Container>

          <SectionTitle
            title="Our Services"
            subtitle="Customized ABA therapy programs designed for long-term success."
          />

          <ServicesList />

        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="heading text-3xl text-center mb-12">
            Why Choose Our ABA Therapy Services?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-light">
            <ul className="space-y-4">
              <li>✔ Personalized therapy plans</li>
              <li>✔ Certified ABA professionals (BCBAs & RBTs)</li>
              <li>✔ Evidence-based treatment approach</li>
              <li>✔ Focus on real-life skill development</li>
            </ul>

            <ul className="space-y-4">
              <li>✔ In-home & structured therapy options</li>
              <li>✔ Family involvement & guidance</li>
              <li>✔ Continuous progress tracking</li>
              <li>✔ Compassionate care environment</li>
            </ul>
          </div>
        </Container>
      </section>

      {/* IMAGE 2 + CTA */}
      <section className="py-20 text-center">
        <Container>

          {/* IMAGE 2 */}
          <img
            src="/images/services/autism-learning.jpg"
            alt="child learning communication skills through ABA therapy"
            className="rounded-2xl mx-auto w-full max-w-3xl h-80 object-cover mb-8"
          />

          <h2 className="heading text-3xl mb-4">
            Start Your Child’s Progress Journey Today
          </h2>

          <p className="subtext mb-6 max-w-2xl mx-auto">
            Our expert team is here to guide your child toward independence,
            confidence, and success through personalized ABA therapy.
          </p>

          <button className="btn-primary">
            Book a Free Consultation
          </button>

        </Container>
      </section>

    </div>
  );
};

export default Services;