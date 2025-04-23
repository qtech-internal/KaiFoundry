"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Understanding Your Business",
    description: "We listen to your goals and challenges to see how blockchain can help.",
    icon: "/assets/HowWeHelp/icons/handshake.png",
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
        Helping <span className="text-[#b243c3]">Your Business Grow</span>
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
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 relative ">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full md:w-1/4 px-4 md:px-6 text-center relative"
          >
         
            {index < steps.length - 1 && (
              <div className="absolute top-[20px] left-1/2 transform -translate-x-1/40 ">
                <Image
                  src={index % 2 === 0 ? "/svg/arrow2.svg" : "/svg/arrow.svg"} 
                  alt="Arrow"
                  width={1900} 
                  height={960} 
                  draggable="false" // Prevent dragging of the image
                />
              </div>
            )}

            {/* Icon with Background */}
            <div className="bg-gradient-to-r from-[#E95DFF] to-[#D680FF] p-4 rounded-2xl shadow-lg relative">
              <Image src={step.icon} alt={step.title} width={60} height={60}
              draggable="false"/>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-lg font-medium text-gray-900 mt-4 opacity-80">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mt-4 ">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessGrowth;
