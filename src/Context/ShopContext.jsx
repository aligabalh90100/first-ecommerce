import { createContext, useState } from "react";
import all_product from "../components/Assests/all_product";
const ShopContext = createContext({
  all_product: "",
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmout: () => {},
  getTotalCartItems: () => {},
});
export default ShopContext;
const defaultCart = () => {
  const cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(defaultCart());

  const addToCart = (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] + 1,
    }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] - 1,
    }));
  };
  const getTotalCartAmout = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    const values = Object.values(cartItems);
    let total = 0;
    for (let value of values) {
      total += value;
    }
    return total;
  };
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmout,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
