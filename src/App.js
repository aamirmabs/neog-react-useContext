import "./App.css";

export function ProductListing() {
  return [1, 2, 3, 4, 5].map((item) => <h3>Product {item}</h3>);
}

export function Cart() {
  return <h2>Items in cart: </h2>;
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
