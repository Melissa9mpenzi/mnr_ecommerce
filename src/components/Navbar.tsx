import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Crown, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-peach-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Crown className="h-8 w-8 text-peach-600" />
            <span className="ml-2 text-2xl font-bold text-peach-900">M&R Glam</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border-gray-200 focus:border-peach-500 focus:ring-peach-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link to="/contact" className="text-peach-900 hover:text-peach-600">Contact</Link>
            <Link to="/login" className="text-peach-900 hover:text-peach-600">Login</Link>
            <Link to="/signup" className="text-peach-900 hover:text-peach-600">Sign Up</Link>
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-peach-600" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-peach-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg border-gray-200"
              />
              <Link to="/contact" className="text-peach-900">Contact</Link>
              <Link to="/login" className="text-peach-900">Login</Link>
              <Link to="/signup" className="text-peach-900">Sign Up</Link>
              <Link to="/cart" className="text-peach-900">Cart ({itemCount})</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}