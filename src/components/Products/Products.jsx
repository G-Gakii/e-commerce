import React from "react";
import styles from "../FlashSale/FlashSale.module.css";
import love from "../../assets/Vector-2.png";
import eye from "../../assets/Vector-3.png";
import DiscountBtn from "../DiscountBtn/DiscountBtn";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, RemoveItem } from "../../features/wishList";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import CartBtn from "../CartBtn/CartBtn";
import deleteIcon from "../../assets/Vector-7.png";
import { AddItemToCart } from "../../features/cart";

const Products = ({ Products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myLocation = useLocation();

  const addItemToWishlist = (item) => {
    const user = getAuth().currentUser;

    if (!user) {
      alert("Kindly login to add item");
      navigate("/login");
      return;
    }
    dispatch(AddItem(item));

    navigate("/wishlist");
  };

  const addItemToYourCart = (item) => {
    try {
      dispatch(AddItemToCart(item));
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.flashsale__container__items}>
      {Products.map((item, index) => (
        <div key={index} className={styles.flashsale__container__items__item}>
          <DiscountBtn percentage={item.discount} />
          <div className={styles.flashsale__container__items__item__img}>
            <img src={item.image} alt="" />
            <CartBtn actionFn={() => addItemToYourCart(item)} />
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
            {myLocation.pathname === "/wishlist" ? (
              <img
                src={deleteIcon}
                alt="delete icon"
                onClick={() => dispatch(RemoveItem(item))}
              />
            ) : (
              <img
                src={love}
                alt="love"
                onClick={() => {
                  addItemToWishlist(item);
                }}
              />
            )}

            <img
              className={
                myLocation.pathname === "/wishlist"
                  ? styles.hide__eye
                  : styles.show__eye
              }
              src={eye}
              alt="eye"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
