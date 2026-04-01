import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="container-custom py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading"
        >
          Welcome to Autism Violet
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="subtext max-w-2xl mx-auto"
        >
          We believe every child has the potential to grow, learn, and succeed.
          Our mission is to empower children with autism through personalized,
          evidence-based therapy delivered with compassion.
        </motion.p>
      </section>

      {/* MISSION */}
      <section className="container-custom py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-3xl">Our Mission</h2>
          <p className="subtext">
            At Autism Violet, our mission is to provide high-quality ABA therapy
            tailored to each child’s unique needs. We focus on building
            communication, independence, and confidence through structured and
            compassionate care.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-100 h-64 rounded-2xl"></div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="container-custom py-20">
        <h2 className="heading text-center text-3xl mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Compassion",
              desc: "We treat every child with empathy, patience, and respect.",
            },
            {
              title: "Excellence",
              desc: "We deliver high-quality, evidence-based therapy.",
            },
            {
              title: "Growth",
              desc: "We focus on continuous progress and development.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl shadow-sm border"
            >
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="container-custom py-20 text-center">
        <h2 className="heading text-3xl mb-6">Our Team</h2>
        <p className="subtext max-w-2xl mx-auto">
          Our team includes certified BCBAs and trained professionals dedicated
          to helping children achieve meaningful progress. We work closely with
          families to ensure consistent support across all environments.
        </p>
      </section>

      {/* CTA */}
      <section className="container-custom py-20 text-center">
        <h2 className="heading text-3xl mb-4">
          Let’s Build a Brighter Future Together
        </h2>
        <p className="subtext mb-6">
          Start your child’s journey with personalized care and support.
        </p>

        <button className="btn-primary">
          Get Started
        </button>
      </section>

    </div>
  );
};

export default About;