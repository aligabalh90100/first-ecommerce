import { useContext } from "react";
import dropDownIcon from "../components/Assests/dropdown_icon.png";
import ShopContext from "../Context/ShopContext";
import "./CSS/ShopCategory.css";
import Item from "../components/Items/Item";
import { motion } from "framer-motion";
const ShopCatergory = ({ category, banner }) => {
  const { all_product } = useContext(ShopContext);

  const shownProduct = all_product.filter((item) => item.category === category);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      key={category}
      className="shop-category"
    >
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropDownIcon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {shownProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </motion.div>
  );
};
export default ShopCatergory;
