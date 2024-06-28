import "./Navbar.css";
import logo from "../Assests/logo.png";
import { motion } from "framer-motion";
import cartIcon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import ShopContext from "../../Context/ShopContext";

const Navbar = () => {
  const menuRef = useRef();
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <svg
        onClick={dropdownToggle}
        className="nav-dropdown"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <motion.ul
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        ref={menuRef}
        className="nav-menu"
      >
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <motion.hr layoutId="tab-indicator" />}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens">Men</Link>{" "}
          {menu === "men" && <motion.hr layoutId="tab-indicator" />}{" "}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women</Link>{" "}
          {menu === "women" && <motion.hr layoutId="tab-indicator" />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>{" "}
          {menu === "kids" && <motion.hr layoutId="tab-indicator" />}
        </li>
      </motion.ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
        <motion.div
          key={getTotalCartItems()}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
          className="nav-cart-count"
        >
          {getTotalCartItems()}
        </motion.div>
      </div>
    </div>
  );
};
export default Navbar;
