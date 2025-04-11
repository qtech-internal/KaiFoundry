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
    <section className="py-24 bg-purple-100">
      <div className="container mx-auto px-2 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          className="text-[24px] lg:text-5xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why <span className="text-[#D444F1]">Choose</span> Us?
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2  w-full lg:grid-cols-4 gap-3 mt-4 lg:mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-16 bg-white flex flex-col justify-center items-center "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-1 lg:mb-6 bg-[#D444F1] rounded-full">
                {feature.icon}
              </div>
              <h3 className=" text-[#434343] text-[14px] lg:text-2xl font-semibold w-[200px] lg:w-full  ">{feature.title}</h3>
              <p className="text-[#666666] mt-4 text-[12px] lg:text-base w-[180px] lg:w-full  ">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
