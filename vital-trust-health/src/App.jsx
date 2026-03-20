 import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

// Scroll Features
import RouteScrollTop from "./components/RouteScrollTop";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      {/* Auto scroll on route change */}
      <RouteScrollTop />

      {/* Layout */}
      <Navbar />

      {/* Pages */}
      <AppRoutes />

      <Footer />

      {/* Floating Scroll Button */}
      <ScrollToTop />
    </>
  );
}

export default App;