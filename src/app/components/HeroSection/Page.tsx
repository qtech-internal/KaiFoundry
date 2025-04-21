"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-white text-gray-800 pt-16 px-12 ">
      {/* Main Content */}
      <div
        className={`flex flex-col md:flex-row items-center justify-between transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="md:w-1/2 text-center md:text-left mt-20">
          <h1
            className={`lg:text-5xl xl:text-7xl md:text-3xl font-bold transition-transform duration-1000 py-10`}
          >
            Building Your{""}
            <span className="bg-gradient-to-r from-[#821890] to-[#D444F1] bg-clip-text text-transparent flex">
              BUSINESSES
            </span>
            & Powering
            <span className="bg-gradient-to-r from-[#821890] to-[#D444F1] bg-clip-text text-transparent italic">
              WEB3
            </span>
          </h1>
          <p
            className={`text-gray-600 mt-3 md:text-[14px] xl:text-[28px] lg:text-[21px] transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            We help businesses grow with smart strategies
            <br />
            and the latest Web3 technology, making
            <br />
            success easier to achieve.
          </p>
          <div
            className={`flex items-center relative top-6 md:flex transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-y-0 left-0 right-0 bg-[#D444F1] rounded-full"
              style={{ width: "calc(42% - 10px)" }}
            ></div>
            <Link href="/HowWeHelp">
              <button
                className={`relative z-10 flex items-center px-8 py-3 rounded-full text-white text-[18px] text-lg transition-transform duration-1000 transform ${
                  isVisible
                    ? "translate-x-0 bg-[#D444F1]"
                    : "translate-x-10 bg-[#D444F1]"
                }`}
              >
                HOW WE HELP
                <span className="ml-2 w-7 h-7 flex items-center justify-center border-2 border-white rounded-full font-light">
                  ➜
                </span>
              </button>
            </Link>
            <Link href="/contact">
              <button
                className={`relative z-10 ml-[-10px] px-6 py-3 rounded-full border border-purple-500 bg-white text-black text-lg transition-transform duration-1000 transform ${
                  isVisible
                    ? "translate-x-0 bg-[#D444F1]"
                    : "translate-x-10 bg-[#D444F1]"
                }`}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-5 relative">
          <div className="absolute top-0 right-0 w-full h-185 bg-gradient-to-r from-[#A5C0EE] to-[#FBC5EC] rounded-lg z-0 -mt-42">
            {" "}
          </div>
          <Image
            src="/assets/cube.png"
            alt="Web3 Cube"
            width={400}
            height={400}
            draggable="false"
            className={`mx-auto z-10 hidden md:block transition-transform duration-1000 md:h-auto ${
              isVisible ? "translate-y-0" : "translate-y-60"
            } -mt-20`} // Animate from bottom to top
          />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center px-16 md:px-14 ">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-white shadow-lg xl:ml-[520px] 2xl:ml-[710px] rounded-2xl items-center px-8 relative z-10 overflow-hidden hidden md:flex -mt-16 space-x-16 -space-y-2 md:mr-60 lg:mr-0"
          // style={{
          //   background: "linear-gradient(to right, #f8f5ff, #fce7f3)",
          //   borderRadius: "20px",
          //   marginLeft: "710px",
          // }}
          style={{
            background: "linear-gradient(to right, #f8f5ff, #fce7f3)",
            borderRadius: "20px",
            // Default margin-left for screens smaller than 2xl
          }}
       
          
        >
          <div className="w-26 overflow-hidden rounded-lg rotate-90 border-8 border-rounded-full border-white flex items-center justify-center mx-10 -mt-6">
            <Image
              src="/assets/abstract.png"
              alt="Abstract Design"
              width={150}
              height={54}
              draggable="false"
              className="object-cover"
            />
          </div>
          <div className="flex-1 -mt-6">
            <h2 className="font-semibold text-lg">Uncover our identity</h2>
            <p className="text-gray-600 text-sm">
              We are a creative hub shaping the future of digital design and
              technology.
            </p>
          </div>
          <Link href="/WhoAreWe">
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
              <span className="text-purple-500 text-xl">→</span>
            </div>
          </Link>
        </motion.div>
      </div>
{/* <div className="relative flex justify-end px-4 md:px-14 border-2 ">
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center px-6 py-4 z-10 overflow-hidden space-y-4 md:space-y-0 md:space-x-6 mt-8 w-full sm:w-[90%] md:w-[500px] lg:w-[450px]"
    style={{
      background: "linear-gradient(to right, #f8f5ff, #fce7f3)",
    }}
  >
    <div className="w-20 overflow-hidden rounded-lg rotate-90 border-8 border-white flex items-center justify-center">
      <Image
        src="/assets/abstract.png"
        alt="Abstract Design"
        width={120}
        height={64}
        draggable="false"
        className="object-cover"
      />
    </div>
    <div className="flex-1 text-center md:text-left">
      <h2 className="font-semibold text-lg">Uncover our identity</h2>
      <p className="text-gray-600 text-sm">
        We are a creative hub shaping the future of digital design and
        technology.
      </p>
    </div>
    <Link href="/WhoAreWe">
      <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer">
        <span className="text-purple-500 text-xl">→</span>
      </div>
    </Link>
  </motion.div>
</div> */}


      <div className="mt-18 max-w-7xl items-center ml-20">
        <div className="w-full max-w-7xl items-center sm:px-6 sm:py-4">
          <div className="bg-white rounded-full border border-fuchsia-300 shadow-sm flex items-center justify-around p-3 sm:p-4">
            <div className="flex items-baseline text-center">
              <CountUp
                end={30}
                duration={2}
                className="text-2xl sm:text-3xl font-semibold text-gray-800"
              />
              <span className="text-2xl font-bold">+</span>
              <span className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
                &nbsp;Projects
              </span>
            </div>
            <div className="flex items-baseline text-center">
              <CountUp
                end={40}
                duration={2}
                className="text-2xl sm:text-3xl font-semibold text-gray-800"
              />
              <span className="text-2xl font-bold">+</span>
              <span className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
                &nbsp;Developers
              </span>
            </div>
            <div className="flex items-baseline text-center">
              <CountUp
                end={10}
                duration={2}
                className="text-2xl sm:text-3xl font-semibold text-gray-800"
              />
              <span className="text-2xl font-bold">+</span>
              <span className="text-sm sm:text-base text-gray-600 whitespace-nowrap">
                &nbsp;Ecosystems
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
