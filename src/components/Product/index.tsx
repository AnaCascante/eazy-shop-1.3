import React from "react";
import { Link } from "react-router-dom";

type ProductProps = {
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

const Product: React.FC<ProductProps> = ({
  id,
  title,
  image,
  description,
  price,
  discountedPrice,
  rating,
}) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
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
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View product
      </Link>
    </div>
  );
};

export default Product;