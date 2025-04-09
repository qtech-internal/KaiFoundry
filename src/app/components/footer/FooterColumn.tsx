import React from "react";
import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-[500] text-[16.8px] mb-8 font-inter">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="text-white font-[400] text-[19.2px] my-2 font-inter opacity-90">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
