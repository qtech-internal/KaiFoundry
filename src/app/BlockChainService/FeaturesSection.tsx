"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Blockchain Consultation",
    description:
      "Expert guidance on implementing blockchain into your business. We assess your needs and provide tailored strategies for seamless adoption.",
  },
  {
    title: "Layer 2 Development",
    description:
      "Enhance scalability and reduce transaction costs with Layer 2 solutions. Improve transaction speed and efficiency while maintaining security.",
  },
  {
    title: "Blockchain Protocol Development",
    description:
      "Custom blockchain protocols designed for speed, security, and efficiency. Built to support diverse use cases, from finance to supply chain.",
  },
  {
    title: "Centralized/Decentralized Exchange Development",
    description:
      "Build secure and scalable trading platforms for digital assets. Designed for high performance, compliance, and seamless user experience.",
  },
  {
    title: "NFT Marketplace Development",
    description:
      "Launch your own NFT marketplace for digital assets, collectibles, and more. Fully customizable with secure smart contracts and user-friendly interfaces.",
  },
  {
    title: "Smart Contract Development & Audit",
    description:
      "Develop and audit secure smart contracts to automate and optimize business operations. Ensure reliability, transparency, and zero vulnerabilities.",
  },
  {
    title: "Crypto Wallet Development",
    description:
      "Create secure, multi-currency crypto wallets with advanced security features. Enable seamless transactions, staking, and asset management.",
  },
  {
    title: "Decentralized App Development",
    description:
      "Build powerful dApps with secure blockchain integration. Designed for various industries, from finance to gaming and beyond.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      className="py-30 px-4 md:px-9 lg:px-30 bg-white relative" 
      style={{
        backgroundImage: "url('/assets/background/bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" mx-auto text-center">
      
        <motion.h2
          className="text-2xl md:text-4xl lg:text-6xl font-semibold font-inter text-[#333333] "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Key <span className="text-[#D444F1] mb-10">Features</span> of Blockchain <br /> Development
        </motion.h2>

    
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                       {services.map((service, index) => (
                         <motion.div
                           key={index}
                           className="p-4 border-t-3 mb-6 max-w-100 mx-auto" // Set max width and center the card
                           style={{ borderColor: "#D444F1" }}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: index * 0.2 }}
                           viewport={{ once: true }}
                         >
                           <h3 className="text-xl md:text-2xl text-[#0E0E0E] font-manrope font-semibold text-left">
                             {service.title}
                           </h3>
                           <p className="text-[#575656] mt-3 text-left text-sm md:text-base font-[400] leading-[27px] font-manrope ">
                             {service.description}
                           </p>
                         </motion.div>
                       ))}
                     </div>
      </div>
    </section>
  );
};

export default FeaturesSection;