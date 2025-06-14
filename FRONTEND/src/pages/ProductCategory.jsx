import React, { useContext, useState, useMemo } from 'react';
import { HomeContext } from '../contextApi/HomeContext';
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from "../components/Item";

const ProductCategory = (props) => {
  const { allProduct } = useContext(HomeContext);
  
  // State for sorting
  const [sortOption, setSortOption] = useState('Newest');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter products by category
  const filteredProducts = allProduct.filter(
    (product) => product.category === props.category
  );

  // Sort products based on selected option
  const sortedProducts = useMemo(() => {
    const productsCopy = [...filteredProducts];
    switch (sortOption) {
      case 'Price (Low to High)':
        return productsCopy.sort((a, b) => a.newPrice - b.newPrice);
      case 'Price (High to Low)':
        return productsCopy.sort((a, b) => b.newPrice - a.newPrice);
      case 'Newest':
      default:
        // Assuming products have a 'createdAt' or similar timestamp property
        return productsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }, [filteredProducts, sortOption]);

  // Handle selecting a sorting option
  const handleSortChange = (option) => {
    setSortOption(option);
    setDropdownOpen(false);
  };
    return (
  <div className="w-full bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8 pb-5">
    {/* Banner */}
    <div className="mx-auto lg:max-w-[80%]">
      <img
        className="w-full lg:h-140 mb-8 object-cover"
        src={props.banner}
        alt={props.category}
      />

      {/* Header and Sorting */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 sm:gap-0">
        <p className="text-gray-800 text-lg sm:text-xl px-4 sm:px-0">
          <span className="font-semibold text-black">{`Showing 1–${Math.min(12, sortedProducts.length)}`}</span>{' '}
          of {sortedProducts.length} Products
        </p>

        <div 
          className="relative text-gray-700 cursor-pointer select-none w-full sm:w-auto"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          onBlur={() => setDropdownOpen(false)} // Close dropdown when losing focus
          tabIndex={0}
        >
          <div className="flex items-center justify-between gap-1 border px-4 py-2 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto">
            <span>Sort by:</span>
            <span className="font-semibold">{sortOption}</span>
            <RiArrowDropDownLine className="text-2xl" />
          </div>

          {dropdownOpen && (
            <ul className="absolute left-0 right-0 sm:w-44 bg-white border mt-2 rounded-lg shadow-md z-10 max-w-xs sm:max-w-none mx-auto sm:mx-0">
              {['Price (Low to High)', 'Price (High to Low)', 'Newest'].map((option) => (
                <li
                  key={option}
                  onClick={() => handleSortChange(option)}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    sortOption === option ? 'bg-gray-100 font-semibold' : ''
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-0">
        {sortedProducts.slice(0, 12).map((product, i) => (
          <Item
            key={i}
            id = {product.id}
            name={product.name}
            image={product.image}
            original_price={product.originalPrice}
            new_price={product.newPrice}
          />
        ))}
      </div>
    </div>
  </div>
);
};

export default ProductCategory;
