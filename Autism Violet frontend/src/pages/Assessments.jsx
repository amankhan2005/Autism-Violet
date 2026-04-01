import { motion } from "framer-motion";
import assessImg from "../assets/images/assessment.jpg";

const sections = [
  {
    title: "Comprehensive Developmental Evaluation",
    desc: "At Autism Violet, our assessments begin with a detailed evaluation of your child’s developmental, behavioral, and communication skills. We carefully analyze strengths and challenges to create a clear understanding of your child’s unique needs.",
  },
  {
    title: "Personalized Therapy Planning",
    desc: "Based on assessment results, we design customized ABA therapy plans tailored to your child. Our goal is to create structured, goal-oriented programs that support long-term growth in communication, social skills, and daily functioning.",
  },
  {
    title: "Evidence-Based Assessment Methods",
    desc: "Our team uses scientifically validated tools and ABA-based assessment techniques to ensure accurate results. This allows us to track progress effectively and adjust therapy strategies for the best possible outcomes.",
  },
  {
    title: "Ongoing Monitoring & Progress Tracking",
    desc: "Assessment is not a one-time process. At Autism Violet, we continuously monitor your child’s progress, update goals, and refine therapy plans to ensure consistent improvement and meaningful development over time.",
  },
];

const Assessments = () => {
  return (
    <section className="bg-white">

      {/* HEADER */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-[#4B2C73] mb-4">
          Autism Assessments & Evaluation
        </h1>
        <p className="text-gray-600 max-w-[700px] mx-auto">
          At Autism Violet, we provide comprehensive autism assessments to understand each child’s unique needs and create personalized therapy plans for long-term development.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-20">

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <div
            className="w-full h-[340px] rounded-2xl bg-cover bg-center shadow-md"
            style={{
              backgroundImage: `url(${assessImg})`,
            }}
          />

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#4B2C73] mb-4">
              Understanding Your Child’s Needs
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Autism Violet focuses on accurate and detailed assessments to identify each child’s strengths and areas for growth. This helps us design effective therapy plans that lead to meaningful and measurable progress.
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
              className="bg-[#FAF7FF] p-6 rounded-2xl shadow-sm hover:shadow-md transition"
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
            Start with a Professional Assessment
          </h2>
          <p className="text-sm mb-6 opacity-90">
            Book a detailed autism assessment with Autism Violet and get a clear roadmap for your child’s development and success.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#4B2C73] font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Book Assessment
          </a>
        </div>

      </div>
    </section>
  );
};

export default Assessments;