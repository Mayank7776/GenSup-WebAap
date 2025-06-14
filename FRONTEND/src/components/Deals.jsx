import React from "react";
import Item from "./Item";
import dealItems from "../Assets/DealsItem";

const Deals = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-orange-600 mb-6 text-center">Exclusive Deals</h1>
      <hr className="border-orange-400 mb-10" />

      {/* Use flex-wrap and gap for spacing with fixed width items */}
      <div className="flex flex-wrap justify-center gap-8">
        {dealItems.map((item, i) => (
          <Item
            key={i}
            image={item.image}
            name={item.name}
            original_price={item.original_price}
            new_price={item.new_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Deals;
