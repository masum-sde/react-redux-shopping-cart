import { React } from "react";
import { Provider } from "react-redux";
import CartItems from "./components/CartItems/CartItems";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import store from "./store/store";
function App() {
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
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <CartItems handleOrderedData={handleOrderedData} />
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    </Provider>
  );
}

export default App;
