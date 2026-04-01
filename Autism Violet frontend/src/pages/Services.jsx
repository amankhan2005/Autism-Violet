import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServicesList from "../components/services/ServicesList";

const Services = () => {
  return (
    <div className="bg-white py-24">
      <Container>

        <SectionTitle
          title="Our Services"
          subtitle="Personalized ABA therapy programs designed for long-term success."
        />

        <ServicesList />

      </Container>
    </div>
  );
};

export default Services;