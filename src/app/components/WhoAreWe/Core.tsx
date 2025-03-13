"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../../../public/assets/WhoAreWe/CoreImg1.svg";
import img2 from "../../../../public/assets/WhoAreWe/CoreImg2.svg";
import img3 from "../../../../public/assets/WhoAreWe/CoreImg3.svg";

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
    <section ref={ref} className="px-6 lg:px-20 py-16 bg-[#FCEBFF]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold text-center mb-12"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#9C27B0] to-[#EA83FF]">
            Core
          </span>{" "}
          Values
        </motion.h2>

        {/* Cards Animation */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
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
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center max-w-sm"
            >
              <Image
                src={value.img}
                alt={value.title}
                width={200}
                height={200}
                className="mb-6"
              />
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
