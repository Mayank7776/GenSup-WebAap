import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";

import Banner1 from "../Assets/images/bpiBanner.png";
import Banner2 from "../Assets/images/trunativeBanner.png";
import Banner3 from "../Assets/images/prosuppsBanner.png";

const BrandBanner = () => {
  const navigate = useNavigate();

  const banners = [
    { image: Banner1, path: "/bpi" },
    { image: Banner2, path: "/trunative" },
    { image: Banner3, path: "/prosupps" },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full bg-[#f9f9f9] px-4 lg:py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 flex items-center justify-center gap-2 mb-8">
        <BsStars className="text-yellow-500 text-3xl" />
        Top Selling Brands
        <BsStars className="text-yellow-500 text-3xl" />
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <HoverCard
              key={index}
              image={banner.image}
              path={banner.path}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable hover/touch card
const HoverCard = ({ image, path, onClick }) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div
      onClick={() => onClick(path)}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      onMouseEnter={() => setIsTouched(true)}
      onMouseLeave={() => setIsTouched(false)}
      className={`cursor-pointer rounded-xl overflow-hidden bg-white shadow-md transition duration-300 transform 
        ${isTouched ? "scale-105 shadow-lg" : ""} 
        lg:hover:scale-110 lg:hover:shadow-lg`}
    >
      <div className="w-full aspect-[16/6] overflow-hidden">
        <img
          src={image}
          alt="Banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default BrandBanner;
