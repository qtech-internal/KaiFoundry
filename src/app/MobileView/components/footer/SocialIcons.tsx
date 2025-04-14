import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 items-center">
      <Link className=" border-[1px] rounded-full p-4 flex items-center justify-center " href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page (opens in new tab)"
      style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        <FaFacebookSquare className="text-white text-2xl hover:text-gray-400 transition-colors duration-200 cursor-pointer" />
      </Link>
      <Link className=" border-[1px] rounded-full p-4 flex items-center justify-center" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page (opens in new tab)"
      style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
      >
        <FaInstagram className="text-white text-2xl hover:text-gray-400 transition-colors duration-200 cursor-pointer" />
      </Link>
    </div>
  );
};

export default SocialIcons;
