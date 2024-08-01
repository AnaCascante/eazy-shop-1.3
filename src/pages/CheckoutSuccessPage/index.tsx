import { Link } from 'react-router-dom';

const CheckoutSuccessPage: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Your order is successfully placed!</h1>
      <p className="mb-4">Thank you for your purchase. Your order will be processed soon.</p>
      <Link to="/" className=" text-white hover: bg-pink-500 px-4 py-2 rounded">
        Back to Home
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
