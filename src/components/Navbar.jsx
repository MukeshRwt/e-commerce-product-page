"use client";
import { Comme } from "next/font/google";
import Image from "next/image";
import search from "@/assets/icons/search.svg";
import user from "@/assets/icons/user-alt.svg";
import bookmark from "@/assets/icons/Bookmark.svg";
import shoppingbag from "@/assets/icons/shopping-bag.svg";
import Link from "next/link";
import { useState, useEffect } from "react";

const comme = Comme({
  weight: ["100"],
  subsets: ["latin"],
});
const encoded = Comme({
  weight: ["200"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = document?.documentElement?.scrollTop;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  return (
    <nav className={`w-full z-50 ${nav ? "sticky-nav" : ""}`}>
      <div className="flex justify-between items-center p-4 px-10">
        <Link href={"/"}>
          <h1
            className={`${comme.className} font-normal text-[20px] leading-[20px] tracking-[0.55em] cursor-pointer `}
          >
            TANN TRIM
          </h1>
        </Link>
        <div className="flex gap-6 items-center">
          <Image
            src={search}
            alt="Search Icon"
            className="w-[18px] h-[20px] object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <Image
            src={user}
            alt="User Icon"
            className="w-[18px] h-[20px] object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <Image
            src={bookmark}
            alt="Bookmark Icon"
            className="w-[18px] h-[20px] object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          />
          <Image
            src={shoppingbag}
            alt="Shopping Bag Icon"
            className="w-[18px] h-[20px] object-contain cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className={`${encoded.className} flex w-full justify-center tracking-wide`}>
        <ul className="flex gap-12 py-3">
          {["Bags", "Travel", "Accessories", "Gifting", "Jewellery"].map((item, idx) => (
            <Link href="#" key={idx}>
              <li className="cursor-pointer hover:text-gray-600 transition-all duration-200">
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
