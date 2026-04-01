import { motion } from "framer-motion";
import earlyImg from "../assets/images/early.jpg";

const sections = [
  {
    title: "Why Early Intervention Matters",
    desc: "Early intervention plays a vital role in improving developmental outcomes for children with autism. At Autism Violet, we focus on identifying delays early and applying evidence-based ABA therapy techniques that enhance learning ability, reduce challenging behaviors, and promote meaningful engagement with the world around them.",
  },
  {
    title: "Personalized ABA Therapy Programs",
    desc: "Every child is unique, and so is our approach. At Autism Violet, we create individualized therapy plans tailored to each child’s strengths, challenges, and goals. Our programs focus on improving speech, social interaction, daily living skills, and emotional development through structured and engaging sessions.",
  },
  {
    title: "Family-Centered Support",
    desc: "We believe parents and caregivers are key partners in a child’s progress. That’s why Autism Violet provides continuous guidance, training, and support to families. This ensures that therapy continues beyond sessions, helping children practice and strengthen their skills in real-life environments.",
  },
  {
    title: "Building a Strong Future",
    desc: "Our goal at Autism Violet is to empower children with autism to reach their full potential. Through early intervention ABA therapy, we help children gain confidence, independence, and the ability to thrive in school and social settings, setting them up for long-term success.",
  },
];

const EarlyIntervention = () => {
  return (
    <section className="bg-white">

      {/* HEADER */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-[#4B2C73] mb-4">
          Early Intervention ABA Therapy
        </h1>
        <p className="text-gray-600 max-w-[700px] mx-auto">
          At Autism Violet, our early intervention programs support young children in building communication, behavior, and social skills during their most important developmental years.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-20">

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <div
            className="w-full h-[340px] rounded-2xl bg-cover bg-center shadow-md"
            style={{
              backgroundImage: `url(${earlyImg})`,
            }}
          />

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#4B2C73] mb-4">
              Building Strong Foundations Early
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Autism Violet focuses on early support to help children develop essential life skills. Our structured programs encourage learning through play, interaction, and guided therapy to create long-term success.
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((item, i) => (
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

              <h3 className="text-lg font-semibold text-[#4B2C73] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#4B2C73] text-white rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-3">
            Give Your Child the Best Start
          </h2>
          <p className="text-sm mb-6 opacity-90">
            Start early intervention today with Autism Violet and help your child build essential skills for a brighter and more independent future.
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

export default EarlyIntervention;