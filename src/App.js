import React, { useState } from "react";
import "./App.css";
import { useCart } from "./contexts";

const products = [
  { id: 1, title: "Red Shirt", price: 50 },
  { id: 2, title: "Yellow Pant", price: 100 },
  { id: 3, title: "Purple Coat", price: 250 },
  { id: 4, title: "Green Shorts", price: 500 },
  { id: 5, title: "Magenta Apron", price: 750 },
];

export function ProductListing() {
  const { setItemsInCart } = useCart();

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div className="product" key={product.id + Math.random()}>
          <h2>{product.title}</h2>
          <h3>$ {product.price}</h3>
          <button
            onClick={() => setItemsInCart((oldItems) => [...oldItems, product])}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export function CartHeader() {
  const { itemsInCart } = useCart();

  return <h4>Items in cart: {itemsInCart.length} </h4>;
}

export function Cart() {
  const { itemsInCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <ol>
        {itemsInCart.map((product) => (
          <li key={product.id + Math.random}>
            <h3>{product.title}</h3>
            <h4>$ {product.price}</h4>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState("products");

  return (
    <div className="App">
      <h1>eCommerce</h1>
      <button
        onClick={() => {
          setRoute("cart");
        }}
      >
        Cart
      </button>
      <button
        onClick={() => {
          setRoute("products");
        }}
      >
        Products
      </button>
      <CartHeader />
      {route === "products" && <ProductListing />}
      {route === "cart" && <Cart />}
    </div>
  );
}

// create products object
// wire products display of products
// click add to cart to add object to cart state
// console log the items to ensure that they are added
// create route state and toggle with buttons
// toggle cart and products on click
