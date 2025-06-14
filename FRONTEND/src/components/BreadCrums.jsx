import React from 'react';
import { RiArrowRightWideLine } from "react-icons/ri";

const BreadCrums = ({ product }) => {
  if (!product) return null; // return nothing if product is not available

  return (
    <div className="flex items-center text-sm text-gray-700 space-x-1 px-4 py-2">
      <span className="hover:underline cursor-pointer">Home</span>
      <RiArrowRightWideLine />
      <span className="hover:underline cursor-pointer">Shop</span>
      <RiArrowRightWideLine />
      <span className="hover:underline cursor-pointer capitalize">{product.category}</span>
      <RiArrowRightWideLine />
      <span className="font-medium capitalize">{product.name}</span>
    </div>
  );
};

export default BreadCrums;
