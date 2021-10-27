import React from "react";
import "./CartItem.css";
import formatCurrency from "./../../util";
const CartItem = ({ item, handleRemoveCartItem }) => {
  return (
    <div className="cart-item">
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-details">
        <div>{item.title}</div>
        <div className="price-remove">
          <span>{formatCurrency(item.price) + `x ${item.count}`}</span>
          <button className="button" onClick={() => handleRemoveCartItem(item)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
