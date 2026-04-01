import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/common/Container";

const API_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-24">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="heading text-3xl mb-4">Contact Autism Violet</h1>
          <p className="subtext">
            Have questions about ABA therapy? We’re here to help you.
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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm space-y-4"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded-lg focus:outline-none"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded-lg focus:outline-none"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone (optional)"
              className="w-full border p-3 rounded-lg focus:outline-none"
            />

            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border p-3 rounded-lg focus:outline-none"
            ></textarea>

            {/* ERROR */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-full font-medium hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

        {/* SUCCESS MODAL */}
        {success && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl text-center max-w-sm w-full">
              <h2 className="text-xl font-semibold mb-2 text-green-600">
                Message Sent 🎉
              </h2>
              <p className="text-gray-600 mb-4">
                Thank you! We’ll get back to you shortly.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="bg-primary text-white px-6 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </Container>
    </div>
  );
};

export default Contact;