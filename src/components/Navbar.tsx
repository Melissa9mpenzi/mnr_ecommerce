import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { categories } from "../data/categories";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#ff6d38]">
              M&R Glam
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <div key={category.id} className="relative group">
                <Link
                  to={`/category/${category.id}`}
                  className="text-gray-700 hover:text-[#ff6d38] font-medium"
                >
                  {category.name}
                </Link>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 mt-2">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      to={`/category/${category.id}/${sub.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="h-6 w-6 text-gray-700 hover:text-[#ff6d38]" />
              <span className="absolute -top-2 -right-2 bg-[#ff6d38] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Account Icon with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
                className="focus:outline-none"
              >
                <FaUser className="h-6 w-6 text-gray-700 hover:text-[#ff6d38]" />
              </button>
              {isAccountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg py-2 rounded-md">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAccountDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsAccountDropdownOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#ff6d38] focus:outline-none"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {categories.map((category) => (
              <div key={category.id}>
                <Link
                  to={`/category/${category.id}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff6d38]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
                <div className="pl-6">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      to={`/category/${category.id}/${sub.id}`}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#ff6d38]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
