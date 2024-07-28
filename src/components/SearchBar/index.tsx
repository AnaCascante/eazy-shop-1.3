import { FaSearch } from 'react-icons/fa';
import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

const [searchTerm, setSearchTerm] = useState('');
const [suggestions, setSuggestions] = useState([]); 
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

useEffect(() => {   
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://v2.api.noroff.dev/online-shop?query=${searchTerm}');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products', error);
            setLoading(false);
        }
    };
    fetchProducts();
},[]);

useEffect(() => {   
    if (searchTerm !== '') {
        const results = fetchSuggestions(searchTerm, products);
        setSuggestions(results);
        }else{
            setSuggestions([]);
        }
    }, [searchTerm, products]);

    const fetchSuggestions = (searchTerm, products) => {
       return products.filter((product) => 
         product.title.toLowerCase().includes(searchTerm.toLowerCase());
    };

    const handleSearchClick = () => {
        if (searchTerm !== '' && suggestions.length > 0) {
            navigate(`/product/${suggestions[0].id}`);
        }
    };

 const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.title);
        setSuggestions([]);
        navigate(`/product/${suggestion.id}`);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="items-center">
        <input className="items-center border  border-black rounded p-2" type="text"   placeholder="Search..." /> 
        <button onClick={handleSearchClick} className="p-2">
                    <FaSearch className="text-xl" />
                </button>
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
        </div>
    );
};

export default SearchBar;