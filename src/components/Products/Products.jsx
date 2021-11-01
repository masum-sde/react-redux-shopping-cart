import { React, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formatCurrency from "./../../util";
const Products = ({ productlist, handleAddCartItem }) => {
  const [product, setProduct] = useState(null);
  const openModal = (product) => {
    setProduct(product);
    console.log(product);
  };
  const closeModal = () => {
    setProduct(null);
  };
  return (
    <div>
      <Fade bottom collapse>
        <ul className="products">
          {productlist.reverse().map((item, index) => (
            <li>
              <Product key={index} item={item} handleAddCartItem={handleAddCartItem} handleOpenModal={openModal} />
            </li>
          ))}
        </ul>
      </Fade>

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
        // <Modal isOpen={true} onRequestClose={closeModal}>
        //   <Zoom>
        //     <div className="product-details">
        //       <img src={product.image} alt={product.title} />
        //       <button className="close-modal" onClick={closeModal}>
        //         X
        //       </button>
        //       <div className="product-details-description">
        //         <div>
        //           <p>
        //             <strong>{product.title}</strong>
        //           </p>
        //           <p>{product.description}</p>
        //           <p>
        //             Available Sizes :{" "}
        //             {product.availableSizes.map((x) => {
        //               return (
        //                 <span>
        //                   {" "}
        //                   <button className="button">{x}</button>
        //                 </span>
        //               );
        //             })}
        //           </p>
        //         </div>
        //         <div className="product-price">
        //           <p>{product.price}</p>
        //           <button
        //             className="button primary"
        //             onClick={() => {
        //               handleAddCartItem(product);
        //               closeModal();
        //             }}
        //           >
        //             Add To Cart
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </Zoom>
        // </Modal>
      )}
    </div>
  );
};

export default Products;
