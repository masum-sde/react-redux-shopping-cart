import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import orderReducer from "./orderReducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
});

export default reducers;
