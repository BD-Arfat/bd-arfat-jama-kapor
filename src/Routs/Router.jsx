import { createBrowserRouter } from "react-router-dom";

import Home from "../Maine/Home/Home/Home";
import RootLayout from "../Layout/RootLayout";
import Abouts from "../Maine/Abouts/Abouts";
import Shop from "../Maine/ProductsPage/Shop/Shop";
import ProductDetails from "../Maine/ProductsPage/Shop/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <Abouts></Abouts>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/product/:id",
        element:<ProductDetails></ProductDetails>
      }
    ],
  },
]);