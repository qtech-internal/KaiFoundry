"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import {  FaGithub } from "react-icons/fa";
import img from "./../../../../public/assets/WhoAreWe/FounderImg.svg";

const FounderSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="px-6 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[24px] lg:text-5xl font-bold text-center mb-6"
        >
          Meet{" "}
          <span className="text-transparent bg-clip-text bg-[#BA24D5]">
            Our Founder
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#808080] text-[16px] lg:text-[24px] text-center w-full lg:max-w-3xl mb-12"
        >
          We focus on the details of everything we do. All to help businesses
          around the world.
        </motion.p>

        {/* Main Content */}
        <div className="grid grid-rows-2 lg:flex  items-center lg:ml-20 gap-4">
          {/* Image Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center ml-4 lg:ml-0 z-10"
          >
            <Image
              src={img}
              alt="Founder"
              width={600}
              height={500}
              className=" shadow-lg "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 md:h-[380px] lg:h-[550px] -mt-20  -ml-4 lg:ml-0 lg:mt-0 pt-10 lg:pt-[150px] px-12 bg-[#F8E6FF]  p-8 shadow-lg"
          >
            <h3 className="text-[14px] lg:text-2xl font-bold text-[#333333] pb-3">
              VINAYAK KALRA
            </h3>
            <p className="text-[#D444F1] font-semibold text-[12px] lg:text-[20px] mt-1">Founder</p>
            <div className="w-12 border-b-2 border-[#D444F1] my-3"></div>
            <p className="text-[#808080] text-[12px] lg:text-[18px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex gap-4 mt-6"
            >
              <a
                href="#"
                className="text-[#D444F1] hover:text-[#D444F1] text-xl lg:text-[35px]"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-[#D444F1] hover:text-[#D444F1] text-xl lg:text-[35px]"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-[#D444F1] hover:text-[#D444F1] text-xl lg:text-[35px]"
              >
                <IoLogoLinkedin />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
