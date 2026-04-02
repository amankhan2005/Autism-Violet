import { motion } from "framer-motion";
import Button from "../common/Button";
import Container from "../common/Container";
import { fadeUp } from "../../utils/animations";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "98%", label: "Family Satisfaction" },
  { value: "12+", label: "Years Experience" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf9ff]   py-16">
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-10 min-h-[440px]">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left z-10">



            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="font-playfair text-4xl md:text-8xl font-bold text-[#1a0a3b] leading-[1.18] mb-5"
            >
              Empowering Every Child with Autism to{" "}
              <em className="italic text-orange-500">Thrive</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="text-[#5a4e72] text-[15px] leading-relaxed mt-4 max-w-[440px] mx-auto md:mx-0"
            >
              Science-backed ABA therapy delivered with compassion — helping
              children build skills, confidence, and independence every single day.
            </motion.p>

            {/* CTAs */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.3 }}
              className="flex gap-3 mt-8 flex-wrap justify-center md:justify-start"
            >
              {/* ABOUT US */}
              <Link to="/about-us">
                <button className="bg-orange-500 hover:bg-[#6D28D9] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-200">
                  Know More
                </button>
              </Link>

              {/* CONTACT US */}
              <Link to="/contact-us">
                <button className="flex items-center gap-2 px-6 py-3.5 rounded-full border-[1.5px] border-[#7C3AED] text-[#7C3AED] hover:bg-[#EDE7F6] text-sm font-medium transition-colors duration-200">
                  Book a Consultation
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.4 }}
              className="flex gap-6 mt-8 pt-6 border-t border-[#DDD6FE] justify-center md:justify-start"
            >
              {stats.map((s, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div>
                    <p className="font-playfair text-2xl font-bold text-[#1a0a3b]">{s.value}</p>
                    <p className="text-[11px] text-[#7b6fa0] mt-0.5">{s.label}</p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px self-stretch bg-[#DDD6FE]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>



          {/* RIGHT VISUAL */}
          <div className="relative w-full h-full min-h-[420px]">

            <motion.img
              src="/images/hero/child.png"
              alt="Child receiving ABA therapy"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="absolute right-0 top-0 w-full h-full object-cover rounded-2xl"
            />

          </div>
        </div>
      </Container>

      {/* Scroll hint */}
      <div className="absolute bottom-5 left-12 flex items-center gap-2 text-[11px] text-[#7b6fa0]">
        <span className="text-[10px]">•</span>
        <span>Scroll</span>
        <div className="w-6 h-6 rounded-full border border-[#aaa] flex items-center justify-center">
          <svg className="w-3 h-3" fill="none" stroke="#888" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;