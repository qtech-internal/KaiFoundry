
import React from 'react';
import HeroSection from './HeroSection';
import AIServicesSection from './AIServicesSection';
import FeaturesSection from './FeaturesSection';
import WhyChooseUs from './WhyChooseUs';
import EcosystemsGrid from './Ecosystem';
import FAQSection from './FAQ';

const AIServicesPage: React.FC = () => {
  return (
    <div>
   <HeroSection />
   <AIServicesSection/>
   <FeaturesSection />
   <WhyChooseUs />
   <EcosystemsGrid />
    <FAQSection />
   

    </div>
  );
};

export default AIServicesPage;