import Image from "next/image";

const images = [
  {
    src: "/assets/careers/img1.png",
    alt: "Career Image 1",
  },
  {
    src: "/assets/careers/img2.png",
    alt: "Career Image 2",
  },
  {
    src: "/assets/careers/img3.png",
    alt: "Career Image 3",
  },
  {
    src: "/assets/careers/img4.png",
    alt: "Career Image 4",
  },
  {
    src: "/assets/careers/img5.png",
    alt: "Career Image 5",
  },
  {
    src: "/assets/careers/img6.png",
    alt: "Career Image 6",
  },
];

const ImageGrid = () => {
  return (
    <div className="hidden md:grid md:grid-cols-4 gap-6 mt-10 mx-auto max-w-6xl py-5">
      {/* 1st Column */}
      <div className="col-span-1 relative h-[500px]">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className=" object-cover"
          priority
        />
      </div>

      {/* 2nd Column (2 images) */}
      <div className="col-span-1 grid grid-rows-2 gap-6">
        <div className="relative h-[240px]">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className=" object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative h-[240px]">
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            className=" object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* 3rd Column (Wider Image) */}
      <div className="col-span-1 relative h-[500px]">
        <Image
          src={images[3].src}
          alt={images[3].alt}
          fill
          className=" object-cover"
          loading="lazy"
        />
      </div>

      {/* 4th Column (2 images) */}
      <div className="col-span-1 grid grid-rows-2 gap-2">
        <div className="relative h-[240px]">
          <Image
            src={images[4].src}
            alt={images[4].alt}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative h-[240px]">
          <Image
            src={images[5].src}
            alt={images[5].alt}
            fill
            className=" object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;