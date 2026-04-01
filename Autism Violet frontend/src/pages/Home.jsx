import Hero from "../components/home/Hero";
import About from "../components/home/About";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServicesPreview from "../components/home/ServicesPreview";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <ServicesPreview />
      <CTA />
    </>
  );
};

export default Home;