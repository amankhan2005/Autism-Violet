import Hero from "../../components/home/Hero";
import AboutPreview from "../../components/home/AboutPreview";
import ServicesPreview from "../../components/home/ServicesPreview";
import VisionMission from "../../components/home/VisionMission";
import FAQPreview from "../../components/home/FAQPreview";
import CTA from "../../components/home/CTA";

const HomePage = () => {
  return (
    <main>

      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <AboutPreview />

      {/* Services */}
      <ServicesPreview />

      {/* Vision & Mission */}
      <VisionMission />

      {/* FAQ Preview */}
      <FAQPreview />

      {/* Call To Action */}
      <CTA />

    </main>
  );
};

export default HomePage;