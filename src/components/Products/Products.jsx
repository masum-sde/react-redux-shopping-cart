import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ productlist }) => {
  console.log({ productlist });
  return (
    <ul className="products">
      {productlist.reverse().map((item, index) => (
        <li>
          <Product key={index} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default Products;
