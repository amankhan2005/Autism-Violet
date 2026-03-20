import Container from "../../components/layout/Container";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";

const ContactPage = () => {
  return (
    <section className="py-20 bg-secondary min-h-screen">
      <Container>

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-3">
            Contact Us
          </h1>
          <p className="text-gray-600">
            We’re here to listen. Reach out today.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <ContactForm />
          <ContactInfo />
        </div>

      </Container>
    </section>
  );
};

export default ContactPage;