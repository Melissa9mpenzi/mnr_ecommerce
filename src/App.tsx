import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';
import { Toaster } from 'react-hot-toast';
import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { FeaturedProducts } from './components/FeaturedProducts';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-peach-50">
        <Toaster position="top-right" />
        <Navbar />
        {!showCart && (
          <>
            <HeroSection />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <CategorySection />
              <FeaturedProducts />
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-peach-900 mb-6">All Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </main>
          </>
        )}
        {showCart && (
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Cart />
          </main>
        )}
        <button
          onClick={() => setShowCart(!showCart)}
          className="fixed bottom-6 right-6 bg-peach-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-peach-600 transition-colors"
        >
          {showCart ? 'Continue Shopping' : 'View Cart'}
        </button>
      </div>
    </CartProvider>
  );
}

export default App;