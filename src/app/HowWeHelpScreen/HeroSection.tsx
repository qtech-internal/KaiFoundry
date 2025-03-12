"use client";
import Image from "next/image";
import Link from "next/link";

const HowWeHelp = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900">
          How We Help <br />
          <span className="text-[#E95DFF]">BUSINESSES GROW</span> <br />
          With <span className="italic text-[#E95DFF]">Blockchain</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-4">
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

      {/* Right Image Content with Background GIF */}
      <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/assets/HowWeHelp/bg.gif')",
              width: "155%",
              height: "155%",
              position: "absolute",
              top: "10",
              left: "3000",
            }}
          />
        </div>
        <Image
          src="/assets/HowWeHelp/blockchain.png"
          alt="Blockchain"
          width={450}
          height={450}
          loading="lazy" // Lazy loading added
          className="drop-shadow-lg relative z-10"
        />
      </div>
    </section>
  );
};

export default HowWeHelp;
