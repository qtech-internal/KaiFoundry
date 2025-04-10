'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Custom Exchange",
    description: "Tailored solutions to meet your specific trading needs."
  },
  {
    title: "White Label Exchange",
    description: "Launch your own exchange with our white label solutions."
  },
  {
    title: "Margin Trading Exchange",
    description: "Enable margin trading for increased trading opportunities."
  },
  {
    title: "Decentralized Exchange",
    description: "Trade directly from your wallet with our DEX solutions."
  },
  {
    title: "Arbitrage Bots",
    description: "Trade directly from your wallet with our DEX solutions."
  },
  {
    title: "Derivatives Exchange",
    description: "Trade directly from your wallet with our DEX solutions."
  },
  {
    title: "Centralized Exchange",
    description: "Trade directly from your wallet with our DEX solutions."
  },
  {
    title: "P2 Exchange",
    description: "Trade directly from your wallet with our DEX solutions."
  },
  {
    title: "Market Making Exchange",
    description: "Trade directly from your wallet with our DEX solutions."
  },
];

const SolutionsSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);

  return (
    <div className="py-12 w-full">
      {/* Title */}
      <h2 className="text-[24px] md:text-4xl font-bold text-[#D444F1] text-center px-4 md:px-10">
        Solutions <span className='text-black'>Built For</span> The Future
      </h2>
      <p className="text-[#666666] mt-2 text-center px-4 md:px-10 text-[14px] md:text-lg">
        Blockchain solutions designed to power your business with security, efficiency, and scalability.
      </p>

      {/* List of Solutions */}
      <div className="mt-8 w-full flex flex-col space-y-4">
        {solutions.map((solution, index) => (
          <div key={index} className="relative w-full px-4 md:px-40"> {/* Added consistent padding here */}
            <div
              className="relative overflow-hidden text-lg md:text-xl font-semibold" 
              style={{ color: '#D444F1', padding: '2rem 0' }} // Set text color and padding
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => setSelectedSolution(selectedSolution === index ? null : index)} // Toggle selection
            >
              {/* Background Hover Effect (Expands from both sides) */}
              <motion.div
                initial={{ width: 0, left: "50%" }}
                animate={hoverIndex === index ? { width: "100%", left: "0%" } : { width: 0, left: "50%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-0 h-full"
                style={{
                  backgroundColor: '#F6D0FE',
                  opacity: 0.25,
                  backdropFilter: 'blur(80px)', // Adjust the blur value as needed
                }} // Light background color for hover effect
              />
              
              <span className="relative z-10 block text-[18px] w-full">
                {index + 1}. {solution.title}
              </span>

              
              <div className="absolute bottom-0 h-[0.5px]" style={{ backgroundColor: '#D444F1', width: '100%' }} /> {/* Line at the bottom */}
            </div>

            {/* Description Section (Smooth Slide Down) */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={selectedSolution === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden bg-purple-50 rounded-lg" // Removed border
            >
              <div className="p-4 text-left"> {/* Added text-left for description */}
                <h3 className="text-lg md:text-2xl font-semibold" style={{ color: '#D444F1' }}>{solution.title}</h3>
                <p className="text-gray-700 mt-2 text-[12px] md:text-lg"> {/* Increased text size */}
                  {solution.description}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;