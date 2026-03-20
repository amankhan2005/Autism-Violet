import Container from "../layout/Container";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 text-center">
      <Container>

        <h2 className="text-3xl font-bold text-primary mb-4">
          Take the First Step Toward Better Mental Health
        </h2>

        <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-lg">
          Book Appointment
        </Link>

      </Container>
    </section>
  );
};

export default CTA;