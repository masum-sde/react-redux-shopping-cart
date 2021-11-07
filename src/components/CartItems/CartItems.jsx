import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import "./CartItems.css";
import formatCurrency from "./../../util";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActionCreator, orderActionCreator } from "../../actions";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let order = useSelector((state) => state.order.order);
  const dispatch = useDispatch();
  const { createOrder, clearOrder } = bindActionCreators(orderActionCreator, dispatch);
  const { clearCart } = bindActionCreators(cartActionCreator, dispatch);

  const totalPrice = cartItems?.reduce((sum, item) => (sum += item.count * item.price), 0);
  const [isCheckout, setIsCheckout] = useState(false);
  const [customerData, setCustomerData] = useState({
    email: "",
    name: "",
    address: "",
  });
  const handleInput = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };
  const handleCreateOrder = (e) => {
    if (customerData.email && customerData.name && customerData.address) {
      e.preventDefault();
      createOrder({ ...customerData, cartItems, totalPrice, date: new Date().toISOString() });
    } else {
      console.log("Provide data");
    }
  };

  const closeModal = () => {
    clearOrder();
    clearCart();
    setIsCheckout(!isCheckout);
  };

  return (
    <div>
      <div className="cart cart-header">
        {cartItems?.length ? `You have ${cartItems.length} in the cart` : `Cart is empty`}
      </div>
      <div className="cart-list">
        {cartItems?.map((item) => (
          <Fade left collapse>
            <CartItem item={item} />
          </Fade>
        ))}
      </div>
      {order && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div className="order-details">
              <h3 className="success-message">Your order has been placed.</h3>
              <h2>Order {order._id}</h2>
              <ul>
                <li>
                  <div>Name:</div>
                  <div>{order.name}</div>
                </li>
                <li>
                  <div>Email:</div>
                  <div>{order.email}</div>
                </li>
                <li>
                  <div>Address:</div>
                  <div>{order.address}</div>
                </li>
                <li>
                  <div>Date:</div>
                  <div>{order.date}</div>
                </li>
                <li>
                  <div>Total:</div>
                  <div>{formatCurrency(order.totalPrice)}</div>
                </li>
                <li>
                  <div>Cart Items:</div>
                  <div>
                    {order.cartItems.map((x) => (
                      <div>
                        {x.count} {" x "} {x.title}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </Zoom>
        </Modal>
      )}
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
          <Fade right collapse>
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
          </Fade>
        </div>
      )}
    </div>
  );
};

export default CartItems;
