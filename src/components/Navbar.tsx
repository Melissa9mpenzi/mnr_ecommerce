import React from 'react';
import { ShoppingBag, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-peach-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Crown className="h-8 w-8 text-peach-600" />
            <span className="ml-2 text-2xl font-bold text-peach-900">M&R Glam</span>
          </div>
          <div className="relative">
            <ShoppingBag className="h-6 w-6 text-peach-600" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-peach-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}