"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Understanding Your Business",
    description: "We listen to your goals and challenges to see how blockchain can help.",
    icon: "/assets/HowWeHelp/icons/handshake.png", // Replace with your actual icon path
  },
  {
    title: "Building The Right Solution",
    description: "We create a custom blockchain solution that fits your business.",
    icon: "/assets/HowWeHelp/icons/doc.png",
  },
  {
    title: "Adding It To Your Business",
    description: "We integrate blockchain seamlessly into your operations.",
    icon: "/assets/HowWeHelp/icons/bri.png",
  },
  {
    title: "Supporting Your Growth",
    description: "We keep improving and updating your solution as your business grows.",
    icon: "/assets/HowWeHelp/icons/growth.png",
  },
];

const BusinessGrowth = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900"
      >
        Helping <span className="text-[#E95DFF]">Your Business Grow</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 text-base md:text-lg mt-4"
      >
        We help businesses grow with smart blockchain solutions, making things faster, safer, and more efficient.
      </motion.p>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full md:w-1/4 px-4 md:px-6 text-center relative"
          >
            {/* Icon with Background */}
            <div className="bg-gradient-to-r from-[#E95DFF] to-[#D680FF] p-4 rounded-2xl shadow-lg">
              <Image src={step.icon} alt={step.title} width={60} height={60} />
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-4">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mt-2">{step.description}</p>

            {/* Dotted Line with Arrow */}
            {index < steps.length - 1 && (
              <div className="absolute flex items-center justify-center w-full" style={{ top: '100%', left: '50%', transform: 'translateX(-50%)' }}>
                <div className="flex items-center">
                  <div className="w-16 h-1 border-t-2 border-dotted border-[#E95DFF] relative">
                    <div className="absolute right-[-10px] top-[-5px] w-0 h-0 border-l-4 border-l-[#E95DFF] border-b-4 border-b-transparent border-t-4 border-t-transparent"></div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessGrowth;