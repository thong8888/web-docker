import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} width={100} />
      <h3>{product.name}</h3>
      <p>Giá: {product.price.toLocaleString()} VNĐ</p>
      <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
    </div>
  );
}

export default ProductItem;
