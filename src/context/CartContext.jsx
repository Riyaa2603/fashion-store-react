import { createContext, useState, useEffect } from "react";

// 1. Context create kiya (Global storage)
export const CartContext = createContext();

// 2. Provider component banaya jo data supply karega
export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Jab bhi cart change ho, localStorage mein sync karein
  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    } catch (e) {
      console.error("Error saving cart to localStorage:", e);
    }
  }, [cart]);

  // Item add karne ka simple function
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Item remove karne ka simple function
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Cart clear karne ka function
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

