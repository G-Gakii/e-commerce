import React from "react";
import styles from "./Title.module.css";

const Title = ({ title }) => {
  return <h2 className={styles.component__title}>{title}</h2>;
};

export default Title;
