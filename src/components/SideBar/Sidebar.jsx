import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <ul className={styles.sidebar__container}>
      <li>
        Woman’s Fashion <span>&gt;</span>
      </li>
      <li>
        Men’s Fashion <span>&gt;</span>
      </li>
      <li>Electronics</li>
      <li>Home & Lifestyle</li>
      <li>Medicine</li>
      <li>Sports & Outdoor</li>
      <li>Baby’s & Toys</li>
      <li>Groceries & Pets</li>
      <li>Health & Beauty</li>
    </ul>
  );
};

export default Sidebar;
