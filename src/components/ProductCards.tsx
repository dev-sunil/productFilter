import React from "react";
import { Product } from "../types";

interface props {
  product: Product;
}

const ProductCard: React.FC<props> = ({ product }) => (
  <div>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <strong>{product.price}</strong>
  </div>
);

export default ProductCard;
