import { Routes, Route } from "react-router-dom";

// Main Pages
import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import FAQPage from "../pages/FAQ/FAQPage";
import ContactPage from "../pages/Contact/ContactPage";

// Services
import ServicesPage from "../pages/Services/ServicesPage";
import IndividualTherapy from "../pages/Services/IndividualTherapy";
import CouplesTherapy from "../pages/Services/CouplesTherapy";
import AnxietyDepression from "../pages/Services/AnxietyDepression";
import StressManagement from "../pages/Services/StressManagement";
import TraumaTherapy from "../pages/Services/TraumaTherapy";
import OnlineCounseling from "../pages/Services/OnlineCounseling";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Services */}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/individual-therapy" element={<IndividualTherapy />} />
      <Route path="/services/couples-therapy" element={<CouplesTherapy />} />
      <Route path="/services/anxiety-depression" element={<AnxietyDepression />} />
      <Route path="/services/stress-management" element={<StressManagement />} />
      <Route path="/services/trauma-therapy" element={<TraumaTherapy />} />
      <Route path="/services/online-counseling" element={<OnlineCounseling />} />
    </Routes>
  );
};

export default AppRoutes;