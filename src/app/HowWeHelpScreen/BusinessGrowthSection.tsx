"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Understanding Your Business",
    description: "We listen to your goals and challenges to see how blockchain can help. Our team analyzes your needs to find the best way to integrate blockchain.",
    icon: "/assets/HowWeHelp/icons/handshake.png",
  },
  {
    title: "Building The Right Solution",
    description: "We create a custom blockchain solution that fits your business needs.Every solution is designed to be scalable, secure, and easy to use.",
    icon: "/assets/HowWeHelp/icons/doc.png",
  },
  {
    title: "Adding It To Your Business",
    description: "We integrate our solutions seamlessly, enhancing your existing processes and unlocking new opportunities for growth",
    icon: "/assets/HowWeHelp/icons/bri.png",
  },
  {
    title: "Supporting Your Growth",
    description: "We keep improving and updating your solution as your business grows. With ongoing support, we help you stay ahead in the blockchain world.",
    icon: "/assets/HowWeHelp/icons/growth.png",
  },
];



  

const BusinessGrowth = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[24px] md:text-4xl font-bold text-gray-900"
      >
        Helping <span className="text-[#E95DFF] text-[24px] md:text-4xl">Your Business Grow</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[#808080] text-base text-[14px] lg:text-lg mt-4"
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
         
            {index < steps.length - 1 && (
              <div className="absolute top-[-0px] left-1/2 transform -translate-x-1/9">
                <Image
                  src={
                    index % 2 === 0
                    ? "/svg/arrow2.svg"
                    : "/svg/arrow.svg"} 
                  alt="Arrow"
                  width={1900} 
                  height={960} 
                  className="hidden lg:block"
                />
              </div>
            )}

            {/* Icon with Background */}
            <div className="bg-gradient-to-r from-[#E95DFF] to-[#D680FF] p-4 rounded-2xl shadow-lg relative">
              <Image src={step.icon} alt={step.title} width={60} height={60} />
            </div>

            {/* Title */}
            <h3 className="text-[16px] lg:text-xl font-semibold text-gray-900 mt-4">{step.title}</h3>
            
            {/* Description */}
            <div className={`flex ${index % 2 !==0 ? ' flex-row-reverse':'flex-row'}`}>
            {index < steps.length - 1 && (
            <Image
                  src={
                    index % 2 === 0
                    ? "/svg/Ellipse 81.svg"
                    : "/svg/Ellipse 85.svg"} 
                  alt="Arrow"
                  width={30} 
                  height={30} 
                  className={`block lg:hidden mt-8`}
                />)}
                <p className="text-[#808080] text-[12px] md:text-base mt-2">{step.description}</p>
            </div>
            

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BusinessGrowth;
