import Hero from "../components/home/Hero";
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesPreview from "../components/home/ServicesPreview";
import InsuranceSection from "../components/home/Insurance";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <ServicesPreview />
      <InsuranceSection />
      <CTA />
    </>
  );
};

export default Home;