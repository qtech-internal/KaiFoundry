import React, { FC } from "react";
import FooterColumn from "./FooterColumn";
import Button from "../UI/Button";
import SocialIcons from "./SocialIcons";
import ContactInfo from "./ContactInfo";

const navs = [
  {
    title: "Offerings",
    links: [
      { label: "STO", href: "/sto" },
      { label: "Smart Contracts", href: "/smart-contracts" },
      { label: "White Label Exchange Platform", href: "/exchange-platform" },
      { label: "White Label Wallet", href: "/wallet" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI", href: "/ai" },
      { label: "Gaming", href: "/gaming" },
      { label: "Blockchain", href: "/blockchain" },
      { label: "Web3 Solutions", href: "/web3" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Who We Are", href: "/WhoAreWe" },
      { label: "What We Do", href: "/services" },
      { label: "Career", href: "/CareersScreen" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-[#821890] text-white p-8">
      <div className="container mx-auto grid grid-cols-12 md:grid-cols-12 gap-6 sm:grid-cols-2 sm:gap-4">
        {/* Logo - Start Aligned */}
        <div className="sm:col-span-3 flex justify-start order-1 col-span-6">
          <img src="/svg/Logo.svg" alt="Logo" className="h-10" /> 
        </div>

        {/* Offerings - Centered on Large Screens, Full Width on Mobile */}
        <div className="sm:col-span-2 flex sm:order-2 order-3 col-span-12">
          <FooterColumn title={navs[0].title} links={navs[0].links} />
        </div>

        {/* Services - Centered on Large Screens, Half Width on Mobile */}
        <div className="sm:col-span-2 flex sm:order-3 order-4 col-span-6">
          <FooterColumn title={navs[1].title} links={navs[1].links} />
        </div>

        {/* About - Centered on Large Screens, Half Width on Mobile */}
        <div className="sm:col-span-2 flex sm:order-4 order-5 col-span-6">
          <FooterColumn title={navs[2].title} links={navs[2].links} />
        </div>

        {/* CTA Button - End Aligned */}
        <div className="sm:col-span-3 flex sm:order-6 font-[500] justify-end order-2 col-span-6">
          <Button className="bg-white text-black" text="Get In Touch" href="/" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-6 sm:gap-4 sm:mt-28 mt-12 items-center text-center sm:text-left">
        <div className="col-span-12 sm:col-span-3 flex justify-start">
          <SocialIcons />
        </div>
        <div className="col-span-12 sm:col-span-3 flex justify-start">
          <ContactInfo phone="123456789" email="kaifoundry@gmail.com" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;