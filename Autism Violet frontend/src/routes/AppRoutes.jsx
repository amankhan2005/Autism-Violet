 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import About from "../pages/About";
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

// ✅ Scroll handler (IMPORTANT)
const ScrollHandler = () => {
  useScrollToHash();
  return null;
};

const AppRoutes = () => {
  return (
    <Router>

      {/* ✅ FIX: hook now inside Router */}
      <ScrollHandler />

      <Layout>
        <Routes>

          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />

          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />

          <Route
            path="/services"
            element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            }
          />

          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />

        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;