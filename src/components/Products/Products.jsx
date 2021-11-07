import { React, useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formatCurrency from "./../../util";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator, cartActionCreator } from "./../../actions/index";
const Products = () => {
  const [product, setProduct] = useState(null);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { fetchProducts } = bindActionCreators(actionCreator, dispatch);
  const { addToCart } = bindActionCreators(cartActionCreator, dispatch);
  useEffect(() => {
    fetchProducts();
  }, []);
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(null);
  };
  return (
    <div>
      {!products ? (
        <div>Loading</div>
      ) : (
        <ul className="products">
          {products?.filteredItems?.reverse().map((item, index) => (
            <li>
              <Product key={index} item={item} handleOpenModal={openModal} />
            </li>
          ))}
        </ul>
      )}

      {product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div className="product-details">
              <img src={product.image} alt={product.title}></img>
              <div className="product-details-description">
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>{product.description}</p>
                <p>
                  Avaiable Sizes:{" "}
                  {product.availableSizes.map((x) => (
                    <span>
                      {" "}
                      <button className="button">{x}</button>
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      addToCart(product);
                      closeModal();
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};

export default Products;
