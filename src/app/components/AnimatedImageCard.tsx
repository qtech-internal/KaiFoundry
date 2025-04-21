"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const content = [
  {
    image: "/assets/img2.jpg",
    title: "Founded as a Blockchain Solutions Provider",
    description:
      "We have successfully completed 30+ projects, showcasing their ability to handle complex blockchain solutions across various industries, including white-label exchanges, multi-currency wallets, and stablecoin platforms.",
  },
  {
    image: "/assets/img1.jpg",
    title: "Building the Future with FileCoin Wallet",
    description:
      "Vinayak Karla discusses the development and impact of the Filecoin wallet in Bangalore, exploring new frontiers in blockchain and decentralized storage solutions",
  },
  {
    image: "/assets/img3.jpg",
    title: "Leading in Blockchain Innovation and Decentralized Solutions",
    description:
      "From innovative solutions to enterprise adoption, Kai Foundry leads the way in delivering scalable, decentralized blockchain technologies.",
  },
];

export default function AnimatedSection() {
  const [index, setIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 }); // Trigger when 10% of the section is in view

  useEffect(() => {
    const interval = setInterval(() => {
      if (inView && index < content.length - 1) {
        setIndex((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [index, inView]);

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center sm:justify-center  bg-white text-black p-6 md:p-10">
      {/* <div className="relative w-full md:w-1/2 h-[40vh] md:h-[85vh] flex sm:justify-center ">
        <AnimatePresence>
          {inView && content.map((item, i) => (
            i <= index && (
              <motion.img
                key={item.image}
                src={item.image}
                alt="Blockchain"
                className="absolute w-[90%] md:w-[85%] h-full object-cover rounded-4xl shadow-2xl border-2 border-white"
                initial={{ y: 100 + 10 * i, opacity: 0, x: 20 * i }}
                animate={{ y: 20 * i, opacity: 1, x: 20 * i }}
                exit={{ y: -100 - 20 * i, opacity: 0 }}
                transition={{ duration: 1 }}
              />
            )
          ))}
        </AnimatePresence>
      </div> */}
<div className="relative w-full md:w-1/2 h-[40vh] md:h-[85vh] flex sm:justify-center">
  <AnimatePresence>
    {inView && content.map((item, i) => (
      i <= index && (
        <motion.img
          key={item.image}
          src={item.image}
          alt="Blockchain"
          className="absolute max-w-[90%] md:max-w-[85%] h-auto object-contain rounded-4xl shadow-2xl border-2 border-white"
          initial={{ y: 100 + 10 * i, opacity: 0, x: 20 * i }}
          animate={{ y: 20 * i, opacity: 1, x: 20 * i }}
          exit={{ y: -100 - 20 * i, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      )
    ))}
  </AnimatePresence>
</div>

      <div className="w-full md:w-1/2 mt-20 md:mt-0 md:pl-10 text-center md:text-left h-auto">
        <AnimatePresence mode="wait">
          {inView && (
            <>
              <motion.h2
                key={content[index].title}
                className="text-4xl md:text-6xl font-bold tracking-wide" // Increased font size and added tracking
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                {content[index].title}
              </motion.h2>
              <motion.p
                key={content[index].description}
                className="mt-5 md:mt-10 text-2xl text-gray-600 leading-relaxed" // Increased font size and added line height
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {content[index].description}
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}