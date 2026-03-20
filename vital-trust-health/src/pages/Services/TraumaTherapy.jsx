import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

const TraumaTherapy = () => {
  return (
    <section className="py-20 bg-secondary min-h-screen">
      <Container>

        <h1 className="text-4xl font-bold text-primary mb-6">
          Trauma Therapy
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Heal from past trauma with compassionate and professional support.
        </p>

        <div className="space-y-6 text-gray-600">

          <div>
            <h3 className="font-semibold text-lg text-primary">What We Offer</h3>
            <p>Safe environment, trauma-focused therapy, emotional healing.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Who It Helps</h3>
            <p>Individuals dealing with past trauma, PTSD, emotional pain.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Benefits</h3>
            <p>Healing, emotional strength, better mental health.</p>
          </div>

        </div>

        <Link to="/contact" className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg">
          Book Appointment
        </Link>

      </Container>
    </section>
  );
};

export default TraumaTherapy;