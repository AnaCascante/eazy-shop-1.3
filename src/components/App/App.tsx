import { createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// import pages 
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import ContactPage from "../../pages/ContactPage";
import CheckoutPage from "../../pages/CheckoutPage";
import CheckoutSuccessPage from "../../pages/CheckoutSuccessPage";
import SearchPage from "../../pages/SearchPage";


// import components
import RootLayout from "../Layout";
import { CartProvider } from "../CartContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route  path="/search" element={<SearchPage />} />
      <Route path="ContactPage" element={<ContactPage />} />
      <Route path="CheckoutPage" element={<CheckoutPage />} />
      <Route path= "CheckoutSuccessPage" element={<CheckoutSuccessPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
      

  )
);

function App() {
  return (
    <CartProvider>
    <RouterProvider router={router}>
      
    </RouterProvider>
    </CartProvider>
  );
}; 


export default App;