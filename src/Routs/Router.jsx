import { createBrowserRouter } from "react-router-dom";

import Home from "../Maine/Home/Home/Home";
import RootLayout from "../Layout/RootLayout";
import Abouts from "../Maine/Abouts/Abouts";

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
      }
    ],
  },
]);