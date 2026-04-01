import { motion } from "framer-motion";
import Container from "../common/Container";
import { fadeUp, staggerContainer } from "../../utils/animations";

const data = [
  {
    number: "01",
    title: "Personalized Therapy Plans",
    desc: "Each child receives a customized program built around their unique developmental goals — no two plans look the same.",
    accent: "#F97316",
  },
  {
    number: "02",
    title: "Certified Experts",
    desc: "Highly trained BCBAs and RBTs with deep clinical experience deliver consistent, compassionate care every session.",
    accent: "#7C3AED",
  },
  {
    number: "03",
    title: "Family-Centered Approach",
    desc: "We equip parents with practical tools and real-time guidance so progress continues well beyond therapy hours.",
    accent: "#F97316",
  },
  {
    number: "04",
    title: "Proven ABA Methods",
    desc: "Science-backed strategies with measurable outcomes — progress you can see and milestones you can celebrate.",
    accent: "#7C3AED",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-[#faf9ff]">
      <Container>

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-4">
            Why Families Choose Us
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a0a3b] leading-[1.15] max-w-[480px]">
              Why Families Trust{" "}
              <em className="italic text-orange-500">Autism Violet</em>
            </h2>
            <p className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[340px] md:text-right">
              Personalized care, expert support, and evidence-based methods — built around your child.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative bg-white rounded-2xl p-7 border border-[#EDE7F6] hover:border-[#DDD6FE] hover:shadow-[0_8px_32px_-8px_rgba(124,58,237,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-all duration-300 group-hover:h-[4px]"
                style={{ backgroundColor: item.accent }}
              />

              {/* Number */}
              <span
                className="font-playfair text-[56px] font-bold leading-none mb-6 block transition-colors duration-300"
                style={{ color: item.accent, opacity: 0.12 }}
              >
                {item.number}
              </span>

              {/* Left rule + text */}
              <div
                className="pl-4 border-l-2 transition-colors duration-300"
                style={{ borderColor: item.accent }}
              >
                <h3 className="font-semibold text-[#1a0a3b] text-[16px] leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-[#7b6fa0] text-[13.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Corner dot */}
              <div
                className="absolute bottom-5 right-5 w-2 h-2 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                style={{ backgroundColor: item.accent }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom rule with stat teaser */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 pt-10 border-t border-[#EDE7F6] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-[#7b6fa0] text-[13px]">
            Trusted by families across the region since 2012.
          </p>
          <div className="flex items-center gap-8">
            {[
              { value: "500+", label: "Children Supported" },
              { value: "98%", label: "Family Satisfaction" },
              { value: "12+", label: "Years Experience" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-playfair text-xl font-bold text-[#1a0a3b]">{s.value}</p>
                <p className="text-[11px] text-[#7b6fa0] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default WhyChooseUs;