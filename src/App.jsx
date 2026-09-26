import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routs/Router";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;