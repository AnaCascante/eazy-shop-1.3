import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Product {
  id: string;
  title: string;
  image: { url: string; alt: string };
  description: string;
  price: number;
  discountedPrice: number;
  rating: number;
  reviews: { id: string; username: string; rating: number; description: string }[];
}

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchTerm = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://v2.api.noroff.dev/online-shop');
        const data = await response.json();
        if (Array.isArray(data)) {
          const results = data.filter((product: Product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setSearchResults(results);
        } else {
          console.error('Unexpected response data format:', data);
        }
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    if (searchTerm) {
      fetchProducts();
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{searchTerm}"</p>
      )}
    </div>
  );
};

export default SearchResultsPage;
