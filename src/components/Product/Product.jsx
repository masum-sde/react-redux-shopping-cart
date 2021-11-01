import React from "react";
import "./Product.css";
import formatCurrency from "./../../util";
const Product = ({ item, handleAddCartItem, handleOpenModal }) => {
  return (
    <div className="product">
      <a href={"#" + item._id} onClick={() => handleOpenModal(item)}>
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
      </a>
      <div className="product-price">
        <div>{formatCurrency(item.price)}</div>
        <button className="button primary" onClick={() => handleAddCartItem(item)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
