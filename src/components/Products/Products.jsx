import { React, useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formatCurrency from "./../../util";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./../../actions/index";
const Products = ({ handleAddCartItem }) => {
  const [product, setProduct] = useState(null);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { fetchProducts } = bindActionCreators(actionCreator, dispatch);
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
      {!products.items ? (
        <div>Loading</div>
      ) : (
        <Fade bottom collapse>
          <ul className="products">
            {products.items.reverse().map((item, index) => (
              <li>
                <Product key={index} item={item} handleAddCartItem={handleAddCartItem} handleOpenModal={openModal} />
              </li>
            ))}
          </ul>
        </Fade>
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
                      handleAddCartItem(product);
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
// export default connect((state) => ({ products: state.products.items }), {
//   fetchProducts,
// })(Products);
