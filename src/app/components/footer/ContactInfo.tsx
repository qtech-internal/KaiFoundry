import React from "react";

interface ContactInfoProps {
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email }) => {
  return (
    <div className="text-gray-300 ">
      {/* Horizontal Separator */}
      <hr className="border-t border-black w-14 my-6 mt-12" />

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
