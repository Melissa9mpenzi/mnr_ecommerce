import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { categories } from "../data/categories";

export function CategoryPage() {
  const { categoryId, subcategoryId } = useParams();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>("featured");

  const category = categories.find((c) => c.id === categoryId);
  const subcategory = category?.subcategories.find(
    (s) => s.id === subcategoryId
  );

  let filteredProducts = products.filter((product) => {
    if (subcategoryId) {
      return (
        product.category === categoryId && product.subcategory === subcategoryId
      );
    }
    return product.category === categoryId;
  });

  // Apply filters
  if (selectedSize) {
    filteredProducts = filteredProducts.filter((product) =>
      product.sizes.includes(selectedSize)
    );
  }

  if (selectedColor) {
    filteredProducts = filteredProducts.filter((product) =>
      product.colors.includes(selectedColor)
    );
  }

  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Apply sorting
  switch (sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const uniqueSizes = Array.from(
    new Set(filteredProducts.flatMap((product) => product.sizes))
  );
  const uniqueColors = Array.from(
    new Set(filteredProducts.flatMap((product) => product.colors))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Filters
            </h3>

            {/* Size Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Size</h4>
              <div className="flex flex-wrap gap-2">
                {uniqueSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() =>
                      setSelectedSize(size === selectedSize ? "" : size)
                    }
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedSize === size
                        ? "bg-[#ff6d38] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Color</h4>
              <div className="flex flex-wrap gap-2">
                {uniqueColors.map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSelectedColor(color === selectedColor ? "" : color)
                    }
                    className={`px-3 py-1 rounded-full text-sm ${
                      selectedColor === color
                        ? "bg-[#ff6d38] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Price Range
              </h4>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-20 px-2 py-1 border rounded-md text-sm"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-20 px-2 py-1 border rounded-md text-sm"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              {subcategory ? subcategory.name : category?.name}
            </h1>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border rounded-md text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                subcategory={product.subcategory}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
