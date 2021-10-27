import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import "./CartItems.css";
import formatCurrency from "./../../util";
const CartItems = ({ cartItems, handleRemoveCartItem, handleOrderedData }) => {
  const totalPrice = cartItems?.reduce((sum, item) => (sum += item.count * item.price), 0);
  const [isCheckout, setIsCheckout] = useState(false);
  const [customerData, setCustomerData] = useState({
    email: "",
    name: "",
    address: "",
    cartItems: [],
  });
  const handleInput = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };
  const handleCreateOrder = (e) => {
    if (customerData.email && customerData.name && customerData.address) {
      e.preventDefault();
      handleOrderedData({ ...customerData, cartItems });
    } else {
      console.log("Provide data");
    }
  };
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
      {cartItems?.length > 0 && (
        <div className="cart-footer">
          <p>Total {formatCurrency(totalPrice)}</p>
          <button className="button primary" onClick={() => setIsCheckout(!isCheckout)}>
            Proceed
          </button>
        </div>
      )}
      {isCheckout && (
        <div className="cart">
          <form onSubmit={handleCreateOrder}>
            <div className="form-input-holder">
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="" required onChange={handleInput} />
            </div>
            <div className="form-input-holder">
              <label htmlFor="">Name</label>
              <input type="text" name="name" id="" required onChange={handleInput} />
            </div>
            <div className="form-input-holder">
              <label htmlFor="">Address</label>
              <input type="text" name="address" id="" required onChange={handleInput} />
            </div>
            <div className="form-input-holder">
              <button className="button primary" type="submit" onClick={handleCreateOrder}>
                Checkout
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartItems;
