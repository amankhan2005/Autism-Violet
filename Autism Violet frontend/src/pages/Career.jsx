import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/common/Container";

const API_URL = import.meta.env.VITE_API_URL;

const Career = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const isValid =
    form.name &&
    form.email &&
    form.phone &&
    form.position &&
    form.resume;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      const res = await fetch(`${API_URL}/api/career`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        message: "",
        resume: null,
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const input =
    "w-full border border-[#EDE7F6] px-4 py-3 rounded-xl focus:outline-none focus:border-[#7C3AED] text-sm";

  return (
    <div className="bg-[#faf9ff]">

      {/* HERO */}
      <section className="py-28 text-center">
        <Container>
          <motion.p className="text-xs tracking-[0.2em] uppercase text-[#7C3AED] mb-4">
            Careers at Autism Violet
          </motion.p>

          <motion.h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#1a0a3b] leading-tight mb-4">
            Build a Meaningful{" "}
            <em className="italic text-[#6A3FA0]">Career</em>
          </motion.h1>

          <p className="text-gray-600 max-w-[550px] mx-auto text-[15px]">
            Join a team dedicated to making a real difference in children's lives through compassionate and evidence-based care.
          </p>
        </Container>
      </section>

      {/* MAIN */}
      <section className="pb-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-14 max-w-[1100px] mx-auto">

            {/* LEFT SIDE */}
            <motion.div className="flex flex-col gap-6">

              <div className="bg-white p-6 rounded-2xl border hover:shadow-md">
                <h3 className="font-semibold text-[#1a0a3b] mb-2">Open Roles</h3>
                <p className="text-gray-600 text-sm">
                  RBT & BCBA positions available across multiple locations.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border hover:shadow-md">
                <h3 className="font-semibold mb-2">Benefits</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>✔ Competitive Salary</li>
                  <li>✔ Flexible Schedule</li>
                  <li>✔ Career Growth</li>
                </ul>
              </div>

              <div className="bg-[#1a0a3b] text-white p-6 rounded-2xl">
                <p className="font-playfair text-lg italic">
                  “Every child deserves the chance to thrive — and so do you.”
                </p>
              </div>

            </motion.div>

            {/* FORM */}
            <motion.div className="bg-white border rounded-2xl p-8 shadow-sm">

              <h2 className="font-playfair text-2xl font-bold text-[#1a0a3b] mb-6">
                Apply Now
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input name="name" placeholder="Full Name" className={input} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" className={input} onChange={handleChange} required />
                <input name="phone" placeholder="Phone" className={input} onChange={handleChange} required />

                <select name="position" className={input} onChange={handleChange} required>
                  <option value="">Select Position</option>
                  <option value="RBT">RBT</option>
                  <option value="BCBA">BCBA</option>
                </select>

                <input name="experience" placeholder="Years of Experience" className={input} onChange={handleChange} />

                {/* Upload */}
                <label className="border-2 border-dashed border-[#EDE7F6] p-4 rounded-xl text-center cursor-pointer hover:border-[#7C3AED]">
                  <input type="file" name="resume" onChange={handleChange} className="hidden" required />
                  Upload Resume (PDF/DOC)
                </label>

                <textarea name="message" rows="4" placeholder="Cover Letter" className={input} onChange={handleChange} />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  disabled={!isValid || loading}
                  className={`py-3 rounded-full font-semibold transition ${
                    isValid
                      ? "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                      : "bg-gray-300"
                  }`}
                >
                  {loading ? "Submitting..." : "Apply Now"}
                </button>

              </form>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl text-center max-w-sm">
            <h2 className="text-xl font-bold mb-2">Application Submitted 🎉</h2>
            <p className="text-gray-600 mb-4">
              We’ll review your profile and contact you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-[#7C3AED] text-white px-5 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Career;