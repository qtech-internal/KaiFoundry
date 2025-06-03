"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import img from "./../../../public/assets/WhoAreWe/FounderImg.svg";

const FounderSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="px-6 lg:px-20 py-16 font-inter">

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-semibold text-center leading-[72px] mb-6"
        >
          Meet{" "}
          <span className="text-[#BA24D5] bg-clip-text">
            Our Founder
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-gray-600 text-center  mb-12 text-xl font-[400] leading-[28px]" // Increased font size
        >
          We focus on the details of everything we do. All to help businesses
          around the world.
        </motion.p>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center lg:ml-20 gap-4">
          {/* Image Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              src={img}
              alt="Founder"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
              draggable="false"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 md:h-[380px] lg:h-[520px] lg:pt-[150px] px-12 bg-[#FAE3FF]"
          >
            <h3 className="text-2xl font-bold text-gray-800 pb-3">
              VINAYAK KALRA
            </h3>
            <p className="text-[#D444F1] font-semibold text-lg mt-1">Founder</p>
            <div className="w-12 border-b-2 border-[#D444F1] my-3"></div>
            <p className="text-gray-700 leading-relaxed">
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
                className="text-[#D444F1] hover:text-[#EA83FF] text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-[#D444F1] hover:text-[#EA83FF] text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-[#D444F1] hover:text-[#EA83FF] text-xl"
              >
                <FaLinkedinIn />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;