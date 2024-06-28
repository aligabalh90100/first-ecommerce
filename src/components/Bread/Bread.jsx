import "./Bread.css";
import arrowIcon from "../Assests/breadcrum_arrow.png";
const Bread = ({ product }) => {
  return (
    <div className="breadcrum">
      HOME <img src={arrowIcon} alt="" />
      SHOP <img src={arrowIcon} alt="" />
      {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  );
};

export default Bread;
