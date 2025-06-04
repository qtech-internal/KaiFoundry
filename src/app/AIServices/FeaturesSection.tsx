"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI ML Solutions",
    description:
      "Leverage advanced Machine Learning models to analyze data, automate tasks, and enhance decision-making. Our AI-driven solutions help businesses optimize operations and unlock new growth opportunities."},
 
];

const FeaturesSection = () => {
  return (
   <section
          className="py-30 px-4 md:px-9 lg:px-30 bg-white relative" 
          style={{
            backgroundImage: "url('/assets/background/bg.gif')",
            backgroundSize: "cover",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" mx-auto text-center">
          
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
             Key <span className="text-[#D444F1]">Features</span> of Industries Solutions
            </motion.h2>
    
        
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                           {services.map((service, index) => (
                             <motion.div
                               key={index}
                               className="p-4 border-t-3 mb-6 max-w-100 mx-auto" // Set max width and center the card
                               style={{ borderColor: "#D444F1" }}
                               initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               transition={{ duration: 0.5, delay: index * 0.2 }}
                               viewport={{ once: true }}
                             >
                               <h3 className="text-xl md:text-2xl font-semibold text-left">
                                 {service.title}
                               </h3>
                               <p className="text-gray-600 mt-3 text-left text-sm md:text-base">
                                 {service.description}
                               </p>
                             </motion.div>
                           ))}
                         </div>
          </div>
        </section>
  );
};

export default FeaturesSection;