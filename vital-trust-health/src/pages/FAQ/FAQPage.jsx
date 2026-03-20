import Container from "../../components/layout/Container";
import FAQItem from "../../components/faq/FAQItem";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide individual therapy, couples counseling, stress management, trauma therapy, and online mental health support.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, we offer secure and confidential online counseling sessions via video and chat.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Absolutely. We follow strict confidentiality and privacy standards to protect your information.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment through our contact page or call us directly.",
  },
  {
    question: "Who can benefit from therapy?",
    answer:
      "Anyone experiencing stress, anxiety, depression, relationship issues, or emotional challenges can benefit from therapy.",
  },
];

const FAQPage = () => {
  return (
    <section className="py-20 bg-secondary min-h-screen">
      <Container>

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our mental health services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default FAQPage;