import { motion } from "framer-motion";
import Container from "../common/Container";

const pillars = [
  {
    label: "Evidence-based ABA therapy",
    desc: "Science-backed methods tailored to every child.",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <path d="M8 2C5.79 2 4 3.79 4 6c0 1.5.81 2.81 2 3.54V11h4V9.54C11.19 8.81 12 7.5 12 6c0-2.21-1.79-4-4-4z" stroke="#7C3AED" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M6 13h4M7 11v2M9 11v2" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Family-centered support",
    desc: "Guidance for parents and caregivers at every step.",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <circle cx="8" cy="5" r="2.5" stroke="#7C3AED" strokeWidth="1.2"/>
        <path d="M3 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "12+ years of experience",
    desc: "Trusted by 500+ families across the region.",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
        <path d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5L8 2z" stroke="#7C3AED" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section className="bg-white py-16">
      <Container>

        {/* Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="text-[11px] font-semibold tracking-widest text-[#7C3AED] uppercase">
            About us
          </span>
        </div>

        {/* Title */}
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a0a3b] leading-[1.18] mb-6 max-w-lg">
          Welcome to Autism <em className="italic text-orange-500">Violet</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[15px] text-[#5a4e72] leading-[1.8]">
              Our experienced team provides personalized ABA therapy tailored to each
              child's unique strengths and needs. We focus on building communication,
              independence, and confidence through structured, compassionate care.
            </p>
            <p className="text-[15px] text-[#5a4e72] leading-[1.8] mt-5">
              We combine evidence-based practices with genuine heart — supporting not
              just children, but entire families throughout their journey.
            </p>

            {/* Divider */}
            <div className="w-10 h-0.5 bg-[#DDD6FE] rounded my-7" />

            {/* Pillars */}
            <div className="flex flex-col gap-4">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f3f0fb] flex items-center justify-center shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#1a0a3b]">{p.label}</p>
                    <p className="text-[13px] text-[#5a4e72] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="/about-us" className="inline-flex items-center gap-2 mt-9 text-[13px] font-semibold text-[#7C3AED] border-b border-[#DDD6FE] pb-0.5 hover:border-[#7C3AED] transition-colors">
              Learn about our approach
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main image card */}
            <div className="w-full h-[340px] bg-[#f3f0fb] rounded-[20px] overflow-hidden">
              <img
                src="/images/about/team.avif"
                alt="Autism Violet therapy team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating stat — bottom left */}
            <div className="absolute -bottom-4 -left-5 bg-[#1a0a3b] rounded-[14px] px-5 py-4">
              <p className="font-playfair text-3xl font-bold text-white leading-none">500+</p>
              <p className="text-[11px] text-[#7b6fa0] mt-1 tracking-wide">Children supported</p>
            </div>

            {/* Badge — top right */}
            <div className="absolute top-5 -right-4 bg-orange-500 rounded-[10px] px-3.5 py-2.5">
              <p className="text-[11px] font-bold text-white tracking-widest uppercase">Since 2012</p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;