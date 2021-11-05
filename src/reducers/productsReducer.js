import { FETCH_PRODUCTS } from "./../types";
const productsReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
