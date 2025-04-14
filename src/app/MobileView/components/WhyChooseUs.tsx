"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "/svg/whychooseus/Vector1.svg",
    title: "Expertise",
    description: "We have expertise in developing Blockchain.",
  },
  {
    icon: "/svg/whychooseus/custom.svg",
    title: "Custom Solutions",
    description: "Every project is customized to solve your specific challenges.",
  },
  {
    icon: "/svg/whychooseus/security-pass.svg",
    title: "Security & Reliability",
    description: "We focus on using the most secure & reliable technologies.",
  },
  {
    icon: "/svg/whychooseus/support.svg",
    title: "End To End Support",
    description: "We offer complete support from idea to final deployment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-purple-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why <span className="text-[#D444F1]">Choose</span> Us?
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-8 lg:p-16 bg-white flex flex-col justify-center items-center h-70 md:h-60 w-45 lg:h-140 lg:w-85" // Adjusted height for mobile and desktop
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-[#D444F1] rounded-full">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16" /> {/* Reduced icon size */}
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;