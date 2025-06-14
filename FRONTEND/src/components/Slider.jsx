import React, { useState, useEffect } from "react";
import slider1 from "../Assets/images/slider1.png";
import slider2 from "../Assets/images/slider2.png";
import slider3 from "../Assets/images/slider3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const posters = [slider1, slider2, slider3];

  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posters.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === posters.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="w-full h-70 lg:h-140 bg-[#f9f9f9] flex justify-center">
      <img src={posters[currentIndex]} alt="poster" className="h-60 w-full lg:h-140 lg:w-[70%]" />
      {/* Left Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-[34%] lg:top-1/2 left-4 lg:left-16 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <FaArrowLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={goToNext}
        className="absolute top-[34%]  lg:top-1/2 right-4 lg:right-16 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
