import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
}

export function ProductCard({
  id,
  name,
  price,
  image,
  category,
  subcategory,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 space-y-2">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <FaHeart className="text-gray-600 hover:text-red-500" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <FaShoppingCart className="text-gray-600 hover:text-[#ff6d38]" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <Link
          to={`/product/${id}`}
          className="block text-sm font-medium text-gray-900 hover:text-[#ff6d38] mb-1 truncate"
        >
          {name}
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-[#ff6d38]">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">
            {category} / {subcategory}
          </span>
        </div>
      </div>
    </div>
  );
}
