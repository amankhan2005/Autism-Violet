 import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-10">
      <Container>
        <div className="py-10 grid md:grid-cols-4 gap-8">

          {/* Company */}
          <div>
            <h2 className="text-xl font-bold mb-3">
              Vital Trust Health LLC
            </h2>
            <p className="text-sm">
              Compassionate mental health care you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/individual-therapy">Individual Therapy</Link></li>
              <li><Link to="/services/couples-therapy">Couples Therapy</Link></li>
              <li><Link to="/services/anxiety-depression">Anxiety & Depression</Link></li>
              <li><Link to="/services/stress-management">Stress Management</Link></li>
              <li><Link to="/services/trauma-therapy">Trauma Therapy</Link></li>
              <li><Link to="/services/online-counseling">Online Counseling</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>

            <div className="space-y-2 text-sm">

              {/* Address (Google Maps link) */}
              <a
                href="https://maps.google.com/?q=1205+Lobo+Court+Abingdon+MD+21009"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
              >
                📍 1205 Lobo Court, Abingdon MD 21009
              </a>

              {/* Phone */}
              <a
                href="tel:14106527070"
                className="block hover:underline"
              >
                📞 410-652-7070
              </a>

              {/* Email */}
              <a
                href="mailto:info@vitaltrusthealth.com"
                className="block hover:underline"
              >
                📧 info@vitaltrusthealth.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4 text-lg">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                👍
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/30 py-4 text-center text-sm">
          © {new Date().getFullYear()} Vital Trust Health LLC. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;