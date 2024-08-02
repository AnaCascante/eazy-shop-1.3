import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

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

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://v2.api.noroff.dev/online-shop');
    const json = await response.json();
    const data = json.data;
    if (Array.isArray(data)) {
      return data;
    } else {
      console.error('Unexpected response data format:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching products', error);
    return [];
  }
};

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const results = searchTerm ? fetchSuggestions(searchTerm, products) : [];
    setSuggestions(results);
  }, [searchTerm, products]);

  const fetchSuggestions = (searchTerm: string, products: Product[]): Product[] => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const handleSuggestionClick = (suggestion: Product) => {
    setSearchTerm(suggestion.title);
    setSuggestions([]);
    navigate(`/product/${suggestion.id}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative items-center">
      <input
        className="items-center border border-black rounded p-2"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
  
      {suggestions.length > 0 && (
        <div className="absolute top-12 w-full bg-white border border-gray-300 rounded">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="block w-full p-2 text-left hover:bg-gray-100"
            >
              {suggestion.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
