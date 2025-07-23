import React from "react";
import styles from "./HowItWork.module.css";
import delivery from "../../assets/Services.png";
import call from "../../assets/Services-2.png";
import guarantee from "../../assets/Services-3.png";

const HowItWork = () => {
  return (
    <div className={styles.HowItWork__container}>
      <section>
        <img src={delivery} alt="delivery call" />
        <h3>FREE AND FAST DELIVERY</h3>
        <p>Free delivery for all orders over $140</p>
      </section>
      <section>
        <img src={call} alt="head phone" />
        <h3>24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
      </section>
      <section>
        <img src={guarantee} alt="check mark" />
        <h3>MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
      </section>
    </div>
  );
};

export default HowItWork;
