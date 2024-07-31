import React from 'react';
import { useCart } from '../../components/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { cart, totalCost, removeFromCart } = useCart();  
  const navigate = useNavigate();

  const handleCheckout = () => {
    removeFromCart ();  
    navigate('/');  
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Checkout</h1>
      <ul className="mb-4">
        {cart.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <div className="text-xl font-bold mb-4">Total: ${totalCost.toFixed(2)}</div>
      <button className="hover:bg-pink-500 text-white px-4 py-2" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CheckoutPage;
