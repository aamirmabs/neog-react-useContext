import React from "react";
import "./App.css";
import { useCart } from "./contexts";

export function ProductListing() {
  const { setItemsInCart } = useCart();

  return [1, 2, 3, 4, 5].map((item) => (
    <div className="product" key={item}>
      <h3>Product {item}</h3>
      <button onClick={() => setItemsInCart((items) => items + 1)}>Add</button>
    </div>
  ));
}

export function Cart() {
  const { itemsInCart } = useCart();

  return <h2>Items in cart: {itemsInCart} </h2>;
}

export default function App() {
  return (
    <div className="App">
      <h1>eCommerce</h1>
      <Cart />
      <ProductListing />
    </div>
  );
}
