"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 ${
        isVisible ? "pt-5" : ""
      } w-full z-50 grid grid-cols-12`}
    >
      <nav
        className={`col-span-12 mx-10 z-50 rounded-full transition-all duration-300 ease-in-out backdrop-blur-md ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(to right, #F6D0FE, #ffffff) border-box",
          border: "2px solid transparent",
          borderRadius: "9999px", // Ensures a fully rounded navbar
        }}
      >
        {/* Grid structure for navbar content */}
        <div className="grid grid-cols-12 items-center py-4 px-6 md:px-10 lg:px-12">
          {/* Logo (2 columns) */}
          <div className="hidden md:block col-span-2">
            <Link href="/">
              <img src="assets/logo.png" alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Menu Items (7 columns) */}
          <ul className="col-span-7 md:flex hidden justify-center space-x-6 text-gray-700">
            <li>
              <Link href="./HowWeHelpScreen">How We Help</Link>
            </li>
            <li>
              <Link href="/components/WhoAreWe">Who We Are</Link>
            </li>
            <li>
              <Link href="./CareersScreen">Careers</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="./BlogScreen">Blogs</Link>
            </li>
          </ul>

          {/* Contact Button (3 columns) */}
          <div className="col-span-3 hidden md:flex justify-end">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button (2 columns) */}
          <div className="col-span-2 md:hidden flex justify-end">
            <button onClick={toggleMenu} className="focus:outline-none">
              <div className="flex flex-col space-y-1">
                <span className="block w-8 h-1 bg-gray-700"></span>
                <span className="block w-8 h-1 bg-gray-700"></span>
                <span className="block w-8 h-1 bg-gray-700"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Items */}
          {isOpen && (
            <ul className="col-span-12 flex flex-col items-center space-y-2 bg-white mt-2 py-2 rounded-lg md:hidden">
              <li>
                <Link href="/components/HowWeHelpScreen">How We Help</Link>
              </li>
              <li>
                <Link href="#">Who We Are</Link>
              </li>
              <li>
                <Link href="/components/CareersScreen">Careers</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="/components/BlogScreen">Blogs</Link>
              </li>
              <li>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
                  Contact Us
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
