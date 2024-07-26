import { Outlet, createBrowserRouter } from "react-router-dom";
import { Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

// import pages 
import RootLayout from "../Layout";
import HomePage from "../../pages/HomePage";

// import components

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
     
      </Route>

  )
);

function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;