import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-white text-xl hover:text-gray-400 cursor-pointer" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white text-xl hover:text-gray-400 cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialIcons;
