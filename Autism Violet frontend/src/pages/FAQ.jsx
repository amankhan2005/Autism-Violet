const FAQ = () => {
  const faqs = [
    {
      question: "What is Autism Spectrum Disorder?",
      answer:
        "Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interaction.",
    },
    {
      question: "At what age should I seek assessment?",
      answer:
        "Early signs can appear as early as 18 months. Early intervention leads to better outcomes.",
    },
    {
      question: "What therapies do you provide?",
      answer:
        "We offer speech therapy, behavioral therapy, occupational therapy, and personalized intervention plans.",
    },
    {
      question: "How can I book a session?",
      answer:
        "You can click on 'Start Your Child’s Journey' and fill out the contact form.",
    },
  ];

  return (
    <div className="max-w-[900px] mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[#4B2C73] mb-10 text-center">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-col gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-[#6A3FA0]">
              {faq.question}
            </h3>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;