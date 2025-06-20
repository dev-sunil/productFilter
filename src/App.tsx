import "./styles.css";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { Product } from "./types";

const products: Product[] = [
  {
    id: "p1",
    name: "Laptop Pro",
    description: "Powerful laptop for professionals.",
    price: 1200,
    category: "Electronics",
  },
  {
    id: "p2",
    name: "Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 150,
    category: "Electronics",
  },
  {
    id: "p3",
    name: "Summer T-Shirt",
    description: "Lightweight cotton t-shirt.",
    price: 25,
    category: "Clothing",
  },
  {
    id: "p4",
    name: "React Handbook",
    description: "Comprehensive guide to React development.",
    price: 40,
    category: "Books",
  },
  {
    id: "p5",
    name: "Blender X200",
    description: "High-speed kitchen blender.",
    price: 300,
    category: "Home & Kitchen",
  },
  {
    id: "p6",
    name: "Winter Jacket",
    description: "Warm and durable winter jacket.",
    price: 180,
    category: "Clothing",
  },
  {
    id: "p7",
    name: "Smartwatch Ultra",
    description: "Track your fitness and notifications.",
    price: 250,
    category: "Electronics",
  },
  {
    id: "p8",
    name: "The Great Gatsby",
    description: "Classic American novel.",
    price: 15,
    category: "Books",
  },
];

export default function App() {
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const handleFilter = () => {
    if (minPrice === "" && maxPrice === "") return products;

    return products.filter((product) => {
      if (minPrice != "" && product.price < minPrice) return false;
      if (maxPrice != "" && product.price > maxPrice) return false;

      return true;
    });
  };

  return (
    <div className="App">
      <h1>Products</h1>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) =>
          setMinPrice(e.target.value === "" ? "" : parseFloat(e.target.value))
        }
      />

      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value === "" ? "" : parseFloat(e.target.value))
        }
      />

      <ProductList products={handleFilter()} />
    </div>
  );
}
