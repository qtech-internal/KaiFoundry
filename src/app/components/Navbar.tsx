"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Button from "./UI/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import ServicesPopup from "./NavbarPopup";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const pathname = usePathname();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(window.scrollY < lastScrollY);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => pathname === path;
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen); // Toggle popup

  return (
    <>

      <header
        className={`fixed top-0 w-full pt-5 z-50 transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="md:mx-10 py-2 px-2 md:px-5 lg:px-5 flex items-center justify-between md:backdrop-blur-md md:border md:border-gray-300 md:rounded-full transition-all duration-500 ease-in-out">

          {/* Mobile Menu */}

          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none p-2 rounded-sm"
          >
            <div className="flex flex-col space-y-1">
              <span className="block w-8 h-1 bg-gray-700"></span>
              <span className="block w-8 h-1 bg-gray-700"></span>
              <span className="block w-8 h-1 bg-gray-700"></span>
            </div>
          </button>

          {/* Logo */}
          <div className="hidden md:flex flex-shrink-0">
            <Link href="/">
              <img src="/assets/logo.svg" alt="Logo" />
            </Link>
          </div>


          {/* Navbar Links */}
          <ul className="hidden md:flex space-x-6 text-gray-700 flex-1 justify-center">

            <li>
              <Link
                href="/HowWeHelpScreen"
                className={
                  isActive("/HowWeHelpScreen")
                    ? "text-fuchsia-500 font-bold"
                    : "text-gray-700"
                }
              >
                How We Help
              </Link>
            </li>
            <li>

              <Link href="/WhoAreWe" className="text-gray-700">

                Who We Are
              </Link>
            </li>
            <li>
              <Link
                href="/CareersScreen"
                className={
                  isActive("/CareersScreen")
                    ? "text-fuchsia-500 font-bold"
                    : "text-gray-700"
                }
              >
                Careers
              </Link>
            </li>


            {/* Custom Services Dropdown */}
            <div className="relative">
              <button
                onClick={togglePopup} // Open the popup instead of dropdown
                className="text-gray-700 focus:outline-none flex items-center gap-1"
              >
                Services
                <RiArrowDropDownLine className="w-4 h-4 transition-transform duration-200" />
              </button>
            </div>

            <li>
              <Link
                href="/blog"
                className={
                  isActive("/blog")
                    ? "text-fuchsia-500 font-bold"
                    : "text-gray-700"
                }
              >
                Blogs
              </Link>
            </li>
          </ul>


          <Button
            className="bg-fuchsia-500 text-white"
            text="Contact Us"
            href="/contact"
          />
        </nav>
      </header>


      {/* Services Popup Component */}
      {isPopupOpen && <ServicesPopup onClose={togglePopup} />}

    </>
  );
};

export default Navbar;
