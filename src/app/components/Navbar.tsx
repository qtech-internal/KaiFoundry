

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import Button from "./UI/Button";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import ServicesPopup from "./NavbarPopup";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      if (isOpen && sidebar && !sidebar.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
  
    const handleScrollClose = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScrollClose);
  
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScrollClose);
    };
  }, [isOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(window.scrollY < lastScrollY.current);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path: string) => pathname === path;
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <>
      <header
        className={`fixed top-0 w-full pt-5 z-50 transition-transform duration-500 ease-in-out container ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="md:mx-10 py-2 px-2 md:px-5 lg:px-5 flex items-center justify-between md:backdrop-blur-md md:border md:border-gray-300 md:rounded-full transition-all duration-500 ease-in-out">
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
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={150}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-gray-700 flex-1 justify-center transition-all duration-500 ease-in-out xl:text-[20px] lg:text-[16px] md:text-[10px]">
            <li>
              <Link
                href="/HowWeHelpScreen"
                className={`${
                  isActive("/HowWeHelpScreen")
                    ? "text-fuchsia-500"
                    : "text-gray-700"
                }`}
              >
                How We Help
              </Link>
            </li>
            <li>
              <Link href="/WhoAreWe">Who We Are</Link>
            </li>
            <li>
              <Link
                href="/CareersScreen"
                className={`${
                  isActive("/CareersScreen")
                    ? "text-fuchsia-500"
                    : "text-gray-700"
                }`}
              >
                Careers
              </Link>
            </li>
            <li>
              <button
                onClick={togglePopup}
                className="text-gray-700 flex items-center gap-1 focus:outline-none"
              >
                Services{" "}
                <RiArrowDropDownLine className="w-4 h-4 transition-transform duration-200" />
              </button>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${
                  isActive("/blog") ? "text-fuchsia-500" : "text-gray-700"
                }`}
              >
                Blogs
              </Link>
            </li>
          </ul>

          <Button
            className="bg-fuchsia-500 text-white"
            text="Contact Us"
            href="/ContactUs"
          />
        </nav>
      </header>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-500 ease-in-out"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar Menu */}
      {/* <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      > */}
      <div
  id="mobile-sidebar"
  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>

        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-gray-700 text-2xl"
        >
          &times;
        </button>
        <nav className="flex flex-col items-start px-6 py-10 space-y-4 text-gray-700">
          <Link href="/">
            <Image src="/assets/logo.svg" alt="Logo" width={120} height={40} />
          </Link>
          <Link
            href="/HowWeHelpScreen"
            className={`${
              isActive("/HowWeHelpScreen")
                ? "text-fuchsia-500"
                : "text-gray-700"
            }`}
          >
            How We Help
          </Link>
          <Link href="/WhoAreWe" className="text-gray-700">
            Who We Are
          </Link>
          <Link
            href="/CareersScreen"
            className={`${
              isActive("/CareersScreen") ? "text-fuchsia-500" : "text-gray-700"
            }`}
          >
            Careers
          </Link>
          <button
            onClick={togglePopup}
            className="text-gray-700 focus:outline-none"
          >
            Services
          </button>
          <Link
            href="/blog"
            className={`${
              isActive("/blog") ? "text-fuchsia-500" : "text-gray-700"
            }`}
          >
            Blogs
          </Link>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 mt-4 w-full transition-all duration-500 ease-in-out">
            Contact Us
          </button>
        </nav>
      </div>

      {/* Services Popup */}
      {isPopupOpen && <ServicesPopup onClose={togglePopup} />}
    </>
  );
};

export default Navbar;