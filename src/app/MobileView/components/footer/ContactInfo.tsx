import React from "react";

interface ContactInfoProps {
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email }) => {
  return (
    <div className="text-gray-300 flex flex-col items-start">
      {/* Horizontal Separator */}
      <hr className="border-t border-white  w-20 border-[1px] my-6" />
      <p className="text-white text-[14px] lg:text-[16.9px] font-[400] opacity-90">{phone}</p>
      <p>
        <a href={`mailto:${email}`} className=" text-white text-[16.9px] font-[400] opacity-90">
          {email}
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
