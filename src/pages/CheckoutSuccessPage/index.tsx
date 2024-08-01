import { Link } from 'react-router-dom';

const CheckoutSuccessPage: React.FC = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-blue-800 text-5xl font-bold mb-4">Thanks for shopping with us!</h1>
      <p className="text-blue-800 text- 3xl font-semibold mb-4">Your order will be processed soon. If you love it, let us know, leave a review. Have a nice day! ❤️</p>
      <Link to="/" className="text-blue-800 hover:text-white  hover: bg-pink-500 px-4 py-2 rounded">
        Back to Home
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;
