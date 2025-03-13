import { div } from "framer-motion/client";
import Navbar from "../Navbar";
// import Footer from "../footer/page";
import Home from "./Home";
import FeaturesSection from "./Features";
import CoreValuesSection from "./Core";
import FounderSection from "./Founder";
import React from "react";

const WhoAreWePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <FeaturesSection />
      <CoreValuesSection />
      <FounderSection />
      {/* <Footer /> */}
    </div>
  );
};

export default WhoAreWePage;
