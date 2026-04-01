import { motion } from "framer-motion";
import Container from "../components/common/Container";

const Contact = () => {
  return (
    <div className="bg-white py-24">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="heading text-3xl mb-4">
            Get in Touch
          </h1>
          <p className="subtext">
            We’re here to support your child’s journey. Reach out to us today.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-semibold text-lg">📍 Location</h3>
              <p className="text-light">Massachusetts</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">📧 Email</h3>
              <p className="text-light">info@autismviolet.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p className="text-light">+1 (508) 373-4511</p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm space-y-4"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg focus:outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </Container>
    </div>
  );
};

export default Contact;