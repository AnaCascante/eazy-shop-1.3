import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';

const CartIcon: React.FC = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <Link to="/cart" className="relative">
      <FaShoppingCart />
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 rounded-full text-xs w-4 h-4 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
