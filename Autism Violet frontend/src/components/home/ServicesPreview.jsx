import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { fadeUp, staggerContainer } from "../../utils/animations";

const services = [
  {
    number: "01",
    title: "Early Intervention",
    desc: "Building strong communication and behavioral foundations during the most critical window of development.",
    link: "/services#early",
    tag: "Ages 2–5",
  },
  {
    number: "02",
    title: "School Readiness",
    desc: "Equipping children with the social, emotional, and learning skills they need to thrive in a classroom.",
    link: "/services#school",
    tag: "Ages 4–7",
  },
  {
    number: "03",
    title: "In-Home ABA Therapy",
    desc: "Personalized therapy delivered in real-life environments where skills are practiced and generalized naturally.",
    link: "/services#home",
    tag: "All ages",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
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
            What We Offer
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a0a3b] leading-[1.15] max-w-[440px]">
              Programs built for{" "}
              <em className="italic text-orange-500">every stage</em>
            </h2>
            <p className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[320px] md:text-right">
              Personalized support from early childhood through school — wherever your child is in their journey.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative bg-[#faf9ff] rounded-2xl p-8 border border-[#EDE7F6] hover:border-[#DDD6FE] hover:shadow-[0_8px_32px_-8px_rgba(124,58,237,0.12)] transition-all duration-300 flex flex-col"
            >
              {/* Top row: number + tag */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-playfair text-[44px] font-bold leading-none text-[#7C3AED] opacity-[0.13]">
                  {service.number}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#7C3AED] bg-[#EDE7F6] px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="pl-4 border-l-2 border-[#F97316] flex-1">
                <h3 className="font-semibold text-[#1a0a3b] text-[16px] leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="text-[#7b6fa0] text-[13.5px] leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Link */}
              <div className="mt-8 flex items-center gap-2">
                <Link
                  to={service.link}
                  className="text-[#7C3AED] text-[13px] font-semibold group-hover:text-[#F97316] transition-colors duration-200 flex items-center gap-1.5"
                >
                  Learn more
                  <svg
                    className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Corner dot */}
              <div className="absolute bottom-5 right-5 w-2 h-2 rounded-full bg-[#F97316] opacity-20 group-hover:opacity-50 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-[#EDE7F6]"
        >
          <p className="text-[#7b6fa0] text-[13px]">
            Not sure which program fits? We'll guide you.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/services"
              className="text-[13px] font-semibold text-[#7C3AED] hover:text-[#F97316] transition-colors duration-200 flex items-center gap-1.5"
            >
              View all services
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/contact-us"
              className="bg-[#1a0a3b] hover:bg-[#7C3AED] text-white text-[13px] font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default ServicesPreview;