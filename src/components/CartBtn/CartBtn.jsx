import React from "react";
import cart from "../../assets/Cart1.png";
import styles from "./CartBtn.module.css";
import { useLocation } from "react-router-dom";

const CartBtn = ({ actionFn }) => {
  const mylocation = useLocation();
  return (
    <button
      onClick={actionFn}
      className={`${styles.cart_btn} ${
        mylocation.pathname === "/wishlist"
          ? styles.display__cartbtn
          : styles.hide___cartbtn
      }`}
    >
      <img src={cart} alt="cart icon" height={16} width={16} />
      <span>Add To Cart</span>
    </button>
  );
};

export default CartBtn;
