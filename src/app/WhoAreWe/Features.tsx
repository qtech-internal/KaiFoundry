"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { motion } from "framer-motion";
import bg from "./../../../public/assets/background/bg.png";
import img1 from "./../../../public/assets/WhoAreWe/FeaturesImg1.svg";
import img2 from "./../../../public/assets/WhoAreWe/FeaturesImg2.svg";
import img3 from "./../../../public/assets/WhoAreWe/FeaturesImg3.svg";

const features = [
  {
    img: img1,
    title: "Make Blockchain Accessible",
    description:
      "We simplify blockchain technology, making it easier for businesses to integrate and benefit from it.",
  },
  {
    img: img2,
    title: "Secure And Trustworthy",
    description:
      "Our goal is to make blockchain safer, so businesses and users can trust their data and transactions.",
  },
  {
    img: img3,
    title: "Champion Decentralization",
    description:
      "We believe people should own their digital assets and data without depending on big companies.",
  },
];

const FeaturesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="px-6 lg:px-20 py-16 bg-white min-h-screen w-full flex items-center"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "fit",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[24px] lg:text-6xl font-bold text-center lg:text-left lg:w-1/2"
        >
          What
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BA24D5] to-[#EA83FF]">
            {" "}
            Drives
          </span>{" "}
          Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12 lg:w-1/2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: inView ? 0.8 + 0.2 * index : 0,
              }}
              className="flex flex-col items-center lg:items-start justify-center gap-2 lg:gap-4"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]"
                />
              </div>

              <h3 className="text-[16px] lg:text-2xl text-[#333333] font-[600] text-center lg:text-left">{feature.title}</h3>

              <p className="text-[12px] text-[#333333]  lg:text-lg text-center lg:text-left">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
