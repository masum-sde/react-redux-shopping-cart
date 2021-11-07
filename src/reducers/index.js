import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default reducers;
