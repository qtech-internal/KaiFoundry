// pages/careers.tsx
import React from 'react';
import BlogCarousel from './BlogSection';
import Navbar from '../Navbar';
import Footer from '../footer/page';


const BlogsSection: React.FC = () => {
  return (
    <div>
      <Navbar />
    <BlogCarousel />
    <Footer />
    </div>
  );
};

export default BlogsSection;