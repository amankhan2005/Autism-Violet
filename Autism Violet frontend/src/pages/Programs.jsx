import { motion } from "framer-motion";
import programImg from "../assets/images/programs.png";

const programs = [
  {
    title: "Early Intervention Program",
    desc: "At Autism Violet, our early intervention program focuses on supporting young children during their critical developmental years. We help build communication, social, and behavioral skills that create a strong foundation for lifelong learning and independence.",
  },
  {
    title: "School Readiness Program",
    desc: "Our school readiness program prepares children with autism for structured learning environments. We focus on improving attention, following instructions, social interaction, and classroom behavior to help children transition confidently into school settings.",
  },
  {
    title: "In-Home Support Program",
    desc: "Autism Violet offers in-home ABA programs that allow children to learn in a familiar environment. This approach helps reinforce daily routines, improve behavior, and strengthen real-life skill application with active family involvement.",
  },
  {
    title: "Social Skills Development",
    desc: "We provide structured programs that help children develop essential social skills such as communication, turn-taking, emotional understanding, and peer interaction, enabling them to build meaningful relationships.",
  },
];

const Programs = () => {
  return (
    <section className="bg-[#FAF7FF]">

      {/* HEADER */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-[#4B2C73] mb-4">
          Autism Intervention Programs
        </h1>
        <p className="text-gray-600 max-w-[700px] mx-auto">
          At Autism Violet, our structured programs are designed to help children build essential skills, improve behavior, and achieve long-term independence through personalized care.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-20">

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <div
            className="w-full h-[340px] rounded-2xl bg-cover bg-center shadow-md"
            style={{
              backgroundImage: `url(${programImg})`,
            }}
          />

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#4B2C73] mb-4">
              Structured Programs for Real Progress
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Autism Violet offers carefully designed intervention programs that focus on real-life development. Our goal is to help children gain confidence, improve communication, and succeed in both learning and social environments.
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((item, i) => (
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

        {/* EXTRA SECTION */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#4B2C73] mb-4">
            Personalized & Goal-Oriented Programs
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At Autism Violet, every program is tailored to meet the unique needs of each child. Our team continuously evaluates progress and adapts strategies to ensure meaningful development and long-term success.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#4B2C73] text-white rounded-2xl p-10">
          <h2 className="text-2xl font-semibold mb-3">
            Find the Right Program for Your Child
          </h2>
          <p className="text-sm mb-6 opacity-90">
            Connect with Autism Violet to explore personalized programs that support your child’s growth and future success.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#4B2C73] font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Get Started Today
          </a>
        </div>

      </div>
    </section>
  );
};

export default Programs;