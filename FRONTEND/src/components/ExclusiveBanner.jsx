import React from 'react';
import ExclusiveBanner from "../Assets/images/ExclusiveBanner.png";
import { Link } from "react-router-dom";

const ExclusiveDeals = () => {
  return (
    <div className="relative w-full h-155 lg:h-80 bg-gradient-to-b from-orange-50 to-white py-16 px-6 lg:px-20 overflow-hidden rounded-xl shadow-xl">

      {/* Background image and overlay */}
      <img
        src={ExclusiveBanner}
        alt="Exclusive Deals Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/90 via-white/70 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">

        {/* Left: Deals Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-orange-600 drop-shadow-md mb-2 animate-fadeInUp">
            Great Deals
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mt-2 animate-fadeInUp">
            Offers For You
          </h2>
          <p className="text-base text-gray-700 mt-2 animate-fadeInUp">
            Limited Time Deals — Grab Now!
          </p>
          <Link to="/deals">
            <button className="mt-8 px-8 py-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105 animate-fadeInUp">
              Check Now
            </button>
          </Link>
        </div>

        {/* Right: Newsletter */}
        <div className="bg-white/80 backdrop-blur-md p-6 lg:p-10 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Get Exclusive Deals on Your Email
          </h3>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter and stay updated!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 w-full sm:w-[300px] border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300 text-center"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExclusiveDeals;
