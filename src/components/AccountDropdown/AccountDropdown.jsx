import React from "react";
import user from "../../assets/user-2.png";
import mallbag from "../../assets/icon-mallbag.png";
import cancel from "../../assets/icon-cancel.png";
import reviews from "../../assets/Icon-Reviews.png";
import logout from "../../assets/Icon-logout.png";
import styles from "./AccountDropdown.module.css";

const AccountDropdown = ({ show }) => {
  return (
    <ul
      className={`${styles.dropdown__container}  ${
        show ? styles.show : styles.hide
      }`}
    >
      <li>
        <img src={user} alt="user icon" /> <span>Manage My Account</span>
      </li>
      <li>
        <img src={mallbag} alt="mall bag" />
        <span>My Order</span>
      </li>
      <li>
        <img src={cancel} alt="cancel icon" /> <span>My Cancellations</span>
      </li>
      <li>
        {" "}
        <img src={reviews} alt="review icon" /> <span>My Reviews</span>
      </li>
      <li>
        <img src={logout} alt="logout icon" /> <span>Logout</span>
      </li>
    </ul>
  );
};

export default AccountDropdown;
