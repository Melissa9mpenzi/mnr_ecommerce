import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus } from 'lucide-react';
import { generateReceipt } from '../utils/receipt';

export function Cart() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  const handleCheckout = async () => {
    await generateReceipt(cart, total);
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-peach-900 mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center gap-4 py-4 border-b">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-peach-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-peach-100"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-peach-100"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="text-xl font-bold text-right mb-4">
          Total: ${total.toFixed(2)}
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-peach-500 text-white py-3 rounded-lg hover:bg-peach-600 transition-colors"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}