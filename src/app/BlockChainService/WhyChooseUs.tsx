"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "/custom.png",
    title: "Custom-Built for Your Needs",
    description: "We create blockchain solutions tailored to your business goals.",
  },
  {
    icon: "/unmatched.png",
    title: "Unmatched Security",
    description: "Decentralization and encryption ensure your data stays protected.",
  },
  {
    icon: "/seemless.png",
    title: "Seamless Integration",
    description: "Our blockchain solutions work smoothly with your existing systems.",
  },
  {
    icon: "/future.png",
    title: "Future-Ready Technology",
    description: "Scalable, efficient, and designed to grow with your business.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#FBE8FF]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why <span className="text-[#D444F1]">Choose</span> Service AI?
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-[#D444F1] rounded-full">
                <img src={feature.icon} alt={feature.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#434343] font-manrope">{feature.title}</h3>
              <p className="text-[#434343] text-[16px] font-manrope mt-3">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
