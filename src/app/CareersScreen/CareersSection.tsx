"use client";

import Image from "next/image";

const images = [
  {
    src: "/assets/careers/img1.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }, // Image for 1st column
  {
    src: "/assets/careers/img2.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }, // Image for 2nd column (1st image)
  {
    src: "/assets/careers/img3.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }, // Image for 2nd column (2nd image)
  {
    src: "/assets/careers/img4.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }, // Wider image for 3rd column
  {
    src: "/assets/careers/img5.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }, // Image for 4th column (1st image)
  {
    src: "/assets/careers/img6.png",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  }, // Image for 4th column (2nd image)
];

const CareersSection = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Careers
        </h2>
        <p className="text-[#808080] text-[14px] md:text-xl font-[400] mt-2">
          Join A Team That Turns Ideas Into Impact
        </p>
        <p className="text-[#808080] text-[14px] md:text-xl font-[500] ">
          One Block At A Time!
        </p>

        {/* Image Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 mt-10 mx-auto max-w-6xl">
          {/* 1st Column */}
          <div className="col-span-1 relative h-[500px]">
            <Image
              src={images[0].src}
              alt="Career Image 1"
              fill
              className="rounded-lg object-cover"
              priority // Load this image first
            />
          </div>

          {/* 2nd Column (2 images) */}
          <div className="col-span-1 grid grid-rows-2 gap-2">
            <div className="relative h-[240px]">
              <Image
                src={images[1].src}
                alt="Career Image 2"
                fill
                className="rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative h-[240px]">
              <Image
                src={images[2].src}
                alt="Career Image 3"
                fill
                className="rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* 3rd Column (Wider Image) */}
          <div className="col-span-1 relative h-[500px]">
            <Image
              src={images[3].src}
              alt="Career Image 4"
              fill
              className="rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* 4th Column (2 images) */}
          <div className="col-span-1 grid grid-rows-2 gap-2">
            <div className="relative h-[240px]">
              <Image
                src={images[4].src}
                alt="Career Image 5"
                fill
                className="rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative h-[240px]">
              <Image
                src={images[5].src}
                alt="Career Image 6"
                fill
                className="rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
        </div>


<div className="flex flex-col gap-2 mt-10 mx-auto w-full sm:hidden">
  {/* First Row with First Image and Second/Third Images */}
  <div className="flex">
    <div className="flex-1">
      <Image
        src={images[0].src}
        alt="Career Image 1"
        width={350}
        height={350}
        className=" object-cover"
      />
    </div>
    <div className="flex flex-col ml-4 gap-4">
      <div className="flex-1">
        <Image
          src={images[1].src}
          alt="Career Image 2"
          width={173}
          height={200}
          className=" object-cover"
        />
      </div>
      <div className="flex-1">
        <Image
          src={images[2].src}
          alt="Career Image 3"
          width={173}
          height={110}
          className=" object-cover"
        />
      </div>
    </div>
  </div>
  

  <div className="flex">
    <div className="flex-1 ">
      <Image
        src={images[3].src}
        alt="Career Image 4"
        width={550}
        height={250}
        className=" object-cover"
      />
    </div>
    <div className="flex flex-col ml-4 gap-4">
      <div className="flex-1">
        <Image
          src={images[5].src}
          alt="Career Image 5"
          width={135}
          height={120}
          className=" object-cover"
        />
      </div>
      <div className="flex-1">
        <Image
          src={images[4].src}
          alt="Career Image 6"
          width={140}
          height={20}
          className=" object-cover"
        />
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
    
  );
};

export default CareersSection;
