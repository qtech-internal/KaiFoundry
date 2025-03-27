"use client";
import Image from "next/image";
import Link from "next/link";

const HowWeHelp = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center text-center px-6 py-16 md:text-left md:px-20 md:justify-between relative">


      <div className="absolute inset-y-0 right-10 z-0 w-1/2">
        <Image
          src="/assets/HowWeHelp/bg.gif" 
          alt="Background GIF"
          layout="fill" 
          objectFit="cover" 
          className="opacity-50" 
        />
      </div>

    
      <div className="w-full md:w-1/2 flex justify-center relative z-10">
        <Image
          src="/assets/HowWeHelp/blockchain.png"
          alt="Blockchain"
          width={320}  
          height={320} 
          loading="lazy"
          className="drop-shadow-lg"
        />
      </div>
     
      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          How We Help <br />
          <span className="text-[#E95DFF]">Businesses Grow</span> <br />
          With <span className="italic text-[#E95DFF]">Blockchain</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-lg mt-4">
          At Kai Foundry, we craft blockchain solutions tailored to your
          business needs, empowering you to innovate, secure your operations,
          and scale your growth.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#E95DFF] to-[#D680FF] text-white text-lg font-medium shadow-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </Link>
      </div>

    </section>
  );
};

export default HowWeHelp;