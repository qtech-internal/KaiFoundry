// pages/careers.tsx
import React from 'react';
import HowWeHelp from './HeroSection';
import BusinessGrowth from './BusinessGrowthSection';
import HeroSection2 from './Hero2';
import SolutionsSection from './SolutionsSection';



const HowWeHelpSection: React.FC = () => {
  return (
    <div>
      <HowWeHelp />
      <BusinessGrowth />
      <HeroSection2 />
      <SolutionsSection />
    </div>
  );
};

export default HowWeHelpSection;