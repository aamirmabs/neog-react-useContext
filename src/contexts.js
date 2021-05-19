import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
export { CartContext };

// Instead of using <CartContext.Provider> with a value prop, we can define it here and export a component that will accept { children } and render them.

// const value = {
//   cartItems: 4,
//   cartLogger: () => {
//     console.log("Carting");
//   },
// };

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

const ThemeContext = createContext(null);
export { ThemeContext };

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
