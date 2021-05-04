import React from "react";

const CartContext = React.createContext(null);
export { CartContext };

// Instead of using <CartContext.Provider> with a value prop, we can define it here and export a component that will accept { children } and render them.

const value = {
  cartItems: 4,
  cartLogger: () => {
    console.log("Carting");
  },
};

const CartProvider = ({ children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export { CartProvider };
