
import React from 'react';
import HeroSection from './HeroSection';
import BlockchainSection from './GameDevlopmentSection';
import FeaturesSection from './FeaturesSection';
import WhyChooseUs from './WhyChooseUs';
import EcosystemsGrid from './Ecosystem';
import FAQSection from './FAQ';

const GameDevelopmentPage: React.FC = () => {
  return (
    <div>
   <HeroSection />
   <BlockchainSection/>
   <FeaturesSection />
   <WhyChooseUs />
   <EcosystemsGrid />
    <FAQSection />
   

    </div>
  );
};

export default GameDevelopmentPage;