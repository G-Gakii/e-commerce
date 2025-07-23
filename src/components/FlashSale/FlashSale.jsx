import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import styles from "./FlashSale.module.css";
import DiscountBtn from "../DiscountBtn/DiscountBtn";
import { flashSaleItems } from "../../assets/utils/Products";
import ProductBtn from "../ProductBtn/ProductBtn";
import love from "../../assets/Vector-2.png";
import eye from "../../assets/Vector-3.png";
import Title from "../Title/Title";
import Products from "../Products/Products";

const FlashSale = () => {
  return (
    <div className={styles.flashsale__container}>
      <Subtitle title={"Today’s"} />
      <div className={styles.flashsale__container__time}>
        <Title title={"Flash Sales"} />
        <section className={styles.time__container}>
          <section className={styles.time}>
            <span>Days</span>
            <h3>03</h3>
          </section>
          <section className={styles.colon}>:</section>
          <section className={styles.time}>
            <span>Hours</span>
            <h3>23</h3>
          </section>
          <section className={styles.colon}>:</section>
          <section className={styles.time}>
            <span>Minutes</span>
            <h3>19</h3>
          </section>
          <section className={styles.colon}>:</section>
          <section className={styles.time}>
            <span>seconds</span>
            <h3>56</h3>
          </section>
        </section>
        <section></section>
      </div>

      {/* <div className={styles.flashsale__container__items}>
        {flashSaleItems.map((item, index) => (
          <div key={index} className={styles.flashsale__container__items__item}>
            <DiscountBtn percentage={item.discount} />

            <div className={styles.flashsale__container__items__item__img}>
              <img src={item.image} alt="" />
            </div>

            <div>
              <h4 className={styles.flashsale__container__items__item__title}>
                {item.name}
              </h4>
              <p>
                <span
                  className={styles.flashsale__container__items__item__price}
                >
                  {item.price}
                </span>{" "}
                <span
                  className={
                    styles.flashsale__container__items__item__originalprice
                  }
                >
                  {item.original_price}
                </span>
              </p>
              <p>
                <span>{item.rating}</span> <span> ({item.total_rating})</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div> */}
      <Products Products={flashSaleItems} />
      <div className={styles.button}>
        <ProductBtn btnFunc={"View All Products"} />
      </div>

      <hr className={styles.flashSale__hr} />
    </div>
  );
};

export default FlashSale;
