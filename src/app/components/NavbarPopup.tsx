
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaGamepad, FaRobot } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

interface ServicesPopupProps {
  onClose: () => void;
}

const ServicesPopup: React.FC<ServicesPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-start mt-20 mx-5 justify-center   z-50">
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
                Empowering your business with tailored solutions for sustainable
                growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full md:w-1/2">
            <ServiceItem
              icon={<SiBlockchaindotcom className="text-purple-600 text-2xl" />}
              title="Blockchain Development"
              description="Solutions tailored to your needs."
            />
            <ServiceItem
              icon={<FaRobot className="text-purple-600 text-2xl" />}
              title="AI Services"
              description="Unlock the power of AI."
            />
            <ServiceItem
              icon={<FaGamepad className="text-purple-600 text-2xl" />}
              title="Game Development"
              description="Experiences that drive players."
            />

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-purple-100 p-3 rounded-full">{icon}</div>

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ServicesPopup;
