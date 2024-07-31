import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    totalItems: number;
    totalCost: number;
    }

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const itemIndex = cart.findIndex((i) => i.id === item.id);
    if (itemIndex === -1) {
      setCart([...cart, item]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].quantity += item.quantity;
      setCart(newCart);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};