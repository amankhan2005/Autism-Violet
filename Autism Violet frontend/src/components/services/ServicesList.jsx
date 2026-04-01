import ServiceCard from "./ServiceCard";

const ServicesList = () => {
  const services = [
    {
      id: "early",
      icon: "🌼",
      title: "Early Intervention Program",
      description:
        "Helping young children build communication and behavioral skills during early development stages.",
    },
    {
      id: "school",
      icon: "🎒",
      title: "School Readiness & Transition",
      description:
        "Preparing children with social and learning skills needed for school success.",
    },
    {
      id: "home",
      icon: "🏡",
      title: "In-Home ABA Therapy",
      description:
        "Therapy delivered in real-life environments to improve daily functioning.",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <div id={service.id} key={i}>
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ServicesList;