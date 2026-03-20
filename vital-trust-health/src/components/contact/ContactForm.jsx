 import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");

  const [modal, setModal] = useState({
    show: false,
    type: "", // success | error
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill all required fields");
      return;
    }

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

      if (data.success) {
        setModal({
          show: true,
          type: "success",
          message: data.message || "Message sent successfully!",
        });

        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setModal({
          show: true,
          type: "error",
          message: data.message || "Something went wrong",
        });
      }

    } catch (err) {
      setModal({
        show: true,
        type: "error",
        message: "Server error. Please try again later.",
      });
    }
  };

  return (
    <>
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">
          Send Us a Message
        </h2>

        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        <div className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message *"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>

        </div>
      </form>

      {/* 🔥 MODAL */}
      {modal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-lg">

            <div className="text-4xl mb-4">
              {modal.type === "success" ? "✅" : "❌"}
            </div>

            <h3 className="text-xl font-bold mb-2">
              {modal.type === "success" ? "Success" : "Error"}
            </h3>

            <p className="text-gray-600 mb-6">
              {modal.message}
            </p>

            <button
              onClick={() => setModal({ show: false })}
              className="bg-primary text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default ContactForm;