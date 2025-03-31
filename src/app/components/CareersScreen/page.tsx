// pages/careers.tsx
import React from 'react';
import CareersSection from './CareersSection'; 
import WhyWorkWithUs from './WhyWorkWithUs';
import JobListings from './JobListings';
import Navbar from '../Navbar';
import Footer from '../footer/page';

const CareersPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <CareersSection />
      <WhyWorkWithUs />
      <JobListings />
      <Footer />
    </div>
  );
};

export default CareersPage;