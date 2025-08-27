import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Áo thun",
    price: 100000,
    image: "/logo192.png",
    description: "Áo thun chất liệu cotton.",
  },
  {
    id: 2,
    name: "Quần jeans",
    price: 200000,
    image: "/logo192.png",
    description: "Quần jeans thời trang.",
  },
  {
    id: 3,
    name: "Giày sneaker",
    price: 300000,
    image: "/logo192.png",
    description: "Giày sneaker năng động.",
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Không tìm thấy sản phẩm!</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width={150} />
      <p>{product.description}</p>
      <p>Giá: {product.price.toLocaleString()} VNĐ</p>
      <button>Thêm vào giỏ hàng</button>
    </div>
  );
}

export default ProductDetails;
