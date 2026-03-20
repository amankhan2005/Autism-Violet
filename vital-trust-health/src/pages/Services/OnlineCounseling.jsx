import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

const OnlineCounseling = () => {
  return (
    <section className="py-20 bg-secondary min-h-screen">
      <Container>

        <h1 className="text-4xl font-bold text-primary mb-6">
          Online Counseling
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Access mental health support from anywhere with secure online sessions.
        </p>

        <div className="space-y-6 text-gray-600">

          <div>
            <h3 className="font-semibold text-lg text-primary">What We Offer</h3>
            <p>Video sessions, chat support, flexible scheduling.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Who It Helps</h3>
            <p>Remote clients, busy individuals, privacy seekers.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Benefits</h3>
            <p>Convenience, accessibility, comfort.</p>
          </div>

        </div>

        <Link to="/contact" className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg">
          Book Appointment
        </Link>

      </Container>
    </section>
  );
};

export default OnlineCounseling;