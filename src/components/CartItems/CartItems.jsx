import React from "react";
import CartItem from "../CartItem/CartItem";
import "./CartItems.css";
import formatCurrency from "./../../util";
const CartItems = ({ cartItems, handleRemoveCartItem }) => {
  const totalPrice = cartItems.reduce((sum, item) => (sum += item.count * item.price), 0);
  return (
    <div>
      <div className="cart cart-header">
        {cartItems.length ? `You have ${cartItems.length} in the cart` : `Cart is empty`}
      </div>
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem item={item} handleRemoveCartItem={handleRemoveCartItem} />
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <p>Total {formatCurrency(totalPrice)}</p>
          <button className="button primary">Proceed</button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
