import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../hooks/useCart';

const CartIcon: React.FC = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((count, product) => count + product.quantity, 0);

  return (
    <Link to="/CheckoutPage" className="relative">
      <FaShoppingCart className='text-3xl'/>
      {cartCount > 0 && (
        <span className="absolute top-0 right-0 bg-pink-200 rounded-full text-xs w-4 h-4 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
