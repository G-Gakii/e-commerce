import React from "react";
import styles from "./WhiteButton.module.css";

const WhiteButton = ({ ftn }) => {
  return <button className={styles.whiteBtn}>{ftn}</button>;
};

export default WhiteButton;
