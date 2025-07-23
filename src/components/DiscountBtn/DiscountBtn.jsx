import React from "react";
import styles from "./DiscountBtn.module.css";

const DiscountBtn = ({ percentage }) => {
  return <button className={styles.discountBtn__btn}>- {percentage} %</button>;
};

export default DiscountBtn;
