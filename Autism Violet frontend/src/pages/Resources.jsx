import { motion } from "framer-motion";
import resourceImg from "../assets/images/resources.jpg";

const resources = [
  {
    title: "Autism Guides for Parents",
    desc: "At Autism Violet, we provide easy-to-understand guides that help parents learn about autism, early signs, and effective support strategies for their child’s development.",
  },
  {
    title: "Behavior & Communication Tips",
    desc: "Explore practical tips and techniques to improve communication, manage behavior, and build strong daily routines for children with autism.",
  },
  {
    title: "Therapy Support Materials",
    desc: "Access structured tools and resources based on ABA therapy that help reinforce learning at home and support consistent progress outside therapy sessions.",
  },
  {
    title: "Daily Life & Skill Development",
    desc: "Our resources focus on helping children develop essential life skills such as independence, social interaction, and emotional understanding.",
  },
];

const Resources = () => {
  return (
    <section className="bg-white">

      {/* HEADER */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-[#4B2C73] mb-4">
          Learning Resources
        </h1>
        <p className="text-gray-600 max-w-[700px] mx-auto">
          Autism Violet provides helpful resources, guides, and tools to support parents in understanding autism and helping their child grow with confidence.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-20">

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <div
            className="w-full h-[340px] rounded-2xl bg-cover bg-center shadow-md"
            style={{
              backgroundImage: `url(${resourceImg})`,
            }}
          />

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#4B2C73] mb-4">
              Empowering Parents with Knowledge
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Autism Violet, we believe that informed parents create stronger outcomes. Our resources are designed to provide clear, practical, and effective guidance that helps families support their child’s development every day.
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {resources.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition"
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
        <div className="text-center bg-[#4B2C73] text-white rounded-2xl p-12">
          <h2 className="text-2xl font-semibold mb-3">
            Explore Helpful Resources Today
          </h2>
          <p className="text-sm mb-6 opacity-90 max-w-[500px] mx-auto">
            Discover practical tools and expert guidance from Autism Violet to better support your child’s journey.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#4B2C73] font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Get Guidance
          </a>
        </div>

      </div>
    </section>
  );
};

export default Resources;