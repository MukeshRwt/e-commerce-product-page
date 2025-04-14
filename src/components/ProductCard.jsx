import Image from "next/image";
import shoppingbag from "@/assets/icons/shopping-bag.svg";
import { GoBookmark } from "react-icons/go";
const ProductCard = ({ title, price, image }) => {
  return (
    <div
      className="w-[283px] h-[483px]  border rounded-2xl border-[#141414] relative
    "
    >
      <div className="flex flex-col gap-2">
        <img src={image} alt="" className="w-[280px] h-[373px]  rounded-t-2xl" />
        <GoBookmark
          className="absolute right-5 top-3 text-black bg-transparent hover:text-[#2FC14F] "
          size={40}
        />

        <p className="text-xl font-medium tracking-wider px-2 truncate overflow-hidden whitespace-nowrap">
          {title}
        </p>
        <div className="flex justify-between px-3 items-center">
          <p>
            <span className="text-xl font-semibold"> ₹ {(price * 70).toFixed(1)} </span>
            <span className="text-xs line-through">8999</span>{" "}
            <span className="text-xs text-[#2FC14F]">(50% off)</span>
          </p>

          <div className="relative">
            <Image src={shoppingbag} alt="Shopping Bag" className="w-[30px] h-[50px]" />
            <div className=" w-[22px] h-[22px]  absolute top-7 -right-1 rounded-full flex items-center justify-center text-2xl cursor-pointer bg-black ">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
