"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "./../../../public/assets/WhoAreWe/CoreImg1.svg";
import img2 from "./../../../public/assets/WhoAreWe/CoreImg2.svg";
import img3 from "./../../../public/assets/WhoAreWe/CoreImg3.svg";

const coreValues = [
  {
    img: img1,
    title: "Innovation First",
    description:
      "We push boundaries, creating cutting-edge blockchain solutions that drive progress.",
  },
  {
    img: img2,
    title: "Grow Together",
    description:
      "We believe in teamwork, continuous learning, and evolving with the industry.",
  },
  {
    img: img3,
    title: "User-Centric Approach",
    description:
      "We design with people in mind, making blockchain technology accessible and seamless.",
  },
];

const CoreValuesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="pt-24 px-6 lg:px-10 py-16 bg-[#FCEBFF] relative z-10 overflow-hidden ">
      <div className="mx-auto flex flex-col items-center ">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-center mb-12"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#821890] to-[#821890]">
            Core
          </span>{" "}
          Values
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full justify-items-center">
  {coreValues.map((value, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: inView ? index * 0.3 + 0.5 : 0,
        ease: "easeOut",
      }}
      className="bg-white shadow-lg rounded-2xl py-10 p-8 flex flex-col items-center text-center w-full sm:w-[300px] md:w-[280px] lg:w-[380px]"
    >
      <Image
        src={value.img}
        alt={value.title}
        width={index === 0 || index === coreValues.length - 1 ? 250 : 300}
        height={index === 0 || index === coreValues.length - 1 ? 250 : 300}
        className="mb-6"
        draggable="false"
      />
      <h3
        className={`text-xl md:text-2xl font-semibold mb-4 ${
          value.title === "Grow Together" ? "mt-[-10px]" : ""
        }`}
      >
        {value.title}
      </h3>
      <p className="text-gray-700 text-base md:text-lg mt-2">
        {value.description}
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default CoreValuesSection;