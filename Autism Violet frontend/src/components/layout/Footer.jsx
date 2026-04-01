 import { Link } from "react-router-dom";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <Container>

        <div className="py-12 grid md:grid-cols-3 gap-10">

          {/* LOGO + BRAND */}
          <div>
            <h2 className="text-primary font-bold text-xl mb-3">
              Autism Violet
            </h2>
            <p className="text-sm text-[#666666]">
              Supporting children with autism through personalized,
              compassionate, and evidence-based therapy.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-[#666666]">

              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>

              {/* ✅ NEW LINKS */}
              <Link to="/kenya">Kenya</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="text-sm text-[#666666] space-y-2">
              <p>📍 Massachusetts</p>
              <p>📧 info@autismviolet.com</p>
              <p>📞 +1 (508) 373-4511</p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t py-6 text-center text-sm text-[#666666]">
          © {new Date().getFullYear()} Autism Violet. All rights reserved.
        </div>

      </Container>
    </footer>
  );
};

export default Footer;