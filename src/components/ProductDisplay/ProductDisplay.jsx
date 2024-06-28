import "./ProductDisplay.css";
import starIcom from "../Assests/star_icon.png";
import starDullIcom from "../Assests/star_dull_icon.png";
import { useContext, useEffect, useRef } from "react";
import ShopContext from "../../Context/ShopContext";
import { motion } from "framer-motion";
import { animateScroll } from "react-scroll";
const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const btn = useRef();

  useEffect(() => {
    btn.current.addEventListener("click", () => {
      animateScroll.scrollTo(0);
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      className="productdisplay"
    >
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={starIcom} alt="" />
          <img src={starIcom} alt="" />
          <img src={starIcom} alt="" />
          <img src={starIcom} alt="" />
          <img src={starDullIcom} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-descripation">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button duration={100} onClick={() => addToCart(product.id)} ref={btn}>
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category: </span>
          {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Latest,
        </p>
      </div>
    </motion.div>
  );
};

export default ProductDisplay;
