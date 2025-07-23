import React from "react";
import styles from "./Category.module.css";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import phone from "../../assets/Category-CellPhone.png";
import computer from "../../assets/Category-Computer.png";
import smartWatch from "../../assets/Category-SmartWatch.png";
import camera from "../../assets/Category-Camera.png";
import headphone from "../../assets/Category-Headphone.png";
import gamepad from "../../assets/Category-Gamepad.png";
import Arrows from "../Arrows/Arrows";

const Category = () => {
  return (
    <div className={styles.category__container}>
      <Subtitle title={"Categories"} />
      <div className={styles.category__title}>
        <Title title={"Browse By Category"} />
        <Arrows />
      </div>
      <div className={styles.category__types}>
        <section>
          <img src={phone} alt="phone" />
          <p>Phones</p>
        </section>
        <section>
          <img src={computer} alt="computer" />
          <p>Computers</p>
        </section>
        <section>
          <img src={smartWatch} alt="smartWatch" />
          <p>SmartWatch</p>
        </section>
        <section>
          <img src={camera} alt="camera" />
          <p>Camera</p>
        </section>
        <section>
          <img src={headphone} alt="headphone" />
          <p>HeadPhones</p>
        </section>
        <section>
          <img src={gamepad} alt="gamepad" />
          <p>Gaming</p>
        </section>
      </div>
    </div>
  );
};

export default Category;
