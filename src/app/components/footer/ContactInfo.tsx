import React from "react";

interface ContactInfoProps {
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email }) => {
  return (
    <div className="text-gray-300 flex flex-col items-start">
      {/* Horizontal Separator */}
      <hr className="border-t border-white sm:border-black w-20 border-[1px] my-6" />
      <p>{phone}</p>
      <p>
        <a href={`mailto:${email}`} className="hover:text-white">
          {email}
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
