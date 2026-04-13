import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [] });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchCart();
    }
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/cart');
      setCart(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      const res = await axios.post('http://localhost:5000/api/cart/add', { productId, quantity });
      setCart(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateCart = async (productId, quantity) => {
    try {
      const res = await axios.put('http://localhost:5000/api/cart/update', { productId, quantity });
      setCart(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`);
      setCart(res.data);
      toast.success('Removed from cart!');
    } catch (err) {
      toast.error('Failed to remove item');
      console.error(err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, removeFromCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};