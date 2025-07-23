import React from "react";
import styles from "./BannerOne.module.css";
import apple from "../../../assets/Apple_gray_logo 1.png";
import phone from "../../../assets/hero_endframe__cvklg0xk3w6e_large 2.png";

const BannerOne = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerOne__container}>
        <section className={styles.bannerOne__container__section1}>
          <div className={styles.bannerOne__container__productname}>
            <img src={apple} alt="Apple logo" width={40} height={40} />
            <p>iPhone 14 Series</p>
          </div>
          <h2 className={styles.bannerOne__container__about}>
            Up to 10% <br /> off Voucher
          </h2>
          <div className={styles.bannerOne__container__shoplink}>
            <span className={styles.bannerOne__container__span}>Shop Now </span>
            &rarr;
          </div>
        </section>
        <section className={styles.bannerOne__container__section2}>
          <img
            className={styles.bannerOne__container__img}
            src={phone}
            alt="Two iphone phone"
          />
        </section>
      </div>
      <div className={styles.bannerOne__dots__container}>
        <div className={styles.bannerOne__dots}></div>
        <div className={styles.bannerOne__dots}></div>
        <div className={styles.bannerOne__dots}></div>
        <div className={styles.bannerOne__dots}></div>
        <div className={styles.bannerOne__dots}></div>
      </div>
    </div>
  );
};

export default BannerOne;
