import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // localStorage থেকে cart load হবে
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("bdarfat_cart");

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Cart loading error:", error);
      return [];
    }
  });

  // Cart change হলেই localStorage-এ save হবে
  useEffect(() => {
    try {
      localStorage.setItem(
        "bdarfat_cart",
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error("Cart saving error:", error);
    }
  }, [cartItems]);

  // =========================
  // ADD TO CART
  // =========================
  const addToCart = (
    product,
    quantity = 1,
    size = "",
    color = ""
  ) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity,
          size,
          color,
        },
      ];
    });
  };

  // =========================
  // REMOVE FROM CART
  // =========================
  const removeFromCart = (
    id,
    size = "",
    color = ""
  ) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size &&
            item.color === color
          )
      )
    );
  };

  // =========================
  // UPDATE QUANTITY
  // =========================
  const updateQuantity = (
    id,
    quantity,
    size = "",
    color = ""
  ) => {
    if (quantity < 1) return;

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id &&
        item.size === size &&
        item.color === color
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  // =========================
  // CART COUNT
  // =========================
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // =========================
  // CART TOTAL
  // =========================
  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// =========================
// USE CART
// =========================
export const useCart = () => {
  return useContext(CartContext);
};