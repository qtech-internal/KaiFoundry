import React from "react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-6xl md:text-7xl font-bold hidden md:block">
                        Building Your <span className="bg-gradient-to-r from-[#821890] to-[#D444F1] bg-clip-text text-transparent">BUSINESSES</span> & Powering <span className="bg-gradient-to-r from-[#821890] to-[#D444F1] bg-clip-text text-transparent italic">WEB3</span>
                    </h1>
                    <p className="text-gray-600 mt-7 text-3xl hidden md:block p-2">
                        We help businesses grow with smart strategies and the latest Web3 technology, making success easier to achieve.
                    </p>
                    <div className="flex items-center relative top-6 hidden md:flex">
                        <div className="absolute inset-y-0 left-0 right-0 bg-[#D444F1] rounded-full" style={{ width: 'calc(42% - 10px)' }}></div>
                        <button className="relative z-10 flex items-center px-6 py-3 rounded-full text-white font-semibold text-lg">
                            HOW WE HELP
                            <span className="ml-2 w-7 h-7 flex items-center justify-center border-2 border-white rounded-full">
                                ➜
                            </span>
                        </button>
                        <button className="relative z-10 ml-[-10px] px-6 py-3 rounded-full border border-purple-500 bg-white text-black font-semibold text-lg">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-5 relative">
                    <div className="absolute top-0 right-0 w-full h-175 bg-gradient-to-r from-[#A5C0EE] to-[#FBC5EC] rounded-lg z-0"></div>
                    <Image src="/assets/cube.png" alt="Web3 Cube" width={500} height={500} className="mx-auto relative z-10 hidden md:block" />
                </div>
            </div>


            <div className="relative flex flex-col items-center justify-center px-16 md:px-14 pb-0">
                <div className="bg-white shadow-lg rounded-2xl flex items-center p-6 space-x-4 relative z-10 overflow-hidden hidden md:flex"
                    style={{ background: "linear-gradient(to right, #f8f5ff, #fce7f3)", borderRadius: "20px", marginLeft: 'auto' }}>
                    <div className="w-24 h-16 overflow-hidden rounded-lg">
                        <Image src="/assets/abstract.png" alt="Abstract Design" width={116} height={64} className="object-cover" />
                    </div>
                    <div className="flex-1">
                        <h2 className="font-semibold text-lg">Uncover our identity</h2>
                        <p className="text-gray-600 text-sm">We are a creative hub shaping the future of digital design and technology.</p>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md">
                        <span className="text-purple-500 text-xl">→</span>
                    </div>
                </div>
            </div>

            <section className="relative flex flex-col items-center justify-center px-6 pt-16 pb-12 hidden md:flex">
                <div className="relative z-10 w-full max-w-6xl border border-transparent backdrop-blur-lg rounded-full flex justify-around text-gray-800"
                    style={{ borderImage: "linear-gradient(to right, #d8b4fe, #fbcfe8) 1", backgroundColor: 'rgba(255, 255, 255, 0)' }}>
                    <div className="text-center rounded-lg p-4">
                        <h2 className="text-2xl font-semibold">30<span className="text-gray-600">+ Projects</span></h2>
                    </div>
                    <div className="text-center rounded-lg p-4">
                        <h2 className="text-2xl font-semibold">40<span className="text-gray-600"> + Developers</span></h2>
                    </div>
                    <div className="text-center rounded-lg p-4">
                        <h2 className="text-2xl font-semibold">10<span className="text-gray-600">+ Ecosystems</span></h2>
                    </div>
                </div>
            </section>


            <div className="md:hidden relative flex flex-col items-center justify-center">
                <div className="absolute top-0 right-0 w-full h-175 bg-gradient-to-r from-[#A5C0EE] to-[#FBC5EC] rounded-lg z-0"></div>
                <Image src="/assets/cube.png" alt="Web3 Cube" width={500} height={500} className="mx-auto relative z-10" />
            </div>

            {/* <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #821890, #D444F1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style> */}
        </div>
    );
}