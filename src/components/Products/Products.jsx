import React from "react";
import styles from "../FlashSale/FlashSale.module.css";
import love from "../../assets/Vector-2.png";
import eye from "../../assets/Vector-3.png";

const Products = ({ Products }) => {
  return (
    <div className={styles.flashsale__container__items}>
      {Products.map((item, index) => (
        <div key={index} className={styles.flashsale__container__items__item}>
          <div className={styles.flashsale__container__items__item__img}>
            <img src={item.image} alt="" />
          </div>

          <div>
            <h4 className={styles.flashsale__container__items__item__title}>
              {item.name}
            </h4>
            <p>
              <span className={styles.flashsale__container__items__item__price}>
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
          <div className={styles.img}>
            <img src={love} alt="love" />
            <img src={eye} alt="eye" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
