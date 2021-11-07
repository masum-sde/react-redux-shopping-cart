import { React } from "react";
import { Provider } from "react-redux";
import CartItems from "./components/CartItems/CartItems";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import store from "./store/store";
function App() {
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
            <CartItems />
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    </Provider>
  );
}

export default App;
