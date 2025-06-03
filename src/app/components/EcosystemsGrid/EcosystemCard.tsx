"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EcosystemCard = ({ name, icon }: { name: string; icon: string }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="border border-fuchsia-500 rounded-lg flex flex-col items-center justify-center transition 
                 w-full h-[150px] md:h-[200px] p-4" // Increased height
    >
      <div className="flex items-center justify-center w-20 h-20"> {/* Increased icon container size */}
        <Image src={icon} alt={name} width={60} height={60} 
          draggable="false"
        /> {/* Increased icon size */}
      </div>
      <p className="mt-3 text-lg text-[#414141] font-semibold">{name}</p> {/* Increased text size */}
    </div>
  );
};

export default EcosystemCard;