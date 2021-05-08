import React, { useContext, useState } from "react";

const CartContext = React.createContext(null);
export { CartContext };

// Instead of using <CartContext.Provider> with a value prop, we can define it here and export a component that will accept { children } and render them.

// const value = {
//   cartItems: 4,
//   cartLogger: () => {
//     console.log("Carting");
//   },
// };

export function CartProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState(0);
  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
