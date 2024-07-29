import { FaSearch } from 'react-icons/fa';
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

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://v2.api.noroff.dev/online-shop');
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
          console.error('Unexpected response data format:', data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm !== '') {
      const results = fetchSuggestions(searchTerm, products);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, products]);

  const fetchSuggestions = (searchTerm: string, products: Product[]): Product[] => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearchClick = () => {
    if (searchTerm !== '' && suggestions.length > 0) {
      navigate(`/product/${suggestions[0].id}`);
    }
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
      <button onClick={handleSearchClick} className="p-2">
        <FaSearch className="text-xl" />
      </button>
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
