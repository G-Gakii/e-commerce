import React from "react";
import styles from "./BestSelling.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import ProductBtn from "../ProductBtn/ProductBtn";
import Products from "../Products/Products";
import { bestSelling } from "../../assets/utils/Products";

const BestSelling = () => {
  return (
    <div className={styles.BestSelling__container}>
      <Subtitle title={"This Month"} />
      <div className={styles.BestSelling__container__title}>
        <Title title={"Best Selling Products"} />
        <div className={styles.btn}>
          <ProductBtn btnFunc={"View All"} />
        </div>
      </div>
      <Products Products={bestSelling} />
    </div>
  );
};

export default BestSelling;
