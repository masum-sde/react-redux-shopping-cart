import { React, useState } from "react";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import fakeData from "./fakeData.json";

function App() {
  const [products, setProducts] = useState(fakeData.products.reverse());

  const handleFilterOrder = (e) => {
    const sortedProducts = products.slice();
    if (e.target.value === "latest") {
      sortedProducts.sort((a, b) => (a._id > b._id ? -1 : 1));
    } else {
      sortedProducts.sort((a, b) =>
        e.target.value === "lowest" ? (a.price > b.price ? 1 : -1) : a.price > b.price ? -1 : 1
      );
    }
    setProducts(sortedProducts);
  };

  const handleSize = (e) => {
    if (e.target.value) {
      const filterProducts = fakeData.products.filter((product) => product.availableSizes.indexOf(e.target.value) >= 0);
      setProducts(filterProducts);
    } else {
      setProducts(fakeData.products);
    }
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">React-Redux-Shopping cart</a>
      </header>
      <main className="content">
        <div className="main">
          <Filter productCount={products.length} handleFilterOrder={handleFilterOrder} handleSize={handleSize} />
          <Products productlist={products} />
        </div>
        <div className="sidebar">Cart Items</div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
}

export default App;
