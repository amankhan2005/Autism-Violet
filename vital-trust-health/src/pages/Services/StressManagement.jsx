import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

const StressManagement = () => {
  return (
    <section className="py-20 bg-secondary min-h-screen">
      <Container>

        <h1 className="text-4xl font-bold text-primary mb-6">
          Stress Management
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Learn effective ways to manage stress and improve your daily life.
        </p>

        <div className="space-y-6 text-gray-600">

          <div>
            <h3 className="font-semibold text-lg text-primary">What We Offer</h3>
            <p>Relaxation techniques, coping strategies, guidance.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Who It Helps</h3>
            <p>Professionals, students, and individuals under pressure.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Benefits</h3>
            <p>Better focus, calm mind, improved productivity.</p>
          </div>

        </div>

        <Link to="/contact" className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg">
          Book Appointment
        </Link>

      </Container>
    </section>
  );
};

export default StressManagement;