import { React, useState } from "react";
import Products from "./components/Products/Products";
import fakeData from "./fakeData.json";

function App() {
  const [products, setProducts] = useState(fakeData.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="grid-container">
      <header>
        <a href="/">React-Redux-Shopping cart</a>
      </header>
      <main className="content">
        <div className="main">
          <Products productlist={products} />
        </div>
        <div className="sidebar">Cart Items</div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
