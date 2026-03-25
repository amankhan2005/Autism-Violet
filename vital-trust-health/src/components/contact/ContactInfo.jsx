 const ContactInfo = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 relative overflow-hidden">
      
      {/* Decorative subtle background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 opacity-50"></div>

      <h3 className="text-xl font-bold text-slate-800 mb-8 relative z-10">
        Contact Information
      </h3>

      <div className="space-y-6 relative z-10">
        
        {/* Address */}
        <a
          href="https://maps.google.com/?q=1205+Lobo+Court+Abingdon+MD+21009"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 group"
        >
          <div className="bg-teal-50 text-[#3EB8A7] p-3 rounded-xl group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
            <IconLocation />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Office Location</p>
            <p className="text-slate-700 font-medium leading-relaxed group-hover:text-[#F97316] transition-colors">
              1205 Lobo Court, Abingdon MD 21009
            </p>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+14438383955"
          className="flex items-start gap-4 group"
        >
          <div className="bg-teal-50 text-[#3EB8A7] p-3 rounded-xl group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
            <IconPhone />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone Number</p>
            <p className="text-slate-700 font-medium group-hover:text-[#F97316] transition-colors">
              +1 (443) 838-3955
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:vitaltrusth@gmail.com"
          className="flex items-start gap-4 group"
        >
          <div className="bg-teal-50 text-[#3EB8A7] p-3 rounded-xl group-hover:bg-[#F97316] group-hover:text-white transition-all duration-300">
            <IconMail />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
            <p className="text-slate-700 font-medium group-hover:text-[#F97316] transition-colors">
              vitaltrusth@gmail.com
            </p>
          </div>
        </a>

      </div>

      {/* Extra Note */}
      <div className="mt-8 pt-6 border-t border-slate-100 relative z-10">
        <p className="flex items-center gap-2 text-sm text-slate-500">
          <IconClock />
          <span>We usually respond within 24 hours.</span>
        </p>
      </div>

    </div>
  );
};

// --- Icon Components ---

const IconLocation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default ContactInfo;