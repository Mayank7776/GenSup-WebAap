import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HomeContext } from '../contextApi/HomeContext';
import BreadCrums from '../components/BreadCrums';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';

const Products = () => {
  const { allProduct } = useContext(HomeContext);
  const { productId }= useParams();

  const product = allProduct.find((e) => e.id === Number(productId) );
  if (!product) {
    return (
      <div className="text-center py-10 text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />  
      <DescriptionBox />    
    </div>
  );
};

export default Products;
