import React from "react";
import { useCart } from "./CartContext";

const ShoppingCard = () => {
  const { cart, updateQuantity, removeFromCart, isCartOpen, toggleCart } = useCart();

  const total = cart.reduce((sum, item) => {
    // Convert price string to number by removing $ and converting to float
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white max-w-4xl w-full mx-2 sm:mx-4 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Shopping Cart</h2>
            <button 
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Your cart is empty. Add some products to get started!
            </div>
          ) : (
            <>
              <div className="space-y-3 sm:space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center bg-[#d2c0a7] rounded-none px-2 py-2 sm:px-4 sm:py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain bg-[#8b7754] rounded-none mr-2 sm:mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm sm:text-base">{item.name}</div>
                      <div className="text-gray-700 text-xs sm:text-sm">{item.price}</div>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button
                        className="px-1 sm:px-2 text-lg sm:text-xl text-gray-700 hover:text-black"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity === 1}
                      >
                        –
                      </button>
                      <span className="w-5 sm:w-6 text-center text-sm sm:text-base">{item.quantity}</span>
                      <button
                        className="px-1 sm:px-2 text-lg sm:text-xl text-gray-700 hover:text-black"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                      <button
                        className="ml-1 sm:ml-2 text-lg sm:text-xl text-gray-700 hover:text-black"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 sm:mt-8">
                <div className="text-base sm:text-lg font-semibold mb-4 md:mb-0">
                  Total: <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex space-x-2 sm:space-x-3">
                  <button 
                    onClick={toggleCart}
                    className="px-4 sm:px-5 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-100 transition text-sm sm:text-base"
                  >
                    Continue Shopping
                  </button>
                  <button className="px-4 sm:px-5 py-2 rounded-md bg-[#f1ece4] text-black font-semibold hover:bg-[#8b7754] hover:text-white transition text-sm sm:text-base">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
