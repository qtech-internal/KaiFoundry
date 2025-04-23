"use client";

import { motion } from "framer-motion";
import { UserCheck, FlaskConical, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: <UserCheck size={40} className="text-white" />,
    title: "Expertise",
    description: "We have expertise in developing Blockchain.",
  },
  {
    icon: <FlaskConical size={40} className="text-white" />,
    title: "Custom Solutions",
    description: "Every project is customized to solve your specific challenges.",
  },
  {
    icon: <ShieldCheck size={40} className="text-white" />,
    title: "Security & Reliability",
    description: "We focus on using the most secure & reliable technologies.",
  },
  {
    icon: <Headphones size={40} className="text-white" />,
    title: "End To End Support",
    description: "We offer complete support from idea to final deployment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-purple-100">
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
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-3">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;