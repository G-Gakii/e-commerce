import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./About.module.css";
import sideImage from "../../assets/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png";

const About = () => {
  return (
    <div>
      <Navbar />
      <p>Home/ About</p>
      <section className={styles.about__story}>
        <div className={styles.about__story__content}>
          <h2>Our Story</h2>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className={styles.about__story__img}>
          <img src={sideImage} alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
