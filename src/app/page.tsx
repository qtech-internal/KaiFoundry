'use client'
import { useEffect, useState } from "react";
import FAQSection from "./components/FAQSection/page";
import ContactUs from "./components/ContactUs/page";
import CoolStuff from "./components/CoolStuff/page";
import EcosystemsGrid from "./components/EcosystemsGrid/Page";
import HeroSection from "./components/HeroSection/Page";// Import the mobile version
import ServicesSection from "./components/ServicesSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AnimatedSection from "./components/AnimatedImageCard";

// Import mobile versions of other components
import ServicesSectionMob from "./MobileView/components/ServicesSection"; // Mobile version
import ServicesMob from "./MobileView/components/Services"; // Mobile version
import WhyChooseUsMob from "./MobileView/components/WhyChooseUs"; // Mobile version
import EcosystemsGridMob from "./MobileView/components/EcosystemsGrid/Page"; // Mobile version
import AnimatedSectionMob from "./MobileView/components/AnimatedImageMobile"; // Mobile version
import CoolStuffMob from "./MobileView/components/CoolStuff/page"; // Mobile version
import FAQSectionMob from "./MobileView/components/FAQSection/page"; // Mobile version
import ContactUsMob from "./MobileView/components/ContactUs/page"; // Mobile version

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  return (
    <main>
    <HeroSection />
      {isMobile ? <ServicesSectionMob /> : <ServicesSection />}
      {isMobile ? <ServicesMob /> : <Services />}
      {isMobile ? <WhyChooseUsMob /> : <WhyChooseUs />}
      {isMobile ? <EcosystemsGridMob /> : <EcosystemsGrid />}
      {isMobile ? <AnimatedSectionMob /> : <AnimatedSection />}
      {isMobile ? <CoolStuffMob /> : <CoolStuff />}
      {isMobile ? <FAQSectionMob /> : <FAQSection />}
      {isMobile ? <ContactUsMob /> : <ContactUs />}
    </main>
  );
}