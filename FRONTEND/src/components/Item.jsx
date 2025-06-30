import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, name, original_price, new_price }) => {
  return (
    <div className=" w-[350px] p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`}>
      
      <img
        src={image}
        alt={name}
        className="w-full h-[250px] object-cover rounded-md mb-3"
      />
      </Link>
      <p className="text-lg font-medium text-gray-800 mb-2">{name}</p>
      <div className="flex gap-4 items-center">
        <span className="text-gray-500 line-through text-sm">₹{original_price}</span>
        <span className="text-green-600 font-semibold text-lg">₹{new_price}</span>
      </div>
    </div>
  );
};

export default Item;
