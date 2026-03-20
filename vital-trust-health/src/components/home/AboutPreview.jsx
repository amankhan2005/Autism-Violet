 import Container from "../layout/Container";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="/images/about.jpg"
              alt="About Vital Trust"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              About Vital Trust Health
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              At Vital Trust Health LLC, we are committed to providing compassionate,
              confidential, and professional mental health care tailored to your needs.
              We believe that everyone deserves access to a safe space where they can
              heal, grow, and thrive.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experienced team supports individuals, couples, and families through
              personalized therapy approaches designed to improve emotional well-being
              and overall quality of life.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary p-4 rounded-xl text-center">
                <h3 className="font-bold text-primary text-lg">100% Confidential</h3>
              </div>
              <div className="bg-secondary p-4 rounded-xl text-center">
                <h3 className="font-bold text-primary text-lg">Expert Care</h3>
              </div>
              <div className="bg-secondary p-4 rounded-xl text-center">
                <h3 className="font-bold text-primary text-lg">Online & Offline</h3>
              </div>
              <div className="bg-secondary p-4 rounded-xl text-center">
                <h3 className="font-bold text-primary text-lg">Trusted Support</h3>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <Link
                to="/about"
                className="bg-primary text-white px-6 py-3 rounded-lg"
              >
                Learn More
              </Link>

              <Link
                to="/contact"
                className="border border-primary text-primary px-6 py-3 rounded-lg"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;