import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { fadeUp, staggerContainer } from "../utils/animations";
import { Link } from "react-router-dom";
// manual images
import earlyImg from "../assets/images/early.jpg";
import schoolImg from "../assets/images/therapy.jpg";
import homeImg from "../assets/images/programs.png";

const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "98%", label: "Family Satisfaction" },
  { value: "12+", label: "Years Experience" },
];

const services = [
  {
    id: "01",
    tag: "Early Intervention",
    title: "Early Intervention Program",
    accent: "#F97316",
    img: earlyImg,
    imgAlt: "Early intervention therapy",
    reverse: false,
    body: `Early intervention plays a critical role in supporting children with autism during their most important developmental years. This program focuses on building foundational skills such as communication, attention, imitation, and early social interaction. Using evidence-based ABA techniques, children are guided through structured and play-based learning activities that encourage engagement and understanding.

Each therapy plan is personalized based on the child's developmental level and unique needs. Therapists work closely with families to ensure consistency between therapy and home environments, which helps accelerate progress. Early intervention also helps reduce challenging behaviors while strengthening positive communication habits.

By starting therapy early, children gain the skills they need to become more independent, confident, and ready for future learning environments.`,
    faqs: [
      { q: "What age is best for early intervention?", a: "Ideally between ages 2–6, but earlier is always better." },
      { q: "How long does the program last?", a: "It depends on the child's needs, often several months to years." },
      { q: "Do parents participate?", a: "Yes, parent involvement is essential for success." },
    ],
  },
  {
    id: "02",
    tag: "School Readiness",
    title: "School Readiness & Transition",
    accent: "#7C3AED",
    img: schoolImg,
    imgAlt: "School readiness program",
    reverse: true,
    body: `The transition to school can be challenging for children with autism, which is why our school readiness program is designed to prepare them for structured learning environments. This program focuses on developing academic readiness, social interaction, and classroom behavior skills.

Children learn how to follow instructions, sit for longer periods, interact with peers, and complete tasks independently. ABA-based strategies are used to simulate classroom situations, helping children become comfortable with routines and expectations.

We also collaborate with parents and educators to ensure a smooth and successful transition. The goal is to help children enter school with confidence, reduced anxiety, and the ability to actively participate in classroom activities.`,
    faqs: [
      { q: "Does this help with school admission?", a: "Yes, it prepares children for school expectations." },
      { q: "Are social skills included?", a: "Yes, peer interaction is a key focus." },
      { q: "When should this program start?", a: "Ideally before school begins, but it can continue after." },
    ],
  },
  {
    id: "03",
    tag: "In-Home Therapy",
    title: "In-Home ABA Therapy",
    accent: "#F97316",
    img: homeImg,
    imgAlt: "In-home ABA therapy",
    reverse: false,
    body: `In-home ABA therapy provides children with the opportunity to learn and practice essential skills in a familiar and comfortable environment. This approach focuses on real-life situations, making it easier for children to apply what they learn in daily routines.

Therapists work directly within the home to address communication challenges, behavior management, and independence skills such as dressing, eating, and following routines. Because therapy takes place in a natural setting, children are often more engaged and responsive.

Parents are actively involved throughout the process, learning techniques to support their child consistently. This ensures progress continues beyond therapy sessions and becomes part of everyday life.`,
    faqs: [
      { q: "Is in-home therapy effective?", a: "Yes, it improves real-life skill application." },
      { q: "Do parents get training?", a: "Yes, parents are guided throughout the process." },
      { q: "What skills are taught?", a: "Daily routines, communication, and behavior skills." },
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-[#faf9ff]">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="py-24 text-center">
        <Container>
          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7C3AED] mb-5"
          >
            What We Offer
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.08 }}
            className="font-playfair text-4xl md:text-7xl font-bold text-[#1a0a3b] leading-[1.15] mb-6"
          >
            Our ABA Therapy{" "}
            <em className="italic text-orange-500">Services</em>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.16 }}
            className="text-[#5a4e72] text-[15px] leading-relaxed max-w-[560px] mx-auto mb-10"
          >
            Explore our specialized therapy programs designed to support children
            with autism in building essential life skills, communication, and independence.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show"
            transition={{ delay: 0.24 }}
            className="inline-flex gap-6 pt-6 border-t border-[#DDD6FE]"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="text-center">
                  <p className="font-playfair text-2xl font-bold text-[#1a0a3b]">{s.value}</p>
                  <p className="text-[11px] text-[#7b6fa0] mt-0.5">{s.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px self-stretch bg-[#DDD6FE]" />
                )}
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── SERVICE BLOCKS ────────────────────────────────────── */}
      <section className="py-8 pb-28">
        <Container>
          <div className="flex flex-col gap-28">
            {services.map((svc, idx) => (
              <div key={idx}>
                {/* Section label row */}
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="flex items-center gap-4 mb-12"
                >
                  <span
                    className="font-playfair text-[56px] font-bold leading-none"
                    style={{ color: svc.accent, opacity: 0.12 }}
                  >
                    {svc.id}
                  </span>
                  <div className="h-px flex-1 bg-[#DDD6FE]" />
                  <span
                    className="text-[11px] font-semibold tracking-[0.2em] uppercase"
                    style={{ color: svc.accent }}
                  >
                    {svc.tag}
                  </span>
                </motion.div>

                {/* Content grid */}
                <div className={`grid md:grid-cols-2 gap-14 items-start ${svc.reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: svc.reverse ? 32 : -32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="relative"
                  >
                    <img
                      src={svc.img}
                      alt={svc.imgAlt}
                      className="rounded-2xl w-full h-80 object-cover"
                    />
                    {/* Decorative circle */}
                    <div
                      className="absolute -bottom-4 w-20 h-20 rounded-full border-2 border-[#DDD6FE] -z-10"
                      style={{ [svc.reverse ? "left" : "right"]: "-16px" }}
                    />
                    {/* Floating badge */}
                    <div
                      className="absolute top-5 left-5 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
                      style={{ boxShadow: "0 4px 24px rgba(26,10,59,0.12)" }}
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-base flex-shrink-0"
                        style={{ background: svc.accent === "#F97316" ? "#FFF3E8" : "#EDE7F6" }}
                      >
                        💜
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#1a0a3b] m-0">Science-backed care</p>
                        <p className="text-[11px] text-[#7b6fa0] m-0">Every session, every child</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, x: svc.reverse ? -32 : 32 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                  >
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a0a3b] leading-[1.15] mb-5">
                      {svc.title.includes("&") ? (
                        <>
                          {svc.title.split("&")[0]}&amp;
                          <em className="italic text-orange-500">{svc.title.split("&")[1]}</em>
                        </>
                      ) : (
                        <>
                          {svc.title.split(" ").slice(0, -1).join(" ")}{" "}
                          <em className="italic text-orange-500">{svc.title.split(" ").slice(-1)}</em>
                        </>
                      )}
                    </h2>

                    {/* Body paragraphs */}
                    <div className="flex flex-col gap-4 mb-8">
                      {svc.body.trim().split("\n\n").map((para, i) => (
                        <p key={i} className="text-[#5a4e72] text-[15px] leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* FAQ cards */}
                    <div className="flex flex-col gap-3">
                      {svc.faqs.map((faq, fi) => (
                        <motion.div
                          key={fi}
                          initial={{ opacity: 0, x: svc.reverse ? -16 : 16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: fi * 0.08 }}
                          className="bg-white border border-[#EDE7F6] rounded-xl px-5 py-4"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                              style={{ background: fi % 2 === 0 ? "#FFF3E8" : "#EDE7F6" }}
                            >
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-5" stroke={fi % 2 === 0 ? "#F97316" : "#7C3AED"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-[13px] font-semibold text-[#1a0a3b] mb-1">{faq.q}</p>
                              <p className="text-[13px] text-[#7b6fa0]">{faq.a}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative bg-[#643C85] py-20 md:py-28 overflow-hidden">
        {[500, 740, 980].map((size, i) => (
          <div
            key={i}
            className="hidden md:block absolute rounded-full border border-white/[0.08] pointer-events-none -translate-x-1/2 left-1/2"
            style={{ width: size, height: size, top: -(size * 0.36) }}
          />
        ))}

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative z-10 max-w-[600px] mx-auto text-center px-2"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              Free initial consultation
            </div>

            <h2 className="font-playfair text-[clamp(26px,6vw,42px)] font-bold text-white leading-[1.2] tracking-tight mb-4">
              Start Your Child's Journey to{" "}
              <em className="italic text-orange-300">Independence</em>
            </h2>

            <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed max-w-[440px] mx-auto mb-8">
              Let's work together to build confidence, independence, and a brighter future.
            </p>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#7C3AED] hover:bg-orange-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
            >
              Book a Free Consultation
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};

export default Services;