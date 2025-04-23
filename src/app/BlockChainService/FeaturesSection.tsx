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
      "Stablecoin Development service enables businesses to create secure and stable digital assets backed by real-world value. We design and develop stablecoins with robust smart contracts, regulatory compliance, and seamless integrations to ensure price stability and trust.",
  },
  {
    title: "Blockchain Protocol Development",
    description:
      "Security Token Offering (STO) service helps businesses streamline asset digitization, ensuring compliance with financial regulations.",
  },
  {
    title: "Centralized/Decentralized Exchange Development",
    description:
      "Kai Foundry specializes in Smart Contract Development, creating secure and efficient blockchain solutions tailored to your needs.",
  },
  {
    title: "NFT Marketplace Development",
    description:
      "Kai Foundry offers a White Label Exchange Platform, enabling businesses to launch their own customized crypto trading platform with ease. Our solution comes with advanced security, liquidity management, and seamless user experience.",
  },
  {
    title: "Smart Contract Development & Audit",
    description:
      "White Label Wallet Development empowers businesses to offer secure, branded cryptocurrency wallets with ease. Our solution supports multi-currency transactions, advanced security features, and seamless integrations, ensuring a smooth user experience.",
  },
  {
    title: "Crypto Wallet Development",
    description:
      "Kai Foundry empowers businesses to create their own digital currency with a secure, scalable, and customized approach. From conceptualization to deployment, we handle everything—tokenomics design, blockchain integration, and security enhancements.",
  },
  {
    title: "Decentralized App Development",
    description:
      "Kai Foundry provides expert blockchain consultation to help businesses harness the power of decentralized technology. Whether you're exploring blockchain for the first time or optimizing an existing solution, we guide you through strategy, architecture, and implementation.",
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
          className="text-4xl md:text-6xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Key <span className="text-[#D444F1]">Features</span> of Blockchain Development
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
                           <h3 className="text-xl md:text-2xl font-semibold text-left">
                             {service.title}
                           </h3>
                           <p className="text-gray-600 mt-3 text-left text-sm md:text-base">
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