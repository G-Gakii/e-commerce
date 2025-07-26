import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Cart.module.css";
import CartContent from "../../components/CartContent/CartContent";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
  return (
    <div className={styles.cart__container}>
      <Navbar />
      <CartContent />
      <Footer />
    </div>
  );
};

export default Cart;
