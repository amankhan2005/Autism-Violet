import Container from "../layout/Container";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-secondary py-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Compassionate Mental Health Care You Can Trust
            </h1>
            <p className="text-gray-600 mb-6">
              Supporting your journey to better mental wellness with professional and confidential care.
            </p>

            <div className="flex gap-4">
              <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-lg">
                Book Appointment
              </Link>
              <Link to="/about" className="border border-primary text-primary px-6 py-3 rounded-lg">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div>
            <img src="/images/hero.jpg" alt="hero" className="rounded-2xl shadow-md" />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;