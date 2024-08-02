import React from "react";
import { Link } from "react-router-dom";


const ProductComponent: React.FC<ProductProps> = ({ product }) => {
  return <div>{JSON.stringify(product)}</div>;
};

interface ProductProps {
  id: string;
  product: {
    id: string;
    title: string;
    image: {
      url: string;
      alt: string;
    };
    description: string;
    price: number;
    discountedPrice: number;
    rating: number;
  };
  discountedPrice: number;
  rating: number; 
}

const Product: React.FC<ProductProps & { price: number }> = ({
  id,
  product,
  product: { image, description },
  price,
  discountedPrice,
  rating,
}) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
      <img
        className="w-full h-64 object-cover mb-4"
        src={image.url}
        alt={image.alt}
      />
      <p className="mb-2">{description}</p>
      <p className="mb-2">Price: ${price}</p>
      <p className="mb-2">Discounted Price: ${discountedPrice}</p>
      <p className="mb-4">Rating: {rating}</p>
      <Link
        to={`/product/${id}`}
        className= "bg-gray-200 hover:text-pink-500 px-4 py-2 rounded ml-0 m-4 inline-block"
      >
        View product
      </Link>
    </div>
  );
}

export { ProductComponent, Product };