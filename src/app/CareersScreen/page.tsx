'use client'
import React from 'react';
import CareersSection from './CareersSection';
import WhyWorkWithUs from './WhyWorkWithUs';
import JobListings from './JobListings';

// Import mobile versions of the components
import CareersSectionMob from './../MobileView/CareersScreen/CareersSection'; // Mobile version
import WhyWorkWithUsMob from './../MobileView/CareersScreen/WhyWorkWithUs'; // Mobile version
import JobListingsMob from './../MobileView/CareersScreen/JobListings'; // Mobile version

const CareersPage: React.FC = () => {
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
      {isMobile ? <CareersSectionMob /> : <CareersSection />}
      {isMobile ? <WhyWorkWithUsMob /> : <WhyWorkWithUs />}
      {isMobile ? <JobListingsMob /> : <JobListings />}
    </div>
  );
};

export default CareersPage;