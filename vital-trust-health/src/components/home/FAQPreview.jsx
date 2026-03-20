import Container from "../layout/Container";
import { Link } from "react-router-dom";

const FAQPreview = () => {
  return (
    <section className="bg-secondary py-16">
      <Container>

        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 max-w-2xl mx-auto text-gray-600">
          <p>• What services do you offer?</p>
          <p>• Do you provide online sessions?</p>
          <p>• Is my information confidential?</p>
        </div>

        <div className="text-center mt-6">
          <Link to="/faq" className="text-primary font-semibold">
            View All →
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default FAQPreview;