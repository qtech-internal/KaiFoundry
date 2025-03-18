'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const content = [
  {
    image: "/assets/img2.jpg", // Update with the correct path
    title: "Leading in Blockchain Innovation and Decentralized Solutions",
    description:
      "From innovative solutions to enterprise adoption, Kai Foundry leads the way in delivering scalable, decentralized blockchain technologies.",
  },
  {
    image: "/assets/img1.jpg",
    title: "Empowering Businesses with Next-Gen Blockchain Solutions",
    description:
      "Seamless integration of blockchain technology to drive transparency, efficiency, and trust.",
  },
  {
    image: "/assets/img3.jpg",
    title: "Revolutionizing Digital Transactions with Security and Speed",
    description:
      "Building the future of secure, decentralized finance with high-performance blockchain networks.",
  },
];

export default function AnimatedSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 4000); // Changes every 4 seconds

    // Stop the interval after the last slide
    if (index === content.length - 1) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex items-center justify-center h-screen bg-white text-black p-10">
      {/* Image Section (Left) */}
      <div className="relative w-1/3 h-[500px] overflow-hidden"> {/* Increased height and reduced width */}
        <AnimatePresence>
          {content.map((item, i) => (
            i <= index && ( // Show all images up to the current index
              <motion.img
                key={item.image}
                src={item.image}
                alt="Blockchain"
                className="absolute w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ y: 100, opacity: 0, x: 20 * i }} // Move slightly to the right for each image
                animate={{ y: 0, opacity: 1, x: 20 * i }} // Move slightly to the right for each image
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Text Section (Right) */}
      <div className="w-2/3 pl-10">
        <AnimatePresence mode="wait">
          <motion.h2
            key={content[index].title}
            className="text-3xl font-bold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {content[index].title}
          </motion.h2>
          <motion.p
            key={content[index].description}
            className="mt-4 text-lg text-gray-600"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {content[index].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}