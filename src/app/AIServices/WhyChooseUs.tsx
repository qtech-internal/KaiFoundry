"use client";

import { motion } from "framer-motion";

// Replace these with actual image URLs or import statements
const features = [
  {
    image: "/Vector.png",
    title: "Smarter Decision-Making",
    description: "Leverage AI-driven insights to make faster, data-backed decisions.",
  },
  {
    image: "/insight2.png",
    title: "Automation & Efficiency",
    description: "Reduce manual work with intelligent automation, boosting productivity.",
  },
  {
    image: "/Vector2.png",
    title: "Personalized Experiences",
    description: "Enhance customer engagement with AI-powered personalization.",
  },
  {
    image: "/innovate.png",
    title: "Future-Ready Solutions",
    description: "Stay ahead with cutting-edge AI that evolves with your business needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#FBE8FF]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why <span className="text-[#D444F1]">Choose</span> This Service?
        </motion.h2>

        {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
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
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-3">{feature.description}</p>
            </motion.div>
          ))}
        </div> */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 mt-10">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-white flex flex-col justify-center items-center  shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                       <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-[#D444F1] rounded-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
                      <h3 className="text-base md:text-xl font-semibold text-gray-900 text-center ">{feature.title}</h3>
                      <p className="text-gray-600 mt-2 text-sm md:text-base text-center ">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
