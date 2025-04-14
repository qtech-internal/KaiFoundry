// pages/careers.tsx
import React from 'react';
import CareersSection from './CareersSection';
import WhyWorkWithUs from './WhyWorkWithUs';
import JobListings from './JobListings';

const CareersPage: React.FC = () => {
  return (
    <div>
      <CareersSection />
      <WhyWorkWithUs />
      <JobListings />
    </div>
  );
};

export default CareersPage;