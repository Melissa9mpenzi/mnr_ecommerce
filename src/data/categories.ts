export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "women",
    name: "Women",
    image: "/images/categories/women.jpg",
    subcategories: [
      { id: "dresses", name: "Dresses", image: "/images/categories/dresses.jpg" },
      { id: "tops", name: "Tops", image: "/images/categories/tops.jpg" },
      { id: "bottoms", name: "Bottoms", image: "/images/categories/bottoms.jpg" },
      { id: "sets", name: "Sets", image: "/images/categories/sets.jpg" },
      { id: "outerwear", name: "Outerwear", image: "/images/categories/outerwear.jpg" },
      { id: "activewear", name: "Activewear", image: "/images/categories/activewear.jpg" },
      { id: "swimwear", name: "Swimwear", image: "/images/categories/swimwear.jpg" },
      { id: "shoes", name: "Shoes", image: "/images/categories/shoes.jpg" },
      { id: "accessories", name: "Accessories", image: "/images/categories/accessories.jpg" }
    ]
  },
  {
    id: "men",
    name: "Men",
    image: "/images/categories/men.jpg",
    subcategories: [
      { id: "mens-tops", name: "Tops", image: "/images/categories/mens-tops.jpg" },
      { id: "mens-bottoms", name: "Bottoms", image: "/images/categories/mens-bottoms.jpg" },
      { id: "mens-sets", name: "Sets", image: "/images/categories/mens-sets.jpg" },
      { id: "mens-outerwear", name: "Outerwear", image: "/images/categories/mens-outerwear.jpg" },
      { id: "mens-activewear", name: "Activewear", image: "/images/categories/mens-activewear.jpg" },
      { id: "mens-shoes", name: "Shoes", image: "/images/categories/mens-shoes.jpg" },
      { id: "mens-accessories", name: "Accessories", image: "/images/categories/mens-accessories.jpg" }
    ]
  },
  {
    id: "kids",
    name: "Kids",
    image: "/images/categories/kids.jpg",
    subcategories: [
      { id: "girls", name: "Girls", image: "/images/categories/girls.jpg" },
      { id: "boys", name: "Boys", image: "/images/categories/boys.jpg" },
      { id: "baby", name: "Baby", image: "/images/categories/baby.jpg" },
      { id: "kids-shoes", name: "Shoes", image: "/images/categories/kids-shoes.jpg" },
      { id: "kids-accessories", name: "Accessories", image: "/images/categories/kids-accessories.jpg" }
    ]
  },
  {
    id: "home",
    name: "Home",
    image: "/images/categories/home.jpg",
    subcategories: [
      { id: "bedding", name: "Bedding", image: "/images/categories/bedding.jpg" },
      { id: "bath", name: "Bath", image: "/images/categories/bath.jpg" },
      { id: "decor", name: "Decor", image: "/images/categories/decor.jpg" },
      { id: "kitchen", name: "Kitchen", image: "/images/categories/kitchen.jpg" },
      { id: "furniture", name: "Furniture", image: "/images/categories/furniture.jpg" }
    ]
  },
  {
    id: "beauty",
    name: "Beauty",
    image: "/images/categories/beauty.jpg",
    subcategories: [
      { id: "makeup", name: "Makeup", image: "/images/categories/makeup.jpg" },
      { id: "skincare", name: "Skincare", image: "/images/categories/skincare.jpg" },
      { id: "hair", name: "Hair", image: "/images/categories/hair.jpg" },
      { id: "fragrances", name: "Fragrances", image: "/images/categories/fragrances.jpg" },
      { id: "tools", name: "Tools", image: "/images/categories/tools.jpg" }
    ]
  }
]; 