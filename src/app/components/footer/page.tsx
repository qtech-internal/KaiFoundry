import React from "react";
import FooterColumn from "./FooterColumn";
import SocialIcons from "./SocialIcons";
import ContactInfo from "./ContactInfo";
import CTAButton from "./CTAButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-fuchsia-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-5 gap-6">
        <p className="flex">Logo</p>
        <FooterColumn
          title="Offerings"
          links={[
            { label: "STO", href: "/sto" },
            { label: "Smart Contacts", href: "/smart-contracts" },
            { label: "White Label Exchange Platform", href: "/exchange-platform" },
            { label: "White Label Wallet", href: "/wallet" },
          ]}
        />
        <FooterColumn
          title="Services"
          links={[
            { label: "AI", href: "/ai" },
            { label: "Gaming", href: "/gaming" },
            { label: "Blockchain", href: "/blockchain" },
            { label: "Web3 Solutions", href: "/web3" },
          ]}
        />
        <FooterColumn
          title="About"
          links={[
            { label: "Who We Are", href: "/about" },
            { label: "What We Do", href: "/services" },
            { label: "Career", href: "/career" },
            { label: "Portfolio", href: "/portfolio" },
          ]}
        />
        <div className="flex justify-end ">
          <CTAButton text="Get In Touch" href="/contact" />
        </div>
      </div>

      <div className="flex items-center mt-6 gap-48">
        <SocialIcons />
        <ContactInfo phone="123456789" email="kaifoundry@gmail.com" />
      </div>


    </footer>
  );
};

export default Footer;
