import React from "react";
import styles from "./OurProducts.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import Arrows from "../Arrows/Arrows";
import { products } from "../../assets/utils/Products";
import Products from "../Products/Products";

const OurProducts = () => {
  return (
    <div className={styles.ourproducts__container}>
      <Subtitle title={"Our Products"} />
      <div className={styles.ourproducts__container__title}>
        <Title title={"Explore Our Products"} />
        <Arrows />
      </div>
      <Products Products={products} />
    </div>
  );
};

export default OurProducts;
