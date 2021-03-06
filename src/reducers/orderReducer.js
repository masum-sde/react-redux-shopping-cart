import { CREATE_ORDER, CLEAR_ORDER } from "../types";

const orderReducer = (state = {}, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    case CLEAR_ORDER:
      return { order: null };
    default:
      return state;
  }
};

export default orderReducer;
