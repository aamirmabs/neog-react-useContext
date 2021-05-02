import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { CartContext } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <CartContext.Provider
      value={{
        cartItems: 4,
        cartLogger: () => {
          console.log("Carting");
        },
      }}
    >
      <App />
    </CartContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
