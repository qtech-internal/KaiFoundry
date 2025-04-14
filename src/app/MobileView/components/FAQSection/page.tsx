import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
  const faqs = [
    { question: "What is Kai Foundry?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How does Kai Foundry differentiate itself from other blockchain companies?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How can I get in touch with Kai Foundry?", answer: "As a creative agency we work with you to develop solutions to address your brand needs. That includes various aspects of brand planning and strategy, marketing and design." },
    { question: "How does pricing work for Kai Foundry’s services?", answer: "Our pricing is based on..." },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 flex-col py-24">
      <h2 className="text-[24px] lg:text-3xl font-bold text-center text-gray-900">
        <span className="text-[#BA24D5]">Frequently</span> Asked Questions
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
