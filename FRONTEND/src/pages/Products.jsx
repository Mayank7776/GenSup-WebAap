import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HomeContext } from '../contextApi/HomeContext';
import BreadCrums from '../components/BreadCrums';

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
      {/* You can add product detail UI here */}
    </div>
  );
};

export default Products;
