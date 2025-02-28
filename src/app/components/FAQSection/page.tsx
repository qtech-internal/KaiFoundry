import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const faqs = [
    { question: "What is Kai Foundry?", answer: "Kai Foundry is a blockchain-based platform..." },
    { question: "How does Kai Foundry differentiate itself from other blockchain companies?", answer: "Kai Foundry stands out by..." },
    { question: "How can I get in touch with Kai Foundry?", answer: "You can contact us via email at..." },
    { question: "How does pricing work for Kai Foundry’s services?", answer: "Our pricing is based on..." },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 flex-col py-24">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        <span className="text-fuchsia-800">Frequently</span> Asked Questions
      </h2>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
