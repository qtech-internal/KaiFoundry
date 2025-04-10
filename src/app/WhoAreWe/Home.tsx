"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";
import pic from "../../../public/assets/WhoAreWe/Home.svg";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section
      ref={ref}
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 py-16 lg:mt-0 md:mt-[70px]  bg-white"
    >
      <div className=" w-full text-center lg:text-left mt-4 lg:mt-[-5%] ml-5">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className=" text-[24px]  lg:text-7xl w-[300px] lg:w-[500px]   text-black font-bold "
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA24D5] to-[#EA83FF]">
            Kai Foundry 
          </span>:
          This Is
          <span className="block">
            <span className="italic text-transparent bg-clip-text  bg-gradient-to-r from-[#BA24D5] to-[#EA83FF]">
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
          
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 1.0 }}
          className=" mt-2 lg:mt-10 text-[14px] text-[#808080] lg:text-2xl"
        >
          A team of innovators, creators, and problem-solvers shaping the future
          of blockchain.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.9 }}
          className="mt-6 px-6 py-3 bg-[#D444F1] text-white font-semibold rounded-full shadow-lg transition"
        >
          Contact Us
        </motion.button>
      </div>

      <div className="mt-10 ">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <Image src={pic} alt="Team Working" width={650} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Home;
