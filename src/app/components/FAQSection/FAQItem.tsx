import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center py-4 text-left text-gray-700 font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <FiChevronRight
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && <p className="text-gray-600 pb-4">{answer}</p>}
    </div>
  );
};

export default FAQItem;
