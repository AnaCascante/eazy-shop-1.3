import { NavLink } from "react-router-dom";
import CartIcon from "../CartIcon";
import eazyshop from "../../assets/eazyshop.svg";
import SearchBar from "../SearchBar";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-wrap justify-between items-center bg-slate-200 px-2 sm:px-4 md:px-8 py-2">
      <div className="flex items-center space-x-2 sm:space-x-4">
        <img src={eazyshop} alt="EazyShop Logo" className="h-6 sm:h-8 mr-2 sm:mr-3" />
        <div className="flex-grow">
          <SearchBar />
        </div>
        <NavLink to="/" className="text-xs sm:text-sm md:text-base hover:text-pink-500 mx-1 sm:mx-2">
          Home
        </NavLink>
        <NavLink to="/ContactPage" className="text-xs sm:text-sm md:text-base hover:text-pink-500 mx-1 sm:mx-2">
          Contact
        </NavLink>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4 mr-2 sm:mr-4">
        <CartIcon />
      </div>
    </nav>
  );
}

export default NavBar;
