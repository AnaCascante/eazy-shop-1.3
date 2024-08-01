import { useCart } from '../../components/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { cart, totalCost, clearCart } = useCart();  
  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();  
    navigate('/CheckoutSuccessPage');  
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Checkout</h1>
      <ul className="mb-4">
        {cart.map((product) => (
          <li key={product.id} className="mb-2 flex items-center">
            <img src={product.imageUrl} alt={product.name} className="w-16 h-16 mr-4" />
            <div>
              <p>{product.name}</p>
              <p>{product.quantity} x ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-xl font-bold mb-4">Total: ${totalCost.toFixed(2)}</div>
      <button className=" text-white hover:bg-pink-500 px-4 py-2" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CheckoutPage;