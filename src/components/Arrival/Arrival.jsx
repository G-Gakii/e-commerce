import React from "react";
import styles from "./Arrival.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import ShopNow from "../ShopNow/ShopNow";

const Arrival = () => {
  return (
    <div className={styles.arrival__container}>
      <Subtitle title={"Featured"} />
      <div className={styles.arrival__container__title}>
        <Title title={"New Arrival"} />
      </div>
      <div className={styles.arrival__container__item}>
        <section className={styles.arrival__container__item1}>
          <h3>PlayStation 5</h3>

          <p>Black and White version of the PS5 coming out on sale.</p>
          <ShopNow />
        </section>
        <section className={styles.arrival__container__item2}>
          <h3>Women’s Collections</h3>
          <p>Featured woman collections that give you another vibe.</p>
          <ShopNow />
        </section>
        <section className={styles.arrival__container__item3}>
          <h3>Speakers</h3>
          <p>Amazon wireless speakers</p>
          <ShopNow />
        </section>
        <section className={styles.arrival__container__item4}>
          <h3> Perfume</h3>
          <p>GUCCI INTENSE OUD EDP</p>

          <ShopNow />
        </section>
      </div>
    </div>
  );
};

export default Arrival;
