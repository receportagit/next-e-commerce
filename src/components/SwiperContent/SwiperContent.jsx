import Image from "next/image";
import React from "react";

const SwiperContent = ({ imagePath, title, description }) => {
  return (
    <div className="relative">
      {/* Arka plan resmi */}
      <Image
        priority
        src={imagePath}
        alt="hero-banner1"
        width={1920}
        height={1080}
      />
      {/* Opak katman */}
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      {/* Metin ve buton alanı */}
      <div className="absolute hidden sm:block bottom-20 left-0 w-[60%] text-white px-5 py-8 sm:py-10">
        <h1 className="font-lato text-sm sm:text-xl lg:text-3xl font-bold uppercase">
          {title}
        </h1>
        <p className="font-lato mt-2 text-sm sm:text-base lg:text-lg text-neutral">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SwiperContent;
