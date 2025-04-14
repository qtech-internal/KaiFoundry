"use client";
import { motion } from "framer-motion";
import { PaintBrushIcon, GlobeAltIcon, UserIcon, DevicePhoneMobileIcon, CubeIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

const features = [
  { name: "Immersive", icon: PaintBrushIcon },
  { name: "Web3-Ready", icon: GlobeAltIcon },
  { name: "Customizable", icon: UserIcon },
  { name: "Cross-Platform", icon: DevicePhoneMobileIcon },
  { name: "Optimized", icon: CubeIcon },
  { name: "End-to-End", icon: ArrowsRightLeftIcon },
];

export default function GameDevelopmentSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        

        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Turning <span className="text-[#BA24D5]">Ideas</span> into <span className="text-[#BA24D5]">Games</span> 
            <br /> That <span className="text-[#BA24D5]">People</span> Love
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We create fun, immersive, and high-quality games that keep players coming back for more. We bring your vision to life!
          </p>
        </motion.div>


        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <feature.icon className="h-7 w-7 text-[#BA24D5]" />
              <span className="text-lg font-medium text-gray-900">{feature.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
