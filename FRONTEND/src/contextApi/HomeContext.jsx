import React, { createContext } from "react";
import allProductData from "../Assets/allProduct";

export const HomeContext = createContext(null);

const HomeContextProvider = (props) => {
  // Add unique ID to each product
  const allProduct = allProductData.map((item, index) => ({
    ...item,
    id: index + 1, // or use a UUID if you prefer
  }));
const contextValue = { allProduct };

  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  );
};

export default HomeContextProvider;
