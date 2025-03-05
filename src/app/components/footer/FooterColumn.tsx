import React from "react";
import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-bold mb-2">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="text-white">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
