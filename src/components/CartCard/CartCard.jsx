import React from "react";
import styles from "./CartCard.module.css";
import ProductBtn from "../ProductBtn/ProductBtn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartCard = () => {
  const cartItem = useSelector((state) => state.cart?.cartItem);
  const totalCost = cartItem.reduce((acc, item) => {
    return acc + item.price.substring(1) * item.quantity;
  }, 0);
  const navigate = useNavigate();
  return (
    <div className={styles.card__container}>
      <h4>Cart Total:</h4>
      <div className={styles.card__total__cost}>
        <span>Subtotal</span>
        <span>{totalCost}</span>
      </div>
      <div className={styles.card__total__cost}>
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className={styles.card__total__cost}>
        <span>Total</span>
        <span>{totalCost}</span>
      </div>
      <div
        className={styles.card__container__button}
        onClick={() => {
          navigate("/bill-details");
        }}
      >
        <ProductBtn btnFunc={"Proceed to checkout"} />
      </div>
    </div>
  );
};

export default CartCard;
