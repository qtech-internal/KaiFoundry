"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-lg shadow-lg rounded-full z-50 w-full">
      {/* Logo for PC */}
      <div className="hidden md:block">
        <Link href="/">
          <img src="assets/logo.png" alt="Logo" className="h-10" />
        </Link>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <div className="flex flex-col space-y-1">
            <span className="block w-8 h-1 bg-gray-700"></span>
            <span className="block w-8 h-1 bg-gray-700"></span>
            <span className="block w-8 h-1 bg-gray-700"></span>
          </div>
        </button>
      </div>

      <ul
        className={`flex-col md:flex md:flex-row md:space-x-6 text-gray-700 absolute md:static bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
          isOpen ? "top-16 left-0 w-full md:w-auto" : "top-[-200px] md:top-0"
        } md:top-0 md:flex md:items-center`}
      >
        <li className="py-2 md:py-0">
          <Link href="/components/HowWeHelpScreen">How We Help</Link>
        </li>
        <li className="py-2 md:py-0">
          <Link href="/components/WhoAreWe">Who We Are</Link>
        </li>
        <li className="py-2 md:py-0">
          <Link href="/components/CareersScreen">Careers</Link>
        </li>
        <li className="py-2 md:py-0">
          <Link href="#">Services</Link>
        </li>
        <li className="py-2 md:py-0">
          <Link href="/components/BlogScreen">Blogs</Link>
        </li>
      </ul>

      {/* Contact Us Button */}
      <button className="hidden md:block bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
        Contact Us
      </button>

      {/* Mobile Contact Us Button */}
      <button className="md:hidden bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
