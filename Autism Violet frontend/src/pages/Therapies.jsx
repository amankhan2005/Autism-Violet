import { motion } from "framer-motion";
import therapyImg from "../assets/images/therapy.jpg";

const therapies = [
  {
    title: "Speech Therapy",
    desc: "Helping children improve verbal and non-verbal communication skills, enabling them to express needs, understand language, and build meaningful social connections.",
  },
  {
    title: "Occupational Therapy",
    desc: "Focused on developing motor skills, sensory integration, and daily living abilities to help children become more independent and confident.",
  },
  {
    title: "Behavioral Therapy (ABA)",
    desc: "Evidence-based ABA therapy designed to improve behavior, learning, and social skills through structured and personalized interventions.",
  },
];

const Therapies = () => {
  return (
    <section className="bg-white">

      {/* HEADER */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-[#4B2C73] mb-4">
          Autism Therapy Services
        </h1>
        <p className="text-gray-600 max-w-[700px] mx-auto">
          At Autism Violet, we provide comprehensive therapy services for children with autism, combining ABA, speech, and occupational therapy to support communication, behavior, and independence.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-20">

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <div
            className="w-full h-[340px] rounded-2xl bg-cover bg-center shadow-md"
            style={{
              backgroundImage: `url(${therapyImg})`,
            }}
          />

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#4B2C73] mb-4">
              Comprehensive Therapy for Every Child
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Autism Violet offers a combination of therapies designed to meet each child’s unique needs. Our integrated approach helps children develop communication, independence, and essential life skills through structured and engaging sessions.
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {therapies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#EEE7FF] text-[#6D28D9] font-bold mb-4">
                {i + 1}
              </div>

              <h3 className="text-xl font-semibold text-[#4B2C73] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* EXTRA SECTION */}
        <div className="bg-[#FAF7FF] rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#4B2C73] mb-4">
            Integrated Therapy Approach
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Autism Violet, we combine multiple therapies to create a holistic approach tailored to each child. Our team works closely with families to ensure consistent progress across home, school, and social environments, helping children build confidence and long-term success.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#4B2C73] text-white rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-3">
            Start Your Child’s Journey Today
          </h2>
          <p className="text-sm mb-6 opacity-90">
            Discover how Autism Violet can help your child grow with personalized therapy and expert care.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#4B2C73] font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Book Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default Therapies;