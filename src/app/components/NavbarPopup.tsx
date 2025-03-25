"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface ServicesPopupProps {
  onClose: () => void;
}

const ServicesPopup: React.FC<ServicesPopupProps> = ({ onClose }) => {
  const [services, setServices] = useState<{ title: string; description: string; icon: string; link: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error loading services:", error));
  }, []);

  return (
    <div className="fixed inset-0 flex items-start mt-20 mx-5 justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-8xl opacity-100 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col justify-center items-start pl-10 w-full md:w-1/3 text-center">
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-4xl font-bold mb-4">Services</h2>
              <p className="text-gray-600 max-w-md text-start">
                Empowering your business with tailored solutions for sustainable growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full md:w-1/2">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem: React.FC<{ icon: string; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push(link)}>
      <img src={icon} alt={title} className="w-10 h-10" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ServicesPopup;
