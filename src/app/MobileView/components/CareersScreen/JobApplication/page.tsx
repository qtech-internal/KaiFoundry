
import React from 'react';
import JobApplication from './JobApplication';
import JobApplicationForm from './JobApplicationForm';
import Footer from '../../footer/page';

const JobApplicationScreen: React.FC = () => {
  return (
    <div>
     <JobApplication />
     <JobApplicationForm />
     <Footer />

    </div>
  );
};

export default JobApplicationScreen