import React from "react";
import styles from "./AuthBtn.module.css";

const AuthBtn = ({ role }) => {
  return (
    <button type="submit" className={styles.register__container__btn__create}>
      {role}
    </button>
  );
};

export default AuthBtn;
