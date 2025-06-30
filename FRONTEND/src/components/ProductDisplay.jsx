import React from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

const ProductDisplay = ({ product }) => {
  return (
    <div className="p-6 md:p-12 lg:p-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Display */}
        <div className="flex flex-col gap-4">
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((_, index) => (
              <img
                key={index}
                src={product.image}
                alt={`Product thumbnail ${index + 1}`}
                className="w-full h-20 object-cover rounded-lg border hover:scale-105 transition"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full h-[400px] border rounded-xl overflow-hidden">
            <img
              src={product.image}
              alt="Product main"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Display */}
        <div className="flex flex-col gap-6">
          {/* Product Name */}
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-yellow-500">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarOutline />
            <p className="text-sm text-gray-600">(155 reviews)</p>
          </div>

          {/* Prices */}
          <div className="flex items-center gap-4 text-lg">
            <span className="line-through text-gray-500">
              ₹{product.originalPrice}
            </span>
            <span className="text-green-600 font-semibold text-2xl">
              ₹{product.newPrice}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            assumenda sapiente quasi sed ex consectetur, id, recusandae deleniti
            beatae sequi nostrum ea sit unde porro quam, dolor quod veritatis.
            Fugiat magnam et cum officiis impedit illum praesentium, ab sit
            quaerat, possimus libero eos, molestiae sint excepturi porro
            nesciunt ex eaque.
          </p>

          {/* Quantity and Button */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-semibold mb-2">Select Quantity</h2>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 px-2 py-1 border rounded-lg"
              />
            </div>

            <button className="w-full md:w-1/2 bg-amber-500 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-xl transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
