import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export const useCart = (): typeof CartContext => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};