import Container from "../../components/layout/Container";

const AboutPage = () => {
  return (
    <section className="bg-secondary min-h-screen">

      {/* HERO */}
      <div className="bg-primary text-white py-16 text-center">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Vital Trust Health
          </h1>
          <p className="max-w-2xl mx-auto text-white/90">
            Compassionate, confidential, and professional mental health care you can trust.
          </p>
        </Container>
      </div>

      <Container>

        {/* MAIN CONTENT */}
        <div className="py-16 grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="/images/about.jpg"
              alt="About"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Vital Trust Health LLC is dedicated to providing high-quality mental health services
              to individuals, couples, and families. We believe that mental well-being is essential
              for a fulfilling life.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our approach is centered around empathy, confidentiality, and evidence-based practices.
              We create a safe environment where clients can openly express themselves and receive
              the support they need.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <p className="font-bold text-primary">100% Confidential</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <p className="font-bold text-primary">Licensed Experts</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <p className="font-bold text-primary">Online & In-person</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <p className="font-bold text-primary">Trusted Care</p>
              </div>
            </div>

          </div>

        </div>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-8 pb-16">

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To create a world where mental health is prioritized, stigma is removed,
              and everyone has access to support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide compassionate, confidential, and effective mental health care
              that empowers individuals to heal and grow.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-primary text-white text-center py-12 rounded-2xl mb-16">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <a
            href="/contact"
            className="bg-white text-primary px-6 py-3 rounded-lg font-semibold"
          >
            Contact Us
          </a>
        </div>

      </Container>
    </section>
  );
};

export default AboutPage;