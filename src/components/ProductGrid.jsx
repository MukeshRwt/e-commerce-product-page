"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ProductCard from "./ProductCard";
import uparrow from "@/assets/icons/uparrow.svg";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-12 py-6">
      <div className="flex justify-between items-center">
        <p className="md:text-xl md:tracking-wider text-[16px]">
          <span>Bags</span>
          <span className="px-2">•</span>
          <span>Backpacks</span>
        </p>
        <p className="md:text-xl md:tracking-wider text-[16px] flex items-center gap-5">
          <span>{products.length} Products</span>
          <Image src={uparrow} alt="Up Arrow" />
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64 text-gray-600 text-lg">
          Loading products...
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-red-500 py-12">No products available.</div>
      ) : (
        <div className="py-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 place-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
