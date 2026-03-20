 import Container from "../layout/Container";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

const ServicesPreview = () => {
  return (
    <section className="bg-secondary py-20">
      <Container>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of mental health services designed to support your well-being.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((s, i) => (
            <Link
              to={`/services/${s.slug}`}
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
            >
              {/* Image */}
              <img
                src={`/images/services/${s.slug}.jpg`}
                alt={s.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {s.desc}
                </p>

                <span className="text-primary font-semibold">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ServicesPreview;