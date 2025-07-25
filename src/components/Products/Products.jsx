import React from "react";
import styles from "../FlashSale/FlashSale.module.css";
import love from "../../assets/Vector-2.png";
import eye from "../../assets/Vector-3.png";
import DiscountBtn from "../DiscountBtn/DiscountBtn";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../../features/wishList";
import { useNavigate } from "react-router-dom";

const Products = ({ Products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemToWishlist = (item) => {
    dispatch(AddItem(item));
    navigate("/wishlist");
  };
  return (
    <div className={styles.flashsale__container__items}>
      {Products.map((item, index) => (
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
            <img
              src={love}
              alt="love"
              onClick={() => {
                addItemToWishlist(item);
              }}
            />
            <img src={eye} alt="eye" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
