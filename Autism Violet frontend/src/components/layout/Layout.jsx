import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar"; // ✅ ADD THIS
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 🔷 Main Navbar */}
      <Navbar />

      {/* 💜 Secondary Navbar */}
      <SubNavbar />

      {/* 📄 Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 🔻 Footer */}
      <Footer />

    </div>
  );
};

export default Layout;