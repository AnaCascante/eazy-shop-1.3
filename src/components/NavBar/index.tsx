import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import eazyshop from "../../assets/eazyshop.svg";




function NavBar() {
  return (
    <nav className="flex flex-grow bg-slate-200">
        <img src={eazyshop} alt="EazyShop Logo" className="h-8 mr-3" /> 
         <NavLink to="/" className="hover:text-pink-500 m-3 ">Home</NavLink>
         <NavLink to="/ContactPage" className="hover:text-pink-500 m-3">Contact</NavLink>
         <div className=" m-0">
         <NavLink to="/CheckoutPage" className="hover:text-pink-500 m-0.5"><FaShoppingCart /></NavLink>
         </div> 
    </nav>
  );
}

export default NavBar; 