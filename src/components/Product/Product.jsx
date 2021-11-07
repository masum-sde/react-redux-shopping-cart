import React from "react";
import "./Product.css";
import formatCurrency from "./../../util";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { cartActionCreator } from "../../actions";
const Product = ({ item, handleOpenModal }) => {
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(cartActionCreator, dispatch);

  return (
    <div className="product">
      <a href={"#" + item._id} onClick={() => handleOpenModal(item)}>
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
      </a>
      <div className="product-price">
        <div>{formatCurrency(item.price)}</div>
        <button className="button primary" onClick={() => addToCart(item)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
