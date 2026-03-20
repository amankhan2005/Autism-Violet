import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

const AnxietyDepression = () => {
  return (
    <section className="py-20 bg-secondary min-h-screen">
      <Container>

        <h1 className="text-4xl font-bold text-primary mb-6">
          Anxiety & Depression
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Professional support to manage anxiety and overcome depression.
        </p>

        <div className="space-y-6 text-gray-600">

          <div>
            <h3 className="font-semibold text-lg text-primary">What We Offer</h3>
            <p>Therapy techniques, coping strategies, emotional support.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Who It Helps</h3>
            <p>People experiencing anxiety, panic attacks, or low mood.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary">Benefits</h3>
            <p>Improved mood, reduced stress, mental clarity.</p>
          </div>

        </div>

        <Link to="/contact" className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg">
          Book Appointment
        </Link>

      </Container>
    </section>
  );
};

export default AnxietyDepression;