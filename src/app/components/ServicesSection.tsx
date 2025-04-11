"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link"; 

const services = [
  {
    title: "BLOCKCHAIN DEVELOPMENT",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/svg/img3.svg", 
    link: "/BlockChainService", 
  },
  {
    title: "GAME DEVELOPMENT",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/svg/img2.svg", 
    link: "/GameDevelopment", 
  },
  {
    title: "AI SERVICES",
    description:
      "We create blockchain solutions that help businesses grow whether it’s smart contracts, digital tokens, or decentralized apps.",
    image: "/svg/img1.svg", 
    link: "/AIServices", 
  },
];

const ServicesSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section ref={ref} className="py-40 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-12">
        {/* Left Side */}
        <motion.div
          className="w-full text-center  lg:text-left md:w-1/3 mb-10  md:mb-0 pr-0 md:pr-6"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[24px] flex gap-2 justify-center items-center lg:block  w-full lg:max-w-[250px] md:text-6xl font-bold text-gray-900">
            WHAT 
            <p className="flex gap-2 lg:gap-3">WE<span className="text-[#D444F1]">PROVIDE</span></p>
          </h2>
          <p className="text-[#333333] text-[14px] md:text-3xl font-[400]  mt-4">
            Services That Drive Your Success
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="relative w-full md:w-2/3 overflow-hidden">
          {isMobile ? (
            <div className="flex flex-col gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.link} passHref>
                  <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer">
                    <img
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover" 
                    />
                    <div className="p-4">
                      <h3 className="text-lg md:text-xl font-bold">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex overflow-hidden">
              <div className={`flex flex-row ${inView ? 'animate-slide' : ''}`}>
                {services.map((service, index) => (
                  <Link key={index} href={service.link} passHref>
                    <div className="min-w-full md:min-w-[500px] bg-white rounded-xl shadow-lg overflow-hidden mx-2 cursor-pointer">
                      <img
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-80 object-cover" 
                      />
                      <div className="p-4">
                        <h3 className="text-lg md:text-xl font-bold">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(services.length - 1) * 516}px); // Adjusted for new width
          }
        }

        .animate-slide {
          display: flex;
          animation: slide 20s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;