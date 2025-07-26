import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import styles from "./Wishlist.module.css";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import Subtitle from "../../components/Subtitle/Subtitle";
import { recommended } from "../../assets/utils/Products";

const Wishlist = () => {
  const wishListCount = useSelector((state) => state.wishlist?.item?.length);
  const wishlist = useSelector((state) => state?.wishlist?.item);
  return (
    <div className={styles.wishlist__container}>
      <Navbar />
      <section className={styles.wishlist__container__head}>
        <p>Wishlist({wishListCount})</p>
        <button>Move All To Bag</button>
      </section>
      <section>
        {wishListCount == 0 ? (
          <p>No item on the wishList</p>
        ) : (
          <Products Products={wishlist} />
        )}
      </section>
      <section>
        <Subtitle title={"Just For You"} />
      </section>

      <Products Products={recommended} />
      <Footer />
    </div>
  );
};

export default Wishlist;
