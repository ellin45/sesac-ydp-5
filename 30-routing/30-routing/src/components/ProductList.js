import React from 'react';
import { productInfos } from '../pages/ProductPage';
import ProductItem from '../pages/ProductItem';


export default function ProductList() {
  console.log(productInfos);
  return (
    <div>
      {productInfos.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
