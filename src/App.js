import { React, useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./actions";
import CartItems from "./components/CartItems/CartItems";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import fakeData from "./fakeData.json";
import store from "./store/store";
function App() {
  const [products, setProducts] = useState(fakeData.products.reverse());
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.setItem("cartItems", JSON.stringify([]))
  );

  const handleAddCartItem = (product) => {
    const alreadyInCart = cartItems?.some((item) => item._id === product._id);
    if (!alreadyInCart) {
      product.count = 1;
      setCartItems([...cartItems, product]);
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, product]));
    } else {
      const productItem = cartItems?.find((item) => item._id === product._id);
      productItem.count = productItem.count + 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
    }
  };

  const handleRemoveCartItem = (product) => {
    const revisedProduct = cartItems.filter((item) => item._id !== product._id);
    localStorage.setItem("cartItems", JSON.stringify(revisedProduct));
    setCartItems(revisedProduct);
  };

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

  const handleOrderedData = (order) => {
    alert("Need to save order for " + order.name);
  };

  return (
    <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">React-Redux-Shopping cart</a>
        </header>
        <main className="content">
          <div className="main">
            <Filter productCount={products.length} handleFilterOrder={handleFilterOrder} handleSize={handleSize} />
            <Products handleAddCartItem={handleAddCartItem} />
          </div>
          <div className="sidebar">
            <CartItems
              cartItems={cartItems}
              handleRemoveCartItem={handleRemoveCartItem}
              handleOrderedData={handleOrderedData}
            />
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    </Provider>
  );
}

export default App;
