import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elegant Summer Dress',
    price: 89.99,
    category: 'clothes',
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800',
    description: 'Beautiful floral summer dress perfect for any occasion'
  },
  {
    id: '2',
    name: 'Classic Leather Heels',
    price: 129.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
    description: 'Timeless leather heels that complement any outfit'
  },
  {
    id: '3',
    name: 'Pearl Necklace Set',
    price: 199.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
    description: 'Elegant pearl necklace set with matching earrings'
  },
  {
    id: '4',
    name: 'Designer Handbag',
    price: 299.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    description: 'Luxurious leather handbag with gold hardware'
  },
  {
    id: '5',
    name: 'Silk Evening Gown',
    price: 399.99,
    category: 'clothes',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800',
    description: 'Stunning silk evening gown in deep burgundy'
  },
  {
    id: '6',
    name: 'Designer Sunglasses',
    price: 159.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
    description: 'Elegant oversized sunglasses with UV protection'
  },
  {
    id: '7',
    name: 'Ankle Boots',
    price: 189.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
    description: 'Stylish leather ankle boots with block heel'
  },
  {
    id: '8',
    name: 'Cocktail Dress',
    price: 249.99,
    category: 'clothes',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    description: 'Elegant cocktail dress perfect for special occasions'
  },
  {
    id: '9',
    name: 'Diamond Bracelet',
    price: 599.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    description: 'Stunning diamond tennis bracelet'
  }
];

export const featuredProducts = products.slice(0, 3);

export const categories = [
  {
    name: 'Dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
    count: 150
  },
  {
    name: 'Shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800',
    count: 89
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
    count: 200
  },
  {
    name: 'Bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    count: 45
  }
];

export const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600',
    title: 'Summer Collection 2025',
    subtitle: 'Discover the latest trends in fashion'
  },
  {
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600',
    title: 'Luxury Accessories',
    subtitle: 'Complete your look with our premium selection'
  },
  {
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600',
    title: 'Designer Shoes',
    subtitle: 'Step into elegance with our curated collection'
  }
];