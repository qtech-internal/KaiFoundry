"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Peer To Peer Development",
    description:
      "Peer-to-Peer Development solutions enable secure, decentralized platforms that facilitate direct interactions without intermediaries. Designed for efficiency and trust, our solutions enhance transaction security, scalability, and user autonomy.",
  },
  {
    title: "Stablecoin Development",
    description:
      "Stablecoin Development service enables businesses to create secure and stable digital assets backed by real-world value. We design and develop stablecoins with robust smart contracts, regulatory compliance, and seamless integrations to ensure price stability and trust.",
  },
  {
    title: "Security Token Offering",
    description:
      "Security Token Offering (STO) service helps businesses streamline asset digitization, ensuring compliance with financial regulations.",
  },
  {
    title: "Smart Contract Development",
    description:
      "Kai Foundry specializes in Smart Contract Development, creating secure and efficient blockchain solutions tailored to your needs.",
  },
  {
    title: "White Label Exchange Platform",
    description:
      "Kai Foundry offers a White Label Exchange Platform, enabling businesses to launch their own customized crypto trading platform with ease. Our solution comes with advanced security, liquidity management, and seamless user experience.",
  },
  {
    title: "White Label Wallet Development",
    description:
      "White Label Wallet Development empowers businesses to offer secure, branded cryptocurrency wallets with ease. Our solution supports multi-currency transactions, advanced security features, and seamless integrations, ensuring a smooth user experience.",
  },
  {
    title: "Coin Development",
    description:
      "Kai Foundry empowers businesses to create their own digital currency with a secure, scalable, and customized approach. From conceptualization to deployment, we handle everything-tokenomics design, blockchain integration, and security enhancements.",
  },
  {
    title: "Blockchain Consultation",
    description:
      "Kai Foundry provides expert blockchain consultation to help businesses harness the power of decentralized technology. Whether you're exploring blockchain for the first time or optimizing an existing solution, we guide you through strategy, architecture, and implementation.",
  },
];

const Services = () => {
  return (
    <section
      className="py-20 bg-white relative"
      style={{
        backgroundImage: "url('/assets/background/bg2.gif')",
        backgroundSize: "cover",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto px-6 md:px-12 text-center ">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl text-gray-800 font-semibold" // Decreased text size
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#D444F1]">What We Offer</span> - Our
          <br />Specialized Features
        </motion.h2>

        {/* Grid */}
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

export default Services;