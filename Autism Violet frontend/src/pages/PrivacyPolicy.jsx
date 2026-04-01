import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* Title */}
          <h1 className="heading mb-6">
            Privacy Policy for Mobile Information and Text Messaging Consent
          </h1>

          <p className="subtext mb-8">
            At Autism Violet, we are committed to protecting the privacy and
            confidentiality of our customers’ personal information. This policy
            explains how we handle mobile information and text messaging consent.
          </p>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="font-semibold text-xl mb-2">
              1. No Sharing of Mobile Information with Third Parties
            </h2>
            <p className="subtext">
              We do not share any mobile information, including phone numbers,
              with third parties or affiliates for marketing or promotional
              purposes. Your data is used only to improve services such as
              scheduling updates, reminders, and support.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="font-semibold text-xl mb-2">
              2. Text Messaging Consent Privacy
            </h2>
            <p className="subtext">
              When you opt-in to receive SMS communications, your consent is used
              solely by Autism Violet. This data is never shared with third
              parties or affiliates under any circumstances.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="font-semibold text-xl mb-2">
              3. Data Security
            </h2>
            <p className="subtext">
              We implement strict security measures to protect your information
              from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="font-semibold text-xl mb-2">
              4. Limited Use of Mobile Information
            </h2>
            <ul className="list-disc pl-6 text-[#666666] space-y-2">
              <li>Event scheduling</li>
              <li>Service reminders</li>
              <li>Customer support notifications</li>
              <li>Operational updates</li>
            </ul>
            <p className="subtext mt-3">
              Your information will never be used for marketing without your
              explicit consent.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="font-semibold text-xl mb-2">
              5. Reviewing and Updating Consent
            </h2>
            <p className="subtext">
              You can withdraw or update your SMS consent at any time by
              contacting our support team.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="font-semibold text-xl mb-2">
              6. Changes to This Policy
            </h2>
            <p className="subtext">
              We may update this policy from time to time. Please review it
              periodically to stay informed.
            </p>
          </div>

          {/* Contact */}
          <div className="border rounded-2xl p-6 bg-gray-50">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p className="text-[#666666]">
              📧 info@autismviolet.com <br />
              📞 +1 (617) 467-2342
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;