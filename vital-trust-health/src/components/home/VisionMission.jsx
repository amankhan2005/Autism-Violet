 import Container from "../layout/Container";

const VisionMission = () => {
  return (
    <section className="py-20 bg-secondary">
      <Container>

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Our Vision & Mission
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are dedicated to transforming lives by making mental health care accessible,
            supportive, and empowering for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To create a world where mental health is prioritized, stigma is eliminated,
              and every individual has access to the support they need to live a balanced
              and fulfilling life.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">💙</div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide compassionate, confidential, and evidence-based mental health
              services that empower individuals to heal, grow, and achieve emotional
              well-being.
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default VisionMission;