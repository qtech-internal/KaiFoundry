// pages/careers.tsx
import React from 'react';
import HowWeHelp from './HeroSection';
import BusinessGrowth from './BusinessGrowthSection';
import HeroSection2 from './Hero2';
import SolutionsSection from './SolutionsSection';
import Navbar from '../Navbar';
import Footer from '../footer/page';



const HowWeHelpSection: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HowWeHelp />
      <BusinessGrowth />
      <HeroSection2 />
      <SolutionsSection />
      <Footer />

    </div>
  );
};

export default HowWeHelpSection;