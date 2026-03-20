import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
      
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-semibold text-primary">
          {question}
        </span>
        <span className="text-xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* Answer */}
      {open && (
        <p className="mt-3 text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;