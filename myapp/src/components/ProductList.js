import React from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Áo thun", price: 100000, image: "/logo192.png" },
  { id: 2, name: "Quần jeans", price: 200000, image: "/logo192.png" },
  { id: 3, name: "Giày sneaker", price: 300000, image: "/logo192.png" },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
