import React from "react";
import "./CartItem.css";
import formatCurrency from "./../../util";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActionCreator } from "../../actions";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { removeFromCart } = bindActionCreators(cartActionCreator, dispatch);
  return (
    <div className="cart-item">
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-details">
        <div>{item.title}</div>
        <div className="price-remove">
          <span>{formatCurrency(item.price) + `x ${item.count}`}</span>
          <button className="button" onClick={() => removeFromCart(item)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
