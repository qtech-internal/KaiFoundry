"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "/svg/whychooseus/Vector1.svg", // Use the path relative to the public directory
    title: "Expertise",
    description: "We have expertise in developing Blockchain.",
  },
  {
    icon: "/svg/whychooseus/custom.svg", // Adjust the path as necessary
    title: "Custom Solutions",
    description: "Every project is customized to solve your specific challenges.",
  },
  {
    icon: "/svg/whychooseus/security-pass.svg", // Adjust the path as necessary
    title: "Security & Reliability",
    description: "We focus on using the most secure & reliable technologies.",
  },
  {
    icon: "/svg/whychooseus/support.svg", // Adjust the path as necessary
    title: "End To End Support",
    description: "We offer complete support from idea to final deployment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-44 bg-purple-100">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-20 bg-white  h-120 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-[#D444F1] rounded-full">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16"
                  draggable="false" // Prevent dragging of the image
                /> {/* Use img tag for SVG */}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-4 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;