import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import eazyshop from "../../assets/eazyshop.svg";




function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-slate-200 px-4 md:px-8">
      <div className="flex items-center space-x-4">
        <img src={eazyshop} alt="EazyShop Logo" className="h-8 mr-3" /> 
         <NavLink to="/" className="hover:text-pink-500 m-3 ">Home</NavLink>
         <NavLink to="/ContactPage" className="hover:text-pink-500 m-3">Contact</NavLink>
      </div>
      <div className="flex items-center space-x-4 mr-4">
         <NavLink to="/CheckoutPage" className="hover:text-pink-500 m-0.5"><FaShoppingCart /></NavLink>
      </div> 
    </nav>
  );
}

export default NavBar; 