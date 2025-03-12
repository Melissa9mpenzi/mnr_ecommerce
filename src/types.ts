export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'clothes' | 'shoes' | 'accessories';
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}