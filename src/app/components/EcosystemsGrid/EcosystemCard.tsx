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
      className="border border-fuchsia-500 rounded-lg flex flex-col items-center justify-cente transition 
                 w-full h-[120px] md:h-[150px] p-4"
    >
      <div className="flex items-center justify-center w-16 h-16">
        <Image src={icon} alt={name} width={50} height={50} />
      </div>
      <p className="mt-3 text-sm text-black font-bold">{name}</p>
    </div>
  );
};

export default EcosystemCard;
