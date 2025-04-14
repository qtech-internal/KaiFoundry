'use client'
import React from "react";
import Home from "./Home";
import FeaturesSection from "./Features";
import CoreValuesSection from "./Core";
import FounderSection from "./Founder";

// Import mobile versions of the components
import HomeMob from "./../MobileView/WhoAreWe/Home"; 
import FeaturesSectionMob from "..//MobileView/WhoAreWe/Features"; 
import CoreValuesSectionMob from "../MobileView/WhoAreWe/Core"; 
import FounderSectionMob from "../MobileView/WhoAreWe/Founder"; 

const WhoAreWePage: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
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
    <div>
      {isMobile ? <HomeMob /> : <Home />}
      {isMobile ? <FeaturesSectionMob /> : <FeaturesSection />}
      {isMobile ? <CoreValuesSectionMob /> : <CoreValuesSection />}
      {isMobile ? <FounderSectionMob /> : <FounderSection />}
    </div>
  );
};

export default WhoAreWePage;