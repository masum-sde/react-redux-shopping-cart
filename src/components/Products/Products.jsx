import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ productlist, handleAddCartItem }) => {
  return (
    <ul className="products">
      {productlist.reverse().map((item, index) => (
        <li>
          <Product key={index} item={item} handleAddCartItem={handleAddCartItem} />
        </li>
      ))}
    </ul>
  );
};

export default Products;
