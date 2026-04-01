import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Kenya from "../pages/Kenya";
import PrivacyPolicy from "../pages/PrivacyPolicy";

// ✅ NEW IMPORTS
import EarlyIntervention from "../pages/EarlyIntervention";
import Therapies from "../pages/Therapies";
import Assessments from "../pages/Assessments";
import Programs from "../pages/Programs";
import ParentSupport from "../pages/ParentSupport";
import Resources from "../pages/Resources";

import useScrollToHash from "../hooks/useScrollToHash";

// Page animation wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

// ✅ Scroll handler
const ScrollHandler = () => {
  useScrollToHash();
  return null;
};

const AppRoutes = () => {
  return (
    <Router>

      <ScrollHandler />

      <Layout>
        <Routes>

          {/* Core Pages */}
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/kenya" element={<PageWrapper><Kenya /></PageWrapper>} />
          <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />

          {/* 💜 SubNavbar Pages */}
          <Route path="/early-intervention" element={<PageWrapper><EarlyIntervention /></PageWrapper>} />
          <Route path="/therapies" element={<PageWrapper><Therapies /></PageWrapper>} />
          <Route path="/assessments" element={<PageWrapper><Assessments /></PageWrapper>} />
          <Route path="/programs" element={<PageWrapper><Programs /></PageWrapper>} />
          <Route path="/parent-support" element={<PageWrapper><ParentSupport /></PageWrapper>} />
          <Route path="/resources" element={<PageWrapper><Resources /></PageWrapper>} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;