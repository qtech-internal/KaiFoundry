import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 items-center">
      <Link className="border-fuchsia-200 border-[1px] rounded-full p-3 flex items-center justify-center" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare className="text-white text-2xl hover:text-gray-400 transition-colors duration-200 cursor-pointer" />
      </Link>
      <Link className="border-fuchsia-200 border-[1px] rounded-full p-3 flex items-center justify-center" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white text-2xl hover:text-gray-400 transition-colors duration-200 cursor-pointer" />
      </Link>
    </div>
  );
};

export default SocialIcons;
