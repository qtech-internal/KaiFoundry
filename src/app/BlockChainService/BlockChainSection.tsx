"use client";
import { motion } from "framer-motion";
import { ShieldCheckIcon, ScaleIcon, LightBulbIcon, UsersIcon, CogIcon } from "@heroicons/react/24/solid";

const features = [
  { name: "Scalability", icon: ScaleIcon },
  { name: "Security & Trust", icon: ShieldCheckIcon },
  { name: "Innovation", icon: LightBulbIcon },
  { name: "Decentralization", icon: UsersIcon },
  { name: "Automation", icon: CogIcon },
];

export default function BlockchainSection() {
  return (
  
       <section className="relative bg-gradient-to-b from-white to-[#FBE8FF] py-20 px-8 md:px-16 lg:px-12 ">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
         <h2 className="text-xl sm:text-2xl md:text-[38px] lg:text-[40px] font-bold text-gray-800 leading-tight">
            Blockchain <span className="text-[#BA24D5]">Development</span>:<br />
            <span className="block md:inline">Powering Secure Solutions</span> 
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
          We help businesses use blockchain technology for enhanced transparency and automation.
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
              <span className="text-lg lg:text-lg sm:text-sm font-medium text-gray-900 whitespace-nowrap">{feature.name}</span>
            </motion.div>
          ))}
        </div>
    
      </div>
    </section>
  );
}