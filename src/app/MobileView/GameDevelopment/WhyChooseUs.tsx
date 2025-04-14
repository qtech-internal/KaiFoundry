"use client";

import { motion } from "framer-motion";
import { Gamepad2, Monitor, BarChart3, Handshake } from "lucide-react";

const features = [
  {
    icon: <Gamepad2 size={40} className="text-white" />,
    title: "Engaging Experiences",
    description: "We craft immersive games that captivate players.",
  },
  {
    icon: <Monitor size={40} className="text-white" />,
    title: "Multi-Platform Development",
    description: "We create games for mobile, PC, web, and blockchain for a wider audience.",
  },
  {
    icon: <BarChart3 size={40} className="text-white" />,
    title: "Scalability & Performance",
    description: "Optimized for smooth gameplay and future expansions.",
  },
  {
    icon: <Handshake size={40} className="text-white" />,
    title: "Monetization Ready",
    description: "Seamless integration of in-game purchases, ads, and NFTs.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-purple-100">
          <div className="container mx-auto px-6 md:px-12 text-center">
      
            <motion.h2
              className="text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Why <span className="text-[#D444F1]">Choose</span> Us?
            </motion.h2>
    

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

export default Features;
