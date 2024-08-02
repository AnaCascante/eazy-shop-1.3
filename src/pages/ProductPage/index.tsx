
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

type Image = {
  url: string;
  alt: string;
};

type Review = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

type ProductType = {
  id: string;
  title: string;
  image: Image;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  tags: string[];
  reviews: Review[];
};

const ProductPage: React.FC = () => {
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setProduct(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      {product.image && (
        <img
          className="w-full h-64 object-cover mb-4"
          src={product.image.url}
          alt={product.image.alt}
        />
      )}
      <p className="mb-2">{product.description}</p>
      <p className="mb-2">Price: ${product.price}</p>
      <p className="mb-2">Discounted Price: ${product.discountedPrice}</p>
      <p className="mb-4">Rating: {product.rating}</p>
      <button
        onClick={() =>
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1,
            name: "",
            imageUrl: ""
          })
        }
        className="bg-gray-200 text-blue-500 hover:text-pink-500 px-4 py-2 rounded ml-0 m-4 inline-block "
      >
        Add to Cart
      </button>
      <div>
        <h3 className="text-xl font-semibold mb-2">Reviews</h3>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review) => (
            <div key={review.id} className="mb-2">
              <p className="font-bold">
                {review.username}: {review.rating} stars
              </p>
              <p>{review.description}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;