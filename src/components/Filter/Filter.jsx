import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../actions";
import "./Filter.css";
const Filter = (props) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { filterProducts, sortProducts } = bindActionCreators(actionCreator, dispatch);
  return (
    <div className="filter">
      <div className="filter-result">{products?.items?.length} Products</div>
      <div className="filter-price-sort">
        Order{" "}
        <select onChange={(e) => sortProducts(products.filteredItems, e.target.value)}>
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="filter-size">
        Size{" "}
        <select onChange={(e) => filterProducts(products?.items, e.target.value)}>
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
