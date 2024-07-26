import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

type Product = {
  id: string;
  title: string;
  image: Image;
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: Review[];
};

const Products: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
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

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div className="">
        {data.map((item) => (
          <div key={item.id}>
            <img
              className="object-cover rounded-md h-48 w-48"
              src={item.image.url}
              alt={item.image.alt}
            />
            <h2 className="text-base font-medium pt-2">{item.title}</h2>
            <p>{item.description}</p>
            <p className=" font-medium pt-2 ">Price: ${item.price}</p>
            <p>Discounted Price: ${item.discountedPrice}</p>
            <p className=" font-medium pt-2 ">Rating: {item.rating}</p>
            <Link
              to={`/product/${item.id}`}
              className="bg-brown text-white px-4 py-2 rounded ml-0 m-4 inline-block "
            >
              View product
            </Link>
          </div>
        ))}
      </div>
    );
  };

export default Products;