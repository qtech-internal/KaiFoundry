"use client";
import Image from "next/image";
import Link from "next/link";

const HowWeHelp = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center text-center px-6 py-16 md:text-left md:px-20 md:justify-between relative">


<div className="relative w-full lg:w-1/2   flex justify-center items-center">
  {/* Background GIF */}
  <div className="absolute inset-0 z-0 w-full h-[600px] md:h-[300px]">
    <Image
      src="/assets/HowWeHelp/bg.gif"
      alt="Background GIF"
      layout="fill"
    objectFit="cover"
      className="opacity-50 lg:ml-0 lg:mt-0 -mt-24  w-full"
    />
  </div>

  {/* Foreground Image */}
  <div className="z-10 flex justify-center">
    <Image
      src="/assets/HowWeHelp/blockchain.png"
      alt="Blockchain"
      width={520}
      height={520}
      loading="lazy"
      className="drop-shadow-lg md:w-[320px] md:h-[320px] w-[400px] h-[400px]"
    />
  </div>
</div>

     
      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10">
        <h2 className="text-[24px] md:text-5xl font-bold text-gray-900">
          How We Help <br />
          <span className="text-[#E95DFF] text-[24px] md:text-5xl">Businesses Grow</span> <br />
          With <span className="italic text-[#E95DFF] text-[24px] md:text-5xl">Blockchain</span>
        </h2>
        <p className="text-[#808080] text-[14px] md:text-lg mt-4">
          At Kai Foundry, we craft blockchain solutions tailored to your
          business needs, empowering you to innovate, secure your operations,
          and scale your growth.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-1 lg:py-3 rounded-full bg-gradient-to-r from-[#E95DFF] to-[#D680FF] text-white text-[16px] font-medium shadow-lg hover:opacity-90 transition">
            Contact Us
          </button>
        </Link>
      </div>

    </section>
  );
};

export default HowWeHelp;