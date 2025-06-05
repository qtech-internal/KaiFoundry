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
  const [isDesktopPopupOpen, setIsDesktopPopupOpen] = useState(false);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsMobilePopupOpen(false); // Close mobile popup when toggling menu
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsMobilePopupOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const servicesPopup = document.querySelector(".services-popup");
      const servicesButton = document.querySelector(".services-button");

      // Close mobile menu if clicked outside
      if (isOpen && sidebar && !sidebar.contains(e.target as Node)) {
        setIsOpen(false);
        setIsMobilePopupOpen(false);
      }

      // Close desktop popup if clicked outside
      if (
        isDesktopPopupOpen &&
        servicesPopup &&
        !servicesPopup.contains(e.target as Node) &&
        servicesButton &&
        !servicesButton.contains(e.target as Node)
      ) {
        setIsDesktopPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, isDesktopPopupOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY.current);
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full pt-5 z-50 transition-transform px-4 duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto py-2 px-4 md:px-5 lg:px-5 flex items-center justify-between md:backdrop-blur-md md:border md:border-gray-300 md:rounded-full transition-all duration-500 ease-in-out">
          {/* Hamburger */}
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
              <Image src="/assets/logo.svg" alt="Logo" width={150} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-gray-700 flex-1 justify-center xl:text-[20px] lg:text-[16px] md:text-[10px]">
            <li>
              <Link
                href="/HowWeHelpScreen"
                className={isActive("/HowWeHelpScreen") ? "text-[#821890]" : "text-gray-700"}
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
                className={isActive("/CareersScreen") ? "text-[#821890]" : "text-gray-700"}
              >
                Careers
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDesktopPopupOpen((prev) => !prev);
                  setIsMobilePopupOpen(false);
                }}
                className="text-gray-700 flex items-center gap-1 focus:outline-none services-button"
              >
                Services{" "}
                <RiArrowDropDownLine
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isDesktopPopupOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDesktopPopupOpen && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 services-popup"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ServicesPopup onClose={() => setIsDesktopPopupOpen(false)} />
                </div>
              )}
            </li>
            <li>
              <Link href="/blog" className={isActive("/blog") ? "text-[#821890]" : "text-gray-700"}>
                Blogs
              </Link>
            </li>
          </ul>

          {/* Contact Us Button */}
          <Button className="bg-[#D444F1] text-white" text="Contact Us" href="/ContactUs" />
        </nav>
      </header>

      {/* Backdrop when mobile menu is open */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={closeMenu}></div>
      )}

      {/* Mobile Sidebar */}
    {/* Mobile Sidebar */}
<div
  id="mobile-sidebar"
  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-700 text-2xl">
    &times;
  </button>
  <nav className="flex flex-col items-start w-full px-4 py-10 space-y-4 text-gray-700">
    <Link href="/" className="w-full">
      <Image src="/assets/logo.svg" alt="Logo" width={120} height={40} />
    </Link>
    <Link href="/HowWeHelpScreen" className="w-full">
      How We Help
    </Link>
    <Link href="/WhoAreWe" className="w-full">
      Who We Are
    </Link>
    <Link href="/CareersScreen" className="w-full">
      Careers
    </Link>

    {/* Mobile Services Button */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsMobilePopupOpen((prev) => !prev);
        setIsDesktopPopupOpen(false);
      }}
      className="text-gray-700 flex items-center justify-between w-full  rounded-lg "
    >
      Services
      <RiArrowDropDownLine
        className={`w-5 h-5 transition-transform duration-200 ${
          isMobilePopupOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {isMobilePopupOpen && (
      <div className="mt-2 w-full services-popup" onClick={(e) => e.stopPropagation()}>
        <ServicesPopup onClose={() => setIsMobilePopupOpen(false)} />
      </div>
    )}

    <Link href="/blog" className="w-full">
      Blogs
    </Link>

    <Link href="/ContactUs" className="w-full">
      <button className="bg-[#D444F1] text-white px-4 py-2 rounded-full hover:bg-pink-600 mt-4 w-full transition-all duration-500 ease-in-out">
        Contact Us
      </button>
    </Link>
  </nav>
</div>

    </>
  );
};

export default Navbar;