import { FaSearch } from 'react-icons/fa';
import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";



const handleSearchClick = () => {
    if (searchTerm !== '' && suggestions.length > 0) {
        navigate(`/product/${suggestions[0].id}`);
    }
};
const SearchBar = () => {
    return (
        <div className="items-center">
        <input className="items-center border  border-black rounded p-2" type="text"   placeholder="Search..." /> 
        <button onClick={handleSearchClick} className="p-2">
                    <FaSearch className="text-xl" />
                </button>
        </div>
    );
};

export default SearchBar;