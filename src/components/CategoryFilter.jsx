import Image from "next/image";
import image1 from "@/assets/icons/AllBags.svg";
import image2 from "@/assets/icons/VanityPouch.svg";
import image3 from "@/assets/icons/ToteBag.svg";
import image4 from "@/assets/icons/DuffleBag.svg";
import image5 from "@/assets/icons/LaptopSleeve.svg";
import image6 from "@/assets/icons/MessengerBags.svg";
import image7 from "@/assets/icons/SlingsBgs.svg";
import image8 from "@/assets/icons/Handbags.svg";

const categories = [
  { label: "All Bags", img: image1 },
  { label: "Vanity Pouch", img: image2 },
  { label: "Tote Bag", img: image3 },
  { label: "Duffle Bag", img: image4 },
  { label: "Laptop Sleeve", img: image5 },
  { label: "Messenger Bags", img: image6 },
  { label: "Slings Bag", img: image7 },
  { label: "Handbags", img: image8 },
];

const CategoryCarousel = () => {
  return (
    <div className="  px-1 py-6 overflow-x-auto scrollbar-hide ">
      <div className="flex gap-6 items-center">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full   cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <Image src={item.img} alt={item.label} className="w-[90px] h-[90px]  mb-4" />
            <p className="text-white text-sm font-light tracking-wider text-center ">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
