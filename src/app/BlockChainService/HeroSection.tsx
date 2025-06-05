"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (

    <section className="relative flex items-center py-60 w-full overflow-hidden px-6 md:px-6 ">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <Image
      src="/assets/background/bc_bg.gif" 
          alt="Background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          draggable="false"
        />
      </div>
    
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-y-0 left-0 w-1/2 bg-white/50 backdrop-blur-md z-10"
      ></motion.div>
    
      <div className="w-full flex justify-center md:justify-start">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 w-full md:w-2/3 lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left p-8 rounded-lg"
        >
        
             {/* <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 ">
          Empowering <br /> Innovation with <br />
          <span className="text-[#E95DFF]">Blockchain</span> Solutions
        </h2> */}
<h2 className="font-bold text-gray-900">
  {/* Small  */}
  <span className="block md:hidden text-2xl sm:text-3xl leading-snug">
    Empowering Innovation with <span className="text-[#E95DFF] italic">Blockchain</span> Solutions
  </span>

  {/* Medium  */}
  <span className="hidden md:block text-3xl md:text-4xl lg:text-6xl leading-tight">
    Empowering <br />
    Innovation with <br />
    <span className="text-[#E95DFF] italic">Blockchain</span> Solutions
  </span>
</h2>

          <p className="text-gray-600 text-base md:text-lg mt-4">
          Secure, scalable, and customized blockchain development for the digital future.
          </p>
          <Link href="/ContactUs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#E95DFF] to-[#D680FF] text-white text-lg hover:bg-[#821890] font-medium shadow-lg transition"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;