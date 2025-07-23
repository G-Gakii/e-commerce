import React from "react";
import styles from "./Subtitle.module.css";

const Subtitle = ({ title }) => {
  return (
    <div className={styles.subtitle__container}>
      <div className={styles.red_rectangle}></div>
      <h3 className={styles.subtitle}>{title}</h3>
    </div>
  );
};

export default Subtitle;
