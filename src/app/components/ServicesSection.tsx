"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "BLOCKCHAIN DEVELOPMENT",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/assets/services/img1.png",
  },
  {
    title: "INDUSTRIES SOLUTION",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/assets/services/img2.png",
  },
  {
    title: "GAME DEVELOPMENT",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/assets/services/img1.png",
  },
  {
    title: "AI SERVICES",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/assets/services/img2.png",
  },
  {
    title: "AI",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/assets/services/img2.png",
  },
  {
    title: "WEB3 SOLUTIONS",
    description:
      "We build user-friendly decentralized applications that empower businesses in the decentralized ecosystem.",
    image: "/assets/services/img3.png",
  },
];

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (currentIndex >= 3) return; // Stop at the 3rd slide (index 2)

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < 3 ? prevIndex + 1 : prevIndex // Stop at index 2
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-12">
        {/* Left Side */}
        <motion.div
          className="w-full md:w-1/3 mb-10 md:mb-0 pr-0 md:pr-6"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            WHAT <br />
            WE <span className="text-[#D444F1]">PROVIDE</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 mt-4">
            Services That Drive Your Success
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="relative w-full md:w-2/3 overflow-hidden">
          <motion.div
            className="flex flex-col md:flex-row transition-transform duration-700 ease-in-out"
            animate={{ x: `-${currentIndex * 90}%` }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="min-w-full md:min-w-[500px] bg-white rounded-xl shadow-lg overflow-hidden mx-2 mb-4 md:mb-0"
                initial={{ opacity: 0, y: 20 }} // Initial state for card animation
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate to visible state
                transition={{ duration: 0.5, delay : index * 0.1 }} // Delay for staggered effect
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-90 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;