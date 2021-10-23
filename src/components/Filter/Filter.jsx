import React from "react";
import "./Filter.css";
const Filter = (props) => {
  console.log(props);
  return (
    <div className="filter">
      <div className="filter-result">{props.productCount} Products</div>
      <div className="filter-price-sort">
        Order{" "}
        <select onChange={props.handleFilterOrder}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Size{" "}
        <select onChange={props.handleSize}>
          <option value="">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
