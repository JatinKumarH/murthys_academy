import React, { createContext, useState, useContext } from 'react';
import { courses } from '../data/coursesData'; // Import your course data

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // ENHANCEMENT: Added the first two courses as sample data.
  // You can remove this to start with an empty cart again.
  const [cartItems, setCartItems] = useState([courses[0], courses[1]]);

  const addToCart = (course) => {
    if (!cartItems.find(item => item.id === course.id)) {
      setCartItems(prevItems => [...prevItems, course]);
    }
  };

  const removeFromCart = (courseId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== courseId));
  };

  const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};