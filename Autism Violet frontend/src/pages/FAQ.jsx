import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Autism Spectrum Disorder (ASD)?",
      answer:
        "Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interaction. Each child experiences autism differently, which is why personalized therapy is essential.",
    },
    {
      question: "What is ABA therapy and how does it help?",
      answer:
        "Applied Behavior Analysis (ABA) therapy is an evidence-based approach that helps children improve communication, social skills, and behavior. It focuses on positive reinforcement and structured learning.",
    },
    {
      question: "At what age should I start ABA therapy?",
      answer:
        "Early intervention is highly recommended. Signs of autism can appear as early as 18 months, and starting therapy early can significantly improve long-term outcomes.",
    },
    {
      question: "What services does Autism Violet provide?",
      answer:
        "We provide personalized ABA therapy, early intervention programs, school readiness support, and in-home therapy designed to meet each child’s unique needs.",
    },
    {
      question: "How are therapy plans customized?",
      answer:
        "Each child receives an individualized treatment plan based on assessments, strengths, and developmental goals. Our therapists continuously monitor and adjust the plan for best results.",
    },
    {
      question: "Do parents get involved in the therapy process?",
      answer:
        "Yes! We strongly believe in a family-centered approach. We guide parents with tools and strategies so progress continues at home.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can book a free consultation by clicking on 'Book a Free Consultation' or contacting us directly. Our team will guide you through the next steps.",
    },
  ];

  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-[900px] mx-auto">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4B2C73] mb-4 text-center">
          Autism Therapy FAQ – Your Questions Answered
        </h1>

        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Learn more about autism, ABA therapy, and how Autism Violet supports
          children and families through personalized care.
        </p>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 shadow-sm transition"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="font-semibold text-lg text-[#6A3FA0]">
                  {faq.question}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-[#4B2C73] mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help you understand your child’s needs and guide you forward.
          </p>

          <button className="bg-[#6A3FA0] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
            Book a Free Consultation
          </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;