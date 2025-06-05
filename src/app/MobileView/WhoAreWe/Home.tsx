"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; 
import pic from "./../../../../public/assets/WhoAreWe/Home.svg";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section
    ref={ref}
    className="flex flex-col-reverse lg:flex-row items-center justify-center px-10 py-16 lg:mt-0 md:mt-[70px] bg-white"
  >
    {/* Text Block */}
    <div className="w-full lg:w-1/2 text-center flex flex-col items-center mt-4 lg:mt-0">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="text-[24px] lg:text-7xl w-[300px] lg:w-[500px] text-black font-bold  mt-14"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA24D5] to-[#EA83FF] ">
          Kai Foundry
        </span>
        : This Is
        <span className="block">
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#BA24D5] to-[#EA83FF]">
            Who
          </span>{" "}
          We Are
        </span>
      </motion.h2>
  
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
        className="text-[14px] lg:text-7xl font-bold text-gray-900 mt-2 leading-tight"
      >
        {/* Optional subheading if needed */}
      </motion.h2>
  
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }}
        className="mt-2 lg:mt-10 text-[14px] text-[#808080] lg:text-2xl"
      >
        A team of innovators, creators, and problem-solvers shaping the future
        of blockchain.
      </motion.p>
      <Link href="/ContactUs">
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.9 }}
       className="bg-[#D444F1] mt-12 text-white hover:bg-[#B33BC1] rounded-full py-3 px-4 w-40 transition duration-300"
        >
          
        Contact Us
          </motion.button>
          </Link>
    </div>
  
    {/* Image Block */}
    <div className="mt-10 flex justify-center w-full lg:w-1/2">
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <Image src={pic} alt="Team Working" width={650} height={400} />
      </div>
    </div>
  </section>
  
  );
};

export default Home;
