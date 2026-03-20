const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">

      <h2 className="text-2xl font-bold text-primary mb-6">
        Contact Information
      </h2>

      <div className="space-y-4 text-gray-600">

        {/* Address */}
        <a
          href="https://maps.google.com/?q=1205+Lobo+Court+Abingdon+MD+21009"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-primary"
        >
          📍 1205 Lobo Court, Abingdon MD 21009
        </a>

        {/* Phone */}
        <a href="tel:14106527070" className="block hover:text-primary">
          📞 410-652-7070
        </a>

        {/* Email */}
        <a
          href="mailto:info@vitaltrusthealth.com"
          className="block hover:text-primary"
        >
          📧 info@vitaltrusthealth.com
        </a>

      </div>

      {/* Extra Note */}
      <p className="text-sm text-gray-500 mt-6">
        We usually respond within 24 hours.
      </p>

    </div>
  );
};

export default ContactInfo;