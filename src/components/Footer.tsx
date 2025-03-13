import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-peach-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Crown className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">M&R Glam</span>
            </div>
            <p className="text-peach-100">Your premier destination for luxury fashion and accessories.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-peach-300">Home</Link></li>
              <li><Link to="/category/clothes" className="hover:text-peach-300">Clothes</Link></li>
              <li><Link to="/category/shoes" className="hover:text-peach-300">Shoes</Link></li>
              <li><Link to="/category/accessories" className="hover:text-peach-300">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-peach-300">Contact Us</Link></li>
              <li><a href="#" className="hover:text-peach-300">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-peach-300">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-peach-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-peach-300"><Facebook /></a>
              <a href="#" className="hover:text-peach-300"><Instagram /></a>
              <a href="#" className="hover:text-peach-300"><Twitter /></a>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg text-gray-900 w-full"
                />
                <button className="bg-peach-500 px-4 py-2 rounded-r-lg hover:bg-peach-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-peach-800 mt-8 pt-8 text-center text-peach-100">
          <p>&copy; 2025 M&R Glam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}