import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartProduct {
  id: string;
  title: string;
  name: string;
  price: number;
  quantity: number;
  image: { url: string; alt: string };
}

export interface CartContextProps {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void; 
  removeFromCart: (id: string) => void;
  clearCart: () => void;  // Add clearCart function
  totalProducts: number;
  totalCost: number;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    const itemIndex = cart.findIndex((i) => i.id === product.id);
    if (itemIndex === -1) {
      setCart([...cart, product]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].quantity += product.quantity;
      setCart(newCart);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalProducts = cart.reduce((count, product) => count + product.quantity, 0);
  const totalCost = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalProducts, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
