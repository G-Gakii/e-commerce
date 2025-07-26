import React from "react";
import styles from "./CartContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../../features/cart";
import ProductBtn from "../ProductBtn/ProductBtn";
import WhiteButton from "../WhiteButton/WhiteButton";
import CartCard from "../CartCard/CartCard";

const CartContent = () => {
  const cartItem = useSelector((state) => state.cart?.cartItem);
  const dispatch = useDispatch();

  return (
    <div className={styles.cart__content__container}>
      <p className={styles.cart__container__page__name}>Home / Cart</p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table__header}>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.length === 0 ? (
            <tr>The cart is empty</tr>
          ) : (
            cartItem.map((item, index) => (
              <tr className={styles.table__data} key={index}>
                <td>
                  {" "}
                  <img src={item.image} alt="" height={32} width={32} />{" "}
                  {item.name}
                </td>
                <td> {item.price}</td>
                <td>
                  {" "}
                  <input
                    type="number"
                    value={Number(item.quantity)}
                    min={1}
                    name="quantity"
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({
                          name: item.name,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                  />{" "}
                </td>
                <td>{Number(item.price.substring(1)) * item.quantity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <section className={styles.cart__buttons}>
        <WhiteButton ftn={"Return To Shop"} />
        <WhiteButton ftn={"Update Cart"} />
      </section>
      <section className={styles.cart__payment}>
        <div className={styles.cart__coupon}>
          <WhiteButton ftn={"Coupon code"} />
          <div className={styles.cart__coupon__btn}>
            <ProductBtn btnFunc={"Apply Coupon"} />
          </div>
        </div>
        <CartCard />
      </section>
    </div>
  );
};

export default CartContent;
