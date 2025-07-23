import React from "react";
import jbl from "../../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import styles from "./BannerTwo.module.css";
import ProductBtn from "../../ProductBtn/ProductBtn";

const BannerTwo = () => {
  return (
    <div className={styles.bannerTwo__container}>
      <div className={styles.bannerTwo__container__content}>
        <h3 className={styles.bannerTwo__container_heading3}>categories</h3>
        <h4 className={styles.bannerTwo__container_heading4}>
          Enhance Your Music Experience
        </h4>
        <div className={styles.bannerTwo__container__time}>
          <section>
            <span>23</span>
            <span>Hours</span>
          </section>
          <section>
            {" "}
            <span>05</span>
            <span>Days</span>
          </section>
          <section>
            {" "}
            <span>59</span>
            <span>Minutes</span>
          </section>
          <section>
            {" "}
            <span>35</span>
            <span>seconds</span>
          </section>
        </div>
        <div className={styles.btn}>
          <ProductBtn className={styles.btn__btn} btnFunc={"Buy Now!"} />
        </div>
      </div>
      <div className={styles.banner__two__image}>
        <img src={jbl} alt="jbl speaker" />
      </div>
    </div>
  );
};

export default BannerTwo;
