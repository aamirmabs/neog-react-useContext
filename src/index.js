import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { CartProvider, ThemeProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
