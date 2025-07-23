import React from "react";
import styles from "./ProductBtn.module.css";

const ProductBtn = ({ btnFunc }) => {
  return <button className={styles.ProductBtn}>{btnFunc}</button>;
};

export default ProductBtn;
