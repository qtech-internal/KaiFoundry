import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  text: string;
  href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-300 text-black">
        {text}
      </button>
    </Link>
  );
};

export default CTAButton;
