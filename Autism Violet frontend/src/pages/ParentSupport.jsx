import { motion } from "framer-motion";
import parentImg from "../assets/images/parent-support.jpg";

const sections = [
  {
    title: "Guidance for Parents & Caregivers",
    desc: "At Autism Violet, we provide expert guidance to help parents better understand autism and their child’s unique needs. Our team works closely with families to offer practical strategies that support communication, behavior, and emotional development at home.",
  },
  {
    title: "Parent Training Programs",
    desc: "We offer structured parent training sessions that empower caregivers with effective techniques used in ABA therapy. These programs help parents confidently manage daily challenges, reinforce learning, and support consistent progress beyond therapy sessions.",
  },
  {
    title: "Emotional & Counseling Support",
    desc: "Caring for a child with autism can be overwhelming, and we are here to support you. Autism Violet provides emotional guidance and counseling to help families stay confident, informed, and supported throughout their journey.",
  },
  {
    title: "Building Strong Family Involvement",
    desc: "We believe that family involvement is key to a child’s success. Our collaborative approach ensures that parents, therapists, and caregivers work together to create a consistent and supportive environment for long-term growth.",
  },
];

const ParentSupport = () => {
  return (
    <section className="bg-white">

      {/* CLEAN HEADER */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold text-[#4B2C73] mb-4">
          Family Support & Parent Guidance
        </h1>
        <p className="text-gray-600 max-w-[700px] mx-auto">
          Autism Violet empowers families with knowledge, training, and support to help children grow with confidence, independence, and long-term success.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 pb-20">

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* IMAGE */}
          <div
            className="w-full h-[340px] rounded-2xl bg-cover bg-center shadow-md"
            style={{
              backgroundImage: `url(${parentImg})`,
            }}
          />

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#4B2C73] mb-4">
              Supporting Families Beyond Therapy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Autism Violet, we believe real progress happens when families are actively involved. Our programs are designed to guide parents, strengthen daily routines, and ensure children receive consistent support both at home and during therapy sessions.
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {sections.map((item, i) => (
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
            Get Support for Your Family Today
          </h2>
          <p className="text-sm mb-6 opacity-90 max-w-[500px] mx-auto">
            Connect with Autism Violet and discover how our family support programs can help you guide your child toward a brighter and more independent future.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#4B2C73] font-semibold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Talk to a Specialist
          </a>
        </div>

      </div>
    </section>
  );
};

export default ParentSupport;