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
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" px-10 py-6">
      <div className="flex justify-between items-center">
        <p className=" md:text-xl  md:tracking-wider text-[16px]">
          <span>Bags</span>
          <span className="px-2">•</span>
          <span>Backpacks</span>
        </p>
        <p className="tmd:text-xl  md:tracking-wider text-[16px] flex items-center gap-5">
          <span className="">{products.length} Products</span>
          <Image src={uparrow} alt="" />
        </p>
      </div>
      <div className="py-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 gap-12 place-items-center">
        {products.map((prodct) => (
          <ProductCard
            key={prodct.id}
            title={prodct.title}
            price={prodct.price}
            image={prodct.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
