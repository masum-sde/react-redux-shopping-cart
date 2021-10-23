import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ productlist }) => {
  return (
    <ul className="products">
      {productlist.map((item, index) => (
        <li>
          <Product key={index} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default Products;
