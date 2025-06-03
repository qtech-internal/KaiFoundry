
import React from 'react';
import HeroSection from './HeroSection';
import BlockchainSection from './GameDevlopmentSection';
import FeaturesSection from './FeaturesSection';
import WhyChooseUs from './WhyChooseUs';
import EcosystemsGrid from './Ecosystem';
import FAQSection from './FAQ';
import GameContact from './GameContact';

const GameDevelopmentPage: React.FC = () => {
  return (
    <div>
   <HeroSection />
   <BlockchainSection/>
   <FeaturesSection />
   <WhyChooseUs />
   <EcosystemsGrid />
      <FAQSection />
      <GameContact/>
     </div>
  );
};

export default GameDevelopmentPage;