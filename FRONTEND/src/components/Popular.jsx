import React from "react";
import popularProducts from "../Assets/popularItem.js";
import Item from "../components/Item.jsx";

const Popular = () => {
  return (
    <div className="max-w-7xl bg-[#f9f6f6] mx-auto px-6 py-6 lg:py-10">
      <h1 className="text-4xl font-extrabold text-black mb-4 text-center">
        Popular In Athletes
      </h1>
      <hr className="border-orange-400 mb-10" />

      {/* Scrollable container with horizontal spacing */}
      <div className="flex flex-nowrap overflow-x-auto space-x-6 scrollbar-hide px-4">
        {popularProducts.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] mr-22">
            <Item
              image={item.image}
              name={item.name}
              original_price={item.original_price}
              new_price={item.new_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
