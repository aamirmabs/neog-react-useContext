import React from "react";
import "./App.css";
import { useCart } from "./contexts";

export function ProductListing() {
  return [1, 2, 3, 4, 5].map((item) => <h3 key={item}>Product {item}</h3>);
}

export function Cart() {
  const value = useCart();
  // receives the object { cartItems: 4 }
  const { cartItems } = value;
  // destructuring to remove the value out of object

  return <h2>Items in cart: {cartItems} </h2>;
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
